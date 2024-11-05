import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import DetailPostMeta from "@/components/page/detail-post/meta";
import TuyenDungWidget from "@/components/page/tuyen-dung/widget1";
import Widget from "@/components/post/widgets";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function DetailTuyenDung({post,posts,config,navbar}){
    
    const data = post?.data?.[0]?.attributes

    return(
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo 
                title={data?.seo?.title || data?.title}
                description={data?.seo?.description || data?.description}
            />
            <PyoBreakCrumbs 
                categories={[{name: 'Tin tuyển dụng', slug: 'tuyen-dung'}]}
                title={data?.title}
            />

            <Box component={"main"} py={3}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={{xs: 3, lg: 10}}>
                        <Grid xs={12} md={8}>

                            <Typography variant="h2" component={"h2"} color={"primary.main"} textTransform={"uppercase"} fontSize={26}>
                                {data?.title}
                            </Typography>

                            <DetailPostMeta 
                                title={data?.title}
                                time={data?.createdAt}
                                description={data?.description}
                                url={`${globalConfig.home_url}/tuyen-dung/${data?.slug}`}
                            />

                            <Stack direction={"column"} spacing={1} className="content">
                                <Typography variant="h2" component={"h2"} fontWeight={700} color="primary.main">
                                    Mô tả công việc
                                </Typography>
                                
                                <Box>
                                    <div dangerouslySetInnerHTML={{__html: data?.mo_ta}} />
                                </Box>

                                <Typography variant="h2" component={"h2"} fontWeight={700} color="primary.main">
                                    Yêu cầu
                                </Typography>

                                <Box>
                                    <div dangerouslySetInnerHTML={{__html: data?.yeu_cau}} />
                                </Box>

                                <Typography variant="h2" component={"h2"} fontWeight={700} color="primary.main">
                                   Quyền lợi
                                </Typography>
                                
                                <Box>
                                    <div dangerouslySetInnerHTML={{__html: data?.quyen_loi}} />
                                </Box>

                                <Typography variant="h2" component={"h2"} fontWeight={700} color="primary.main">
                                   Liên hệ
                                </Typography>
                                <Box>
                                    <div dangerouslySetInnerHTML={{__html: data?.lien_he}} />
                                </Box>
                            </Stack>

                        </Grid>
                        <Grid xs={12} md={4}>
                            <TuyenDungWidget datas={posts} post={data}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps({ params }) {

    const slug = params?.slug

    const res = await fetch(`${globalConfig.api_url}/tuyendungs?filters[slug][$eq]=${slug}&populate=*`)
    const post = await res.json()

    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url3 = `${globalConfig.api_url}/tuyendungs?populate=*`
    
    const getConfig = await fetch(url1)
    const getCategories = await fetch(url3)

    const configResponse = await getConfig.json()
    const dataCategories = await getCategories.json()

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()
   
    return {
      props: {
        post,
        posts: dataCategories?.data,
        config: configResponse?.data?.attributes,
        navbar: navbarResponse?.data?.attributes?.items
      },
      revalidate: globalConfig.revalidateTime, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${globalConfig.api_url}/tuyendungs`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            slug: `${post.attributes.slug}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}
import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import DetailPostMeta from "@/components/page/detail-post/meta";
import TOC from "@/components/page/detail-post/toc";
import Widget from "@/components/post/widgets";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function DetailPost({posts,categories,tags,config,navbar}){
    
    const data = posts?.data?.[0]?.attributes

    console.log(data?.content)

    return(
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo 
                title={data?.seo?.title || data?.title}
                description={data?.seo?.description || data?.description}
            />
            <PyoBreakCrumbs 
                categories={[{name: 'Tin tức - Khuyến mại', slug: 'tin-tuc-khuyen-mai'}]}
                title={data?.title}
            />

            <Box component={"main"} py={3}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={{xs: 3, lg: 10}}>
                        <Grid xs={12} md={9}>

                            <Typography variant="h2" component={"h2"} color={"primary.main"} textTransform={"uppercase"} fontSize={26}>
                                {data?.title}
                            </Typography>

                            <DetailPostMeta 
                                title={data?.title}
                                time={data?.createdAt}
                                description={data?.description}
                                url={`${globalConfig.home_url}/${data?.slug}`}
                            />

                            <TOC />
                            
                            <Box className="content">
                                <div dangerouslySetInnerHTML={{__html: data?.content}} />
                            </Box>

                        </Grid>
                        <Grid xs={12} md={3}>
                            <Widget categories={categories} tags={tags}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps({ params }) {

    const slug = params?.slug

    const res = await fetch(`${globalConfig.api_url}/posts?filters[slug][$eq]=${slug}&populate=*`)
    const posts = await res.json()

    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url3 = `${globalConfig.api_url}/categories?populate=*`
    const url4 = `${globalConfig.api_url}/tags?populate=*`
    
    const getConfig = await fetch(url1)
    const getCategories = await fetch(url3)
    const getTags = await fetch(url4)

    const configResponse = await getConfig.json()
    const dataCategories = await getCategories.json()
    const tagResponse = await getTags.json()

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()
   
    return {
      props: {
        posts,
        categories: dataCategories?.data,
        tags: tagResponse?.data,
        config: configResponse?.data?.attributes,
        navbar: navbarResponse?.data?.attributes?.items
      },
      revalidate: globalConfig.revalidateTime, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${globalConfig.api_url}/posts`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            id: post.id,
            slug: `${post.attributes.slug}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}
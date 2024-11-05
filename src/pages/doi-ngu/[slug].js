import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import FormDoctor from "@/components/form/formDoctor";
import SlideDoctorRelate from "@/components/page/doctor/slide";
import DefaultSeo from "@/components/seo/init";
import OurTeamWidget from "@/components/teams/widget";
import { imageCdn } from "@/components/ui/imaWithCdn";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Image from "next/image";

export default function DoctorDetail({posts,config,allDoctor,navbar}){

    const data = posts?.data?.[0]?.attributes

    return(
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo
                title={data?.seo?.title || data?.title}
                description={data?.seo?.description || data?.description}
            />

            <PyoBreakCrumbs
                categories={[{ name: 'Đội ngũ bác sỹ', slug: "/doi-ngu" }]}
                title={data?.title}
            />

            <Box component={"main"} py={3}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={5} justifyContent={"space-between"}>
                        <Grid xs={12} md={4}>
                            <Stack spacing={1}>
                                <Image
                                    src={imageCdn(data?.thumbnail?.data?.attributes?.url)}
                                    width={800}
                                    height={800}
                                    alt={data?.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                                <Typography textAlign={"center"} variant="h2" component={'h2'} fontSize={20} fontWeight={700} textTransform={"uppercase"} color="primary.main">
                                    {data?.title}
                                </Typography>
                                <Typography fontWeight={300} fontSize={15} textAlign={"center"}>{data?.description}</Typography>
                            </Stack>
                        </Grid>
                        <Grid xs={12} md={7}>
                            <Stack spacing={2} my={2} className="doctor-content">
                                <div dangerouslySetInnerHTML={{__html: data?.content}} style={{textAlign: 'justify'}}/>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box p={2} bgcolor={"primary.main"} borderRadius={2}>
                        <FormDoctor 
                            doctorName={data?.title}
                            doctorId={posts?.data?.[0]?.id}
                        />
                    </Box>

                    <Stack my={4} spacing={2}>
                        <Typography variant="h2" component={'h2'} fontSize={18} fontWeight={700} textTransform={"uppercase"} color="primary.main">
                            Xem thêm đội ngũ bác sỹ - The Pyo
                        </Typography>
                        <Grid container spacing={1} justifyContent={"space-between"}>
                            <SlideDoctorRelate datas={allDoctor} />
                        </Grid>
                    </Stack>
                </Container>
            </Box>

        </MainLayout>
    )
}

export async function getStaticProps({ params }) {

    const slug = params?.slug

    const res = await fetch(`${globalConfig.api_url}/doctors?filters[slug][$eq]=${slug}&populate=*`)
    const posts = await res.json()

    const url1 = `${globalConfig.api_url}/config?populate=*`

    const getConfig = await fetch(url1)

    const configResponse = await getConfig.json()

    const res3 = await fetch(`${globalConfig.api_url}/doctors?populate=*`)
    const allDoctor = await res3.json()

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()

    return {
        props: {
            posts,
            config: configResponse?.data?.attributes,
            allDoctor: allDoctor?.data,
            navbar: navbarResponse?.data?.attributes?.items
        },
        revalidate: globalConfig.revalidateTime, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${globalConfig.api_url}/doctors`)
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: {
            slug: `${post.attributes.slug}`,
        },
    }))

    return { paths, fallback: 'blocking' }
}
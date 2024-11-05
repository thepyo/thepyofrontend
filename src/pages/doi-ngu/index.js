import PyoBreakCrumbs from "@/components/breakcrumbs/default"
import DefaultSeo from "@/components/seo/init"
import OurTeamWidget from "@/components/teams/widget"
import { imageCdn } from "@/components/ui/imaWithCdn"
import MainLayout from "@/layouts/main"
import { globalConfig } from "@/theme/config"
import { Box, Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";

export default function DoctorList({config,doctors, navbar}){
    return(
        <MainLayout config={config} navbar={navbar}>
            <PyoBreakCrumbs
                title="Đội ngũ bác sỹ"
            />
            <DefaultSeo
                title="Đội ngũ bác sỹ"
            />

            <Box component={"main"} py={{xs: 3, lg: 8}}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        {doctors?.data?.map(item =>

                            <Grid xs={12} lg={3} key={item.id}>
                                <OurTeamWidget 
                                    title={item?.attributes?.title}
                                    description={item?.attributes?.description}
                                    thumbnail={imageCdn(item?.attributes?.thumbnail?.data?.attributes?.url)}
                                    link={`/doi-ngu/${item?.attributes?.slug}`}
                                />
                            </Grid>
                        )}
                    </Grid>
                    
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url2 = `${globalConfig.api_url}/doctors?populate=*`
    
    const getConfig = await fetch(url1)
    const getDoctor = await fetch(url2)
  
    const configResponse = await getConfig.json()
    const doctorRespinse = await getDoctor.json()
  
    const config = configResponse?.data?.attributes

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()
   
    return {
      props: {
        config,
        doctors : doctorRespinse,
        navbar: navbarResponse?.data?.attributes?.items
      },
      revalidate: globalConfig.revalidateTime,
    }
}
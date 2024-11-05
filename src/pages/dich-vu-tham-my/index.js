import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import DefaultSeo from "@/components/seo/init";
import ServiceGrid from "@/components/services/grid";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function ServicePage({config,data, navbar}){
    return(
        <MainLayout config={config} navbar={navbar}>
            <PyoBreakCrumbs
                title="Dịch vụ thẩm mỹ"
            />

            <DefaultSeo
                title="Dịch vụ thẩm mỹ"
            />

            <Box component={"main"} py={{xs: 3, lg: 8}}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={2}>

                        {data?.map(item =>

                            <Grid xs={12} md={6} lg={3} key={item.id}>
                                <ServiceGrid item={item?.attributes}/>
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
    const url2 = `${globalConfig.api_url}/services?populate=*`
    
    const getConfig = await fetch(url1)
    const getData = await fetch(url2)
  
    const configResponse = await getConfig.json()
    const dataResponse = await getData.json()
  
    const config = configResponse?.data?.attributes

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()
   
    return {
      props: {
        config,
        data: dataResponse?.data,
        navbar: navbarResponse?.data?.attributes?.items
      },
      revalidate: globalConfig.revalidateTime,
    }
}
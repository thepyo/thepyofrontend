import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import AboutSection1 from "@/components/page/gioi-thieu/section1";
import AboutSection2 from "@/components/page/gioi-thieu/section2";
import AboutSection3 from "@/components/page/gioi-thieu/section3";
import AboutSection4 from "@/components/page/gioi-thieu/section4";
import AboutSection5 from "@/components/page/gioi-thieu/section5";
import OurTeam from "@/components/page/homepage/team";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box } from "@mui/material";

export default function AboutUsPage({config,data,navbar,homePageData}){

    const aboutus = data?.attributes

    return(
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo
                title={aboutus?.seo?.title}
                description={aboutus?.seo?.description}
            />
            <PyoBreakCrumbs 
                title={aboutus?.title}
            />
            <Box component={"main"} py={{xs: 3, lg: 8}}>
                <AboutSection1 data={aboutus}/>
                <AboutSection2 data={aboutus}/>
                <AboutSection3 data={aboutus}/>
                <AboutSection4 data={aboutus}/>
                <AboutSection5 data={aboutus}/>
                <OurTeam data={homePageData?.attributes}/>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url2 = `${globalConfig.api_url}/gioi-thieu?populate=*`
    const url3 =`${globalConfig.api_url}/home-page?populate[0]=call_to_action_thumbnail&populate[1]=about_gallary&populate[2]=why_choose_us&populate[3]=seo&populate[4]=bac_sies&populate[bac_sies][populate]=*&populate[about_gallary][populate]=*`
    
    const getConfig = await fetch(url1)
    const getData = await fetch(url2)
    const getDataBsi = await fetch(url3)
  
    const configResponse = await getConfig.json()
    const dataResponse = await getData.json()
    const dataResponseBsi = await getDataBsi.json()
  
    const config = configResponse?.data?.attributes

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()
   
    return {
      props: {
        config,
        data: dataResponse?.data,
        navbar: navbarResponse?.data?.attributes?.items,
        homePageData: dataResponseBsi?.data,
      },
      revalidate: globalConfig.revalidateTime,
    }
}
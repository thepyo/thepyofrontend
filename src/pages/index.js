import AboutUsSection from "@/components/page/homepage/aboutus";
import CallToAction from "@/components/page/homepage/calltoaction";
// import HanhTrinh from "@/components/page/homepage/hanhTrinh";
import News from "@/components/page/homepage/news";
import ServiceSection from "@/components/page/homepage/services";
import SlideSection from "@/components/page/homepage/slides";
import OurTeam from "@/components/page/homepage/team";
import WhyChooseUs from "@/components/page/homepage/whyChooseUs";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";

export default function Home({homePageData,config,slides,posts,services,navbar}) {
  return (
    <MainLayout config={config} navbar={navbar}>
      <DefaultSeo
        title={homePageData?.attributes?.seo?.title}
        description={homePageData?.attributes?.seo?.description}
      />
      <SlideSection slides={slides} homePageData={homePageData}/>
      <AboutUsSection data={homePageData?.attributes}/>
      <ServiceSection data={homePageData?.attributes} services={services}/>
      <CallToAction data={homePageData?.attributes}/>
      <OurTeam data={homePageData?.attributes}/>
      <WhyChooseUs data={homePageData?.attributes}/>
      {/* <HanhTrinh /> */}
      <News datas={posts?.data}/>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const url1 = `${globalConfig.api_url}/config?populate=*`
  const url2 = `${globalConfig.api_url}/slides?populate=*`
  // const url3 = `${globalConfig.api_url}/home-page?populate[0]=call_to_action_thumbnail&populate[1]=about_gallary&populate[2]=why_choose_us&populate[3]=seo&populate[4]=bac_sies&populate[5]=homepage_tags&populate[bac_sies][populate]=*&populate[about_gallary][populate]=*`

  const url3 = `${globalConfig.api_url}/home-page?populate[0]=call_to_action_thumbnail&populate[1]=about_gallary&populate[2]=why_choose_us&populate[3]=seo&populate[4]=homepage_tags&populate[5]=bac_sies&populate[6]=bac_sies.thumbnail&populate[7]=about_gallary&populate[8]=slide_mobile&populate[9]=slide_mobile.image`

  const url4 = `${globalConfig.api_url}/posts?populate=*&?filters[categories][operator]=1`

  const url5 = `${globalConfig.api_url}/services?populate=*&pagination[page]=1&pagination[pageSize]=4`

  const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
  const getNavbar = await fetch(urlNavbar)
  const navbarResponse = await getNavbar.json()
  
  const getConfig = await fetch(url1)
  const getSlides = await fetch(url2)
  const getHomePage = await fetch(url3)
  const getPosts = await fetch(url4)
  const getServices = await fetch(url5)

  const configResponse = await getConfig.json()
  const slideResponse = await getSlides.json()
  const homePageResponse = await getHomePage.json()
  const postResponse = await getPosts.json()
  const serviceResponse = await getServices.json()

  const config = configResponse?.data?.attributes
  const slides = slideResponse?.data
  const homePageData = homePageResponse?.data
 
  return {
    props: {
      config,
      slides,
      homePageData,
      posts:postResponse,
      services:serviceResponse?.data,
      navbar: navbarResponse?.data?.attributes?.items
    },
    revalidate: globalConfig.revalidateTime,
  }
}
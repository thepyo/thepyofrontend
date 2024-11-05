import FilterBar from "@/components/page/tuyen-dung/filter";
import TuyendungSection1 from "@/components/page/tuyen-dung/section1";
import TuyenDungSection2 from "@/components/page/tuyen-dung/section2";
import TuyendungSection3 from "@/components/page/tuyen-dung/section3";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";

export default function TuyenDungPage({ config, data, tags, navbar }){
    return(
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo
                title="Chương trình khuyến mại - The Pyo"
                description="Đừng để sự tự ti về nhan sắc trở thành rào cản thành công. Tại The Pyo, mọi khuyết điểm sẽ được hóa thành ưu điểm."
            />
            <FilterBar />
            <TuyendungSection1 />
            <TuyenDungSection2 />
            <TuyendungSection3 data={data}/>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url2 = `${globalConfig.api_url}/tuyendungs?populate=*`

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
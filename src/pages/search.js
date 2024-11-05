import axiosClient from "@/axiosConfig/axiosClient";
import SearchResult from "@/components/page/search/result";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

async function getSearch(keyword,setLoading,setResult){

    if(!keyword) return

    setLoading(true)

    try {
        const req = await axiosClient.get(`/search?keyword=${keyword}`)
        setResult(req)
    } catch (error) {
        setResult()
    }
    setLoading(false)

}

export default function SearchPage({config,navbar}){

    const [loading,setLoading] = useState(true)
    const [result,setResult] = useState()

    const router = useRouter()
    const keyword = router?.query?.keyword

    useEffect(()=>{
        getSearch(keyword,setLoading,setResult)
    },[keyword])

    return(
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo
                title={`Kết quả tìm kiếm từ khoá`}
                description={'Đừng để sự tự ti về nhan sắc trở thành rào cản thành công. Tại The Pyo, mọi khuyết điểm sẽ được hóa thành ưu điểm.'}
            />
            <Box component={"main"} py={{xs: 3, lg: 8}}>
                <Container maxWidth={"md"}>
                    <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
                        <Typography variant="h1" component={"h1"} fontWeight={700} fontSize={24} color="primary.main" textAlign={"center"}>
                            Kết quả tìm kiếm từ khoá: {keyword}
                        </Typography>

                        {loading && <CircularProgress />}

                        {result && <SearchResult datas={result}/>}
                    </Stack>
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    
    const getConfig = await fetch(url1)
  
    const configResponse = await getConfig.json()
  
    const config = configResponse?.data?.attributes

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()
   
    return {
      props: {
        config,
        navbar: navbarResponse?.data?.attributes?.items
      },
      revalidate: globalConfig.revalidateTime,
    }
}
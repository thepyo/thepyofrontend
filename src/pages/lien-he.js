import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import FormContract from "@/components/form/default";
import FormHomepage from "@/components/form/formHomepage";
import ContactItemPage from "@/components/page/lien-he/item";
import DefaultSeo from "@/components/seo/init";
import DefaultTitleSection from "@/components/ui/title";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactUs({config,navbar}) {

    const [tab,setTab] = useState(1)

    return (
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo
                title="Liên hệ The Pyo"
                description="The Pyo, mọi khuyết điểm sẽ được hóa thành ưu điểm. Với đội ngũ chuyên gia hàng đầu và công nghệ hiện đại, The Pyo cam kết mang lại vẻ đẹp hoàn hảo"
            />
            <PyoBreakCrumbs
                title="Liên hệ"
            />
            <Box component={"main"} py={{ xs: 3, lg: 8 }}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Stack direction={"column"} spacing={2}>
                        <DefaultTitleSection title={"MẠNG LƯỚI CHI NHÁNH THE PYO CENTER CLINIC"} />
                        <Typography>
                            {config?.description_contact}
                        </Typography>

                        <Stack direction={"row"} spacing={2}>

                            <Stack spacing={2} onClick={()=>setTab(1)} sx={{cursor: 'pointer'}}>
                                <Typography 
                                    fontWeight={700} 
                                    color={tab === 1 ? "primary.main"  : "secoundary.main"}
                                    sx={{px:3}}
                                >
                                    HÀ NỘI
                                </Typography>
                                <Divider sx={{bgcolor: tab === 1 ? "primary.main"  : "secoundary.main"}}/>
                            </Stack>

                            <Stack spacing={2} onClick={()=>setTab(2)} sx={{cursor: 'pointer'}}>
                                <Typography 
                                    fontWeight={700} 
                                    color={tab === 2 ? "primary.main"  : "secoundary.main"}
                                    sx={{px:3}}
                                >
                                    THÀNH PHỐ HỒ CHÍ MINH
                                </Typography>
                                <Divider sx={{bgcolor: tab === 2 ? "primary.main"  : "secoundary.main"}}/>
                            </Stack>

                        </Stack>

                        <Grid container spacing={{xs: 3, lg: 8}}>
                            <Grid xs={12} lg={5}>
                                {tab === 1 && <ContactItemPage 
                                    title="THE PYO HÀ NỘI" 
                                    address="Số 10 Vũ Phạm Hàm, Trung Hòa, Cầu Giấy, Hà Nội"
                                    phone="0988 847 958"
                                    email="thepyovietnam@gmail.com"
                                />}
                                {tab === 2 && <ContactItemPage 
                                    title="THE PYO TP HỒ CHÍ MINH" 
                                    address="75 Phạm Viết Chánh, TP. Hồ Chí Minh"
                                    phone="0988 847 958"
                                    email="thepyovietnam@gmail.com"
                                />}
                            </Grid>
                            <Grid xs={12} lg={7}>
                                <FormContract />
                            </Grid>
                        </Grid>

                        <Box>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.38281832222!2d106.6822571!3d10.7656094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f004207347d%3A0x24ccc872eae5bd9a!2sThe%20Pyo%20%7C%20Center%20clinic!5e0!3m2!1svi!2s!4v1722264650289!5m2!1svi!2s" 
                                width="100%" 
                                height="450" 
                                loading="lazy" 
                                style={{border: "none"}}
                            />
                        </Box>
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
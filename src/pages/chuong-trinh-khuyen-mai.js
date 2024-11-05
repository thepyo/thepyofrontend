import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import PostList from "@/components/post/list";
import Widget from "@/components/post/widgets";
import DefaultSeo from "@/components/seo/init";
import EmptyContent from "@/components/ui/emptyContent";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Divider, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function KhuyenMaiPage({ config, data, categories, tags, navbar }) {
    return (
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo
                title="Chương trình khuyến mại - The Pyo"
                description="Đừng để sự tự ti về nhan sắc trở thành rào cản thành công. Tại The Pyo, mọi khuyết điểm sẽ được hóa thành ưu điểm."
            />
            <PyoBreakCrumbs
                title="Chương trình khuyến mại"
            />
            <Box component={"main"} py={8}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={9}>
                            {data?.length < 1 && <EmptyContent />}
                            {data?.length > 0 &&
                                <Stack gap={3} divider={<Divider light />}>
                                    {data?.map(item =>
                                        <PostList key={item.id} data={item?.attributes} label="Chương trình khuyến mại"/>
                                    )}
                                </Stack>
                            }
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Widget categories={categories} tags={tags} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url2 = `${globalConfig.api_url}/posts?populate=*&filters[categories][$eq]=2`
    const url3 = `${globalConfig.api_url}/categories?populate=*`
    const url4 = `${globalConfig.api_url}/tags?populate=*`

    const getConfig = await fetch(url1)
    const getData = await fetch(url2)
    const getCategories = await fetch(url3)
    const getTags = await fetch(url4)

    const configResponse = await getConfig.json()
    const dataResponse = await getData.json()
    const dataCategories = await getCategories.json()
    const tagResponse = await getTags.json()

    const config = configResponse?.data?.attributes

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()

    return {
        props: {
            config,
            data: dataResponse?.data,
            categories: dataCategories?.data,
            tags: tagResponse?.data,
            navbar: navbarResponse?.data?.attributes?.items
        },
        revalidate: globalConfig.revalidateTime,
    }
}
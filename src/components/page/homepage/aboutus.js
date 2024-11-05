import DefaultTitleSection from "@/components/ui/title";
import SlideAboutUs from "@/slides/aboutus";
import { globalConfig } from "@/theme/config";
import { Box, Button, Container, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function AboutUsSection({data}) {
    return (
        <Box component={"section"} py={5}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Grid container spacing={{ xs: 3, lg: 8 }}>
                    <Grid xs={12} lg={6}>
                        <DefaultTitleSection title={data?.about_title} />
                        <Stack spacing={2} my={2} sx={{textAlign: 'justify'}}>
                            <div dangerouslySetInnerHTML={{__html: data?.about_description_ck}} />
                        </Stack>
                        <Button
                            variant="contained"
                            startIcon={<IconArrowNarrowRight />}
                            component={Link}
                            href="/"
                        >
                            Tìm hiểu thêm
                        </Button>
                    </Grid>
                    <Grid xs={12} lg={6}>
                        <SlideAboutUs data={data?.about_gallary?.data}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
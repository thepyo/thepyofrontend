import ServiceWidget from "@/components/services/widget";
import { imageCdn } from "@/components/ui/imaWithCdn";
import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceSection({data,services}) {
    return (
        <Box component={"section"} py={5} bgcolor={"#f6f6f6"}>
            <Container maxWidth={globalConfig.maxWidth}>

                <Grid container spacing={{ xs: 3, lg: 8 }}>
                    <Grid xs={12} lg={6} order={{xs: 2,lg:1}}>
                        <Box width={"100%"}>
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                {services.map((item, index) => (
                                    <Grid xs={12} sm={12} md={6} key={index}>
                                        <ServiceWidget 
                                            title={item?.attributes?.title}
                                            thumbnail={imageCdn(item?.attributes?.thumbnail?.data?.attributes?.url)}
                                            url={`/dich-vu-tham-my/${item?.attributes?.slu}`}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                    </Grid>
                    <Grid xs={12} lg={6} order={{xs: 1,lg:2}}>
                        <DefaultTitleSection title={data?.service_title} />
                        <Stack spacing={2} my={2} className="service-content" sx={{textAlign: 'justify'}}>
                            <div dangerouslySetInnerHTML={{__html: data?.service_description_ck}} />
                        </Stack>
                        <Button
                            variant="contained"
                            startIcon={<IconArrowNarrowRight />}
                            component={Link}
                            href={data?.service_button_link}
                        >
                            {data?.service_button_label}
                        </Button>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
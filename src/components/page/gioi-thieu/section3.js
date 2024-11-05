import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Image from "next/image";

export default function AboutSection3({ data }) {
    return (
        <Box bgcolor="#f2f2f2" py='50px'>
            <Container maxWidth={globalConfig.maxWidth}>
                <Grid container spacing={{ xs: 3, lg: 8 }}>
                    <Grid xs={12} lg={6}>
                        <Stack spacing={2}>
                            <DefaultTitleSection title={data?.title_mission} />
                            <Box className="about-section-content">
                                <div dangerouslySetInnerHTML={{__html: data?.content_mission}} />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid xs={12} lg={6}>
                        {data?.thumbnail_mission?.data?.attributes?.url ?
                            <Image
                                src={`${globalConfig.cdn_url}${data?.thumbnail_mission?.data?.attributes?.url}`}
                                width={data?.thumbnail_mission?.data?.attributes?.width}
                                height={data?.thumbnail_mission?.data?.attributes?.height}
                                alt={"Tầm nhìn"}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px'
                                }}
                            />
                            :
                            <Box width={"100%"} height={360} bgcolor={'#d9d9d9'} borderRadius={2} />
                        }
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
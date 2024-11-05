import FormHomepage from "@/components/form/formHomepage";
import { imageCdn } from "@/components/ui/imaWithCdn";
import Pattern from "@/components/ui/pattern";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";

export default function CallToAction({data}) {
    return (
        <Box component={"section"} py={2} bgcolor={"#f6f6f6"}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Box bgcolor={"#FFE4C4"} borderRadius={"5px"} position={"relative"} overflow={"hidden"}>
                    <Grid
                        container
                        spacing={{ xs: 3, lg: 8 }}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid xs={12} lg={6} sx={{ height: "100%", py: 0 }}>
                            <Stack spacing={2} p={{ xs: 3, lg: 5 }}>
                                <Typography variant="body1" color="#333" fontSize={22}>
                                    {data?.call_to_action_sub_title}
                                </Typography>
                                <Typography variant="h2" component={"h2"} textTransform={"uppercase"} color={"primary.main"} fontSize={{ xs: 26, lg: 40 }} fontWeight={700} lineHeight={1.2}>
                                    {data?.call_to_action_title}
                                </Typography>
                                <Stack direction={{ xs: 'column', lg: "row" }} alignItems={{ xs: 'flex-start', lg: "center" }} spacing={2}>
                                    <Box display={{ xs: 'none', lg: 'block' }}>
                                        <IconPhoneCall color="#d30000" size={55} />
                                    </Box>
                                    <Typography fontSize={{ xs: 40, lg: 60 }} fontWeight={700} color="#d30000" lineHeight={1}>
                                        {data?.call_to_action_hotline}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid xs={12} lg={6} sx={{ py: 0 }}>
                            <Box sx={{ width: "100%", height: {xs: "auto", lg: 400} }} className="hover-img">
                                <figure>
                                    <Image
                                        src={imageCdn(data?.call_to_action_thumbnail?.data?.attributes?.url)}
                                        width={700}
                                        height={500}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderTopRightRadius: 5,
                                            borderBottomRightRadius: 5
                                        }}
                                    />
                                </figure>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ position: 'absolute', bottom: '-80px', left: '-50px' }}>
                        <Pattern />
                    </Box>
                    <Box sx={{ position: 'absolute', top: '-80px', right: 'calc(100vw/3 - 60px)' }} display={{xs: "none", lg: "block"}}>
                        <Pattern />
                    </Box>
                </Box>
                <Box bgcolor={"primary.main"} borderRadius={2} p={3} mt={4}>
                    <FormHomepage />
                </Box>
            </Container>
        </Box>
    )
}
import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

export default function WhyChooseUs({data}){
    return(
        <Box py={8} position={"relative"}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
                    <DefaultTitleSection 
                        title={data?.why_choose_us_title}
                        fill="#fff"
                        color="#fff"
                    />
                    <Box maxWidth={1000} color="#fff" textAlign={"center"}>
                        <div dangerouslySetInnerHTML={{__html: data?.why_choose_us_description_ck}} />
                    </Box>

                    <Grid container spacing={{xs:2,lg:5}}>
                        {data?.why_choose_us?.map(item =>

                            <Grid xs={12} lg={4} key={item.id}>
                                <Stack spacing={2} justifyContent={"center"} alignItems={"center"} px={{xs:0,lg:4}} py={{xs:0,lg:3}}>
                                    <Typography variant="h3" component={"h3"} fontSize={18} color="#fff" textAlign={"center"} fontWeight={700}>
                                        {item.title}
                                    </Typography>
                                    <Typography color="#fff" textAlign={"center"}>
                                        {item.description}
                                    </Typography>
                                </Stack>
                            </Grid>
                        )}
                    </Grid>
                </Stack>
            </Container>
            <Box sx={{position: 'absolute', top:0, bottom: 0, left: 0, right: 0, width: '100vw', height: '100%', zIndex: -2}}>
                <Image
                    src="/why.jpg"
                    width={1920}
                    height={500}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>
            <Box sx={{position: 'absolute', top:0, bottom: 0, left: 0, right: 0, width: '100vw', height: '100%', zIndex: -1, bgcolor: 'rgb(0,0,0,0.7)'}}/>
        </Box>
    )
}
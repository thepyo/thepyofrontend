import { globalConfig } from '@/theme/config';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
export default function TuyendungSection1(){
    return(
        <Box py={{xs:2,lg:5}}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={5} sx={{height: '100%'}}>
                        <Stack direction={"column"} justifyContent={"center"} maxWidth={"400px"} spacing={2} height={"100%"} mt={{xs: 0, md: 10}}>
                            <Stack direction={"column"} spacing={0}>
                                <Typography fontWeight={300}>Phát triển bản thân - Xây dựng sự nghiệp</Typography>
                                <Typography variant='h2' component={"h2"} fontSize={{xs: 26, lg: 36}} fontWeight={900} color="primary.main">
                                    Tuyển dụng The PYO
                                </Typography>
                            </Stack>
                            <Typography fontWeight={500} fontSize={16}>
                            Rất nhiều cơ hội việc làm & thăng tiến tại Hà Nội và các tỉnh, thành khác trên toàn quốc.
                            </Typography>
                            <Box><Button variant='contained' color="primary" sx={{px:4}}>Khám phá ngay</Button></Box>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={7}  sx={{height: '100%'}}>
                        <Image
                            src={'/tuyen-dung/tuyen-dung1.jpg'}
                            width={800}
                            height={500}
                            alt='Tuyển dụng'
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
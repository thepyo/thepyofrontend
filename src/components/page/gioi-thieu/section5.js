import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Container, LinearProgress, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import LinearProgressBox from "./lineAbout";
import { useEffect, useRef } from "react";

export default function AboutSection5({ data }) {

    return (
        <Box bgcolor="#f2f2f2" py='50px'>
            <Container maxWidth={globalConfig.maxWidth}>
                <Grid container spacing={{ xs: 3, lg: 8 }}>
                    <Grid xs={12} lg={6}>
                        <Typography fontSize={50} fontWeight={300} color="primary.main" lineHeight={"68px"}>
                            {data?.title_nangluc}
                        </Typography>
                    </Grid>
                    <Grid xs={12} lg={6}>
                        <Stack spacing={2} >

                            {data?.nangluc?.map(item =>
                                <LinearProgressBox 
                                    currentValue={item.number} 
                                    name={item.name}
                                    key={item.id}
                                />
                            )}
                            
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
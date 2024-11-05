import { globalConfig } from "@/theme/config";
import { Container, Stack, Typography } from "@mui/material";

export default function AboutSection1({data}){
    return(
        <Container maxWidth={globalConfig.maxWidth}>
            <Stack py={5}>
                <Typography variant="h3" component={"h3"} fontSize={22} fontWeight={300} textAlign={"center"}>
                    {data?.sapo}
                </Typography>
            </Stack>
        </Container>
    )
}
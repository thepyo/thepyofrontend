import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function TuyenDungSection2(){
    return(
        <Box py={{xs:2,lg:5}}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                    <Typography variant="h2" component={"h2"} fontSize={{xs:24,lg:26}} fontWeight={900} color="primary.main">
                        SẴN SÀNG CHIA SẺ VÀ KHÔNG NGỪNG HỌC TẬP
                    </Typography>
                    <Typography textAlign={{xs: 'left', lg: "center"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Typography>
                    <Image
                        src={"/tuyen-dung/tuyen-dung-3.jpg"}
                        width={1200}
                        height={500}
                        style={{
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                </Stack>
            </Container>
        </Box>
    )
}
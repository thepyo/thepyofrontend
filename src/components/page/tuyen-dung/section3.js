import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import TuyenDungItem from "./item";

export default function TuyendungSection3({data}){
    return(
        <Box py={{xs:2,lg:5}}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Typography variant="h2" component={"h2"} fontSize={26} fontWeight={900} color="primary.main" textAlign={"center"} py={3}>
                TIN TUYỂN DỤNG THE PYO
                </Typography>
                <Stack direction={"column"} spacing={2}>
                    {data?.map(item =>
                        <TuyenDungItem 
                            key={item.id}
                            title={item.attributes.title}
                            hinh_thuc={item.attributes.hinh_thuc}
                            dia_diem={item.attributes.dia_diem}
                            luong={item.attributes.luong}
                            slug={item.attributes.slug}
                        />
                    )}
                    
                </Stack>
            </Container>
        </Box>
    )
}
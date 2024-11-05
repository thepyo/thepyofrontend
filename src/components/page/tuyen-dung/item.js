import { Box, Button, Stack, Typography } from "@mui/material";
import { IconHourglassLow } from "@tabler/icons-react";
import EastIcon from '@mui/icons-material/East';
import { useRouter } from "next/router";
import Link from "next/link";
export default function TuyenDungItem({
    title,
    hinh_thuc,
    dia_diem,
    luong,
    slug
}){
    const router = useRouter()
    return(
        <Stack 
            direction={{xs: 'column', lg: "row"}}
            alignItems={{xs: 'flex-start', lg:"center"}} 
            justifyContent={{xs: 'flex-start', lg: "space-between"}} 
            px={{xs:2,lg: 5}}
            py={2}
            border="1px solid #eee"
            spacing={3}
        >
            <Stack direction={"column"} flexGrow={1} spacing={1}>
                <Link  href={`/tuyen-dung/${slug}`}>
                <Typography fontSize={20} variant="h3" component={"h3"} fontWeight={500}>
                    {title}
                </Typography>
                </Link>
                <Stack direction={{xs: 'column', lg: "row"}} spacing={{xs:1,lg: 3}}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconHourglassLow size={16} color={"#555"}/>
                        <Typography fontWeight={300} color={"#555"}>Hình thức:</Typography>
                        <Typography fontWeight={600} color={"#555"}>{hinh_thuc}</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconHourglassLow size={16} color={"#555"}/>
                        <Typography fontWeight={300} color={"#555"}>Địa điểm làm việc:</Typography>
                        <Typography fontWeight={600} color={"#555"}>{dia_diem}</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconHourglassLow size={16} color={"#555"}/>
                        <Typography fontWeight={300} color={"#555"}>Lương:</Typography>
                        <Typography fontWeight={600} color={"#555"}>{luong}</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box>
                <Button 
                    component={Link}
                    href={`/tuyen-dung/${slug}`}
                    variant="contained" color="primary" endIcon={<EastIcon />} sx={{px: 4}}>Ứu tuyển</Button>
            </Box>
        </Stack>
    )
}
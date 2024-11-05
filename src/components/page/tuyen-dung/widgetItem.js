import { Box, Button, Stack, Typography } from "@mui/material";
import { IconHourglassLow } from "@tabler/icons-react";
import EastIcon from '@mui/icons-material/East';
import Link from "next/link";

export default function TuyenDungWidgetItem({title,hinh_thuc,dia_diem,luong,slug}){
    return(
        <Stack 
            direction={'column'}
            px={2}
            py={2}
            border="1px solid #eee"
            spacing={3}
        >
            <Stack direction={"column"} flexGrow={1} spacing={1}>
                <Link href={`/tuyen-dung/${slug}`}>
                <Typography fontSize={18} variant="h4" component={"h4"} fontWeight={500}>
                    {title}
                </Typography>
                </Link>
                <Stack direction={{xs: 'column', lg: "row"}} spacing={{xs:1,lg: 3}}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <Typography fontWeight={600} color={"#555"}>{hinh_thuc} .</Typography>
                        <Typography fontWeight={600} color={"#555"}>{dia_diem} .</Typography>
                        <Typography fontWeight={600} color={"#555"}>{luong}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
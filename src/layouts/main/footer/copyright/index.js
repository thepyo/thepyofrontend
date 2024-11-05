import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function CopyRight({data}){
    return(
        <Stack 
            direction={{xs: "column", lg: "row"}} 
            justifyContent={{xs: "flex-start", lg: "space-between"}} 
            alignItems={{xs: "flex-start", lg: "center"}}
        >
            <Typography variant="body2" color="#fff">
                {data?.copyright}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Link href="/page/dieu-khoan-dich-vu"><Typography variant="body2" color="#fff">Điều khoản dịch vụ</Typography></Link>
                <Link href="/page/chinh-sach-bao-mat"><Typography variant="body2" color="#fff">Chính sách bảo mật</Typography></Link>
            </Stack>
        </Stack>
    )
}
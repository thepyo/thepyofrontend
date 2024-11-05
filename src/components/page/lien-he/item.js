import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function ContactItemPage({
    title = "THE PYO HÀ NỘI",
    address="Số 10 Vũ Phạm Hàm, Trung Hòa, Cầu Giấy, Hà Nội",
    phone="0988 847 958",
    email="thepyovietnam@gmail.com",
    thumbnail="/lien-he.png"
}){
    return(
        <Stack spacing={2}>
            <Image
                src={thumbnail}
                width={500}
                height={220}
                alt={title}
                sx={{
                    maxWidth: '100%',
                    height: 'auto'
                }}
            />
            <Typography variant="h3" component={"h3"} fontSize={20} fontWeight={700} color="primary.main">
                {title}
            </Typography>
            <Stack gap={1}>
                <Typography>
                    <strong>Địa chỉ :</strong> {address}
                </Typography>
                <Typography>
                    <strong>Hotline :</strong> {phone}
                </Typography>
                <Typography>
                    <strong>Email :</strong>  {email}
                </Typography>
            </Stack>
        </Stack>
    )
}
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ServiceWidget({
    title = "Dịch vụ thẩm mỹ",
    thumbnail = "/defaultThumbnail.jpg",
    url="/"
}){
    return(
        <Box position={"relative"} className="service-widget" component={Link} href={url} display={"block"}>
            <Image
                src={thumbnail}
                fill
                alt={title}
                style={{
                    borderRadius: 5
                }}
            />
            <Stack className="service-tag" justifyContent={"center"} alignItems={"center"}>
                <Stack px={3} py={1} bgcolor={"#fff"} borderRadius={1}>
                    <Typography component={"h3"} variant="h3" fontSize={16} textTransform={"uppercase"} fontWeight={500}>
                        {title}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}
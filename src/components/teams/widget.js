import { Box, Button, Stack, Typography } from "@mui/material";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function OurTeamWidget({
    title = "THẠC SỸ - BÁC SỸ KIM JUN",
    description = "10 năm kinh nghiệm chuyên sâu vùng kín",
    thumbnail = "/bsy.jpg",
    link = "/"
}) {
    return (
        <Stack p={3} bgcolor="#f2f2f2" borderRadius={2} justifyContent={"center"} alignItems={"center"} spacing={2}>
            <Stack justifyContent={"center"} alignItems={"center"} spacing={0.5} component={Link} href={link}>
                <Typography variant="h3" component={'h3'} fontSize={20} fontWeight={700} textTransform={"uppercase"} color="primary.main">
                    {title}
                </Typography>
                <Typography fontSize={15} textAlign={"center"}>{description}</Typography>
            </Stack>
            <Box className="hover-img">
                <figure>
                    <Image
                        src={thumbnail}
                        width={320}
                        height={320}
                        alt={title}
                    />
                </figure>
            </Box>

            <Box>
                <Button variant="contained" startIcon={<IconArrowNarrowRight />} size="small" component={Link} href={link}>
                    Xem thêm về bác sỹ
                </Button>
            </Box>
        </Stack>
    )
}
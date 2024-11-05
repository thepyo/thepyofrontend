import ThePyoIcon from "@/components/ui/icon";
import { imageCdn } from "@/components/ui/imaWithCdn";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function WidgetService({datas}){
    return(
        <Box className="widget-service" height={"100%"}>
            <Stack direction={"row"} alignItems={"center"} spacing={2} mb={3}>
                <ThePyoIcon />
                <Typography variant="h3" component={"h3"} color={"primary.main"} fontWeight={700}>
                    DỊCH VỤ LIÊN QUAN
                </Typography>
            </Stack>
            {datas?.map(item =>
                <Stack mt={1} spacing={1} key={item.id}>
                    <Box className="hoverhover-img" component={Link} href={`/dich-vu-tham-my/${item?.attributes?.slu}`}>
                        <figure>
                            <Image
                                src={imageCdn(item?.attributes?.thumbnail?.data?.attributes?.url)}
                                width={300}
                                height={200}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: 180,
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderRadius: 8
                                }}
                            />
                        </figure>
                    </Box>
                    <Link href={`/dich-vu-tham-my/${item?.attributes?.slu}`}>
                        <Typography fontSize={18} fontWeight={700} color="primary.main">{item?.attributes?.title}</Typography>
                    </Link>
                </Stack>
            )}
        </Box>
    )
}
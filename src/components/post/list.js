import { Box, Stack, Typography } from "@mui/material";
import DefaultThumbnail from "./defaultThumbnail";
import ThePyoChip from "../ui/chip";
import MetaPost from "../meta/post";
import { imageCdn } from "../ui/imaWithCdn";
import Image from "next/image";
import Link from "next/link";
import { globalConfig } from "@/theme/config";

export default function PostList({
    data,
    label = "Tin tức"
}){
    return(
        <Stack 
            direction={{
                xs: "column",
                lg: "row"
            }} 
            gap={{xs: 2, lg: 5}} 
            alignItems={"center"}
        >
            <Link href={`/${data?.slug}`}>
                {data?.thumbnail?.data?.attributes?.url ? 
                        <Box className="hover-img">
                            <figure>
                            <Image
                                src={imageCdn(data?.thumbnail?.data?.attributes?.url)}
                                width={300}
                                height={200}
                                alt={""}
                                style={{
                                    width: 300,
                                    height: 200,
                                    objectFit: "cover",
                                    objectPosition: 'center',
                                    borderRadius: 8
                                }}
                            />
                            </figure>
                        </Box>
                    : 
                    <DefaultThumbnail />
                }
            </Link>
            <Stack gap={2}>
                <Stack>
                    <ThePyoChip label={label} />
                </Stack>
                <Link href={`/${data?.slug}`}>
                    <Typography variant="h2" component={"h2"}>
                        {data?.title}
                    </Typography>
                </Link>
                <Typography>{data?.description}</Typography>
                <MetaPost 
                    time={data?.createdAt}
                    title={data?.title}
                    description={data?.description}
                    thumbnail={imageCdn(data?.thumbnail?.data?.attributes?.url)}
                    url={`${globalConfig.home_url}/${data?.slug}`}
                />
            </Stack>
        </Stack>
    )
}
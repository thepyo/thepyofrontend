import { imageCdn } from "@/components/ui/imaWithCdn";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function WhatService({data}){
    return(
        <Box id="whatis">
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                {data?.title1}
            </Typography>
            <Typography>
                {data?.description}
            </Typography>
            <Image
                src={imageCdn(data?.thumbnail?.data?.attributes?.slug)}
                width={800}
                height={450}
                alt={data?.title}
                className="thumbnail"
            />
        </Box>
    )
}
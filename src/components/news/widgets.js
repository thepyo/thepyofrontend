import { Box, Stack, Typography } from "@mui/material";
import { IconCalendarWeek } from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";
import FormatTime from "../ui/formatTime";
import Link from "next/link";

function cutText(text,maxLength){
    if(text.length < maxLength) return text
    return `${text.slice(0,maxLength)} ...`
}

export default function NewsWidget({
    thumbnail = "/thumbnail.jpg",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ...",
    time = "2024-06-11 18:12:40.171469",
    link = "/"
}){
    return(
        <Stack spacing={2}>
            <Link href={link}>
                <Box className="thumbnail">
                    <Image
                        src={thumbnail}
                        width={350}
                        height={220}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '220px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderRadius: '8px'
                        }}
                    />
                </Box>
            </Link>
            <Link href={link}>
                <Typography variant="h2" component={"h3"} fontSize={15} fontWeight={700} color={"primary.main"}>{title}</Typography>
            </Link>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <IconCalendarWeek size={15} />
                <Typography variant="body" fontWeight={300} fontSize={14}>
                    <FormatTime time={time} />
                </Typography>
            </Stack>
            <Typography textAlign={"justify"}>
                {cutText(description,130)}
            </Typography>
        </Stack>
    )
}
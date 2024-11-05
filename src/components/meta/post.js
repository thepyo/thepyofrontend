import { Box, Stack, Typography } from "@mui/material";
import { IconCalendarWeek } from "@tabler/icons-react";
import ShareSocial from "./share";
import FormatTime from "../ui/formatTime";

export default function MetaPost({
    time = "2024-06-11 18:12:40.171469",
    url = "/",
    title="",
    description = ""
}){
    return(
        <Stack 
            direction={"row"} 
            gap={2} 
            alignItems={"center"}
            justifyContent={{
                xs: 'space-between',
                lg: 'flex-start'
            }}
        >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconCalendarWeek size={14} color="#888" />
                <Typography variant="body2">
                    <FormatTime time={time} />
                </Typography>
            </Stack>
            <Box sx={{width: "1px", height: "13px", bgcolor: '#888'}} />
            <Stack direction={"row"} gap={1} alignItems={"center"}>
                <Typography variant="body2">Chia sẻ</Typography>
                <ShareSocial 
                    url={url} 
                    title={title} 
                    description={description}
                />
            </Stack>
        </Stack>
    )
}
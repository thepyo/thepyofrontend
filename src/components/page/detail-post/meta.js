import ShareSocial from "@/components/meta/share";
import FormatTime from "@/components/ui/formatTime";
import { Stack, Typography } from "@mui/material";
import { IconCalendarWeek } from "@tabler/icons-react";

export default function DetailPostMeta({
    title,
    time,
    description,
    url
}) {
    return (
        <Stack
            my={3}
            py={2}
            sx={{
                borderTop: '1px solid #eee',
                borderBottom: '1px solid #eee'
            }}
            direction={{
                xs: "column",
                lg: "row"
            }}
            justifyContent={{
                xs: "flex-start",
                lg: "space-between"
            }}
            alignItems={{
                xs: "flex-start",
                lg: "center"
            }}
            spacing={2}
        >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconCalendarWeek size={14} color="#888" />
                <FormatTime time={time} />
            </Stack>

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
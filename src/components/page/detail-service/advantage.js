import { Box, Typography } from "@mui/material";

export default function AdvantageService({data}) {
    return (
        <Box>
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                {data?.title_uu_diem}
            </Typography>

            <Typography>
                {data?.description_uu_diem}
            </Typography>

            <ul>
                {data?.uudiem?.map(item =>
                    <li key={item.id}>{item.label}</li>
                )}
                
            </ul>
        </Box>
    )
}
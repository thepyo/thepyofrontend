import { Box, Typography } from "@mui/material";

export default function MechanismService({data}) {
    return (
        <Box id="mechanism">
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                {data?.title_co_che}
            </Typography>

            <Typography>
                {data?.description_co_che}
            </Typography>

            <ul>
                {data?.coche?.map(item =>
                    <li key={item.id}>{item.label}</li>
                )}
            </ul>
        </Box>
    )
}
import { Stack, Typography } from "@mui/material";

export default function SlideItem({
    bgcolor="primary.main",
    title="LOREM IPSUM DOLOR SIT AMET",
    description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
}){
    return(
        <Stack direction={"column"} spacing={2} bgcolor={bgcolor} p={4} width={288} height={330}>
            <Typography variant="h3" component={"h3"} fontSize={22} fontWeight={600} color="#fff">
                {title}
            </Typography>
            <Typography variant="body1" fontWeight={300} color="#fff">
                {description}
            </Typography>
        </Stack>
    )
}
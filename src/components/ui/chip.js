import { Box, Button, Stack, Typography } from "@mui/material";

export default function ThePyoChip({
    bgColor = "primary",
    colorText = "#fff",
    label = "The Pyo"
}){
    return(
        <Box>
            <Button variant="contained" fullWidth={false} color={bgColor} size="small">
                <Typography variant="body2" fontSize={10} fontWeight={700} color={colorText}>
                    {label}
                </Typography>
            </Button>
        </Box>
    )
}
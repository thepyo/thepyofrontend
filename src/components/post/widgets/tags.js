import { Button, Stack, Typography } from "@mui/material";
import { IconFolder } from "@tabler/icons-react";

export default function TagWidget(){

    return(
        <Stack p={3} sx={{border: '1px solid #ccc'}} borderRadius={3} spacing={3}>
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                Từ khoá
            </Typography>

            <Stack spacing={1} direction={"row"} useFlexGap flexWrap={"wrap"}>
                <Button variant="outlined" size="small">#the pyo</Button>
                <Button variant="outlined" size="small">#keywork</Button>
                <Button variant="outlined" size="small">#thẩm mỹ uy tín</Button>
                <Button variant="outlined" size="small">#the pyo</Button>
                <Button variant="outlined" size="small">#Bác sĩ Lê Việt Hùng</Button>
                <Button variant="outlined" size="small">#Điều trị hôi nách</Button>
                <Button variant="outlined" size="small">#Viêm nang lông</Button>
                <Button variant="outlined" size="small">#the pyo</Button>
                <Button variant="outlined" size="small">#công nghệ Harmonic</Button>
                <Button variant="outlined" size="small">#the pyo</Button>
            </Stack>
        </Stack>
    )
}
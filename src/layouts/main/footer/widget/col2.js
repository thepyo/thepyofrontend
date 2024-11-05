import { Stack, Typography } from "@mui/material";

export default function FooterWidget2({data}){
    return(
        <>
             <Typography variant="h2" component={"h2"} color="#fff" mb={3}>
                THE PYO TP. HỒ CHÍ MINH
            </Typography>
            <Stack gap={1}>
                <Typography color="#fff">
                    <strong>Địa chỉ :</strong> 75 Phạm Viết Chánh, TP. Hồ Chí Minh
                </Typography>
                <Typography color="#fff">
                    <strong>Hotline :</strong> 0988 847 958
                </Typography>
                <Typography color="#fff">
                    <strong>Email :</strong>  thepyovietnam@gmail.com
                </Typography>
            </Stack>
        </>
    )
}
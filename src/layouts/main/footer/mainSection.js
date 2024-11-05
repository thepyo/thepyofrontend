import Logo from "@/components/logo";
import { Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function MainFooterSection({data}){
    return(
        <Grid container spacing={2} alignItems={"center"}>
            <Grid size={12} md={2}>
                <Logo color="#fff" />
            </Grid>
            <Grid size={12} md={9}>
                <Stack direction={"column"} spacing={1}>
                    <Typography variant="h2" component={"h2"} color="#fff">
                        {data?.company}
                    </Typography>
                    <Typography color="#fff">
                        Giấy phép kinh doanh : {data?.license} cấp ngày : {data?.taxdate} tại : {data?.taxcom}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}
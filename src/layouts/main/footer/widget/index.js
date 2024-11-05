import Grid from '@mui/material/Unstable_Grid2';
import FooterWidget1 from './col1';
import FooterWidget2 from './col2';

export default function FooterWidget({data}) {
    return (
        <Grid container spacing={5}>
            <Grid xs={12} lg={6}>
                <FooterWidget1 data={data}/>
            </Grid>
            <Grid xs={12} lg={6}>
                <FooterWidget2 data={data}/>
            </Grid>
        </Grid>
    )
}
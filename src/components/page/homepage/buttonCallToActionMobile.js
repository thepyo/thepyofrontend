import { Box, Button, DialogContent, Typography } from "@mui/material";
import { IconCalendarClock } from "@tabler/icons-react";
import theme from "@/theme/default";
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import FormHomepage from "@/components/form/formHomepage";

export default function ButtonCallToActionMobile(){

    const [open,setOpen] = useState(false)

    return(
        <Box display={{xs: 'block', lg: 'none'}}>
            <Button 
                variant="contained" 
                fullWidth 
                sx={{borderRadius: 0, py: 2}} 
                size="large" 
                startIcon={<IconCalendarClock color={theme.palette.primary.main} />}
                color="secondary"
                onClick={()=>setOpen(true)}
            >
                <Typography fontWeight={700} color="primary.main" fontSize={20}>Đặt lịch hẹn tư vấn</Typography>
            </Button>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
            >
                <DialogContent sx={{bgcolor: "primary.main"}}>
                    <FormHomepage />
                </DialogContent>
            </Dialog>
        </Box>
    )
}
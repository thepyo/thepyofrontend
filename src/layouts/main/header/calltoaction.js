import FormContract from "@/components/form/default";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import { IconCalendarClock } from "@tabler/icons-react";
import { useState } from "react";

export default function CallToActionButton(){
    const [open,setOpen] = useState(false)
    return(
        <>
            <Button 
                variant="contained"
                startIcon={<IconCalendarClock color={"#fff"} />}
                style={{
                    borderRadius: 25
                }}
                onClick={()=>setOpen(true)}
            >
                <Typography variant="span" sx={{display: {xs: 'none', md: 'block'}}}>ĐẶT LỊCH HẸN TƯ VẤN</Typography> 
            </Button>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
            >
                <DialogContent>
                    <FormContract />
                </DialogContent>
            </Dialog>
        </>
    )
}
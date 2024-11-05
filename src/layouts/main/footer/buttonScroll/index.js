import FormContract from "@/components/form/default";
import FormHomepage from "@/components/form/formHomepage";
import ZaloIcon from "@/components/ui/zaloIcon";
import { Box, Dialog, DialogContent, Divider, IconButton, Stack, Tooltip } from "@mui/material";
import { IconMessagePlus, IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function ButtonScroll({ data }) {

    const {zalo,hotline} = data

    const [open,setOpen] = useState(false)

    return (
        <>
            <Box position={"fixed"} top="40%" right="0" width={50} height={200} p={1.5} bgcolor={"#F2F2F2"} zIndex={2} sx={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                <Stack
                    spacing={1.3}
                    divider={<Divider />}
                >
                    <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Tooltip title={`hotline: ${hotline}`} placement="left">
                            <IconButton component={Link} href={`tel:${hotline}`}>
                                <IconPhoneCall size={26} color="#d30000" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Tooltip title={`Zalo OA`} placement="left">
                            <IconButton component={Link} href={`https://zalo.me/${zalo}`}>
                                <ZaloIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>

                    <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                    >

                        <IconButton onClick={()=>setOpen(true)}>
                            <IconMessagePlus size={26} color="#d30000" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
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
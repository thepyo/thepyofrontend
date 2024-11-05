import Logo from "@/components/logo";
import { menu } from "@/theme/menu";
import { Box, Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { IconChevronRight, IconMenuDeep } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HeaderMobile({data}){

    const [open,setOpen] = useState(false)

    const router = useRouter()

    const handleClick = (link) => {
        setOpen(false)
        router.push(link)
    }

    return(
        <Box display={{xs: 'block', lg: 'none'}} bgcolor={"primary.main"}>
            <IconButton onClick={()=>setOpen(true)}>
                <IconMenuDeep size={30} color="#fff"/>
            </IconButton>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={()=>setOpen(false)}
            >
                <Stack p={3} width={300} height={"100vh"} overflow={"hidden"} gap={5} position={"relative"}>

                    <Logo />

                    <Stack spacing={2} divider={<Divider light />}>
                        {data?.map((item,key) =>
                            <Stack 
                                onClick={() => handleClick(item?.attributes?.url)} 
                                key={key} 
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                sx={{cursor: 'pointer'}}
                                direction={"row"}
                            >
                                <Typography variant="body2" fontSize={14} fontWeight={500} className="navitem" textTransform={"uppercase"}>
                                    {item?.attributes?.title}
                                </Typography>
                                <IconChevronRight size={15}/>
                            </Stack>
                        )}
                    </Stack>

                    <Box sx={{
                        position: "absolute",
                        bottom: -80,
                        right: -50
                    }}>
                        <Image
                            src="/pattern.svg"
                            width={276}
                            height={279}
                            alt="The Pyo Pattern"
                        />
                    </Box>
                </Stack>
            </Drawer>
        </Box>
    )
}
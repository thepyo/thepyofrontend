import { globalConfig } from "@/theme/config";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import FormFilter from "./form-filter";

export default function FilterBar(){
    return(
        <Box position={"relative"} width={"100%"} height={"400px"} overflow={"hidden"}>
            <Container maxWidth={globalConfig.maxWidth} sx={{position: 'relative', zIndex: 3, height: '100%'}}>
                <FormFilter />
            </Container>
            <Box sx={{position: 'absolute', top: 0, left: 0, right: 0, zIndex:1,width: '100%', height: '400px'}}>
                <Image 
                    src="/tuyen-dung/filter.png" 
                    width={1920} 
                    height={500} 
                    alt="Tuyển dụng The Pyo" 
                    style={{
                        with: '100%', 
                        height: '400px', 
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
            <Box sx={{position: 'absolute', top: 0, left: 0, right: 0, zIndex:2,width: '100%', height: '400px', backgroundColor: 'rgb(0,0,0,0.7)'}} />
        </Box>
    )
}
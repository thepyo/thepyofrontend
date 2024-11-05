import { Box, Stack } from "@mui/material";
import Logo from "../logo";

export default function DefaultThumbnail(){
    return(
        <Stack width={380} height={220} bgcolor={"primary.main"} borderRadius={5} justifyContent={"center"} alignItems={"center"}>
            <Logo color="#fff" />
        </Stack>
    )
}
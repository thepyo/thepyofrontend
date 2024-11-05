import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function HanhTrinh(){
    return(
        <Box py={8} position={"relative"}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
                    <DefaultTitleSection
                        title="HÀNH TRÌNH BƯỚC RA TỪ THE PYO CENTER CLINIC"
                    />
                    <Box maxWidth={1000}>
                    <Typography textAlign={"center"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
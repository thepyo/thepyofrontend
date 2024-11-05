import { globalConfig } from "@/theme/config";
import { Box, Breadcrumbs, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { IconHome2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function PyoBreakCrumbs({
    categories = [],
    title = "The Pyo",
}) {

    const matches = useMediaQuery('(min-width:1180px)');

    const colorText = "#f0f0f0"
    const colorH1 = "#f0f0f0"

    return (
        <>
            <Box
                bgcolor={"primary.main"}
                position={"relative"}
                overflow={"hidden"}
            >
                <Container maxWidth={globalConfig.maxWidth} sx={{position: 'relative', zIndex: 3}}>
                    <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={1}
                        minHeight={200}
                    >
                        <Breadcrumbs aria-label="breadcrumb" separator={<Typography variant="body2" color={colorText}>{"›"}</Typography>}>

                            <Link href="/">
                                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                    <IconHome2 color={colorText} size={15} />
                                    <Typography variant="body2" color={colorText}>Trang chủ</Typography>
                                </Stack>
                            </Link>

                            {categories?.length > 0 && categories?.map((item, key) =>
                                <Link href={item?.slug} key={key}>
                                    <Typography variant="body2" color={colorText}>{item?.name}</Typography>
                                </Link>
                            )}

                            <Typography variant="body2" color={colorText}>{title}</Typography>

                        </Breadcrumbs>
                        <Typography variant="h1" component={"h1"} color={colorH1} textTransform={"uppercase"} letterSpacing={-1}>
                            {title}
                        </Typography>

                    </Stack>
                </Container>
                <Box sx={styles.patternLeft}>
                    <Image
                        src={'/pattern-light.svg'}
                        width={250}
                        height={250}
                        alt="The Pyo Pattern"
                    />
                </Box>
                <Box sx={styles.patternRight}>
                    <Image
                        src={'/pattern-light.svg'}
                        width={250}
                        height={250}
                        alt="The Pyo Pattern"
                    />
                </Box>
                <Box 
                    display={{xs: 'block', md: 'none'}}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    width={"100%"}
                    height={"100%"}
                    zIndex={1}
                >
                    <Image
                        src={"/why.jpg"}
                        width={500}
                        height={300}
                        alt="bg breakcrumb"
                        style={{
                            width:'100%',
                            height:'100%',
                            objectFit: 'cover'
                        }}
                    />
                </Box>
                <Box 
                    display={{xs: 'block', md: 'none'}}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    width={"100%"}
                    height={"100%"}
                    zIndex={2}
                    bgcolor={"rgb(0,0,0,0.7)"}
                />
            </Box>
        </>
    )
}

const styles = {
    patternLeft: {
        position: 'absolute',
        bottom: -50,
        left: -50,
        display: {
            xs: 'none',
            lg: 'block'
        }
    },
    patternRight: {
        position: 'absolute',
        top: -80,
        right: -80,
        display: {
            xs: 'none',
            lg: 'block'
        }
    }
}
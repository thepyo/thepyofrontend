import { Box, Stack, Typography } from "@mui/material";

export default function WorkingProcessService({data}) {
    return (
        <Box id="working-process">
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                {data?.title_quy_trinh}
            </Typography>

            {data?.step?.map((item,key) =>
                <Stack key={item.id} width={"100%"} direction={{ xs: 'column', md: 'row' }} justifyContent={"space-between"} mb={1}>
                    <Box width={100}>
                        <Typography fontWeight={700}>Bước {key + 1}</Typography>
                    </Box>
                    <Typography>
                        {item.content}
                    </Typography>
                </Stack>
            )}
            
        </Box>
    )
}
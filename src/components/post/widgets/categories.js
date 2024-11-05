import { Stack, Typography } from "@mui/material";
import { IconFolder } from "@tabler/icons-react";
import Link from "next/link";

export default function CategoryWidget({datas}){

    return(
        <Stack p={3} sx={{border: '1px solid #ccc'}} borderRadius={3} spacing={3}>
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                Danh mục
            </Typography>

            <Stack spacing={2}>
                {datas?.map((item) =>
                    <Stack direction={"row"} alignItems={"center"} spacing={1} component={Link} href={`/${item?.attributes?.slug}`} key={item.id}>
                        <IconFolder size={16} color="#888" />
                        <Typography fontWeight={500}>{item?.attributes?.name}</Typography>
                    </Stack>
                )}
            </Stack>
        </Stack>
    )
}
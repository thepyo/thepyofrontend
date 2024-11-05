import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function EmptyContent(){
    return(
        <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
            <Image
                src="/empty.jpg"
                width={300}
                height={300}
                alt="The Pyo Empty"
            />
            <Typography fontWeight={300}>Nội dung đang cập nhật, vui lòng quay lại sau</Typography>
        </Stack>
    )
}
import { Button, Stack, Typography } from "@mui/material";
import TuyenDungWidgetItem from "./widgetItem";
import { format } from "date-fns";

export default function TuyenDungWidget({post,datas}){
    return(
        <Stack gap={2}>
            <Stack p={3} sx={{border: '1px solid #ccc'}} borderRadius={3} spacing={3}>
                <Typography variant="h2" component={"h2"} color={"primary.main"}>
                    Tổng quan
                </Typography>

                <Stack spacing={2}>
                    <Stack direction={"column"} spacing={2}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"}>
                            <Typography fontWeight={300}>Hạn nộp hồ sơ</Typography>
                            <Typography fontWeight={700} color="#d30000">{post.han_nop}</Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"}>
                            <Typography fontWeight={300}>Ngày đăng</Typography>
                            <Typography fontWeight={700}>{format(new Date(post.createdAt),'dd/MM/yyyy')}</Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"}>
                            <Typography fontWeight={300}>Hình thức công việc</Typography>
                            <Typography fontWeight={700}>{post.hinh_thuc}</Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"}>
                            <Typography fontWeight={300}>Mức lương</Typography>
                            <Typography fontWeight={700}>{post.luong}</Typography>
                        </Stack>
                        <Button variant="contained">Nộp Hồ sơ ứng tuyển</Button>
                    </Stack>
                </Stack>
            </Stack>

            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                Tin tuyển dụng khác
            </Typography>

            <Stack spacing={2}>

                {datas?.map(item => <TuyenDungWidgetItem 
                    title={item.attributes.title}
                    hinh_thuc={item.attributes.hinh_thuc}
                    dia_diem={item.attributes.dia_diem}
                    luong={item.attributes.luong}
                    key={item.id}
                    slug={item.attributes.slug}
                />)}
                
            </Stack>

        </Stack>
    )
}
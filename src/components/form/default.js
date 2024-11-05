import { LoadingButton } from '@mui/lab';
import { Alert, Box, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { IconCalendarClock } from '@tabler/icons-react';

import theme from '@/theme/default';
import { useState } from 'react';
import { useServices } from '@/hooks/useServices';
import { useFormik } from 'formik';
import { formContactValidation } from './validation';
import axiosClient from '@/axiosConfig/axiosClient';

export default function FormContract() {

    const [loading,setLoading] = useState(false)

    const {services} = useServices()

    const [mes,setMes] = useState({
        show: false,
        status: 'success',
        message: ''
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            region: "miền bắc",
            dich_vu_tham_my: services?.[0]?.id || 1,
            time: "8h-10h"
        },
        enableReinitialize: true,
        validationSchema: formContactValidation,
        onSubmit: async(values) => {
            setLoading(true)
            try {
                await axiosClient.post('/submit-form',values)
                setMes({
                    show: true,
                    status: "success",
                    message: "Cám ơn Quý khách. Thông tin Quý khách đã được hệ thống gửi thành công đến nhân viên chăm sóc khách hàng. The Pyo sẽ liên hệ lại trong thời gian sớm nhất."
                })
            } catch (error) {
                console.log("🚀 ~ onSubmit:async ~ error:", error)
            }
            setLoading(false)
        }
    })

    return (
        <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
            <Stack direction={"row"} alignItems={"center"} spacing={2} pl={{xs: 0, lg: 1}}>
                <IconCalendarClock color={theme.palette.primary.main}/>
                <Typography variant='h2' component={"h2"} fontWeight={700} fontSize={20} color={"primary.main"}>
                    ĐẶT LỊCH HẸN TƯ VẤN
                </Typography>
            </Stack>
            {mes?.show && <Alert severity={mes.status}>{mes.message}</Alert>}
            <Grid container spacing={2}>
                <Grid xs={12} lg={6}>
                <TextField
                                    id="name"
                                    name="name"
                                    fullWidth
                                    placeholder='Họ tên'
                                    sx={{bgcolor: '#fff', borderRadius:2}}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                </Grid>
                <Grid xs={12} lg={6}>
                <TextField
                                    id="phone"
                                    name="phone"
                                    fullWidth
                                    placeholder='Số điện thoại'
                                    sx={{bgcolor: '#fff', borderRadius:2}}
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{p: 0}}>
                <Grid xs={12} lg={6}>
                    <FormControl fullWidth>
                    <Select
                                        labelId="region-label"
                                        id="region"
                                        name="region"
                                        value={formik.values.region}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value={"miền bắc"}>Miền Bắc</MenuItem>
                                        <MenuItem value={"miền trung"}>Miễn Trung</MenuItem>
                                        <MenuItem value={"miền nam"}>Miễn Nam</MenuItem>
                                    </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12} lg={6}>
                    <FormControl fullWidth>
                    <Select
                                        labelId="region-label"
                                        id="dich_vu_tham_my"
                                        name="dich_vu_tham_my"
                                        value={formik.values.dich_vu_tham_my}
                                        onChange={formik.handleChange}
                                    >
                                        {services?.map(item =>  <MenuItem value={item.id} key={item.id}>{item?.attributes?.title}</MenuItem>)}
                                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Typography variant='h3' component={"h3"} fontSize={17} fontWeight={700} color="primary.main" pl={1}>
                Lựa chọn khung giờ tư vấn
            </Typography>
            <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="time"
                        id="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                    >
                <Stack 
                    direction={{xs: "column", lg: "row"}} 
                    alignItems={{xs: "flex-start", lg: "center"}} 
                    spacing={1}
                >
                    <FormControlLabel 
                        value="8h-10h" 
                        control={<Radio />} 
                        label="8H ĐẾN 10H" 
                    />
                    <FormControlLabel value="10h-12h" control={<Radio />} label="10H ĐẾN 12H" />
                    <FormControlLabel value="14h-16h" control={<Radio />} label="14H ĐẾN 16H" />
                    <FormControlLabel value="19h-21h" control={<Radio />} label="19H ĐẾN 21H" />
                </Stack>
            </RadioGroup>

            <LoadingButton loading={loading} variant='contained'  color='primary' size='large' py={4} type='submit' onClick={formik.handleSubmit}>
                Đặt lịch hẹn
            </LoadingButton>
            <Typography variant='body2' textAlign={"center"} fontWeight={300} color="#555">
                (*) The Pyo cam kết bảo mật thông tin khách hàng. Chúng tôi chỉ sử dụng thông tin do khách hàng cung cấp với mục đích tư vấn dịch vụ Quý khách đăng ký
            </Typography>
        </Stack>
    )
}
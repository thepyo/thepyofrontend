import { Box, Button, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useFormik } from "formik";
import SearchIcon from '@mui/icons-material/Search';

const ranges = [
    { name: "Từ 5 - 10 triệu", value: '5-10' },
    { name: "Từ 10 - 15 triệu", value: '10-15' },
    { name: "Từ 15 - 20 triệu", value: '15-20' },
    { name: "Từ 20 triệu - 30 triệu", value: '20-30' },
    { name: "Trên 30 triệu", value: '30-100' }
]

const locations = [
    { name: "Hà Nội", value: 'hanoi' },
    { name: "TP. Hồ Chí Minh", value: 'hcm' },
]

function SelectBox({ formik, id, name, value, menuItem }) {
    return (
        <Select
            displayEmpty
            value={value}
            id={id}
            name={name}
            onChange={formik.handleChange}
            input={<OutlinedInput />}
            MenuProps={{
                bgcolor: '#fff'
            }}
            fullWidth
            size="small"
            sx={{
                bgcolor: '#fff'
            }}
        >
            {menuItem?.map((item, key) =>
                <MenuItem key={key} value={item.value}>
                    {item.name}
                </MenuItem>
            )}
        </Select>
    )
}

export default function FormFilter() {

    const formik = useFormik({
        initialValues: {
            keyword: "",
            range: "5-10",
            location: "hanoi"
        },
        onSubmit: async (values) => {
            console.log("🚀 ~ onSubmit: ~ values:", values)
        }
    })

    return (
        <Box component={"form"} onSubmit={formik.handleSubmit} width={"100%"} height={"100%"}>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3} width={"100%"} height={"100%"}>
                <Typography
                    fontSize={{ xs: 20, lg: 26 }}
                    fontWeight={700}
                    color="#fff"
                    textAlign={"center"}
                >
                    PHÁT TRIỂN BẢN THÂN - XÂY DỰNG SỰ NGHIỆP CÙNG THE PYO
                </Typography>
                <Grid container spacing={2} sx={{ width: { xs: '100%', lg: '80%' } }}>
                    <Grid xs={12} md={3}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            size="small"
                            hiddenLabel
                            placeholder="Tìm kiếm"
                            sx={{ bgcolor: '#fff', borderRadius: '8px', minWidth: '200px' }}
                        />
                    </Grid>
                    <Grid xs={12} md={3}>
                        <SelectBox
                            formik={formik}
                            id={"range"}
                            name={"range"}
                            value={formik.values.range}
                            menuItem={ranges}
                        />
                    </Grid>
                    <Grid xs={12} md={3}>
                        <SelectBox
                            formik={formik}
                            id={"range"}
                            name={"range"}
                            value={formik.values.location}
                            menuItem={locations}
                        />
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            startIcon={<SearchIcon />}
                            sx={{ py: 0.8 }}
                        >
                            Tìm kiếm
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}
import { BootstrapInput } from "@/components/ui/bootstrapInput";
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, InputAdornment, Menu, Stack, TextField } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import theme from "@/theme/default";
import { useFormik } from "formik";
import { searchFormValidation } from "@/components/form/validation";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchBox() {

    const router = useRouter()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const formik = useFormik({
        initialValues: { keyword: "" },
        validationSchema: searchFormValidation,
        onSubmit: (values) => {
            router.push(`/search?keyword=${values.keyword}`)
        }
    })

    return (
        <>
            <Button
                variant="contained"
                style={{
                    borderRadius: 25
                }}
                onClick={handleClick}
            >
                <IconSearch size={20} color={"#fff"} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Box component={"form"} onSubmit={formik.handleSubmit} px={3} py={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <TextField 
                            placeholder="Từ khoá tím kiếm"
                            id="keyword"
                            name="keyword"
                            label="search" 
                            variant="outlined" 
                            value={formik.values.keyword}
                            onChange={formik.handleChange}
                            size="small"
                        />
                        <Button variant="contained" type="submit" onClick={formik.handleSubmit} size="large">
                            <IconSearch size={20} color={"#fff"} />
                        </Button>
                    </Stack>
                </Box>
            </Menu>
        </>
    )

    return (
        <Box display={{ xs: 'none', lg: 'flex' }} component={"form"} onSubmit={formik.handleSubmit}>
            <BootstrapInput
                placeholder="TỪ KHÓA TÌM KIẾM"
                id="keyword"
                name="keyword"
                value={formik.values.keyword}
                onChange={formik.handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton type="submit" onClick={formik.handleSubmit}>
                            <IconSearch size={20} color={theme.palette.primary.main} />
                        </IconButton>
                    </InputAdornment>}
            />
        </Box>
    )
}
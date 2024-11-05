import * as yup from 'yup'
const phoneRegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/

const formContactValidation = yup.object({
    name: yup
        .string()
        .required('Bạn chưa nhập Họ tên'),
    phone: yup
        .string()
        .matches(phoneRegExp,'Vui lòng nhập số điện thoại theo định dạng 10 số vd: 0968686868')
        .required('Bạn chưa nhập số điện thoại'),
})

const searchFormValidation = yup.object({
    keyword: yup.string().required('Bạn chưa nhập từ khoá'),
})

export {
    formContactValidation,
    searchFormValidation
}
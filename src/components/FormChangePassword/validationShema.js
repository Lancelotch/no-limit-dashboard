import * as Yup from 'yup';

export default function validationSchema(){
    return Yup.object({
        newPassword: Yup.string().required(),
        confirmPassword: Yup.string().required()
    })
}
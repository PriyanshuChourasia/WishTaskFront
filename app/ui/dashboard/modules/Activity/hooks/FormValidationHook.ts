import * as yup from "yup";


export const FormValidationHook = yup.object().shape({
    name: yup.string().required(),
    topic: yup.string().required(),
    description: yup.string().required(),
});
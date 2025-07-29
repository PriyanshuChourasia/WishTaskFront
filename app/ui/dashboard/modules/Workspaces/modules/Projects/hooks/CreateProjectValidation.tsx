import * as yup from "yup";


export const CreateProjectValidationSchema = yup.object().shape({
    name: yup.string().required(),
    
});
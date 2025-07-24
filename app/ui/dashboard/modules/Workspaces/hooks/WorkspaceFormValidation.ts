import * as yup from "yup";


export const WorkspaceFormValidationSchema = yup.object().shape({
    name:yup.string().required(),
})
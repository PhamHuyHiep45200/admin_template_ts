// src/validations/validationSchema.ts
import * as Yup from 'yup';
import { errorMessages, regex_Custom } from '../utils/constant';

export const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .max(40, errorMessages.emailTooLong)
    .matches(regex_Custom.EMAIL, errorMessages.invalidEmail)
    .required(errorMessages.requiredEmail),
  password: Yup.string()
    .required(errorMessages.requiredPassword)
    .max(1, errorMessages.passwordMinLength),
});

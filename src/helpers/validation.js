import * as yup from 'yup'

export const validationSchema = yup.object({
    firstName: yup
        .string('Enter your First Name')
        .required('Is required')
        .min(2, "Name is too short"),
    lastName: yup
        .string('Enter your Last Name')
        .required('Is required')
        .min(2, "Name is too short"),
    address: yup
        .string('Add delivery address')
        .required('Is required'),
    email: yup
        .string('Enter your email')
        .email('Email is invalid'),
    phone: yup
        .number()
        .typeError("Use only number symbols")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
    age: yup
        .number()
        .typeError('Age must be a number')
        .positive()
})

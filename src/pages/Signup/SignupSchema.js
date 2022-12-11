import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6).required('Password is required'),
  displayName: yup
    .string()
    .max(12, 'Display Name cannot exceed 12 characters')
    .required('Display Name is required'),
  file: yup.mixed().test('fileSize', 'File cannot exceed 100kb', value => {
    // attachment is optional
    if (!value) return true;

    return value.size <= 100000;
  }),
});

export default SignupSchema;

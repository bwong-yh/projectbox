import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomImage from '../../components/CustomInputs/CustomImage';
import CustomInput from '../../components/CustomInputs/CustomInput';
import useSignup from '../../hooks/useSignup';
import formStyle from '../../styles/form';
import SignupSchema from './SignupSchema';

const Signup = () => {
  const theme = useTheme();
  const { signup, isPending, error } = useSignup();
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    console.log(values);

    // signup(values).then(res => {
    //   // reset form is user is return (= successfully signed up)
    //   if (res) {
    //     actions.resetForm();
    //     navigate('/');
    //   }
    // });
  };

  return (
    <Container>
      <Toolbar />

      <Box sx={formStyle}>
        <Typography variant='h3'>Signup!</Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
            displayName: '',
            file: null,
          }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <CustomInput label='Email' name='email' />
              <CustomInput label='Password' name='password' type='password' />
              <CustomInput label='Display Name' name='displayName' />

              {/* image for avatar */}
              <CustomImage setFieldValue={setFieldValue} name='file' />

              <Button
                variant='outlined'
                type='submit'
                disabled={isPending}
                sx={{
                  '&:hover': {
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                {isPending ? 'Signing up' : 'Sign up'}
              </Button>
              {error ? <FormHelperText error>{error}</FormHelperText> : null}
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Signup;

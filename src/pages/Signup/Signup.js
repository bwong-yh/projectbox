import {
  Box,
  Button,
  Container,
  FormHelperText,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Form, Formik } from 'formik';
import CustomInput from '../../components/CustomInputs/CustomInput';
import useSignup from '../../hooks/useSignup';
import formStyle from '../../styles/form';
import SignupSchema from './SignupSchema';

const Signup = () => {
  const theme = useTheme();
  const { signup, isPending, error } = useSignup();

  const onSubmit = (values, actions) => {
    signup(values);
  };

  return (
    <Container>
      <Toolbar />

      <Box sx={formStyle}>
        <Typography variant='h3'>Signup!</Typography>
        <Formik
          initialValues={{ email: '', password: '', displayName: '' }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <CustomInput label='Email' name='email' />
              <CustomInput label='Password' name='password' type='password' />
              <CustomInput label='Display Name' name='displayName' />

              <Button
                variant='outlined'
                type='submit'
                sx={{
                  '&:hover': {
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                {isPending ? 'Signing up' : 'Sign up'}
              </Button>
              {error ? <FormHelperText>{error}</FormHelperText> : null}
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Signup;

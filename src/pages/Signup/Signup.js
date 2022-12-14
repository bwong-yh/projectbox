import {
  Box,
  Container,
  FormHelperText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomImage from '../../components/CustomInputs/CustomImage';
import CustomInput from '../../components/CustomInputs/CustomInput';
import useSignup from '../../hooks/useSignup';
import formStyle from '../../styles/form/form';
import SignupSchema from './SignupSchema';
import CustomButton from '../../components/CustomButton/CustomButton';

const Signup = () => {
  const { signup, isPending, error } = useSignup();
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    signup(values).then(res => {
      // reset form is user is return (= successfully signed up)
      if (res) {
        actions.resetForm();
        navigate('/');
      }
    });
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
          {props => (
            <Form>
              <CustomInput label='Email' name='email' />
              <CustomInput label='Password' name='password' type='password' />
              <CustomInput label='Display Name' name='displayName' />

              {/* image for avatar */}
              <CustomImage name='file' />

              <CustomButton type='submit' disabled={isPending}>
                {isPending ? 'Signing up' : 'Sign up'}
              </CustomButton>
              {error && <FormHelperText error>{error}</FormHelperText>}
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Signup;

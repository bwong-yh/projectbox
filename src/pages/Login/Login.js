import {
  Box,
  Container,
  FormHelperText,
  Toolbar,
  Typography,
} from '@mui/material';
import formStyle from '../../styles/form/form';
import { Form, Formik } from 'formik';
import CustomInput from '../../components/CustomInputs/CustomInput';
import LoginSchema from './LoginSchema';
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';

const Login = () => {
  const { login, isPending, error } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    login(values).then(res => {
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
        <Typography variant='h3'>Login!</Typography>

        <Formik
          initialValues={{ email: 'billy@dev.com', password: 'test1234' }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <CustomInput label='Email' name='email' />
              <CustomInput label='Password' name='password' type='password' />

              <CustomButton type='submit' disabled={isPending}>
                {isPending ? 'Logging in' : 'Login'}
              </CustomButton>
              {error && <FormHelperText error>{error}</FormHelperText>}
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;

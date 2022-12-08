import { Box, Container, Toolbar, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import CustomForm from '../../components/CustomInput/CustomInput';
import SignupSchema from './SignupSchema';

const Signup = () => {
  const onSubmit = (values, actions) => {
    console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ actions', actions);
    console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ values', values);
  };

  return (
    <Container>
      <Toolbar />
      <Box>
        <Typography>Signup!</Typography>
        <Formik
          initialValues={{ email: 'billy@dev.com' }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <CustomForm label='Email' name='email' />

              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Signup;

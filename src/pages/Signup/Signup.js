import { Box, Container, Toolbar, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import CustomForm from '../../components/CustomInput/CustomInput';

const Signup = () => {
  return (
    <Container>
      <Toolbar />
      <Box>
        <Typography>Signup!</Typography>
        <Formik initialValues={{ email: 'billy@dev.com' }}>
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

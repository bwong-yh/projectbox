import { Box, Container, Toolbar, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import CustomForm from '../../components/CustomForm/CustomForm';
import CustomInput from '../../components/CustomForm/CustomInput';

import SignupSchema from './SignupSchema';

const Signup = () => {
  //   const onSubmit = (values, actions) => {
  //     console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ actions', actions);
  //     console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ values', values);
  //   };

  return (
    <Container>
      <Toolbar />

      <CustomForm schema={SignupSchema}>
        <CustomInput label='Email' name='email' />
      </CustomForm>
    </Container>
  );
};

export default Signup;

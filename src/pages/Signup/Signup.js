import {
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Form, Formik } from 'formik';
import CustomInput from '../../components/CustomInputs/CustomInput';
import formStyle from '../../styles/form';
import SignupSchema from './SignupSchema';

const Signup = () => {
  const theme = useTheme();

  const onSubmit = (values, actions) => {
    console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ actions', actions);
    console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ values', values);
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
              <CustomInput label='Password' name='password' />
              <CustomInput label='Display Name' name='displayName' />

              <Button
                variant='outlined'
                sx={{
                  '&:hover': {
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Signup;

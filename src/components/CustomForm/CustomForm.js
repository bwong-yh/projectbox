import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

const CustomForm = ({ children, schema }) => {
  const onSubmit = (values, actions) => {
    console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ actions', actions);
    console.log('🚀 ~ file: Signup.js:8 ~ onSubmit ~ values', values);
  };

  return (
    <Box sx={{ backgroundColor: 'pink' }}>
      <Typography>Signup!</Typography>
      <Formik
        initialValues={{ email: 'billy@dev.com' }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {props => (
          <Form>
            {children}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CustomForm;

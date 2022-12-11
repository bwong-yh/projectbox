import { Box, Container, Typography } from '@mui/material';
import { Formik } from 'formik';
import formStyle from '../../styles/form';

const Create = () => {
  return (
    <Container sx={formStyle}>
      <Box>
        <Typography variant='h3'>Login!</Typography>

        <Formik
          initialValues={{ email: 'billy@dev.com', password: 'test1234' }}
          //  validationSchema={LoginSchema}
          //  onSubmit={onSubmit}
        ></Formik>
      </Box>
    </Container>
  );
};

export default Create;

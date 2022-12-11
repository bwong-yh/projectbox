import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import { Form, Formik } from 'formik';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomSelect from '../../components/CustomInputs/CustomSelect';
import formStyle from '../../styles/form';
import categoryOptions from './CategoryOptions';

const Create = () => {
  const theme = useTheme();

  const onSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <Container sx={formStyle}>
      <Box>
        <Typography variant='h3'>New Project</Typography>

        <Formik
          initialValues={{
            name: '',
            details: '',
            dueDate: '',
            categories: [],
            assignUsers: [],
          }}
          //  validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <CustomInput label='Project Name' name='name' />
              <CustomInput label='Project Details' name='details' />
              <CustomInput
                label='Due Date'
                name='dueDate'
                type='date'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <CustomSelect
                label='category'
                name='categories'
                options={categoryOptions}
              />
              <CustomSelect
                label='assign to'
                name='assignUsers'
                options={[
                  { label: 'billy', value: 'billy' },
                  { label: 'awesomeKenny', value: 'awesomeKenny' },
                  { label: 'jenny w.', value: 'jenny w.' },
                ]}
              />

              <Button
                variant='outlined'
                type='submit'
                sx={{
                  '&:hover': {
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                Create
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Create;

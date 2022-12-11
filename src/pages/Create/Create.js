import {
  Box,
  Button,
  Container,
  FormHelperText,
  Typography,
  useTheme,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomSelect from '../../components/CustomInputs/CustomSelect';
import useAuthContext from '../../hooks/useAuthContext';
import useFirestore from '../../hooks/useFirestore';
import formStyle from '../../styles/form';
import categoryOptions from './CategoryOptions';
import CreateSchema from './CreateSchema';

const Create = () => {
  const theme = useTheme();
  // useFirestore is a hook to manage projects to firebase
  const { addProject, isPending, error } = useFirestore('projects');
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    addProject({
      ...values,
      createdBy: {
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
      },
    }).then(res => {
      // reset form and redirect to dashboard after project is saved
      if (res) {
        actions.resetForm();
        navigate('/');
      }
    });
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
          validationSchema={CreateSchema}
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
                disabled={isPending}
                sx={{
                  '&:hover': {
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                {isPending ? 'Creating' : 'Create'}
              </Button>
              {error ? <FormHelperText error>{error}</FormHelperText> : null}
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Create;

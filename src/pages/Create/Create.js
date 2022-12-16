import { Box, Container, FormHelperText, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomSelect from '../../components/CustomInputs/CustomSelect';
import useAuthContext from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';
import useFirestore from '../../hooks/useFirestore';
import formStyle from '../../styles/form/form';
import categoryOptions from './CategoryOptions';
import CreateSchema from './CreateSchema';
import { timestamp } from '../../firebase/config';
import CustomButton from '../../components/CustomButton/CustomButton';

const Create = () => {
  // useFirestore is a hook to manage projects to firebase
  const { addProject, isPending, error } = useFirestore('projects');
  const { user } = useAuthContext();
  const { documents: users } = useCollection('users');
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    // convert js date object into firebase timestamp
    const dueDate = timestamp.fromDate(new Date(values.dueDate));

    addProject({
      ...values,
      dueDate,
      createdBy: {
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
      },
      comments: [],
    }).then(res => {
      // reset form and redirect to dashboard after project is saved
      if (res) {
        actions.resetForm();
        navigate('/');
      }
    });
  };

  return (
    <Container>
      <Box sx={formStyle}>
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
              <CustomInput
                label='Project Details'
                name='details'
                multiline
                minRows={2}
              />
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
                options={users.map(user => ({
                  label: user.displayName,
                  value: user,
                }))}
              />

              <CustomButton type='submit' disabled={isPending}>
                {isPending ? 'Creating' : 'Create'}
              </CustomButton>
              {error ? <FormHelperText error>{error}</FormHelperText> : null}
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Create;

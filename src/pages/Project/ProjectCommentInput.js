import { Box, FormHelperText } from '@mui/material';
import { Form, Formik } from 'formik';
import CustomInput from '../../components/CustomInputs/CustomInput';
import useAuthContext from '../../hooks/useAuthContext';
import useFirestore from '../../hooks/useFirestore';
import CommentSchema from './ProjectCommentSchema';
import CustomButton from '../../components/CustomButton/CustomButton';

const ProjectCommentInput = ({ project }) => {
  const { user } = useAuthContext();
  const { updateProject, isPending, error } = useFirestore('projects');

  const onSubmit = (values, actions) => {
    updateProject(project.id, {
      content: values.comment.trim().split()[0],
      user: {
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
    });

    actions.resetForm();
  };

  return (
    <Box>
      <Formik
        initialValues={{
          comment: '',
        }}
        validationSchema={CommentSchema}
        onSubmit={onSubmit}
      >
        {props => (
          <Form>
            <CustomInput
              label='Post a comment'
              name='comment'
              multiline
              minRows={4}
            />

            <CustomButton
              type='submit'
              disabled={isPending}
              sx={{ marginTop: '1.5rem' }}
            >
              {isPending ? 'Posting' : 'Post'}
            </CustomButton>
            {error && <FormHelperText error>{error}</FormHelperText>}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProjectCommentInput;

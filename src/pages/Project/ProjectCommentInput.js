import { Box, Button, FormHelperText, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import CustomInput from '../../components/CustomInputs/CustomInput';
import useAuthContext from '../../hooks/useAuthContext';
import useFirestore from '../../hooks/useFirestore';
import CommentSchema from './ProjectCommentSchema';

const ProjectCommentInput = ({ project }) => {
  const theme = useTheme();
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
              label='post a comment'
              name='comment'
              multiline
              minRows={4}
            />

            <Button
              variant='outlined'
              type='submit'
              disabled={isPending}
              sx={{
                marginTop: '1rem',
                '&:hover': {
                  color:
                    theme.palette.mode === 'light'
                      ? theme.palette.primary.dark
                      : '#fff',
                },
              }}
            >
              {isPending ? 'Posting' : 'Post'}
            </Button>
            {error && <FormHelperText error>{error}</FormHelperText>}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProjectCommentInput;

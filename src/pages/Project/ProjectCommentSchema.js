import * as yup from 'yup';

const CommentSchema = yup.object().shape({
  comment: yup.string().required('Enter your comments'),
});

export default CommentSchema;

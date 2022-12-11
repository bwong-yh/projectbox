import * as yup from 'yup';

const CreateSchema = yup.object().shape({
  name: yup.string().required('Project Name is required'),
  details: yup.string().required('Details is required'),
  dueDate: yup.string().required('Due Date is required'),
  categories: yup.array().min(1, 'Select at least 1 category'),
  assignUsers: yup.array().min(1, 'Select at least 1 user'),
});

export default CreateSchema;

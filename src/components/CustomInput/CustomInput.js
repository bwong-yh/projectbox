import { TextField } from '@mui/material';
import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return <TextField label={label} {...props} {...field} />;
};

export default CustomInput;

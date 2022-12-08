import { TextField } from '@mui/material';
import { useField } from 'formik';

const CustomInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      label={label}
      {...props}
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? meta.error : null}
    />
  );
};

export default CustomInput;

import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { useField } from 'formik';

const CustomSelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props, { multiple: true });

  const inputLabel = label[0].toUpperCase() + label.slice(1);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <FormControl fullWidth error={meta.touched && meta.error}>
      <InputLabel id={inputLabel}>{inputLabel}</InputLabel>
      <Select
        multiple
        label={label}
        labelId={inputLabel}
        {...props}
        {...field}
        value={field.value}
        input={<OutlinedInput label={inputLabel} />}
        renderValue={selected => selected.join(', ')}
        MenuProps={MenuProps}
        error={meta.touched && Boolean(meta.error)}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={field.value.indexOf(option.value) > -1} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default CustomSelect;

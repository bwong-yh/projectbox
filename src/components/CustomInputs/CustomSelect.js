import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { useField } from 'formik';
import { useState } from 'react';
import categoryOptions from '../../pages/Create/CategoryOptions';

const CustomSelect = ({ label, ...props }) => {
  const [field, meta, helper] = useField(props, { multiple: true });

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
    <FormControl fullWidth>
      <InputLabel id='categoryLabel'>{inputLabel}</InputLabel>
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
      >
        {categoryOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={field.value.indexOf(option.value) > -1} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

import { Box, Button, FormControl, FormHelperText } from '@mui/material';
import { useField } from 'formik';
import { useEffect, useState } from 'react';

const CustomImage = ({ ...props }) => {
  const [field, meta, helper] = useField(props.name);
  const [preview, setPreview] = useState('');
  const { value } = meta;
  const { setValue } = helper;

  console.log(field);

  useEffect(() => {
    value ? setPreview(URL.createObjectURL(value)) : setPreview('');
  }, [value]);

  return (
    <>
      <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
        <Button
          variant='contained'
          size='small'
          component='label'
          sx={{ '&:hover': { color: 'white' } }}
        >
          Upload File
          <input
            hidden
            type='file'
            accept='image/*'
            {...props}
            onChange={e => setValue(e.target.files[0])}
          />
        </Button>
        <FormHelperText>
          {meta.touched && meta.error ? meta.error : 'Upload a thumbnail'}
        </FormHelperText>
        {/* preview box */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '.5rem',
            '& img': { margin: 'auto', width: '50%' },
          }}
        >
          {preview ? <img src={preview} alt='thumbnail' /> : preview}
        </Box>
      </FormControl>
    </>
  );
};

export default CustomImage;

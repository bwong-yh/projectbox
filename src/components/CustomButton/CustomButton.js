import { Button } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const CustomButton = ({ children, variant, ...props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Button
      {...props}
      variant={variant || 'outlined'}
      sx={{
        ...props.sx,
        '&:hover': {
          color:
            theme.palette.mode === 'light'
              ? theme.palette.primary.dark
              : '#fff',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

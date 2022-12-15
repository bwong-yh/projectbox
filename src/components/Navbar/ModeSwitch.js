import { IconButton } from '@mui/material';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ModeSwitch = () => {
  const { theme, changeMode } = useContext(ThemeContext);
  const mode = theme.palette.mode;

  return (
    <IconButton sx={{ mr: '.5rem' }} onClick={changeMode}>
      {mode === 'dark' ? (
        <LightModeIcon color='primary' />
      ) : (
        <ModeNightIcon color='primary' />
      )}
    </IconButton>
  );
};

export default ModeSwitch;

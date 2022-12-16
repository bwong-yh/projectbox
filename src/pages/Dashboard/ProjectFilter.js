import { Button, ButtonGroup, Typography } from '@mui/material';
import { useContext } from 'react';
import categoryOptions from '../Create/CategoryOptions';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectFilter = ({ value, changeFilter }) => {
  const { theme } = useContext(ThemeContext);
  const activeColor =
    theme.palette.mode === 'light' ? theme.palette.primary.dark : '#fff';

  return (
    <ButtonGroup
      variant='text'
      size='small'
      disableRipple
      disableElevation
      sx={{
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '2.5rem',
        '& button:hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Typography mr={1}>Filter:</Typography>
      <Button onClick={() => changeFilter('all')}>
        <Typography
          color={value === 'all' && activeColor}
          fontWeight={value === 'all' ? 700 : 400}
        >
          all
        </Typography>
      </Button>
      <Button onClick={() => changeFilter('mine')}>
        <Typography
          color={value === 'mine' && activeColor}
          fontWeight={value === 'mine' ? 700 : 400}
        >
          mine
        </Typography>
      </Button>
      {categoryOptions.map(category => (
        <Button
          key={category.value}
          onClick={() => changeFilter(category.value)}
        >
          <Typography
            color={value === category.value && activeColor}
            fontWeight={value === category.value ? 700 : 400}
          >
            {category.value}
          </Typography>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ProjectFilter;

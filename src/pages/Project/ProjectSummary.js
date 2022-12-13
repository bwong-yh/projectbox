import {
  AvatarGroup,
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import useAuthContext from '../../hooks/useAuthContext';

const ProjectSummary = ({ project }) => {
  const { user } = useAuthContext();

  return (
    <>
      <Typography variant='h3' marginBottom={2}>
        {project.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={6} sx={{ width: '100%' }}>
          <Box
            sx={{
              borderRadius: '4px',
              boxShadow: '2px 3px 14px -3px rgba(0, 0, 0, 0.25)',
              padding: '1rem',
            }}
          >
            {project.categories.map(cateogry => (
              <Chip
                key={cateogry}
                variant='outlined'
                label={cateogry}
                sx={{
                  margin: '0 .25rem .5rem 0',
                }}
              />
            ))}
            <Typography variant='bode2' display='block'>
              Project due by {project.dueDate}
            </Typography>
            <Typography marginTop={2.5} marginBottom={2.5} fontSize='1.5rem'>
              {project.details}
            </Typography>
            <Typography mb={0.5} fontWeight={700}>
              Project is assigned to:
            </Typography>
            <AvatarGroup sx={{ justifyContent: 'start' }}>
              {project.assignUsers.map(user => (
                <CustomAvatar key={user.id} user={user} />
              ))}
            </AvatarGroup>
            <Box textAlign='right'>
              {project.createdBy.uid === user.uid ? (
                <>
                  <Divider variant='middle' sx={{ margin: '1rem' }} />
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </>
              ) : null}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectSummary;

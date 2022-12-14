import {
  AvatarGroup,
  Box,
  Chip,
  Divider,
  IconButton,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import useAuthContext from '../../hooks/useAuthContext';
import useFirestore from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

const ProjectInfoSection = ({ project, ...props }) => {
  const { user } = useAuthContext();
  const { deleteProject, isPending } = useFirestore('projects');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDelete = projectId => {
    deleteProject(projectId);
    navigate('/');
  };

  return (
    <Grid item {...props}>
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
              borderColor: theme.palette.mode === 'light' ? 'inherit' : '#fff',
              margin: '0 .25rem .5rem 0',
            }}
          />
        ))}
        <Typography variant='bode2' display='block'>
          Project due by {project.dueDate.toDate().toDateString()}
        </Typography>
        <Typography
          marginTop={2.5}
          marginBottom={2.5}
          fontSize='1.5rem'
          style={{ whiteSpace: 'pre-line' }}
        >
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
              <IconButton
                onClick={() => handleDelete(project.id)}
                disabled={isPending}
              >
                <DeleteIcon />
              </IconButton>
            </>
          ) : null}
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectInfoSection;

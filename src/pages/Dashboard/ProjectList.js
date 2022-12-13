import {
  AvatarGroup,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';

const ProjectList = ({ projects }) => {
  const navigate = useNavigate();

  console.log(projects);

  return (
    <Grid container spacing={3}>
      {!projects.length ? (
        <Typography variant='h4' sx={{ margin: '1rem 1.75rem' }}>
          No projects found
        </Typography>
      ) : (
        projects.map(project => (
          <Grid
            item
            key={project.id}
            lg={4}
            sm={6}
            xs={12}
            sx={{ width: '100%' }}
          >
            <CardActionArea
              onClick={() => navigate(`/project/${project.id}`)}
              sx={{
                borderRadius: '4px',
                boxShadow: '2px 3px 14px -3px rgba(0, 0, 0, 0.25)',
              }}
            >
              <CardContent>
                <Typography variant='h6' fontWeight={700}>
                  {project.name}
                </Typography>
                <Typography variant='bode2'>
                  Due by: {project.dueDate}
                </Typography>

                <Divider variant='middle' sx={{ margin: '1rem' }} />

                <AvatarGroup>
                  {project.assignUsers.map(user => (
                    <CustomAvatar key={user.id} user={user} />
                  ))}
                </AvatarGroup>
              </CardContent>
            </CardActionArea>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ProjectList;

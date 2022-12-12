import {
  AvatarGroup,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';

const ProjectList = ({ projects }) => {
  return (
    <Grid container marginTop={1} spacing={3}>
      {!projects.length ? (
        <Typography variant='h4' marginLeft='.2rem'>
          No projects
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

                <Divider variant='middle' sx={{ margin: '.75rem 0' }} />

                <AvatarGroup>
                  {project.assignUsers.map(user => (
                    <CustomAvatar
                      key={user.id}
                      user={user}
                      sx={{ '& p': { fontSize: '1.25rem' } }}
                    />
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

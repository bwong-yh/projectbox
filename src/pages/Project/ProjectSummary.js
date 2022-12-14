import { Grid, Typography } from '@mui/material';
import ProjectCommentInput from './ProjectCommentInput';
import ProjectInfo from './ProjectInfo';

const ProjectSummary = ({ project }) => {
  return (
    <>
      <Typography variant='h3' marginBottom={2}>
        {project.name}
      </Typography>
      <Grid container spacing={4}>
        <ProjectInfo project={project} md={6} sx={{ width: '100%' }} />
        <ProjectCommentInput project={project} md={6} sx={{ width: '100%' }} />
      </Grid>
    </>
  );
};

export default ProjectSummary;

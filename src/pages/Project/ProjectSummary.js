import { Grid, Typography } from '@mui/material';
import ProjectCommentSection from './ProjectCommentSection';
import ProjectInfo from './ProjectInfoSection';

const ProjectSummary = ({ project }) => {
  return (
    <>
      <Typography variant='h3' marginBottom={2}>
        {project.name}
      </Typography>
      <Grid container spacing={4}>
        <ProjectInfo project={project} md={6} sx={{ width: '100%' }} />
        <ProjectCommentSection
          project={project}
          md={6}
          sx={{ width: '100%' }}
        />
      </Grid>
    </>
  );
};

export default ProjectSummary;

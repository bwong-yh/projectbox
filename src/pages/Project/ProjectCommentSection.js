import { Grid } from '@mui/material';
import ProjectCommentInput from './ProjectCommentInput';
import ProjectComments from './ProjectComments';

const ProjectCommentSection = ({ project, ...props }) => {
  return (
    <Grid item {...props}>
      <ProjectCommentInput project={project} />
      <ProjectComments comments={project.comments} />
    </Grid>
  );
};

export default ProjectCommentSection;

import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';
import useDocument from '../../hooks/useDocument';

const Project = () => {
  const { id } = useParams();
  const { document, error } = useDocument('projects', id);

  // need to do another call onsnapshot because we are listening to the changes in comments section

  return (
    <Container sx={{ marginTop: '.5rem' }}>
      {error && (
        <Typography variant='h4' sx={{ margin: '1rem 0' }}>
          {error}
        </Typography>
      )}
      {document && <ProjectSummary project={document} />}
    </Container>
  );
};

export default Project;

import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';
import useDocument from '../../hooks/useDocument';

const Project = () => {
  const { id } = useParams();
  const { document, error } = useDocument('projects', id);

  return (
    <Container sx={{ margin: '.5rem 0 1.5rem' }}>
      {error && (
        <Typography variant='h3' sx={{ margin: '1rem 0' }}>
          {error}
        </Typography>
      )}
      {document && <ProjectSummary project={document} />}
    </Container>
  );
};

export default Project;

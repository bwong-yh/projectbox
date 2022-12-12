import { Container, Typography } from '@mui/material';
import useCollection from '../../hooks/useCollection';
import ProjectList from './ProjectList';

const Dashboard = () => {
  const { documents: projects } = useCollection('projects');

  return (
    <Container sx={{ marginTop: '.5rem' }}>
      <Typography variant='h3'>Dashboard</Typography>

      <ProjectList projects={projects} />
    </Container>
  );
};

export default Dashboard;

import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useCollection from '../../hooks/useCollection';
import ProjectFilter from './ProjectFilter';
import ProjectList from './ProjectList';
import useAuthContext from '../../hooks/useAuthContext';

const Dashboard = () => {
  const { user } = useAuthContext();
  const { documents: projects } = useCollection('projects', ['dueDate', 'asc']);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  useEffect(() => {
    if (filter === 'all') return setFilteredProjects(projects);

    if (filter === 'mine') {
      const myProjects = projects.filter(
        project => project.createdBy.uid === user.uid
      );

      setFilteredProjects(myProjects);
      return;
    }

    const filteredProjects = projects.filter(project =>
      project.categories.includes(filter)
    );

    setFilteredProjects(filteredProjects);
  }, [user, filter, projects]);

  return (
    <Container sx={{ margin: '.5rem auto 2rem' }}>
      <Typography variant='h3' sx={{ margin: '1.5rem auto' }}>
        Dashboard
      </Typography>

      <ProjectFilter value={filter} changeFilter={changeFilter} />

      {!projects.length ? (
        <Typography variant='h4'>No projects</Typography>
      ) : (
        <ProjectList projects={filteredProjects} />
      )}
    </Container>
  );
};

export default Dashboard;

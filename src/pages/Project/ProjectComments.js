import { Box, Typography } from '@mui/material';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';

const ProjectComments = ({ comments }) => {
  return (
    <Box marginTop='2rem'>
      <Typography variant='h6' marginBottom='.75rem'>
        Comments
      </Typography>

      {!comments.length ? (
        <Typography>No comments</Typography>
      ) : (
        comments.map(comment => {
          return (
            <Box
              key={comment.id}
              border={1}
              borderRadius='4px'
              padding='.75rem'
              sx={{
                '&:not(:last-of-type)': { marginBottom: '1rem' },
              }}
            >
              <Box
                display='flex'
                justifyContent='space-between'
                marginBottom='1.5rem'
              >
                <Box display='flex' alignItems='center'>
                  <CustomAvatar user={comment.user} />
                  <Typography marginLeft='.5rem' fontWeight={700}>
                    {comment.user.displayName}
                  </Typography>
                </Box>
                <Typography variant='body2' fontSize='1rem'>
                  {comment.createdAt.toDate().toDateString()}
                </Typography>
              </Box>
              <Typography style={{ whiteSpace: 'pre-line' }}>
                {comment.content}
              </Typography>
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default ProjectComments;

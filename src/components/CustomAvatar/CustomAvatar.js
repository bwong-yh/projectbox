import { Avatar, Typography } from '@mui/material';

const CustomAvatar = ({ user, ...props }) => {
  return (
    <Avatar src={user.photoURL} alt={user.displayName} {...props}>
      <Typography fontSize='1.25rem'>
        {user.displayName[0].toUpperCase()}
      </Typography>
    </Avatar>
  );
};

export default CustomAvatar;

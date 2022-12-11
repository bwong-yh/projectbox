import { Avatar } from '@mui/material';

const CustomAvatar = ({ user, ...props }) => {
  return (
    <Avatar src={user.photoURL} alt={user.displayName} {...props}>
      {user.displayName[0].toUpperCase()}
    </Avatar>
  );
};

export default CustomAvatar;

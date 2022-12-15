import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import useMsgStyles from './DefaultStyles';

const ChatMsg = ({ avatar, messages, side }) => {
  const styles = useMsgStyles();

  const attachClass = (index) => {
    const style = {};
    if (index === 0) {
      Object.assign(style, { ...styles[`${side}First`] });
    }
    if (index === messages.length - 1) {
      Object.assign(style, { ...styles[`${side}Last`] });
    }
    return style;
  };

  return (
    <Grid
      container
      sx={{
        justifyContent: side === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      {side === 'left' && (
        <Grid item>
          <Avatar src={avatar} sx={styles.avatar} />
        </Grid>
      )}
      <Grid item xs={8}>
        {messages.map((msg, index) => {
          return (
            <Box key={msg.id || index} sx={styles[`${side}Row`]}>
              <Typography
                align={'left'}
                sx={{
                  ...styles.msg,
                  ...styles[side],
                  ...attachClass(index),
                }}
              >
                {msg}
              </Typography>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

ChatMsg.propTypes = {
  avatar: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  side: PropTypes.oneOf(['left', 'right']),
  GridContainerProps: PropTypes.shape({}),
  GridItemProps: PropTypes.shape({}),
  AvatarProps: PropTypes.shape({}),
  getTypographyProps: PropTypes.func,
};
ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
  GridContainerProps: {},
  GridItemProps: {},
  AvatarProps: {},
  getTypographyProps: () => ({}),
};

export default ChatMsg;

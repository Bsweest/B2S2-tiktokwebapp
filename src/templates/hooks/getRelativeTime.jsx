import moment from 'moment';

const getRelativeTime = (timestamp) => {
  return moment(timestamp).fromNow();
};

export default getRelativeTime;

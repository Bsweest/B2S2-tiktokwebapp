import { observable } from '@legendapp/state';
import { persistObservable } from '@legendapp/state/persist';

const notification = observable({
  num: 0,
  arr: [],
});

const pushNoti = (obj) => {
  notification.num.set((prev) => ++prev);

  if (notification.arr.length > 4) notification.arr.pop();
  notification.arr.unshift(obj);
};

const resetNoti = () => {
  notification.num.set(0);
};

// persistObservable(notification, {
//   local: 'notiShort',
// });

export { pushNoti, resetNoti };

export default notification;

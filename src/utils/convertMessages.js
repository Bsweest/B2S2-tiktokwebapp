import { v4 } from 'uuid';

import { clientID } from '../templates/global/ClientData';

const convertChatMsg = (data) => {
  const client = clientID.peek();

  let sid = data[0].sender;
  let index = 0;
  const rs = [
    {
      uuid: v4(),
      side: client === sid ? 'right' : 'left',
      id: [],
      msg: [],
      createdAt: [],
    },
  ];

  for (let i = 0; i < data.length; ++i) {
    if (sid !== data[i].sender) {
      sid = data[i].sender;
      rs.push({
        uuid: v4(),
        side: client === sid ? 'right' : 'left',
        id: [],
        msg: [],
        createdAt: [],
      });
      ++index;
    }

    rs[index].id.push(data[i].id);
    rs[index].msg.push(data[i].content);
    rs[index].createdAt.push(data[i].created_at);
  }

  return rs;
};

export default convertChatMsg;

// const appendChat = (data, msg) => {
//   const side = 'right';

//   const id = v4();
//   const content = msg;
//   const created_at = new Date().toString();

//   if (side === data[0].side) {
//     data[0].id.unshift(id);
//     data[0].msg.unshift(content);
//     data[0].createdAt.unshift(created_at);
//   } else {
//     data.unshift({
//       uuid: v4(),
//       side: side,
//       id: [id],
//       msg: [content],
//       createdAt: [created_at],
//     });
//   }
//   return data;
// };

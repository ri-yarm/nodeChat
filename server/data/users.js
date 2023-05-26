let users = [];

const toStringAndLower = (str) => str.trim().toLowerCase()

export const addUsers = (user) => {
  const userName = toStringAndLower(user.name);
  const userRoom = toStringAndLower(user.room);

  const isExist = users.find(
    (user) => toStringAndLower(user.name) === userName && toStringAndLower(user.room) === userRoom
  );

  !isExist && users.push(user)

  const currentUser = isExist || user

  return { isExist: !!isExist, user: currentUser}
};

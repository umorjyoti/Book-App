export const Logincheck = (usersList, username, password) => {
  if (usersList == '' || username == '' || password == '') {
    return false;
  }
  let user = usersList.find(user => user.name == username);
  if (user == undefined) {
    return false;
  }
  if (user.pass == password) {
    return true;
  }
  return false;
};

export const SignUpcheck = (usersList, username, password) => {
  if (username == '' || password == '') {
    return false;
  }
  let user = usersList.find(user => user.name == username);
  if (user) {
    return false;
  }
  return true;
};

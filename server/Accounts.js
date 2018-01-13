var postSignUp = function(userId,info){
  console.log(userId);
  console.log(info);
  Roles.addUsersToRoles(userId,'normal-user');
};
AccountsTemplates.configure({
    postSignUpHook: postSignUp
});
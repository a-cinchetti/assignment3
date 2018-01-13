Meteor.methods({
  toggleAdmin(id){
    if(Roles.userIsInRole(id, 'admin')){
      Roles.addUsersToRoles(id,'normal-user');
      Roles.removeUsersFromRoles(id, 'admin');
    } else{
      Roles.addUsersToRoles(id, 'admin');
      Roles.removeUsersFromRoles(id,'normal-user');
    }
  }
});
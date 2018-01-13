if (Meteor.isServer)
{
  Meteor.startup(function () {
    console.log(Meteor.users.find({roles: 'admin'}).fetch().length);
    if (Meteor.users.find({roles: 'admin'}).fetch().length === 0) {
      var users = [
        {name: "Admin default", password:"apple1", username: "admin1", email: "admin1@admin.com", roles: ['admin']},
        {name: "Admin default", password:"apple2", username: "admin2", email: "admin2@admin.com", roles: ['admin']},
        {name: "Admin default", password:"apple3", username: "admin3", email: "admin3@admin.com", roles: ['admin']}
      ];
      for (user of users) {
        var id;
        id = Accounts.createUser({
          username: user.username,
          email: user.email,
          password: user.password,
          profile: {firstName: user.name}
        });
        Roles.addUsersToRoles(id, user.roles);


      }
    }
  });
}
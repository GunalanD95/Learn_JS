/*
define a function that can answer the role of a user.
A User can be on following roles:
admin - with all access
subadmin - with access to create/edit records
user - with access to create/delete records
guest - can see the records
other - trial user
*/

function getUserRole(name,role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`
      break;
    case "subadmin":
      return `${name} is subadmin with access to create/edit records`
      break;
    case "user":
      return `${name} is user with access to create/delete record`
      break;
    case "guest":
      return `${name} is guest with all limited access`
      break;
    default:
      return `${name} is trial user have no access`
      break;
  }
}
console.log(getUserRole("GUNA","admin"));
console.log(getUserRole("MESSI","user"));
console.log(getUserRole("irfan","subadmin"));
console.log(getUserRole("arun","guest"));
console.log(getUserRole("guhan","dec"));

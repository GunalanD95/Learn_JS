// CREATE A APPLICATION WITH THE FOLLOWING ROLES:
// ADMIN - gets full access
// SUBADMIN - gets access to create/delete records
// TESTPREP - gets access to create/delete records
// user - gets acess to consume content


var user =  "admin"

// SWITCH CASE ACCESS

// switch (key) {
//   case value:
//
//     break;
//   default:
//
// }

switch (user) {
  case "admin":
    console.log("you get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete records");
    break;
  case "testuser":
    console.log("gets access to create/delete records-test");
    break;
  case "user":
    console.log("gets acess to consume content");
    break;
  default:
    console.log("NONE MATCHES");
    break;
}

/*import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';


Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns first and last names to the newly created user object
   user.profile.firstName = options.firstName;
   user.profile.lastName = options.lastName;
   user.profile.phone = options.phone;
   user.profile.id = options.id;
   user.profile.isFarmer = options.isFarmer;
   // Returns the user object
   return user;
});*/
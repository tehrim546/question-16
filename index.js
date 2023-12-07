"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
//shrinking guest list: you have space only for two;
let guestList = [
    "Faheem",
    "Meerab",
    "Zahra",
    "Sakina",
    "Anabia",
];
//message about inviting guest list
console.log(`I can invite only two people for dinner.`);
//remove the guest from the list until only two name remain 
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry,${removeGuest}, I can't invite you to dinner.`);
}
//part 3 print a message to each of two people still on your ist,letting them know they're still invited.
for (let guest of guestList) {
    console.log(`Hello,${guest}, you are still invited to dinner!`);
}
//remove the lst two names from the list so you have an empty list
guestList.pop();
guestList.pop();
//print empty string
console.log(`guest list after dinner`, guestList);

"use strict";
// Example-1
Object.defineProperty(exports, "__esModule", { value: true });
const unionEG = {
    // any one type has all property should be written *atleast* either manager or Employee *atmost* both type any property can be
    name: "Tapas",
    id: 201,
    department: 'IT'
};
const alice = {
    name: "Alice",
    id: 101,
    department: "IT",
    teamSize: 5
};
const rohit = {
    name: "Rohit",
    rollNo: 25,
    clubName: "Robotics",
    position: "President"
};
const UserDetails = {
    name: 'Tapas',
    mob: 9142014080,
    email: "tapaskundu3762@gmail.com",
    address: "Haldipokhar, gangadih, GND29",
    state: "jharkhand",
    city: "jsr",
    pinCode: 831002
};
const createUserProfile = (input) => {
    return input;
};
console.log(createUserProfile(UserDetails));
//# sourceMappingURL=Intersection.js.map
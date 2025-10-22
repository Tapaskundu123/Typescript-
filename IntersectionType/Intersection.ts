// Example-1

type Employee = {
    name: string;
    id: number;
};

type Manager = {
    department: string;
    teamSize: number;
};

// Intersection type
type ManagerEmployee = Employee & Manager;
//Union Type
type UnioneEmp= Employee | Manager;

const unionEG: UnioneEmp= {
    // any one type has all property should be written *atleast* either manager or Employee *atmost* both type any property can be
    name: "Tapas",
    id: 201,
    department: 'IT'
}
const alice: ManagerEmployee = {
    name: "Alice",
    id: 101,
    department: "IT",
    teamSize: 5
};

// Example 2

type Student = {
    name: string;
    rollNo: number;
};

type ClubMember = {
    clubName: string;
    position: string;
};

type StudentClubMember = Student & ClubMember;

const rohit: StudentClubMember = {
    name: "Rohit",
    rollNo: 25,
    clubName: "Robotics",
    position: "President"
};


// 3rd eg

type userPersonal={
    name:string;
    mob:number;
    email:string
}
type myLoc= {
    address:string;
    state:string;
    city:string;
    pinCode:number
}
type userInfo= userPersonal & myLoc;

const UserDetails:userInfo= {
    name:'Tapas',
    mob:9142014080,
    email:"tapaskundu3762@gmail.com",
    address:"Haldipokhar, gangadih, GND29",
    state:"jharkhand",
    city:"jsr",
    pinCode:831002
}
const createUserProfile = (input: userInfo) :userInfo =>{

    return input;
}

console.log(createUserProfile(UserDetails))

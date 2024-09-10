let User = {
    name : "ahmed",
    email : "ahmed@g.com",
    id : "123",
    available : false,
     adresses : {
        city : {
            city1 : "medinah",
            city2 : "qassim"
        } ,
        countrey : "ksa" ,
        phone : "0555555" 
        
    } ,
    skills : ["programming","teaching","commiunication"],
    isAvailable: function(){
       return this.available
    }
}

console.log(User)
console.log(User.name)
User.id ="11111"
console.log(User.id)
delete User.email
console.log(User)
User.available = true;
console.log(User.isAvailable())
console.log(User.adresses.city.city1)
console.log(User.skills[2])
console.log(User.skills.join(","))

// Lab2

characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

// 1
  let  findblueEyes = characters.find(a => a.eye_color == "blue")
  console.log(findblueEyes.name)
//   2
  console.log(characters.filter(a => a.mass > 50)[0].gender)
//   3
  console.log(characters.filter(a => a.height < 200))
//   4
  console.log(characters.filter(a => a.gender == "male"))
//   5
  let names = characters.map(a => a.name)
  console.log(names)
//   6
  let heights = characters.map(a => a.height)
  console.log(heights)
//   7
  console.log(characters.sort( (a , b) => a.mass - b.mass))
//   8
  console.log(characters.sort( (a , b) => b.mass - a.mass))
//   9
  let massover40 = characters.every(a => a.mass > 40)
  console.log(massover40)
// 10
  let heightshort200 = characters.every(a => a.height < 200)
  console.log(heightshort200)
// 11
  let isThereBlueEyes = characters.some(a => a.eye_color == "blue")
  console.log(isThereBlueEyes)
//  12
  let heighttaller210 = characters.some(a => a.height > 210)
  console.log(heighttaller210)



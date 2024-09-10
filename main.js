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




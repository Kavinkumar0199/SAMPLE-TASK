 // task 1 => For the given JSON iterate overv all for loops (for,for in, for of)
let persDetails= [
    {
        "name":"ARUN",
        "age":"31"
    },
    {
        "name":"Kavin",
        "age":"33"
    },
    {
        "name":"Ram",
        "age":"36"
    }
    ]
    //for loop
    for(let i=0; i<persDetails.length; i++){
        console.log(persDetails[i].name,persDetails[i].age)
    }
    
    //for in
    for(let i in persDetails){
        console.log(persDetails[i].name,persDetails[i].age)
    }
    //for of
    for(let j of persDetails){
        console.log(j.name,j.age)
    }
    
    // task 2 => Create ur own resume data in JSON formate
     
    let persDetails1={
        "name":"RAM",
        "age":"23",
        "email":"ramkumar23@gmail.com",
        "phone":"985664578",
        "address":{
            "city":"COIMBATORE",
            "pincode":"664213",
            "state": "TN"
        },
        "education":{
            "SSLC":"85%",
            "HLC":"89%",
            "UG":"65%"
        }
    }
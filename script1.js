//Question 1:
//for the below JSON iterate over
//for in loop
var mydetails = {
    "Name":"Rajasekar",
    "Age":27,
    "Degree":"B.Arch",
    "Address":"Gingee,Villupuram",
    "Number":"+916381388939",
    "profiles": [
        {
          "website": "https://www.linkedin.com/in/rajasekar-k-7458692b2",
          "github":"https://github.com/rajasekar47"
        }
      ]
    };
    
    for (var i in mydetails){
    console.log(i,mydetails[i]);
    }
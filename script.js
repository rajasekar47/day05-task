//DAY 05 TASK 
//1. CREATE YOUR OWN RESUME IN JSON FORMAT

let Resume={
    "basics": {
      "name": "RAJASEKAR K",
      "email": "rajaarchi8316gmail.com",
      "phone": 6381388939,
      "degree": "B.Arch",
      "age":27,
      "location": {
        "address": "4/32, kattabomman street, periyaagaram,Gingee",
        "postalCode": 604202,
        "district": "Villupuram",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/rajasekar-k-7458692b2",
          "github":"https://github.com/rajasekar47"
        }
      ]
    },
    "work": [
      {
        "company": "Sahi Infrastructure",
        "position": "Senior Architect",
     
      },
    ],
    "education": [
      {
        "University": "Bharath Institute of Higher Education and Research",
        "department": "Architecture",
        "studyType": "fulltime",
        "batch start year": 2013,
        "batch end year": 2018,
        "gpa": 58.80,
      }
    ],
    "skills": [
      {
        "name": "javascript, autocad, sketchup, photoshop",
        "level": "beginer",

      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "web developing,",
      }
    ]
  }
  console.log(Resume);
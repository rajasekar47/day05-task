//1.  JSON iterate for loops (For, For in, for of, forEach)

var car = [{
    "Name": "i20",
  "company": "Hyundai",
  "variants": ["sports", "Asta", "Magna","Era"],
  "Fuel Type": ["Diesel","Petrol"],
  "Body type": "Hatchback",
  "Ratings": ["5","4","3","2","1"],
  "keyFeatures": ["Airbag","Alloy Wheel", "Foglights", "power steering", "AC"]      
  }];
  console.log(car);

  // For loop
  for ( var i=0;i<car.length;i++){
    console.log(car[i].keyFeatures);
    };
  
  // For in loop
   for ( var a in car){
  console.log(car[a].variants);
  }
  
// For of 
for ( var val of car){
    console.log(val.keyFeatures);
    }
 
// for each 
      car.forEach(function(b) { console.log(b.Ratings); });

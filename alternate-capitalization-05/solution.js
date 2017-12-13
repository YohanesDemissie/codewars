function capitalize(s){
    var even = "";
      for (var i = 0; i < s.length; i++){
          if (i % 2 !=0) {
              even += s[i].toUpperCase();
          }
          else {
              even += s[i].toLowerCase();
          }
      }
    var odd = "";
      for (var i = 0; i < s.length; i++){
          if (i % 2 !=0) {
             odd += s[i].toLowerCase();
          }
          else {
             odd += s[i].toUpperCase();
          }
      }
      return [odd, even];  
 } 

 //var even
//  if index dividdd by 2 and the remainder (!) = 0, keep counting variable index.uppercase. this is collecting all the even numbers becasue even numbers can alwasy be divided by 2. So alternate the variable (even number) to uppercase

 //var odd
//this is doing the same thing but lowercasing instead of uppercasing to alternate [i] between caps and lower case
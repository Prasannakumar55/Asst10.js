1. 

var Minimal_Angle = (h, m) => 
{
  if( h===12){
      h = 0;
  }   
  if(m===60){
     m = 0;
     h+=1;
  if(h>12){
     h = h-12;
   }
  }
  let hAngle = 0.5*(h*60+m);
  let mAngle = 6*m;
  let res = Math.abs(hAngle-mAngle);
      res = Math.min((360-res),res);
      return res;        
};
 
2.
var Check_Leap = (year) => 
{
 if (year % 400 === 0 || 
    (year % 4 === 0 && 
     year % 100 !== 0)){
   return "Leap Year";
 }
 else {
   return "Non Leap Year";
 }
};

3.
var Perfect_Check = (N) => 
{
   let sum = 0;
	  for (let i = 1; i <= N / 2; i++) {
	    if (N % i === 0) {
	      sum = sum + i;
	    }
	  }
	  if (sum === N && sum !== 0) {
	    return "YES";
	  } else {
	    return "NO";
	  }   
};

4.
var Reverse_Number = (N) => 
{
  let sum = 0;
	  while (N) {
	    let digit = N % 10;
	    sum = sum * 10 + digit;
	    N = Math.floor(N / 10);
	  }
	  return sum;
};

5.
var Reverse_Number = (N) => 
{
  let sum = 0;
	  while (N) {
	    let digit = N % 10;
	    sum = sum * 10 + digit;
	    N = Math.floor(N / 10);
	  }
	  return sum;
};

6.
var Substring_Check = (S1, S2) => 
{
  if (S1.includes(S2)) {
    return "YES";
  }  
  else {
    return "NO";
  }
};
 


 
 

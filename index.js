// Code your solution in this file!

const returnFirstTwoDrivers = function(arr) {
   newArr=[];
  newArr=arr.slice(0,2);
  
 return newArr;
};
const returnLastTwoDrivers = function(arr) {
   newArr=[];
   newArr=arr.slice(arr.length-2,arr.length);
  
   return newArr;
};

  const selectingDrivers=[ 
    returnFirstTwoDrivers,
    returnLastTwoDrivers];
  
  const createFareMultiplier=function(num) {
    return function(fare){
      return num*fare
      
    };
  }
  
  const fareDoubler = function(num){
    const doubleFare=2*createFareMultiplier;
    doubleFare(num);
  
  }
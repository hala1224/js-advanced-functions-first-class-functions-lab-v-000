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
function selectingDrivers(drivers){
  newArr=[];
  newArr[0]=returnFirstTwoDrivers(){};
  newArr[1]=returnLastTwoDrivers(){};
  return newArr;
}

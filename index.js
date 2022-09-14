// Code your solution in this file!
const returnFirstTwoDrivers = (arr)=> [arr[0], arr[1]];

const returnLastTwoDrivers=(arr)=> [...arr.slice(-2)];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier =(num1)=> (num2)=> num1 * num2;

const fareDoubler =(fare) => createFareMultiplier(fare)(2);

const fareTripler =(fare) => createFareMultiplier(fare)(3);

const selectDifferentDrivers=(arrDrivers, fn) => fn(arrDrivers);
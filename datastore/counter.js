const fs = require('fs');
const path = require('path');
const sprintf = require('sprintf-js').sprintf;

var counter = 0;

// Private helper functions ////////////////////////////////////////////////////

// Zero padded numbers can only be represented as strings.
// If you don't know what a zero-padded number is, read the
// Wikipedia entry on Leading Zeros and check out some of code links:
// https://www.google.com/search?q=what+is+a+zero+padded+number%3F

const zeroPaddedNumber = (num) => {
  return sprintf('%05d', num);
};

const readCounter = (callback) => {
  console.log("What is my file path??");
  console.log(exports.counterFile);
  fs.readFile(exports.counterFile, (err, fileData) => {
    if (err) {
      callback(null, 0);
    } else {
      callback(null, Number(fileData));
    }
  });
};

const writeCounter = (count, callback) => {
  var counterString = zeroPaddedNumber(count);
  fs.writeFile(exports.counterFile, counterString, (err) => {
    if (err) {
      throw ('error writing counter');
    } else {
      callback(null, counterString);
    }
  });
};

// Public API - Fix this function //////////////////////////////////////////////

exports.getNextUniqueId = () => {
  // invoke readCounter, readCounter would return counter if successfully

   // 1. first read the counter.txt file => call readCounter function
  var counter = readCounter((param1, fileData) => {

    // if fileData is retrieved
    console.log("file DATA");
    console.log(fileData);
    if (fileData !== 0) { // it was successful
      // return fileData(number)
      // check if the counter file exists, if not create the counter.txt file
      return fileData;
    } else {    // if fileData is not present,
      console.log("Reading is unsuccessful!");

    }
  });


   // 1. first read the counter.txt file => call readCounter function +
    //inside readCounter:
      //1.1 if reading is successful, check if the counter file exists, if not create the counter.txt file
       // 1.1.1 if file exists but error happens, do nothing simply display error message/similar things
      //1.2 if not, we would not update anything, give error
    // Result of step 1: return counter from the file
  // 2. increment the counter value
    counter = counter + 1;
  // 3. call writeCounter function with the new counter from step 1 as param + callback
      //inside writeCounter:
      //3.1 if writing is successful, we have to update the counter and write it to the counter file
      //3.2 if writing is not successful, do nothing just error message

  return zeroPaddedNumber(counter);

};

// file path ->>>>>> ./counter.txt

// Configuration -- DO NOT MODIFY //////////////////////////////////////////////

exports.counterFile = path.join(__dirname, 'counter.txt'); // create counterfile

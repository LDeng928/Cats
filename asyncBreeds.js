const fs = require('fs');

const breedDetailFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data");

    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    // functionToRunWhenThingsAreDone(data)
    if (!error) printOutBombay(data);
  });
};

const printOutBombay = breed => {
  console.log('Return value: ', breed);
};

breedDetailFromFile('Bombay', printOutBombay);


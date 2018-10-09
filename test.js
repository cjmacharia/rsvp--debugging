const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;
    numberOf503 = phoneNumbers.reduce((count, number) => {
    if (number.substring(1,4) === '503'){
      return count =+1;
    }
    return count;
    });
      console.log(numberOf503);
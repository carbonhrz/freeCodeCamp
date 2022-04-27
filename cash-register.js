function checkCashRegister(price, cash, cid) {
  let sumPenny = 0.0;
  let sumNickel = 0.0;
  let sumDime = 0.0;
  let sumQuarter = 0.0;
  let sumOne = 0.0;
  let sumFive = 0.0;
  let sumTen = 0.0;
  let sumTwenty = 0.0;
  let sumHundred = 0.0;

  let amountPenny = cid[0][1];
  let amountNickel = cid[1][1];
  let amountDime = cid[2][1];
  let amountQuarter = cid[3][1];
  let amountOne = cid[4][1];
  let amountFive = cid[5][1];
  let amountTen = cid[6][1];
  let amountTwenty = cid[7][1];
  let amountHundred = cid[8][1];

  let change = {
    status: "",
    change: []
  };
  change.status = "OPEN";
  let checkClose = "OPEN";
  let difference = (cash - price);
  let sum = 0.0;
  for (let i = 0; i < cid.length; i++) {
    sum += cid[i][1];
  }
   if (sum == difference) {
      checkClose = "CLOSED";
   }
   if (difference > sum) {
    change.status = "INSUFFICIENT_FUNDS";
  }

  while (difference > 0) {
    if (difference >= 100 && amountHundred >= 100) {
      sumHundred += 100.0;
      amountHundred -= 100.0;
      difference = parseFloat((difference - 100.0).toFixed(3));
    }
   else if  (difference >= 20 && amountTwenty >= 20) {
      sumTwenty += 20.0;
      amountTwenty -= 20.0;
      difference = parseFloat((difference - 20.0).toFixed(3));
    }
    else if  (difference >= 10 && amountTen >= 10) {
      sumTen += 10.0;
      amountTen -= 10.0;
      difference = parseFloat((difference - 10.0).toFixed(3));
    }
    else if (difference >= 5 && amountFive >= 5) {
      sumFive += 5.0;
      amountFive -= 5.0;
      difference = parseFloat((difference - 5.0).toFixed(3));
    }
    else if (difference >= 1 && amountOne >= 1) {
      sumOne += 1.0;
      amountOne -1.0;
      difference = parseFloat((difference - 1.0).toFixed(3));
    }
    else if (difference >= 0.25 && amountQuarter >= 0.25) {
      sumQuarter += 0.25,0;
      amountQuarter -= 0.25,0;
      difference = parseFloat((difference - 0.25).toFixed(3));
    } else if (difference >= 0.1 && amountDime >= 0.1) {
      sumDime += 0.1,0;
      amountDime -= 0.1,0;
      difference = parseFloat((difference - 0.1).toFixed(3));
    } else if (difference >= 0.05 && amountNickel >= 0.05) {
      sumNickel += 0.05,0;
      amountNickel -= 0.05,0;
      difference = parseFloat((difference - 0.05).toFixed(3));
    } else if (difference >= 0.01 && amountPenny >= 0.01) {
      sumPenny += 0.01;
      sumPenny = parseFloat(sumPenny.toFixed(3));
      amountPenny -= 0.01;
      amountPenny = parseFloat(amountPenny.toFixed(3));
      difference = parseFloat((difference - 0.01).toFixed(3));
    } else {
      change.status = "INSUFFICIENT_FUNDS";
      difference = 0;
    }
  }
  let counter = 1;
while (counter != 0) {
  if (sumHundred != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["ONE HUNDRED", sumHundred]);
    sumHundred = 0;
  }
  else if (sumTwenty != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["TWENTY", sumTwenty]);
    sumTwenty = 0;
  }
  else if (sumTen != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["TEN", sumTen]);
    sumTen = 0;
  }
  else if (sumFive != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["FIVE", sumFive]);
    sumFive = 0;
  }
  else if (sumOne != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["ONE", sumOne]);
    sumOne = 0;
  }
  else if (sumQuarter != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["QUARTER", sumQuarter]);
    sumQuarter = 0;
  }
  else if (sumDime != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["DIME", sumDime]);
    sumDime = 0;
  }
  else if (sumNickel != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["NICKEL", sumNickel]);
    sumNickel = 0;
  }
  else if (sumPenny != 0 && change.status != "INSUFFICIENT_FUNDS") {
    change.change.push(["PENNY", sumPenny]);
    sumPenny = 0;
  } else {
    counter = 0;
  }
}
 
  if (checkClose == "CLOSED") {
    change.status = "CLOSED";
  }

  if (change.status == "CLOSED") {
    for (let i = 0; i < cid.length; i++) {
      if (cid[i][1] == 0) {
      change.change.push(cid[i]);
      }
      
    }
  }

  
  console.log(sum);
  console.log(sumPenny);
  console.log("Differenz: " + difference);
  console.log(change);
  
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

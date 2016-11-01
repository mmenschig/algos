function checkCashRegister(price, cash, cid) {

    var currencies = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00]
    
    var change = (cash - price).toFixed(2)
    console.log(change);

    var funds = 0;
    for (var item in cid) {
        // TODO: Need to find better way to bring to 2 decimals
        // TODO: Consider faster procedure than for loop (reduce()?)
        funds += parseFloat(cid[item].toString().split(',')[1]);
    }
    console.log('Total cash in drawer:', funds);

    if (funds < change) {
        return 'INSUFFICIENT FUNDS';
    } else {
        // code here
    }

}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
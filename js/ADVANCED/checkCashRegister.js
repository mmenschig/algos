function checkCashRegister(price, cash, cid) {
    
    var money = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
    }

    var funds = 0;
    for (var item in cid) {
        // TODO: Need to find better way to bring to 2 decimals
        // TODO: Consider faster procedure than for loop (reduce()?)
        funds += parseFloat(cid[item].toString().split(',')[1]);
    }
    console.log('Total cash in drawer:', funds);

}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
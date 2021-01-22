//https://github.com/masum-diucse/problem-solving

//--kilometer converter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Please insert correct value!!";
    }
    else {
        return kilometer * 1000;
    }
}

//--budget calculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    if ((watchQuantity === undefined || phoneQuantity === undefined || laptopQuantity === undefined)) {
        return "Please fill up your requirement.";
    }
    else if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        return "Please insert correct value!!";
    }
    else {
        const totalPrice = watchQuantity * 50 + phoneQuantity * 100 + laptopQuantity * 500;
        return totalPrice;
    }
}


//-- check hotel cost
function hotelCost(livingDays) {
    if (livingDays < 0) {
        return "Please insert correct value!!";
    }
    else if (livingDays <= 10) {
        const cost = livingDays * 100;
        return cost;
    }
    else if (livingDays <= 20) {
        const cost1stPart = 10 * 100;
        const cost2ndPart = (livingDays - 10) * 80;
        const totalCost = cost1stPart + cost2ndPart;
        return totalCost;
    }
    else {
        const cost1stPart = 10 * 100;
        const cost2ndPart = 10 * 80;
        const cost3rdPart = (livingDays - 20) * 50;
        const totalCost = cost1stPart + cost2ndPart + cost3rdPart;
        return totalCost;
    }
}


//--find mega name from a name's array
function megaFriend(friendArray) {
    if(Array.isArray(friendArray)===true){
        if (friendArray.length == 0 || friendArray.length == 1) {
            return "Please at least insert two name";
        }
        else {
            let nameLength = friendArray[0].length;
            let megaName = friendArray[0];
    
            for (let i = 0; i < friendArray.length; i++) {
                if (nameLength < friendArray[i].length) {
                    nameLength = friendArray[i].length;
                    megaName = friendArray[i];
                }
            }
            return megaName;
        }
    }else{
        return "Please put your friend names into an array."
    }

}

//--check all function here..
console.log(kilometerToMeter(5));
console.log(budgetCalculator(210, 1, 0));
console.log(hotelCost(21));
console.log(megaFriend(["Tafrin","Masum","Joe Biden"]));



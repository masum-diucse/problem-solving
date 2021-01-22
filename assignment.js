function kilometerToMeter(kilometer){
    return kilometer*1000;
}

function budgetCalculator(watchQuantity,phoneQuantity,laptopQuantity){
        const totalPrice=watchQuantity*50+phoneQuantity*100+laptopQuantity*500;
        return totalPrice;
}

function hotelCost(livingDays){
    if(livingDays<=10){
        const cost=livingDays*100;
        return cost;
    }
    else if(livingDays<=20){
        const cost1stPart=10*100;
        const cost2ndPart=(livingDays-10)*80;
        const totalCost=cost1stPart+cost2ndPart;
        return totalCost;
    }
    else{
        const cost1stPart=10*100;
        const cost2ndPart=10*80;
        const cost3rdPart=(livingDays-20)*50;
        const totalCost=cost1stPart+cost2ndPart+cost3rdPart;
        return totalCost;
    }
}

function megaFriend(friendArray){
    let nameLength=friendArray[0].length;
    let megaName=friendArray[0];
   
    for(let i=0;i<friendArray.length;i++){
        if(nameLength<friendArray[i].length){
            nameLength=friendArray[i].length;
            megaName=friendArray[i];
            
        }
    }
    return megaName;
}

console.log(kilometerToMeter(5));
console.log(budgetCalculator(2,0,0));
console.log(hotelCost(22));
console.log(megaFriend(["Sima Akter","Tafrin Khandaker","Masum Khan"]));

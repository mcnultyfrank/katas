// You just returned home to find your mansion has been robbed! 
// Given an object of the stolen items, return the total amount of the burglary (number).
//  If nothing was robbed, return the string "Lucky you!".

const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
}
function myFunc(total, num) {
    return total + num;
}
const returnSumofStolenItems = () => {
    totalStolen = Object.values(stolenItems)
    return console.log(totalStolen.reduce(myFunc));
}
returnSumofStolenItems()
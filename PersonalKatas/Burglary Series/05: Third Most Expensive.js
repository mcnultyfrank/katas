// Time to call your lover to inform what he/she lost in the burglary.
// Given an object of the stolen objects, return the 3rd most expensive item on the list. 
// If that is not possible, because there are not enough items, return false.

    const thirdMostExpensive = (stolenItems) => {
        const val = Object.values(stolenItems).sort((a, b) => a - b).reverse()[2];
        if(val === undefined)
        return console.log(false)
        else
        for (const property in stolenItems) {
            if(stolenItems[property] === val){
                return console.log(property);
            }
        }
    }

thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) 


// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!
// Given an object of the stolen items and a string in lower cases representing the name of the pet (e.g. "rambo"), return:

// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.

    const isPetStolen = (items) => {
        for (let i = 0; i < Object.keys(items).length; i++) {
            if(Object.keys(items)[i].toString() === 'dill'){
                return console.log(`${Object.keys(items)[i].toString()} has been nicked!`);
            }
        }
    }
    isPetStolen({
        tv: 30,
        stereo: 50,
        dill: null
    } );


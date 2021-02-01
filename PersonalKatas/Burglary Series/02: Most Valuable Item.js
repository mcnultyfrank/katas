// 02: Most Valuable Item

// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

    const mostExpensiveItem = (items) => {
        return console.log(Object.keys(items).map((key) => items[key]).sort((a, b) => a - b).slice(-1)[0]);
    }


mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
})


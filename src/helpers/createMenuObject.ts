
type MenuObjects = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuObjects) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}
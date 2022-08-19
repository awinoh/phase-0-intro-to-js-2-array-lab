// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
function destructivelyAppendCat(Ralph){
    return cats.push (Ralph);
}
function destructivelyPrependCat(Bob){
    return cats.unshift (Bob);
}
function destructivelyRemoveLastCat(Bob){
    return cats.pop (Bob);
}
function destructivelyRemoveFirstCat(Milo){
   return cats.shift(Milo);
}
function appendCat(Broom){
    return [...cats, Broom];
}
function prependCat(Arnold){
return [Arnold, ...cats];
}
function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}
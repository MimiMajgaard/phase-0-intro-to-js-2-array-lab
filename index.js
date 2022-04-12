const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(catName) {
    cats.push(catName);
}
function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}
function destructivelyRemoveLastCat(lastCat) {
    cats.pop(lastCat);
}
function destructivelyRemoveFirstCat(firstCat) {
    cats.shift(firstCat);
}

function appendCat(catName){
return [...cats, "Broom"];

}

function prependCat(catName){
    return ["Arnold", ...cats];
    
    }

function removeLastCat(catName){
    return cats.slice(0, -1);
}

function removeFirstCat(catName){
    return cats.slice(1);
}

//1. Find what is the array - it is cats
//2. Google: what is console log examples javascript
//10 - 20 min - look at the top 3 links
//3. Use console.log to see what catName is
//4. You will put the array(cats) in place of catName
//5. You will put in catName some place
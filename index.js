// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    return [...cats, name]
   
}
function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat() {
    const newCats = [...cats]
    return newCats.slice(0, 2)
}
function removeFirstCat() {
    const newCatss = [...cats]
    return newCatss.slice(1)
}
var mountains = ["Everest", "K2", "Kilimanjaro"]
var mountainsJapan = ["Fuji"]

var everything =  {
    name: "thing",
    doIt: "do it"
}

var pretty = {
    fuck: "one"
}

var allMountains = [...mountains, ...mountainsJapan]
var doEver = {...everything, ...pretty}

console.log(allMountains)
console.log(doEver)
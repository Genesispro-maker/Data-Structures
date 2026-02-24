
//custom map method
Array.prototype.GenesisMap = function(callback){
    const result = []
    for(let i = 0; i < this.length; i++){
       result.push(callback(this[i], i, this))
    }
    return result
}

//custom forEach
Array.prototype.GenesisforEach =  function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}


//nuclear testSite
const names = ["Genesis", "John", "james", "mark"]

names.GenesisforEach((name) => {
    console.log("these are the names of my friends", name)
})

const numbers = [1, 2, 3, 5]
numbers.GenesisMap((num) => {
    console.log(num)
})
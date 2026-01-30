const Fizzbuzz = (n: number) : string => {
    if(typeof n !== "number"){
        throw new Error("Not a number")
    }

    const divisibleByThree = n % 3 === 0
    const divisibleByFive = n % 5 === 0
   

    if(divisibleByThree && divisibleByFive){
        return "fizzbuzz"
    }
    else if(divisibleByThree){
        return "fizz"
    }
    else if(divisibleByFive){
        return "buzz"
    }
    else{
        return "undefined"
    }

}

console.log(Fizzbuzz(10))
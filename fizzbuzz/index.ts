const fizzbuzz = (n: number) : number | string => {
    if(typeof n !== "number"){
        throw new Error("Not a number")
    }
   

    if(n % 3 === 0){
        return "fizz"
    }
    else if(n % 5 === 0){
        return "buzz"
    }
    else if(n % 3 === 0 && n % 5 === 0){
        return "fizzbuzz"
    }


    return n
}
fizzbuzz(5)
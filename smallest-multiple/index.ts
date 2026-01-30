import {range} from "../utils/range"

function checkifIndexisAnswer(index: number, divisor: Array<number>){
   return divisor.every((rangeValue) => index % rangeValue === 0)
}

const SmallestMultiple = (start: number, end: number) : number | undefined => {
   let index = end
   let answer;

   const divisors = range(start, end + 1);

   while(!answer){
    answer = checkifIndexisAnswer(index, divisors)
      
    if(answer){
        return index
    }
    else{
        index += 1
    }
   }
}

const answer = SmallestMultiple(1, 100)
console.log(answer)
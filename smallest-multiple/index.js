import range from "./range.js";

function checkifIndexisAnswer(index, divisor){
   return divisor.every((rangeValue) => index % rangeValue === 0)
}

const SmallestMultiple = (start, end) => {
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

const answer = SmallestMultiple(1, 12)
console.log(answer)
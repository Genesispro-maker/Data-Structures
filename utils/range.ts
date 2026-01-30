export const range = (start: number, end: number, step = 1) : Array<number> => {

    if(typeof end === "undefined"){
        start = 0
        end = start
    }

   const outputs = []

   for(let i = start; i < end; i += step){
      outputs.push(i)
   }

   return outputs
}
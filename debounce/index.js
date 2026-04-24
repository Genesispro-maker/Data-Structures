function debounce(callback, delay){
    let timeout = null

    return function(...args){
        const context = this
        
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            callback.apply(context, args)
            timeout = null
        }, delay)
    }
}

const message = debounce((mes) => console.log(mes), 100)
message("hello")
message("world")
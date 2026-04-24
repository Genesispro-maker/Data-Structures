const detectType = (value) => {
    if(value === null){
        return `${value}`
    }
    return (Object.getPrototypeOf(value).constructor.name ?? "object").toLowerCase()
}

console.log(detectType([]))
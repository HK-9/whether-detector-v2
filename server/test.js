function swapClockwise(arr){
    const len = arr.length-1
    console.log(len)
    console.log(arr[len-1])
    for(let i = 0; i<2; i++){
        let tail = len-i
        console.log('tail',arr[tail],"head",arr[i])
        let temp = arr[i]
        arr[i] = arr[tail]
        arr[tail] = temp
        tail --
        // console.log(arr[i])
        // arr[arr[0],len] = arr[len,arr[0]]
    }

}

arr = [1,2,3,4,5,6,7,100]
swapClockwise(arr)
console.log(arr)
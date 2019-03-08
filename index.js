// BEGIN TASK 1

const randomizeArray = (arr) => {

    let counter = arr.length;
    let randomIndex;
    let temp;

    while (counter > 0) {
        counter--
        randomIndex = Math.floor(Math.random() * counter)
        temp = arr[counter]
        arr[counter] = arr[randomIndex]
        arr[randomIndex] = temp
    }

    return arr
}

const numberSet = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]
console.log(randomizeArray(numberSet))

// END TASK 1


// BEGIN TASK 2

const arrayMean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
console.log(arrayMean(numberSet))

// END TASK 2


// BEGIN TASK 3



// END TASK 3
const arr1 = ['a', 'b', 'c']
const arr2 = [1,2,3]
const arr3 = [true, false]

const arrToFlatten = [arr1, arr2, arr3]

function flattenArray (arr) {
    // (next params for the callback fn would be: "currentIndex" & "array", array being the original array)
    return arr.reduce(function(accumulator, currentVal) { 

        if (Array.isArray(currentVal)) { 
            // if the current value is another array, we call flattenArray again
            return accumulator.concat(flattenArray(currentVal))
        } 

        return accumulator.concat(currentVal)

    }, []);
}

console.log(flattenArray(arrToFlatten))
// ['a', 'b', 'c', 1, 2, 3, true, false]
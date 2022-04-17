/*
    write a method to return all subsets of a set
*/

// [] []
// [1] [1] []
// [1,2] [1,2] [1] [2] []
// [1,2,3] [1,2,3] [1,3] [2,3] [1,2] [1] [2] [3] []
// [1,2,3,4] [1,2,3,4] [1,3,4] [2,3,4] [1,2,4] [1,3] [2,3] [1,2] [1,4] [1] [2] [3] [4] []

const subset = (arr, result = [[]]) => {
    if (arr.length === 0) {
        return result;
    }
    const last = arr.pop();
    const newResult = [];
    for (let i = 0; i < result.length; i++) {
        const newSubset = [...result[i], last];
        newResult.push(newSubset);
    }
    result.push(...newResult);
    return subset(arr, result);
}
console.log(subset([1,2,3,4]));
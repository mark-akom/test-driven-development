
function analyzeArray(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const length = arr.length;
    const average = (arr.reduce((prev, curr) =>  prev + curr, 0)) / length;

    return { max, min, length, average};
}

export default analyzeArray
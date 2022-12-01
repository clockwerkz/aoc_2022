module.exports = function(input) {
    const arr = input.split('\n');
    let currentCalorieCount = 0;
    let largestCalorieCount = -Infinity;
    let currentElf = 1;
    let elfCarrying = 0;
    arr.forEach(el => {
        if (el.length <= 1){
            if (currentCalorieCount > largestCalorieCount) {
                elfCarrying = currentElf;
                largestCalorieCount = currentCalorieCount;
            }
            currentElf++;
            currentCalorieCount = 0;
        } else {
            currentCalorieCount += parseInt(el);
        }
    });
    return largestCalorieCount;
}
module.exports = function(input) {
    const arr = input.split('\n');
    let currentCalorieCount = 0;
    const calorieCount = [];
    arr.forEach(el => {
        if (el.length <= 1){
            calorieCount.push(currentCalorieCount);
            currentCalorieCount = 0;
        } else {
            currentCalorieCount += parseInt(el);
        }
    });
    return calorieCount.sort((a,b) => b - a).slice(0,3).reduce((acc, el) => acc + el, 0);
}
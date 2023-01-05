module.exports = function reverse (n) {
    let numberToString = String(Math.abs(n));
    let finishNumber = numberToString.split('').reverse().join(''); 
    return Number(finishNumber); 
}

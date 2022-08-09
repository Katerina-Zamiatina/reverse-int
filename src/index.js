module.exports = function reverse(n) {
    const arr = ("" + Math.abs(n)).split("");
    const revArr = arr.reverse();
    console.log(revArr);
    return Number(revArr.join(""));
};

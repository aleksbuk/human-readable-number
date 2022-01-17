module.exports = function toReadable (number) {
    let arrOfNumber = number.toString().split('')
    const simpleNum = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tenthNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const preTenthNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    if( arrOfNumber.length === 1){
        switch (number) {
            case 0: return simpleNum[0];
            case 1: return simpleNum[1];
            case 2: return simpleNum[2];
            case 3: return simpleNum[3];
            case 4: return simpleNum[4];
            case 5: return simpleNum[5];
            case 6: return simpleNum[6];
            case 7: return simpleNum[7];
            case 8: return simpleNum[8];
            case 9: return simpleNum[9];
        }
    } if( arrOfNumber.length === 2) {
        switch (number) {
            case 10: return preTenthNum[0];
            case 11: return preTenthNum[1];
            case 12: return preTenthNum[2];
            case 13: return preTenthNum[3];
            case 14: return preTenthNum[4];
            case 15: return preTenthNum[5];
            case 16: return preTenthNum[6];
            case 17: return preTenthNum[7];
            case 18: return preTenthNum[8];
            case 19: return preTenthNum[9];
        }
    } if ( arrOfNumber.length === 2 && !preTenthNum) {

    }
}



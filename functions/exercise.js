function makeLine(size) {
    let str = ""
    for (let i = 0; i <= size; i++) {
        str += "#";

    }
    return str;
}
// console.log(makeLine(5))

function makeDownwardStairs(height) {
    let str1 = ""
    for (let i = 0; i < height; i++) {
        str1 += makeLine(1 + i) + "\n"
    }
    return str1
}
// console.log(makeDownwardStairs(6))

function makeSquare(size) {
    let str2 = ""
    for (let i = 0; i < size; i++) {
        str2 += makeLine(6)+ "\n"

    }
    return str2

}  
    // console.log(makeSquare(5))

function maketriangle(size){
    let str3 = ""
    for(i = 0; i < size; i++ )
        str3 +




}
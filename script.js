// 기본 세팅

let i;
let func = 'func_';

let cell=""; // 계산식
let ans, qPlus, qMinus, qMultiplication ,qDivision, qEqual;

qPlus = '+', qMinus = '-', qMultiplication = '*', qDivision = '/', qEqual = '=';



let beforeNum, outputNum;



// 누를 시 실행하는것


for(i=0; i<20; i++) {
    console.log(i);
    let n = i;
    document.querySelector('#click_'+i).addEventListener('click', evt => eval(`${func + n}()`));

}





// 계산할 공간


function calc() {
    beforeNum = document.querySelector('.beforeNum');
    beforeNum.innerHTML = cell;

    document.querySelector('#click_19').addEventListener('click', evt => {
        outputNum = document.querySelector('.outputNum');
        outputNum.innerHTML = ans;
    })
}


for(i=0; i<19; i++) {
    console.log(i);
    document.querySelector('#click_'+i).addEventListener('click', evt => calc());
}





// CE
function func_0() {

}

// C
function func_1() {
    cell = "";
    ans = 0;
}

// delete <
function func_2() {

}

// ÷
function func_3() {
    cell = cell.concat(qDivision);
    ans = eval(cell);
    console.log(cell);
}

// 7
function func_4() {
    cell = cell.concat(7);
    ans = eval(cell);
    console.log(cell);
}

// 8
function func_5() {
    cell = cell.concat(8);
    ans = eval(cell);
    console.log(cell);
}

// 9
function func_6() {
    cell = cell.concat(9);
    ans = eval(cell);
    console.log(cell);
}

// *
function func_7() {
    cell = cell.concat(qMultiplication);
    ans = eval(cell);
    console.log(cell);
}

// 4
function func_8() {
    cell = cell.concat(4);
    ans = eval(cell);
    console.log(cell);
}

// 5
function func_9() {
    cell = cell.concat(5);
    ans = eval(cell);
    console.log(cell);
}

// 6
function func_10() {
    cell = cell.concat(6);
    ans = eval(cell);
    console.log(cell);
}

// -
function func_11() {
    cell = cell.concat(qMinus);
    ans = eval(cell);
    console.log(cell);
}

// 1
function func_12() {
    cell = cell.concat(1);
    ans = eval(cell);
    console.log(cell);
}

// 2
function func_13() {
    cell = cell.concat(2);
    ans = eval(cell);
    console.log(cell);
}

// 3
function func_14() {
    cell = cell.concat(3);
    ans = eval(cell);
    console.log(cell);
}

// +
function func_15() {
    cell = cell.concat(qPlus);
    ans = eval(cell);
    console.log(cell);
}

// ±
function func_16() {

}

// 0
function func_17() {
    cell = cell.concat(0);
    ans = eval(cell);
    console.log(cell);
}

// .
function func_18() {
    
}

// =
function func_19() {
    cell = cell.concat(qEqual);
    console.log(cell);
    console.log(ans);
    cell = "";
    cell = cell.concat(ans);    // cell(계산식) 값 초기화
}


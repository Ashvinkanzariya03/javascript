

function add() {
    let input1 = document.getElementById("n1")
    let input2 = document.getElementById("n2")
    let input3 = document.getElementById("n3")
    let input4 = document.getElementById("n4")
    let input5 = document.getElementById("n5")
    let input6 = document.getElementById("n6")
    let input7 = document.getElementById("n7")
    let result = document.getElementById("result")
    let percentage=document.getElementById("pr")
    let ans = Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value) + Number(input6.value) + Number(input7.value);
    result.innerHTML=ans

    
    let p=ans/350*100
    percentage.innerHTML=p
}



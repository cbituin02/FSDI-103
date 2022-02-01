function calculate() {
    console.log("Calculator function");
    let num1 = Number(prompt("Enter the number 1: "));
    console.log(num1);
    let num2 = Number(prompt("Enter the number 2: "));
    console.log(num2);
    let sum, sub, mult, divi;
    //display sum
    sum = num1 + num2;
    console.log(sum)
    document.getElementById("resultsSum").innerHTML = `<p>${num1} + ${num2} = ${sum}</p>`;
    //display sub
    sub = num1 - num2;
    console.log(sub);
    document.getElementById("resultsSub").innerHTML = `<p>${num1} - ${num2} = ${sub}</p>`;
    //display mult
    mult = num1 * num2;
    console.log(mult);
    document.getElementById("resultsMult").innerHTML = `<p>${num1} * ${num2} = ${mult}</p>`;
    //display divi
    divi = num1 / num2;
    console.log(divi);
    document.getElementById("resultsDivi").innerHTML = `<p>${num1} / ${num2} = ${divi}</p>`;
}
 const tipoOperacion = process.argv[2];
 const num1 = process.argv[3];
 const num2 = process.argv[4];
 console.log(process.argv)
 switch(tipoOperacion){
    case '+':
         console.log(`${num1} + ${num2} = ${num1}+${num2}`) 
    break;
    case '-':
         console.log(`${num1} - ${num2} = ${num1}-${num2}`) 
    break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1}*${num2}`) 
    break;
    case '/':
        console.log(`${num1} / ${num2} = ${num1}/${num2}`) 
    break;
    default:

    break;
 }
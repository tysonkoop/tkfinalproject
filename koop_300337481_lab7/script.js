var firstNum;
var secondNum;
var result;
var operator;



function additionClick()
{
    firstNum = document.getElementById('oOne').value;
   secondNum = document.getElementById('oTwo').value;

   result = Number(firstNum) + Number(secondNum);

   document.getElementById('aBox').value = firstNum + " + " + secondNum + " = " + result;

   console.log( firstNum + " + " + secondNum + " = " + result);
}

function multiplyClick()
{
    firstNum = document.getElementById('oOne').value;
   secondNum = document.getElementById('oTwo').value;

   result = Number(firstNum) * Number(secondNum);

   document.getElementById('aBox').value = firstNum + " * " + secondNum + " = " + result;

   console.log( firstNum + " + " + secondNum + " = " + result);
}

function divisionClick()
{
    firstNum = document.getElementById('oOne').value;
   secondNum = document.getElementById('oTwo').value;

   result = Number(firstNum) / Number(secondNum);

   document.getElementById('aBox').value = firstNum + " / " + secondNum + " = " + result;

   console.log( firstNum + " + " + secondNum + " = " + result);
}

function clearClick()
{
   document.getElementById('oOne').value = null;
   document.getElementById('oTwo').value = null;

   document.getElementById('aBox').value = null;
}
/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/





 // Function to display a numeric value as a text string in the format $##.## 
 let inputs = document.getElementsByClassName("menuItem")

 function formatCurrency() {
      let price = 0;

      for(let i = 0; i < inputs.length; i++){
            const value = parseFloat(inputs[i].value)
            if(inputs[i].checked){
                  price += value
            }
      }

      document.getElementById('billTotal').innerHTML = "$" + price 
 }
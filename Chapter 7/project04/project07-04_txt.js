"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: 
      Date:   

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let displayCustomers = customers;

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < displayCustomers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = displayCustomers[i];     
      customerList.appendChild(customerItem);
   }
}

function removeCustomer(removeFirst){
   const customerValue = document.getElementById('customerName').value || "";
   let index = removeFirst? findCostumerIndex(displayCustomers[0], customers) : findCostumerIndex(customerValue, customers)
   
   if(index < 0) {
      return window.alert('Customer not found')
   }
   
   customers.splice(index, 1);
   displayCustomers.splice(findCostumerIndex(customerValue, displayCustomers), 1);
   generateCustomerList();
}

function addCustomer(){
   const customerValue = document.getElementById('customerName').value || "";
   let customerNames = customerValue.split(' ');
   if(findCostumerIndex(customerValue, customers) >= 0){
      return window.alert('Customer already exists');
   }

   if(customerNames.length != 2 || ( !customerNames[0] || !customerNames[1])){
      return window.alert('Make sure you input a first and last name') ;
   }

   for(let i = 0; i < 2; i++){
      customerNames[i] = customerNames[i].charAt(0).toUpperCase() + customerNames[i].slice(1);
   }

   let customerName = customerNames.join(' ');
   customers.push(customerName);
   generateCustomerList();
}

function searchCustomer(){
   const customerValue = document.getElementById('customerName').value || "";
   const tester = new RegExp(customerValue, 'i');

   displayCustomers = customerValue? customers.filter(customer => {
      return tester.test(customer);
   })
   :
   customers

   generateCustomerList();
}

function findCostumerIndex(term, testArray){
   const tester = new RegExp(term, 'i');

   return testArray.indexOf(testArray.find((customer) => {
      return tester.test(customer);
   }));
}
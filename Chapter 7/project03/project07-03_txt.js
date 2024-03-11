"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: 
      Date:   

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

const intervalId = setInterval(() => {
      const now = new Date()
      const newYears = new Date(`${now.getFullYear() + 1}-01-01T00:00:00`)
      let difference = newYears - now

      currentTime.innerHTML = now
      daysLeftBox.innerHTML = Math.floor(difference / 86400000)
      hrsLeftBox.innerHTML = Math.floor((difference % 86400000) / 3600000)
      minsLeftBox.innerHTML = Math.floor(((difference % 86400000) % 3600000) / 60000)
      secsLeftBox.innerHTML = Math.floor((((difference % 86400000) % 3600000) % 60000) / 1000)
}, 1000)

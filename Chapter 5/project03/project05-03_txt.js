"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: 
      Date:   

      Filename: project05-03.js
*/

const article = document.getElementById('source_doc')
const headers = document.getElementsByTagName('h2')
const toc = document.getElementById('toc')

function handleScroll(dist){
      article.scroll(0, dist)
}

for(let i = 0; i < headers.length; i++){
      let listItem = document.createElement('li')
      listItem.addEventListener('click', () => {handleScroll(headers[i].offsetTop)})
      listItem.innerHTML = headers[i].innerHTML
      toc.appendChild(listItem)
}
"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: 
      Date:   

      Filename: project05-02.js
*/

const images = document.getElementsByTagName('img')
const imageBucket = document.getElementById('photo_bucket')
const imageList = document.getElementById('photo_list')

function selectImage(event){
      if(event.target.parentElement == imageBucket){
            const listItem = document.createElement('li')
            listItem.appendChild(event.target)
            imageList.appendChild(listItem)
      }else{
            const listElement = event.target.parentElement
            imageBucket.appendChild(event.target)
            imageList.removeChild(listElement)
      }
}

for(let i = 0; i < images.length; i++){
      images[i].addEventListener('click', (e) => selectImage(e))
}
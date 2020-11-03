/*Name this external file gallery.js*/

function upDate(previewPic){
  document.getElementById('image').innerHTML="";
  document.querySelector('#image').style.backgroundImage= "url('"+previewPic.href+"')";
}
 
function unDoMain(){
/*  document.getElementById('image').innerHTML="Hover over an image below to display here.";*/
  document.querySelector('#image').style.backgroundImage= "url('images/cover.jpeg')";
  /*document.querySelector('#image').style.backgroundImage = "none";*/
}
 	
function upDate2(previewPic){
  document.querySelector('#image').style.backgroundImage = "url('"+previewPic.alt+"')";
 }

function unDoDreamHome(){
  document.querySelector('#image').style.backgroundImage= "url('images/dreamHome.jpeg')"
}

function unDoCommunity(){
  document.querySelector('#image').style.backgroundImage= "url('images/community.png')"
}

function unDoVacation(){
  document.querySelector('#image').style.backgroundImage= "url('images/vacation.jpeg')"
}
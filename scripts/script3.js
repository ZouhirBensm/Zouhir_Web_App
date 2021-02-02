
// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");

// Get the button that opens the modal
var btn1 = document.getElementById("myHTML");
var btn2 = document.getElementById("myCSS");
var btn3 = document.getElementById("myJS");
var btn4 = document.getElementById("myJAVA");
var btn5 = document.getElementById("myPHP");
var btn6 = document.getElementById("mySQL");
var btn7 = document.getElementById("myMSQL");
var btn8 = document.getElementById("myTER");
var btn9 = document.getElementById("myMAC");
var btn10 = document.getElementById("myGIT");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];
var span9 = document.getElementsByClassName("close9")[0];
var span10 = document.getElementsByClassName("close10")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}
// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}
// When the user clicks the button, open the modal 
btn4.onclick = function() {
    modal4.style.display = "block";
}
// When the user clicks the button, open the modal 
btn5.onclick = function() {
    modal5.style.display = "block";
}
// When the user clicks the button, open the modal 
btn6.onclick = function() {
    modal6.style.display = "block";
}
// When the user clicks the button, open the modal 
btn7.onclick = function() {
    modal7.style.display = "block";
}
// When the user clicks the button, open the modal 
btn8.onclick = function() {
    modal8.style.display = "block";
}
// When the user clicks the button, open the modal 
btn9.onclick = function() {
    modal9.style.display = "block";
}
// When the user clicks the button, open the modal 
btn10.onclick = function() {
    modal10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    modal5.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span6.onclick = function() {
    modal6.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span7.onclick = function() {
    modal7.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span8.onclick = function() {
    modal8.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span9.onclick = function() {
    modal9.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
span10.onclick = function() {
    modal10.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8 || event.target == modal9 || event.target == modal10) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";
    modal8.style.display = "none";
    modal9.style.display = "none";
    modal10.style.display = "none";
  }
}


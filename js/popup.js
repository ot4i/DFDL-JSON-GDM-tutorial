/* THIS PRODUCT CONTAINS RESTRICTED MATERIALS OF IBM
 * 5724-I63, 5724-H88, 5655-N02, 5733-W70 (C) COPYRIGHT International Business Machines Corp. 1997, 2006
 * All Rights Reserved * Licensed Materials - Property of IBM
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

var isNS = false;
var isIE = false;

var foropera = window.navigator.userAgent.toLowerCase();
var itsopera = foropera.indexOf("opera",0) + 1;
var itsgecko = foropera.indexOf("gecko",0) + 1;
var itsmozillacompat = foropera.indexOf("mozilla",0) + 1;
var itsmsie = foropera.indexOf("msie",0) + 1;

        if (itsopera > 0){
                //thebrowser = 3;
                //alert("its opera");
                isNS = true
        }


        if (itsmozillacompat > 0){
                //alert("its mozilla compatible");
                if (itsgecko > 0) {
                       //thebrowser = 4
                       // alert("its gecko");
                       isNS= true
                       document.all = document.getElementsByTagName("*");

                }
                else if (itsmsie > 0) {
                      //  alert("its msie");
                       // thebrowser = 2
                        isIE = true
                }
                else {
                                isNS = true
	                }

   }


// Global object used to share parameters between functions
var dragobject = new Object();


// Show the popup div
function showpopup(event, id) {

  var x, y;

  dragobject = document.getElementById(id);

  // Get cursor position in page, to display pop at that location.


  if (isIE) {
    x = window.event.clientX + document.documentElement.scrollLeft
      + document.body.scrollLeft;
    y = window.event.clientY + document.documentElement.scrollTop
      + document.body.scrollTop;
  }
  if (isNS) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
  }

  dragobject.cursorx0 = x;
  dragobject.cursory0 = y;  
  
  //alert("Test of the ID:"+" "+id); <!-- To check the ID that gets picked up -->
  //alert("Test of x and y coordinates:"+" "+x+" "+y); <!-- To check the x and y coordinates -->

  // Set initial position of popup to cursor, but add 10px to y (vertical), to move just below link line that opens popups
  dragobject.style.left = x + "px";
  dragobject.style.top  = y + 10 + "px";
  dragobject.style.display='block';
}

function closepopup(item) {

  document.getElementById(item).style.display = "none";
  
 // alert ('dragobject.style.left='+dragobject.style.left);

  }

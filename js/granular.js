//Aim: is to smooth scroll our page to the correct section when a button is clicked.//

//$("element we want to effect").action we want("what we want to change", "How we want to change it");//

//step 1: attach a click event listener to the arrow buttons
$(".scroll-to").on("click",function(){

//step 2: find the id of the section that we want to scroll to and store it.

  //This is what we started with: var sectionName = "#first-section"
  //To make our code dynamic and portable, we need to change the value of our variable sectionName. Ideally we want to grab the href attribute of whichever anchor tag has been clicked on. The href stores the section that we need to scroll to.

  //We use jquery's keyword 'this' in order to access the element that has been clicked on.
  //to access the elements attributes, we use the .attr action. This takes one value - the name of the attribute we want to access. We're looking for the href, so we add this as a string - "href"

  var sectionName = $(this).attr("href")
  console.log(sectionName);

//step 3: using the section id, store how many pixels from the top this is.

  //The offset action allows us to retrieve the current position of an element relative to our page - note we need () to complete this action.

  //We need to specify where we want to measure from, so we use .top.

  //using these in combination give us a number, which changes depending on the browser height, but always points to the exact locaiton of the section specified.

var sectionPlacement = $(sectionName).offset().top;
//console.log prints things out to the console found in our browser
console.log(sectionPlacement);

//step 4: animate or smoothly scroll our page to this section.

  //First we select our entire page, as we want everything to move downwards to where the section is placed. To do this we add "html, body"

  //.animate allows us to animate different properties. It takes the following values, property to animate, duration, easing & completion. We only need to use the first two.

  //We need to move the vertical scroll bar to the position of our section. scrollTop allows us to do this. We add this as the first value, as this is what we want to animate. It takes one value, the pixel height that the scroll bar should be set to.

  //We use 1000 as the duration for the animation, measured in milliseconds.
$("html, body").animate({scrollTop: sectionPlacement }, 1000);

//step 5: stop the section from flashing before our animation takes place.
  // to stop our lins from jumping to the section, we use return false. This stops the 'i.m done - carry on with your default beahviour' message being sent back to the anchor tag.
return false;

});

//$(".scroll-to").on("click",function(){
//var sectionName = $(this).attr("href")
//var sectionPlacement = $(sectionName).offset().top;
//console.log(sectionPlacement);
//$("html, body").animate({scrollTop: sectionPlacement }, 1000);
//return false;

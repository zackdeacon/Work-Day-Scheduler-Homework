var dateDisplay = $("#currentDay");
var realTime = moment().hours();
var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven");
var twelve = $("#twelve");
var one = $("#one");
var two = $("#two");
var three = $("#three");
var four =$("#four");
var five = $("#five");
var words;
var inputArray = [9,10,11,12,13,14,15,16,17]
var divArray = [nine, ten, eleven, twelve, one, two, three, four, five]
console.log(realTime);

//TODO: create timeblocks and current date divs that auto populate when the calendar is opened up
dateDisplay.append(moment().format('dddd, MMMM Do YYYY'));

//color code 1 hour time blocks. use background color 
    //green = future hours
    //blue = current hour
    //red = past hours 

for (var i = 0; i < 9; i++) {
 if (realTime === inputArray[i]) {
     $(divArray[i]).addClass("present");
 } else if (realTime > inputArray[i]) {
     //append to div and add class past
     $(divArray[i]).addClass("past"); 
} else {
     //append to div and add class future
     $(divArray[i]).addClass("future");
    }
}

$(document).ready( function() {
    savedText();
})

$(".saveBtn").click(function(){
words = $(this).siblings(".input").val();
console.log(words);
hourInfo = $(this).siblings(".hour").text();
console.log(hourInfo);
localStorage.setItem(hourInfo, JSON.stringify(words));

savedText();
//need to fire color change function 
//need to fire function to retrieve local storage 

})

function savedText () {
    var wordsNine = JSON.parse(localStorage.getItem("9:00 am"));
    $("#nine").val("");
    $("#nine").val(wordsNine);

    var wordsTen = JSON.parse(localStorage.getItem("10:00 am"));
    $("#ten").val("");
    $("#ten").val(wordsTen);

    var wordsEleven = JSON.parse(localStorage.getItem("11:00 am"));
    $("#elevin").val("");
    $("#elevin").val(wordsEleven);

    var wordsTwelve = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#twelve").val("");
    $("#twelve").val(wordsTwelve);

    var wordsOne = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#one").val("");
    $("#one").val(wordsOne);

    var wordsTwo = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#two").val("");
    $("#two").val(wordsTwo);

    var wordsThree = JSON.parse(localStorage.getItem("9:00 am"));
    $("#three").val("");
    $("#three").val(wordsThree);

    var wordsFour = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#four").val("");
    $("#four").val(wordsFour);

    var wordsFive = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#five").val("");
    $("#five").val(wordsFive);



}

//.sibling method to access sibling in click event listener. this.sibling(input type) grab value and id to send to local storage.
//when retrieve from local storage can set text content to value 
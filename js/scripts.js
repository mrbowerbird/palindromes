$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#words").val();
    var ifPalindrome = userInput.split("");

    console.log(ifPalindrome);
    // userInput
    });
  });

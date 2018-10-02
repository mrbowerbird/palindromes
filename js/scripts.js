$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#words").val();
    var ifPalindrome = userInput.split("");

    // var ifPalindrome2 = ifPalindrome.map(results.reverse());
    var ifPalindrome2 = ifPalindrome.map(function(number) {
  return number;
});


    ifPalindrome2.reverse();
    // ifPalindrome.toString();
    // ifPalindrome2.toString();



    if (ifPalindrome.toString() === ifPalindrome2.toString()) {
      alert("that's a palindrome!!");
    }
    else {
      alert("that's NOT a palindrome!!");
    };

    });
});

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#words").val();
    var ifPalindrome = userInput.split("");

    ifPalindrome = ifPalindrome.filter(function(str)
  {
    return /\S/.test(str);
  });


    // var ifPalindrome2 = ifPalindrome.map(results.reverse());
    var ifPalindrome2 = ifPalindrome.map(function(word) {
  return word;
});


    ifPalindrome2.reverse();
    // ifPalindrome.toString();
    // ifPalindrome2.toString();



    if (ifPalindrome.toString().toUpperCase() === ifPalindrome2.toString().toUpperCase()) {
      alert("that's a palindrome!!");
    }
    else {
      alert("that's NOT a palindrome!!");
    };

    });
});

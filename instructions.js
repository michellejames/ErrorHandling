Troubleshooting in JS

There are 16 errors in the main.js file.

Find them and fix them using the console log, google, and the following information:

1) The page should load showing a button
2) Clicking the button should make bubbles appear and go up the page in different directions at different speeds
3) Clicking the button should also show text
4) This assignment will also test your ability to notice things that don't belong by piecing
  together what someone else's code does... (ooooo mysterious!)

Extra Credit – If you can tell me WHY the console log causes issues AND the term
  we use to refer to the concept behind this issue, I’ll give you +5 points to
  your grade on this assignment.
Extra Credit – IF you’ve found all 16 issues and solved them, add the line for Strict Mode
  to the top of your file. If you can tell me WHY you get the response you do
  just by adding that line, AND why it wasn’t that way before that line was added,
  I’ll give you +5 points to your grade on this assignment. (Hint: google it ;-) )



Researching in JS
Answer each of the following in the area provided BELOW the questions (for ease of reading)
1)	Research how to shuffle the letters in a word so that it’s randomly done each
    time it’s run. Copy/Paste the code you find and a link to the page where you found it.
2)	This is a common JS test, but I’m not going to tell you the name. I will give you
    the test, and you should do the following:
        a.	Tell me the name of the test.
        b.	Give me the most efficient answer you can.
        c.	Link me to where you found your answer. (There are entire pages devoted to
            solving this test as efficiently as possible.

    The Test Question: Write a program that prints the numbers from 1 to 100.
    But for multiples of 7 print "Pop" instead of the number and for the multiples
    of 11 print "Whack". For numbers which are multiples of both 7 and 11 print
    "PopWhack".

3)  Research code to validate an email address. Copy/Paste the code you find, the name of
    the process used to validate it, and a link to where you found your answer.
4)  Find the Browser Compatibility Information for the Window''s Outer Width method from mozilla.
    List it below and a link to the page where you found.



ANSWERS
1) Shuffle
    Code:
    String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
    }
    console.log("ABCDEFG".shuffle());

    // Link: http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
2) Common Test
    Name: FizzBuzz Test
    Code:
    for (var i=1; i <= 20; i++) }
      if (i % 15 == 0)
          console.log("FizzBuzz");
      else if (i % 3 == 0)
          console.log("Fizz");
      else if (i % 5 == 0)
          console.log("Buzz");
      else
          console.log(i);
    }

    Link: //www.gist.github.com/jaysonrowe/1592432
    Second Link: //www.codingbat.com/doc/practice/fizzbuzz-code.html
3) Email Validation
    Name: Regular Expression Test or Regex Test
    Code: function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#result").text(email + " is valid :)");
    $("#result").css("color", "green");
  } else {
    $("#result").text(email + " is not valid :(");
    $("#result").css("color", "red");
  }
  return false;
}

$("#validate").bind("click", validate);

    Link: //www.stackoverflow.com/questions/46155/validate-email-address-in-javascript
    Second Link: //www.regexplanet.com/advanced/java/index.html
4) Window Outer Width
    Info: 1.0

    Link: //www.w3schools.com/jsref/prop_win_outerheight.asp

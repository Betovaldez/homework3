var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

                /* Below are the lists of characters can be choosen for passwords*/
// List of special characters 
lespecialchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// List of numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// List of alphabetical characters
lettlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
space = [];
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
lettlower2 = lettlower.map(toUpper);


// Start function to generate password
function generatePassword() {
    // Asks for user input
    var myoption = parseInt(prompt("Enter number of characters for your password"));
    // First if statement for user validation 
    if (!myoption) {
        alert("This needs a value");
    } else if (myoption < 8 || myoption > 128) {
        // Validates user input
        // Start user input prompts
        alert("Please enter a valid number")
        return invalid_number;
    }else {
        // Continues once user input is validated
        var stmnumber = confirm("Will this contain numbers?");
        var stmcharacter = confirm("Will this contain special characters?");
        var stmUppercase = confirm("Will this contain Uppercase letters?");
        var stmLowercase = confirm("Will this contain Lowercase letters?");
    };


    // Message if any option was selected
    if (!stmcharacter && !stmnumber && !stmUppercase && !stmLowercase) {
        choices = alert("Invalid! Please choose an option");

    }
    
    // Statement If 4 options were selected in the password
    else if (stmcharacter && stmnumber && stmUppercase && stmLowercase) {

        choices = lespecialchar.concat(number, lettlower, lettlower2);
    }
    // Statement If 3 options were selected in the password
    else if (stmcharacter && stmnumber && stmUppercase) {
        choices = lespecialchar.concat(number, lettlower2);
    }
    else if (stmcharacter && stmnumber && stmLowercase) {
        choices = lespecialchar.concat(number, lettlower);
    }
    else if (stmcharacter && stmLowercase && stmUppercase) {
        choices = lespecialchar.concat(lettlower, lettlower2);
    }
    else if (stmnumber && stmLowercase && stmUppercase) {
        choices = number.concat(lettlower, lettlower2);
    }
    // Statement If 2 options were selected in the password 
    else if (stmcharacter && stmnumber) {
        choices = lespecialchar.concat(number);

    } else if (stmcharacter && stmLowercase) {
        choices = lespecialchar.concat(lettlower);

    } else if (stmcharacter && stmUppercase) {
        choices = lespecialchar.concat(lettlower2);
    }
    else if (stmLowercase && stmnumber) {
        choices = lettlower.concat(number);

    } else if (stmLowercase && stmUppercase) {
        choices = lettlower.concat(lettlower2);

    } else if (stmnumber && stmUppercase) {
        choices = number.concat(lettlower2);
    }
    // Statement If 1 option was selected in the password
    else if (stmcharacter) {
        choices = lespecialchar;
    }
    else if (stmnumber) {
        choices = number;
    }
    else if (stmLowercase) {
        choices = lettlower;
    }
    else if (stmUppercase) {
        choices = space.concat(lettlower2);
    };

    // Array where passowrd length will be held 
    var password = [];

    // This for will generate random selection for each variables: 
    for (var i = 0; i < myoption; i++) {
        var echarac  = choices[Math.floor(Math.random() * choices.length)];
        password.push(echarac);
    }
    // Here the each variable will be converted into a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
  }
// To show the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
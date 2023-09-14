

let customer = prompt("What's your name?");

let greeting = "Welcome, " + customer + "! ";

document.write(greeting);



addEventListener("load", (event) => {});

onload = (event) => {

let message;
    
let time = prompt("What hour is it? (24 hour clock please)");



if (time < 8) { message = "We don't open until 8 o'clock, enjoy looking at our goods until then.";
    
} else if (time > 24) { message = "I don't recognise that time but we're open 8 am to 9 pm.";

} else if (time > 21) { message = "Sorry we closed at 9 o'clock, these wonderful products could have been yours.";

} else if (time <= 21) { message = "We're open! Spend to your heart's content!";

} else { message = "I don't recognise that time but we're open 8 am to 9 pm.";

}

window.alert(message);

};


var nameinput = prompt("What is your name?");
if (nameinput == null || nameinput=="") {
    txt = "No Name Provided";
} 
else {
    txt="Hello, " + nameinput + "!";
}
alert(txt);
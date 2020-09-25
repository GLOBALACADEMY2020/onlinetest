var fss = false;
var str = "";

function setup() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    event.preventDefault()
    console.log(document.location.href);
    str = document.location.href;
    str = str.split("?")
    console.log(str.length);
    if (str.length > 1) {
        document.getElementById("iframee").src = "https://forms.office.com/Pages/ResponsePage.aspx?id=" + str[1];
        document.getElementById("iframee").style.visibility = "visible";
        document.getElementById("inputt").style.display = "none";
        document.getElementById("butt").style.display = "none";
        document.getElementById("hhhh").style.display = "none";
        document.getElementById("jdioj").style.display = "none";
        document.getElementById("jhfj").style.display = "none";
        // document.getElementById("iframee").style.display = "unset";
        // document.getElementById("iframee").style.height = "100%";
        // document.getElementById("iframee").style.width = "95%";

        fss = true;
    }

}

function next() {
    var inputt = document.getElementById("inputt");

    console.log(inputt.value);

    var person = prompt("Please enter your name or email", " ");
    if (person != null) {
        if (localStorage.getItem(inputt.value) == person) {
            alert("you have already given the test");
            console.log("yes");
            console.log(localStorage.getItem(inputt.value))

        } else {
            localStorage.setItem(inputt.value, person);
            console.log("not");
            document.getElementById("iframee").style.visibility = "visible";
            document.getElementById("inputt").style.display = "none";
            document.getElementById("butt").style.display = "none";
            document.getElementById("iframee").src = "https://forms.office.com/Pages/ResponsePage.aspx?id=" + inputt.value;
            fss = true;
        }
    }

}

function off() {

}

function idd() {
    var strings = document.getElementById("inputtt").value;
    strings = strings.split("=")
    document.getElementById("hi").innerHTML = "https://globalacademy2020.github.io/glotechacademy?" + strings[1];
    var copyText = document.getElementById("hi");
    copyText.select;
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}

function out() {
    if (fss) {
        alert("DO NOT CHEAT");
    }

}
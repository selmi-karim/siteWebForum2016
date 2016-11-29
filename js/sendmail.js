function sendMail() {
    var link = "mailto:dhiahad@gmail.com"
             + "?cc=selmi.kerim@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape("hello")
    ;
window.alert(5645);
//escape(document.getElementById('myText').value)

    window.location.href = link;
}

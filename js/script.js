$(function(){
    $('#dove1 .dove').click(function(){
        $('#dove1 .dove').toggle();
    });

    $('#dove2 .dove2').click(function(){
        $('#dove2 .dove2').toggle();
    });

    $('#dove3 .dove3').click(function(){
        $('#dove3 .dove3').toggle();
    });
});
document.getElementById("submit").onclick=function(){
    var nam ="" 
    var ema =""
    nam =document.getElementById("name").Value
    ema =document.getElementById("email").Value
    alert("Hi"+nam + "we have verified  your email account "+ "please stay with us")
}

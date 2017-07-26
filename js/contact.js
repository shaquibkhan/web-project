$(document).ready(function(){


var contact=$('#contact');

contact.hover(function(){
		//$(this).css("background-color" , "#0074D9");
		$(this).css("box-shadow" , "0 32px 32px 0 rgba(0,0,0,0.10), 0 0 31px 0 rgba(0,0,0,0.10");
		$(this).css("font-weight" , "bold");
		}, function(){
		//$(this).css("background-color" , "transparent");
		$(this).css("box-shadow" , "0 0px 0px 0 rgba(0,0,0,0.14), 0 0 0px 0 rgba(0,0,0,0.14");
		$(this).css("font-weight" , "normal");
	})

var container=$('#container');
container.on("click" , function(){
	console.log("clicked");
})


    $("#contact").click(function(){
        $("h3").text("Email:-connectshaquib@gmail.com");
       
    });
     $("#contact").click(function(){
     	 $("h4").text("Mobile:- 91-9801963460");

});
 });
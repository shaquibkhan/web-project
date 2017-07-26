"use strict"

$(document).ready(function(){
	var resultList= $("#resultList");
resultList.text("Injected using jQuery");
var toggleButton= $("#toggleButton");
toggleButton.on("click", function (){
	console.log("Button clicked"); 
	//resultList.hide();
	resultList.toggle(1000);
	if (toggleButton.text()==="Show") {
		toggleButton.text("Hide");
	} else {
		toggleButton.text("Show");
	}
})
var results=[];


function displayResults(results){
		resultList.empty();

/*for (var i=0; i<results.length; i++){
	item= results[i]
}*/
$.each(results,function(i,item){
	var newResult=$("<div class='result'>"+
		"<div class='title'>" + item.title + "</div>" +
		"<div>" + "Level:" + item.level + "</div>" +
		"<div>" + "Total-Videos:" + item.total_videos + "</div>" +
		"<div>" + "Instructor:" + item.instructor + "</div>" +
		"</div>");

	resultList.append(newResult);

	newResult.hover(function(){
		$(this).css("background-color" , "#4285f4");
		//$(this).css("color" , "#ef6c00");
		$(this).css("font-weight" , "bold");
		$(this).css("border-color" , "green");
		$(this).css("box-shadow" , "0 4px 4px 0 rgba(0,0,0,0.24), 0 0 4px 0 rgba(0,0,0,0.14");
		
	}, function(){
		$(this).css("background-color" , "transparent");
		//$(this).css("color" , "black");
		$(this).css("font-weight" , "normal");
		$(this).css("border-color" , "#999");
		$(this).css("box-shadow" , "0 8px 8px 0 rgba(0,0,0,0.28), 0 0 8px 0 rgba(0,0,0,0.28");
	}



	)
})

}

$('#loginForm').on("submit",function(){
	var username= $('#username').val();
	var password= $('#password').val();

	if(username && password){
		$.post("/api/login",{},function(data){
		console.log("SUCCESS :"+data);
		displayResults(data);

		$('#loginForm').hide();
		$('#logOutSection').show();
		$('#errorMsg').empty();
		
	})
	.fail(function(data){
		$('#errorMsg').text("Something BAD happened");
	})
	
	.done(function(){

	})
} else{
	$('#errorMsg').text("Username & Password are  mandatory !");
	}
	return false;
});
	$('#logOutButton').on('click',function(){
		$('#loginForm').show();
		$('#logOutSection').hide();
		resultList.empty();
		resultList.text("Please Login in order to see the courses");
	})
	
});



/*var msg='Hello';
    	console.log(msg);
    	var resultsDiv=document.getElementById("results");
    	console.log(resultsDiv); 
    	resultsDiv.innerHTML= "<p>Message injected by JS <p>";
    		
//Object Literal (K ,V)
var result = {
	title: "web-app",
	instructor: "shaquib",
	level:"beginner"

};

console.log(result);
result.location="patna";
result.showTotal=function(a,b){
	return a*b;
}
var arr=[
{
	title: "web-app",
	instructor: "shaquib",
	level:"beginner"
	
},
{
	title: "java",
	instructor: "shoaib",
	level:"beginner"
	
}];
arr.push(result);


var arr1=['shaquib',1721,{job:"web-developer"},]
 */
    	

let a=Math.floor(Math.random()*100);
let b=Math.floor(Math.random()*100);
let total=a+b;
document.getElementById("first").innerHTML=a;
document.getElementById("second").innerHTML=b;

function add()
{
	let guess=document.getElementById("guess").value;
	if(total==guess)
	{
		alert("Correct Answer");
		window.location.reload();
	}
	else if(guess=="")
	{
		alert("It must be filled out.");
	
	}
	else
	{
		alert("Wrong Answer.The correct answer is "+total);
		window.location.reload();

	}
}


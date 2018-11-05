document.getElementById("id_bussiness_version").innerHTML="Logic version: 2018.10.11.05.3";
window.addEventListener("deviceorientation" , on_device_orientation);
window.addEventListener("devicemotion" , on_device_motion);

//-----------
function  on_device_orientation(e)
{
	document.getElementById("id_alpha").innerHTML = e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gamma").innerHTML = e.gamma;

	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");

	let R=10;
	context.beginPath();
	context.arc(canvas.width/2 + e.gamma / 90 *(canvas.width/2 -R), canvas.height /2 + e.beta/90*(canvas.height/2-R),R,0,2*Math.PI);
	canvas.stroke(); 
}
//-----------

function on_device_motion(e)
{

	var acc_z = e.accelerationIncludingGravity.z;
	var acc_x = e.accelerationIncludingGravity.x;
	var acc_y = e.accelerationIncludingGravity.y;

	document.getElementById("id_acc_z").innerHTML = Math.round(acc_z*100)/100;
	document.getElementById("id_acc_x").innerHTML = Math.round(acc_x*100)/100;
	document.getElementById("id_acc_y").innerHTML = Math.round(acc_y*100)/100;

	document.getElementById("id_root_x").innerHTML = Math.round(Math.atan(acc_x / acc_z)*180 /Math.PI*100 )/100;
	document.getElementById("id_root_y").innerHTML = Math.round(Math.atan(acc_y / acc_z)*180 /Math.PI*100 )/100;

}
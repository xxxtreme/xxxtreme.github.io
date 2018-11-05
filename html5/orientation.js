document.getElementById("id_bussiness_version").innerHTML="Logic version: 2018.10.11.05.0";
window.addEventListener("deviceorientation" , on_device_orientation);
window.addEventListener("devicemotion" , on_device_motion);

//-----------
function  on_device_orientation(e)
{
	document.getElementById("id_alpha").innerHTML = e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gamma").innerHTML = e.gamma;

	var canvas = docuent.getElementById("id_canvas");
	var context = canvas.getContext("2d");

	context.beginPath();
	context.arc(canvas.width/2 + e.gamma / 90 *canvas.width/2 -R), canvas.height /2 + e.betta/90*(canvas.height/2-R),R,0,2*Math.PI);
	canvas.stroke(); 
}
//-----------

function on_device_motion(e)
{

	document.getElementById("id_acc_z").innerHTML = e.accelerationIncludingGravity.z;
	document.getElementById("id_acc_x").innerHTML = e.accelerationIncludingGravity.x;
	document.getElementById("id_acc_y").innerHTML = e.accelerationIncludingGravity.y;

}
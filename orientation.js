document.getElementById("id_bussiness_version").innerHTML="Logic version: 2018.10.29.1";
window.addEventListener("deviceorientation" , on_device_orientation);
//-----------
function  on_device_orientation(e)
{
	documnet.getElementById("id_alpha").innerHTML = e.alpha;
	documnet.getElementById("id_beta").innerHTML = e.beta;
	documnet.getElementById("id_agamma").innerHTML = e.gamma;
}
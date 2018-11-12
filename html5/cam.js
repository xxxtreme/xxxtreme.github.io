document.getElementById("id_bussiness_version").innerHTML="Logic version: 2018.11.12.0";
document.getElementById("id_button").addEventListener("cick", start);


//---------
function on_success(e)
{
	document.getElementById("id_video").srcObject = e;
}
//---------
function on_failure(e)
{
	alert("cannot read camera");

}
//---------
function start()
{
	var c = {audio: true, video = true};
	navigator.mediaDevices.getUserMedia().then(on_success).catch(on_failure);
}
//---------
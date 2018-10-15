document.getElementById("id_bussiness_version").innerHTML ="Bussiness version:2018.10.15.0";

function rezolva()
{
	var a =document.getElementById("id_a").value;
	var b =document.getElementById("id_b").value;
	var c =document.getElementById("id_c").value;

	var delta =b*b -4*a*c;
	var x1_re, x2_re, x1_im, x2_im;
	if (delta>=0){
		var x1_re = (-b+ Math.sqrt(delta))/(2*a);
		var x2_re = (-b- Math.sqrt(delta))/(2*a);
		x1_im=x2_im=0;
	}
	else {
		x1_re = -b/ (2*a);
		x1_im=Math.sqrt(-delta)/(2*a);
		x2.re = -b/ (2*a);
		x2_im=-Math.sqrt(-delta)/(2*a);
	}
	document.getElementById("id_x1").innerHTML=x1_re +"+"+x1_im + "i";
	document.getElementById("id_x2").innerHTML=x1_re +"+"+x2_im + "i";
}
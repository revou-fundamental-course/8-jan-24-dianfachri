function hitungLuas(){
    sisi=document.getElementById("sisi").value;
    if (sisi == ""){
  alert("Nilai Sisi Harus diisi !");
   return;
    }
    Luas = sisi * sisi;
    document.getElementById("HasilHitung").innerHTML = "L = S x S <br>L = " + sisi + " x " + sisi +"<br>L = " + Luas;
}
function Reset(){
  document.getElementById("HasilHitung").innerHTML ="";
  document.getElementById("HasilHitungKeliling").innerHTML ="";
  document.getElementById("sisi").value="";
  document.getElementById("sisi2").value="";
}
function luasPersegi(){
  document.getElementById("luasPersegi").style.display="block";
  document.getElementById("kelilingPersegi").style.display="none";
  document.getElementById("btnkeliling").style.backgroundColor="lightgrey";
  document.getElementById("btnluas").style.backgroundColor="rgb(40, 68, 95)";
  document.getElementById("btnluas").style.color="white";
  document.getElementById("btnkeliling").style.color="rgb(40, 68, 95)";
  
}
function kelilingPersegi(){
  document.getElementById("luasPersegi").style.display="none";
  document.getElementById("kelilingPersegi").style.display="block";
  document.getElementById("btnluas").style.backgroundColor="lightgrey";
  document.getElementById("btnkeliling").style.backgroundColor="rgb(40, 68, 95)";
  document.getElementById("btnkeliling").style.color="white";
  document.getElementById("btnluas").style.color="rgb(40, 68, 95)";

}
function hitungKeliling(){
  sisi2=document.getElementById("sisi2").value;
  if (sisi2 == ""){
alert("Nilai Sisi Harus diisi !");
 return;
  }
  Keliling = 4 * sisi2;
  document.getElementById("HasilHitungKeliling").innerHTML = "K = 4 x S <br>K = " + 4 + " x " + sisi2 +"<br>K = " + Keliling;
}
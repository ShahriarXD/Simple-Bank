// ================LOGIN HANDELLER=====================
var a = document.querySelector("#xnxx");
a.addEventListener("click",function(){
  var xx = document.querySelectorAll("div")[0];
  xx.style.display = "none";
  var rafin = document.querySelector("#rafin");
  rafin.style.display="none"
  var yy = document.querySelectorAll("div")[1]
  yy.style.display = "block"
}
)
// ================LOGIN HANDELLER ENDS=====================

//==================================time=======================
const d = new Date();
document.getElementById("looool").innerHTML = d;
// =================================time ends==================

// =======================DEPOSITE AREA===============================
var depositebtn = document.querySelectorAll("button")[1];
depositebtn.addEventListener("click",function(){
  var inpt1 = document.querySelectorAll("input")[3].value;
  var intconvert = parseFloat(inpt1);
  var depositeammountase = document.querySelector("#currentAmount").innerText;
  var intconvert1 = parseFloat(depositeammountase);
  var Final = intconvert + intconvert1;
  var depositeammountase1 = document.querySelector("#currentAmount")
  depositeammountase1.innerHTML = Final;
  document.querySelectorAll("input")[3].value = "";

  // ================MAIN BALANCE UPDATE AREA=============================
  var mainBalance = document.getElementById("existingBalance").innerText;
  var intconvert2 = parseFloat(mainBalance);
  Final1 = intconvert2 + intconvert
  var mainBalance1 = document.getElementById("existingBalance");
  mainBalance1.innerHTML=Final1;
})
// =======================DEPOSITE AREA ENDS===========================

// =======================WITHDRAW AREA=================================
var withdrawArea = document.querySelectorAll("button")[2];
withdrawArea.addEventListener("click", function () {
  var withdarwinput = document.querySelectorAll("input")[4].value;
  var intconv = parseFloat(withdarwinput);
  var accesingvalue = document.querySelector("#WithdrawAmount").innerText;
  var intconv1 = parseFloat(accesingvalue);
  var accesingvalue1 = document.querySelector("#WithdrawAmount");
  FinalBoss = intconv + intconv1;
  accesingvalue1.innerHTML = FinalBoss;
  var again = document.getElementById("existingBalance").innerText;
  var inti = parseFloat(again);
  var sexy1 = inti - intconv;
  var again1 = document.getElementById("existingBalance");
  again1.innerHTML = sexy1;
  document.querySelectorAll("input")[4].value = "";
})
// =======================WITHDRAW AREA ENDS============================


// ===================================LOGOUT AREA========================
var logout1 = document.querySelector("#xnxx");
logout1.addEventListener("click", function () {
  var xx1 = document.querySelector("#rafin");
  xx1.style.display = "none";
}
)
var logout11 = document.querySelectorAll("button")[3];
logout11.addEventListener("click", function () {
  var xx33 = document.querySelectorAll("div")[1];
  xx33.style.display = "none";
  var xx11 = document.querySelector("#rafin");
  xx11.style.display = "block";
}
)
// ==============================LOGOUT AREA ENDS========================
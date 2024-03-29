window.setTimeout("time()", 1000);

function time() {
  var time = new Date();
  setTimeout("time()", 1000);
  document.getElementById("hour").innerHTML = waktu.getFullYear();
  document.getElementById("minute").innerHTML = waktu.getMinutes();
  document.getElementById("second").innerHTML = waktu.getSeconds();
}

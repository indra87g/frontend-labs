function loadContent() {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users/petanikode";

  xhr.onloadstart = function () {
    document.getElementById("button").innerHTML = "Loading...";
  };

  xhr.onerror = function () {
    alert("Error");
  };

  xhr.onloadend = function () {
    if (this.responseText !== "") {
      var data = JSON.parse(this.responseText);
      var img = document.createElement("img");
      img.src = data.avatar_url;
      var name = document.createElement("h3");
      name.innerHTML = data.name;

      document.getElementById("done").append(img, name);
      document.getElementById("button").innerHTML = "Done";

      setTimeout(function () {
        document.getElementById("button").innerHTML = "Load Again";
      }, 3000);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

function clearResult() {
  document.getElementById("done").innerHTML = "";
}

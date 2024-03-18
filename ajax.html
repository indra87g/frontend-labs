<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Belajar Dasar Ajax</title>
</head>

<body>
    <h1>Tutorial Ajax <button id="btn-clear" onclick="clearResult()">Clear</button></h1>
    <div id="hasil"></div>
    <button id="button" onclick="loadContent()">Load Content</button>

    <script>
        function loadContent() {
            var xhr = new XMLHttpRequest();
            var url = "https://api.github.com/users/petanikode";

            xhr.onloadstart = function () {
                document.getElementById("button").innerHTML = "Loading...";
            }

            xhr.onerror = function () {
                alert("Gagal mengambil data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.avatar_url;
                    var name = document.createElement("h3");
                    name.innerHTML = data.name;

                    document.getElementById("hasil").append(img, name);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                        document.getElementById("button").innerHTML = "Load Lagi";
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }

        function clearResult() {
            document.getElementById("hasil").innerHTML = "";
        }
    </script>
</body>
</html>
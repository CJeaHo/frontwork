function test() {
   window.alert("별도로 작성된 js파일");
}

var btn = document.getElementById("btn");

btn.onclick = function() {
   console.log("별도로 작성된 js파일");
}


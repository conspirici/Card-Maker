
var div = document.getElementById("mydiv")
var color = document.getElementById("color");
var textcolor = document.getElementById("textcolor");
var text = document.getElementsByClassName("text");
var download = document.getElementById("download-btn");

textcolor.addEventListener('change', function() {
  var col = textcolor.value;
  div.style.color = col;
});

color.addEventListener('change', function() {
  var cl = color.value;
  div.style.backgroundColor = cl;
});

download.addEventListener('click',downloadAsImg);

function downloadAsImg() {
  html2canvas(div)
    .then(canvas=>{
      var image = canvas.toDataURL("image/png");
      var filename = "card.png";
      var link = document.createElement("a");
      link.href = image;
      link.download = filename;
      link.click();
    })
    .catch((error) => {
      console.error("Error downloading image:", error);
    });
}
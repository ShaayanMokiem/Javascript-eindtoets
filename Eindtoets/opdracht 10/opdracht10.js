Counters = 0;
Colors = 0;
const array = [];
var Random = 0;

for (i = 1; i <= 49; i++) {
  Random = Math.floor(Math.random() * 900) + 100;
  array.push(Random);
}

document.addEventListener("click", function (event) {
  if (event.target.id == "button-1" && Counters <= 48) {
    for (i = 0; i <= 48; i++) {
      Counters++;
      Colors++;

      var div = document.createElement("div");
      div.style.width = "181px";
      div.style.height = "100px";
      div.innerHTML = array[i];

      if (Colors == 1) {
        div.style.background = "blue";
      }

      if (Colors == 2) {
        div.style.background = "green";
      }

      if (Colors == 3) {
        div.style.background = "yellow";
      }

      if (Colors == 4) {
        div.style.background = "purple";
      }

      if (Colors == 5) {
        div.style.background = "red";
        Colors = 0;
      }
      div.innerHTML = array[i];
      div.className = "container__item";
      document.getElementsByClassName("container")[0].appendChild(div);
    }
    var containerItems = document.getElementsByClassName("container__item");
    console.log(containerItems);
  }
});
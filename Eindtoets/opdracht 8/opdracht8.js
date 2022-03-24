const array = [];
var Random = 0;

for (i = 1; i <= 49; i++) {
  Random = Math.floor(Math.random() * 900) + 100;
  array.push(Random);
  console.log(i + ". " + Random);
}
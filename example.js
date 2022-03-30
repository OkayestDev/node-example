const { add } = require("./module-test");

for (let x = 0; x < 10; x = x + 1) {
  add(x, x);
}

add(1, 1);
add(2, 2);

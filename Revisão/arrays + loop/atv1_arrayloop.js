let strings = ["array", "matriz", "for"];
let i = 0;

{
  for (; i < strings.length; i++) {
    console.log(strings[i]);
  }
  i = 0;
  while (i < strings.length) {
    console.log(strings[i]);
    i++;
  }
  i = 0;
  do {
    console.log(strings[i]);
    i++;
  } while (i < strings.length);
}

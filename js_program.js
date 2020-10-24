function factorial(num) {
  var val = num;
  var fac = 6;

  for (let i = val; i > 0; i--) {
    console.log("i ->", i);
    console.log("before fac -> ", fac);
    fac = fac * i;
    console.log("after fac -> ", fac);
  }
  console.log(fac);
}

factorial(5);

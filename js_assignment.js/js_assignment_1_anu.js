 // 1
function test1(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}
console.log(test1(10));
console.log(test1(11));
console.log(test1(12));
console.log(test1(13));

// 2.
// for ( var i = 1; i <= 40; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }

// 3.
// var a = this is my site
// reverse(a);
// function reversed ='';
// for (let i = a; i >=0;  i--){
//   reversed = reversed += str[i];
// }
// console.log(reversed);

// 6.
// function status(totmarks,is_exam)
//   {
//   if (is_exam) {
//     return totmarks >= 90;
//   }
// else(totmarks >= 89 && totmarks <= 100);
//  }

// console.log(status("78", " "));
// console.log(status("89", "true "));
// console.log(status("99", "true "));

// 7.
// function check(str)
// {
//   if (str.length < 4)
//   {
//     return false;
//   }
//   front = str.substring(0, 4);
//   if (front == 'Java') 
//   {
//     return true;
//   }
//    else 
//    {
//     return false;
//   }
// }
// console.log(check("Java"));
// console.log(check("Python"));



 // 8.
// var x =63;
// if(x%2 == 0){
//   // even
//   console.log(`${x} even number`);
// }else{
//   // odd
//   console.log(`${x} odd number `);
// }

// 9.
// function factorial(num) {
//   var val = num;
//   var fac = 1;

//   for (let i = val; i > 0; i--) {
//        fac = fac * i;
//   }
//   console.log(fac);
// }
// factorial(4);

// 10
// var fib = (n) => {
//   var fibarray =[0,1];{}
//   for(var i=2; i<=n; i++){
//     fibarray.push(fibarray[i-2] + fibarray[i-1]);

//   }
// return fibarray;
// }
// console.log(fib(10));


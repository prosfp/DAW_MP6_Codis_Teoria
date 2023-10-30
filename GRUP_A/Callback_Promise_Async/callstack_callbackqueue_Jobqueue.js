function f1() {
 console.log('f1');
}

function f2() { 
    console.log('f2');
}

function f3() { 
    console.log('f3');
}

function main() {
  console.log('main');

  setTimeout(f1, 5000);
  setTimeout(f3, 3000);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after f1 and f3! Really?')
  ).then(resolve => console.log(resolve));
    
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  f2();
}

main();
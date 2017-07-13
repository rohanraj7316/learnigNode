function resolveAfter2Seconds(x) {
  console.log('2 sec');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 6000);
  });
}

function resolveAfter3Seconds(x) {
  console.log('3 sec');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 3000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  var y = await resolveAfter3Seconds(20);
  console.log('hii');
  console.log(x,' ',y); // 10
}
f1();

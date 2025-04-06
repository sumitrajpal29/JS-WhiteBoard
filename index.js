// This p1 is showing error,
//  while it's not passed in the Promise.any()
// Because promises execute immediately when they are created,
// regardless of whether they are used later or not.
// To avoid this, you can wrap it in a function or attach .catch

const p1 = new Promise((resolve, reject) => { setTimeout(reject("p1 failed"), 1000) });

const p2 = new Promise((resolve, reject) => { setTimeout(resolve("p2 success"), 1000) });

function p3() {
    return new Promise((resolve, reject) => setTimeout(resolve("p3 success"), 1000));
}

const promise = p3();

Promise.any([p3(), p2])
    .then((ans) => console.log(ans))
    .catch((err) => console.log(err));
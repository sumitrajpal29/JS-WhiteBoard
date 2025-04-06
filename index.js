// See the diff in output of hello and hello2
// await suspends the function until promise is not resolved
// run hello, then hello2 and then run both. See the diff.

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 5000);
});

async function hello() {
    console.log(await pr)
    console.log("First")
};

function hello2() {
    pr.then(res => {
        console.log(res);
    })
    console.log("Second")
};

hello();
hello2();
const promise = new Promise((resolve) => {
    console.log("Promise started");
    setTimeout(() => resolve("Promise resolved"), 1000);
});

async function withAwait() {
    console.log("Before await");
    const result = await promise;
    console.log("After await:", result);
}

function withThen() {
    console.log("Before then");
    promise.then((result) => {
        console.log("Inside then:", result);
    });
    console.log("After then");
}

withAwait();
withThen();
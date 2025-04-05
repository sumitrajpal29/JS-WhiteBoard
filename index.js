purchase(true, second)
    .catch(err => {
        console.log(err);
    });

function purchase(valid, callback) {
    const promise = new Promise((resolve, reject) => {
        if (valid) resolve('Purchased!');
        else reject('Invalid purchase!!!');
    });

    // If a callback is provided, invoke it when the promise resolves
    if (callback) {
        promise.then(callback);
    }

    return promise;
}

function second(output) {
    console.log(output);
};
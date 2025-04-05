// Look at both the commented lines,
// both are correct try to understand WHY? 
// Remember these functions return promise object.
purchase(true)
    .then((oId) => { return proceedToPayment(oId) })
    // .then((oId) => proceedToPayment(oId))
    // .then(proceedToPayment)
    .then(second)
    .catch(err => {
        console.log(err);
    });


function proceedToPayment(orderId) {
    return new Promise((res, rej) => {
        if (orderId)
            res(orderId * 10);
    });
}

function purchase(valid, callback) {
    const promise = new Promise((resolve, reject) => {
        if (valid) resolve(11);
        else reject('Invalid purchase!!!');
    });

    return promise;
}

function second(output) {
    console.log(output);
};
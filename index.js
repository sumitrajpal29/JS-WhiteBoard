const URL = "https://fakestoreapi.com/products";

async function getUser() {
    try {
        const response = await fetch(URL);
        // because fetch returns a Response object
        const value = await response.json();
        console.log(value[8]);
        console.log("This will be skipped if catch err");
    }
    catch (err) {
        console.log("This is the error:", err);
    }
}

getUser()
// .catch(err => console.log("This is the error:", err));
// Traditional method
// Instead of try-catch block we can also attach a .catch to function call,
//  because the async function returns a Promise object





// This is how it can be done using .then()

fetch(URL)
    .then((response) => response.json())
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
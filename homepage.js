let users = [];
let products = [];


fetch("./data.json").then(res => res.json())
    .catch(e => {
        window.location.href = "/login.html"
    })
    .then(jsonData => {
        users = jsonData.users;
        products = jsonData.products;
        createProductCards()
    });


function getUserDetailsByUserId(userId) {
    let a = users.filter(user => user._id === userId);
    return a[0];
}

function getProductById(productId) {
    let a = products.filter(product => product._id === productId);
    return a[0];
}

function calculateOverAllRating(product) {
    let ratings = product.ratings;
    let totalRating = 0;
    ratings.forEach((singleRating) => {
        totalRating = totalRating + singleRating.rate
    });
    return totalRating / ratings.length;
}

function getProductCard(productId) {

    const product = getProductById(productId);

    const finalObj = { productId: productId, product: product };

    const averageRating = calculateOverAllRating(product);

    const commentObjs = { comments: [] }

    for (let i = 0; i < product.ratings.length; i++) {
        let innerObj = {}
        const rating = product.ratings[i];
        const userDetails = getUserDetailsByUserId(rating.userId);
        innerObj.user = userDetails;
        innerObj.rate = rating.rate;
        innerObj.comment = rating.comment;
        commentObjs.comments.push(innerObj);
    }

    finalObj.comments = commentObjs;
    finalObj.averageRating = averageRating;

    return finalObj;
}



function printInnerHtmlOnePerson(personKey, objectName) {
    const keys = Object.keys(objectName);
    choosenPerson = objectName[personKey];
    var body = document.body;
    const newTable = document.createElement("table");
    const newLiEl = document.createElement("li");
    const currentPersonInfo = document.createTextNode(choosenPerson._id + "," +
        choosenPerson.username + "," +
        choosenPerson.email + "," +
        choosenPerson.password + "," +
        choosenPerson.createdAt + "," +
        choosenPerson.isLoggedIn);
    newLiEl.appendChild(currentPersonInfo);
    newTable.appendChild(newLiEl);
    body.appendChild(newTable);


}


function printInnerHtmlEveryPerson(objectName) {
    const keys = Object.keys(objectName);
    for (i in keys) {
        printInnerHtmlOnePerson(i, objectName);
    }
}




function exitToLoginPage() {
    window.location.href = "login.html"
}





function createProductCards() {
    var body = document.body;
    let mainDiv = document.createElement("div")
    mainDiv.className = "products"
    for (product of products) {
        let prodDiv = document.createElement("div")
        prodDiv.id = product._id;
        prodDiv.className = "product"
        let cardLink = document.createElement("a");
        cardLink.className = "product-link"
        cardLink.textContent = product.description
        let priceİnfo = document.createElement("h2");
        priceİnfo.className = "price-text";
        priceİnfo.innerHTML = product.price + "$";
        let cardImg = document.createElement("img")
        cardImg.className = "product-img"
        cardImg.src = product.image;
        cardLink.href = "product.html?id=" + product._id

        prodDiv.appendChild(cardImg);
        prodDiv.appendChild(cardLink);
        prodDiv.appendChild(priceİnfo)

        mainDiv.appendChild(prodDiv);

    }

    body.appendChild(mainDiv);


}














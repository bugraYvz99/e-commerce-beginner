const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]


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
    window.location.href = "index.html"
}


function printInnerHtmlOneProduct(productKey, objectName) {
    const keys = Object.keys(objectName);
    choosenProduct = objectName[productKey];
    var body = document.body;
    const newTable = document.createElement("table");
    const newLiEl = document.createElement("li");
    const currentProductInfo = document.createTextNode(choosenProduct._id + "," +
        choosenProduct.name + "," +
        choosenProduct.description + "," +
        choosenProduct.price + "," +
        choosenProduct.ratings + "," +
        choosenProduct.likes);
    newLiEl.appendChild(currentProductInfo);
    newTable.appendChild(newLiEl);
    body.appendChild(newTable);
}
function printInnerHtmlEveryProduct(objectName) {
    const keys = Object.keys(objectName);
    for (i in keys) {
        printInnerHtmlOneProduct(i, objectName);
    }
}
function ShowProducts() {

    printInnerHtmlEveryProduct(products);
    const showBtn = document.getElementById("ShowProducts").disabled = true;
    
}
function ShowUser() {
    document.getElementById("ShowUsers").disabled = true;
    printInnerHtmlEveryPerson(users);
}


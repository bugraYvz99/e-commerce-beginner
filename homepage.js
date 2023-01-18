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
            let result = totalRating / ratings.length;
            let average = result.toFixed(2);
            return average;
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


        






        function createProductCards() {
            var body = document.body;
            let mainDiv = document.createElement("div")
            mainDiv.className = "products"
            for (product of products) {
                let prodDiv = document.createElement("a")
                prodDiv.href = "product.html?id=" + product._id
                prodDiv.id = product._id;
                prodDiv.className = "product"
                let cardLink = document.createElement("a");
                cardLink.className = "product-link"
                cardLink.textContent = product.description
                let priceİnfo = document.createElement("h2");
                priceİnfo.className = "price-text";
                priceİnfo.innerHTML = `${product.price}<i class="fa-solid fa-dollar-sign" style="font-size: 21px; margin-left:4px;"></i>`;
                let cardImg = document.createElement("img")
                cardImg.className = "product-img"
                cardImg.src = product.image;
                let aveRating = document.createElement("div")
                aveRating.className = "average-rating"
                aveRating.innerHTML = `<i class="fa-solid fa-star" style="margin-right: 2px;"></i>${getProductCard(product._id).averageRating}`;

                prodDiv.appendChild(cardImg);
                prodDiv.appendChild(cardLink);
                prodDiv.appendChild(priceİnfo)
                prodDiv.appendChild(aveRating)

                mainDiv.appendChild(prodDiv);

            }

            body.appendChild(mainDiv);


        }

    });






function exitToLoginPage() {
            window.location.href = "login.html"
        }





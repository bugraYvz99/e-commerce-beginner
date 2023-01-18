
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');


if (!id) {
    window.location.href = "/404.html";
}


fetch("./data.json").then(res => res.json())
    .catch(e => {
        window.location.href = "/login.html"
    })
    .then(jsonData => {
        products = jsonData.products;
        users = jsonData.users










        function getProductCard(productId) {

            const product = getProductById(productId);

            const finalObj = { productId: productId, product: product };

            const averageRating = calculateOverAllRating(product);


            const commentObjs = { comments: [] }

            for (let i = 0; i < product.ratings.length; i++) {
                let innerObj = {}
                const rating = product.ratings[i];
                const userDetails = getUserDetailsByUserId(product.ratings[i].userId);
                innerObj.user = userDetails;
                innerObj.rate = rating.rate;
                innerObj.comment = rating.comment;
                commentObjs.comments.push(innerObj);
            }

            finalObj.comments = commentObjs;
            finalObj.averageRating = averageRating;

            return finalObj;
        }


        function getProductById(productId) {

            for (product of products) {
                if (productId === product._id) {
                    return product;
                }

            }
        }
        function calculateOverAllRating(product) {

            let ratings = product.ratings;
            let totalRating = 0;
            ratings.forEach((singleRating) => {
                totalRating = totalRating + singleRating.rate
            });
            return totalRating / ratings.length;
        }
        function getUserDetailsByUserId(userId) {
            for (user of users) {
                if (userId === user._id) {
                    return user;
                }

            }
        }


        function createProductPage() {

            let body = document.body;
            let contentDiv = document.createElement("div")
            contentDiv.className = "content-div"
            let upperProductDiv = document.createElement("div")
            upperProductDiv.className = "upper-product-div"
            let underCommentsDiv = document.createElement("div")
            underCommentsDiv.className = "under-comments-div"


            let productImg = document.createElement("img");
            productImg.className = "product-image"
            productImg.src = getProductCard(id).product.image;
            let productName = document.createElement("span");
            productName.className = "product-name"
            productName.innerHTML = getProductCard(id).product.name;
            let productPrice = document.createElement("span");
            productPrice.className = "product-price"
            productPrice.innerHTML =`${getProductCard(id).product.price}<i class="fa-solid fa-dollar-sign" style="font-size: 21px; margin-left:4px;"></i>`;
            let productDescription = document.createElement("span");
            productDescription.className = "product-description"
            productDescription.innerHTML = "Description =" + getProductCard(id).product.description + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            let likeCount = document.createElement("span");
            likeCount.className = "like-count";
            likeCount.innerHTML = `${getProductCard(id).product.likes.length} <i class="fa-sharp fa-solid fa-thumbs-up"></i>`;


            let ratingsLenght = getProductCard(id).product.ratings.length;
            for (let i = 0; i < ratingsLenght; i++) {
                let comments = document.createElement("div");
                comments.className = "user-comment-div"

                let userImg = document.createElement("img")
                userImg.src = getUserDetailsByUserId(getProductCard(id).product.ratings[i].userId).image;
                userImg.className = "user-image"
                comments.appendChild(userImg);
                let commentText = document.createElement("p");
                commentText.className = "user-comment";
                commentText.innerHTML = getProductCard(id).product.ratings[i].comment;
                comments.appendChild(commentText)
                let userRate = document.createElement("span")
                userRate.className = "user-rate";
                userRate.innerHTML = "This user rated that product by 5/" + getProductCard(id).product.ratings[i].rate + " points.";
                comments.appendChild(userRate);
                underCommentsDiv.appendChild(comments)

            }







            -
                body.appendChild(contentDiv);
            contentDiv.appendChild(upperProductDiv);
            contentDiv.appendChild(underCommentsDiv);
            upperProductDiv.appendChild(productImg);
            upperProductDiv.appendChild(productName)
            upperProductDiv.appendChild(productPrice)
            upperProductDiv.appendChild(productDescription)
            upperProductDiv.appendChild(likeCount)



        }
        createProductPage();
        console.log(getProductCard(id))


    });
function backBtn() {
    window.location.href = "homepage.html"
}
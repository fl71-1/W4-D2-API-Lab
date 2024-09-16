let url = "https://fakestoreapi.com/products";
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const container = document.getElementById('container');

        data.forEach(product => {
            let div = document.createElement("div");
            div.classList.add("product");

            let name = document.createElement("h2");
            let img = document.createElement("img");
            let price = document.createElement("p");

            name.textContent = product.title;
            img.src = product.image;
            price.textContent = `price: ${product.price} $`;

            div.appendChild(name);
            div.appendChild(img);
            div.appendChild(price);

            container.appendChild(div);
        });
    })
   

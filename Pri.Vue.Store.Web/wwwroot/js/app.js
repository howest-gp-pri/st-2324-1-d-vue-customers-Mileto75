let vue = new Vue({
    el: "#app",
    name: "Products",
    data: {
        pageTitle: "Bull shop",
        categoriesUrl: "https://localhost:7086/api/Categories",
        productsUrl: "https://localhost:7086/api/Products",
        categories: [],
        products: [],
        categoriesVisible: false,
        productsVisible: false,
    },
    methods: {
        getCategories: async function () {
            //call the api
            this.productsVisible = false;
            this.categories =
                await axios.get(this.categoriesUrl)
                    .then(response => {
                        console.log(response.data);
                        this.categoriesVisible = true;
                        return response.data;
                    })
                    .catch(error => console.log(error));
        },
        getProducts: async function () {
            //call the api
            this.categoriesVisible = false;
            this.products = 
                await axios.get(this.productsUrl)
                    .then(response => {
                        console.log(response.data);
                        this.productsVisible = true;
                        return response.data;
                    })
                    .catch(error => console.log(error));
        },
    },
});
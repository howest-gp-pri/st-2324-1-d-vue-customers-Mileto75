let vue = new Vue({
    el: "#app",
    name: "Products",
    data: {
        pageTitle: "Bull shop",
        categoriesUrl: "https://localhost:7086/api/Categories",
        productsUrl: "https://localhost:7086/api/Products",
        categories: [],
        products: [],
        filteredProducts: [],
        product: {
            imageUrl: "",
        },
        categoriesVisible: false,
        productsVisible: false,
        loading: false,
    },
    methods: {
        getCategories: async function () {
            //call the api
            this.productsVisible = false;
            this.loading = true;
            this.categories =
                await axios.get(this.categoriesUrl)
                    .then(response => {
                        console.log(response.data);
                        this.categoriesVisible = true;
                        return response.data;
                    })
                    .catch(error => console.log(error));
            this.loading = false;
        },
        getProducts: async function () {
            //call the api
            this.categoriesVisible = false;
            this.loading = true;
            this.products = 
                await axios.get(this.productsUrl)
                    .then(response => {
                        console.log(response.data);
                        this.productsVisible = true;
                        return response.data;
                    })
                    .catch(error => console.log(error));
            this.loading = false;
        },
        getProductDetails: async function (id) {
            const url = `${this.productsUrl}/${id}`;
            //this.loading = true;
            await axios.get(url)
                .then(response => {
                    console.log(response.data);
                    this.product = response.data;
                    //show modal
                    $('#productDetailModal').modal('toggle');
                })
                .catch(error => console.log(error));
            //this.loading = false;
        },
        getProductsByCategory: async function (id) {
            const url = `https://localhost:7086/api/Categories/${id}/products`;
            this.loading = true;
            this.products = await axios.get(url)
                .then(response => {
                    console.log(response.data);
                    return response.data;
                })
                .catch(error => console.log(error));
            this.loading = false;
            this.categoriesVisible = false;
            this.productsVisible = true;
        },
    },
});
import productsModel from './products.model.json';

class ProductsModules {
    getData() {
        const potions = Object.values(productsModel.potions);
        return potions;
    }
}

export default ProductsModules;


import ProductModule from './products.module'

const pm = new ProductModule();

class ProductController {
    displayPotions() {
        const potions = pm.getData();
        console.log('insied controller')
        console.log(potions);
    }
}

export default ProductController;
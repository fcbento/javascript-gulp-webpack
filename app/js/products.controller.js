import ProductModule from './products.module'

const pm = new ProductModule();
let count = 0;

class ProductController {

    displayPotions() {
        const potions = pm.getData();
        potions.forEach((potion) => {
            const allPotionsDom = document.querySelector('#allPotions');
            allPotionsDom.innerHTML += `<div class="col-xs-4"> <img id="potionImg" src="assets/${potion.image}" alt="Potion name"> <p id="detailed_${potion.id}"> ${potion.name} - <span>$ ${potion.price} </span></p> </div>`
        });
        this.detail(potions)
    }

    detail(potions) {
        potions.forEach((potion) => {
            const elements = document.querySelectorAll(`#detailed_${potion.id}`);
            elements.forEach((el) => {
                el.addEventListener('click', () => {
                    this.openModal(potion);
                });
            })
        });
    }

    openModal(potion) {
        const modal = document.getElementById('myModal');
        const close = document.getElementsByClassName('close')[0];
        const addCart = document.getElementById('addCart');

        let name = document.getElementById('name');
        let effect = document.getElementById('effect');
        let price = document.getElementById('price');
        let image = document.getElementById('image').src = `assets/${potion.image}`;
        let ingredients = document.getElementById('ingredients');

        name.textContent = potion.name;
        effect.textContent = potion.effect;
        price.textContent = `$ ${potion.price}`
        ingredients.textContent = potion.ingredients

        modal.style.display = 'block';

        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        addCart.addEventListener('click', () => {
            this.addToBag(potion);
        })
    }

    addToBag(potion){
        count += 1;
        const bag = document.getElementById('bag');
        bag.textContent = count;
    }
}

export default ProductController;
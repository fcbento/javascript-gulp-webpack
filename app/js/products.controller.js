import ProductModule from './products.module'

const pm = new ProductModule();

class ProductController {

    displayPotions() {
        const potions = pm.getData();
        potions.forEach((potion) => {
            const allPotionsDom = document.querySelector('#allPotions');
            allPotionsDom.innerHTML += `<div class="col-xs-4"> <a id="detailed_${potion.id}"> ${potion.name} </a> </div>`
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
        let name = document.getElementById('name');
        name.textContent = potion.name;
        modal.style.display = 'block';
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
}

export default ProductController;
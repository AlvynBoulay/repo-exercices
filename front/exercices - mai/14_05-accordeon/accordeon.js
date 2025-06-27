/* Module pour gérer l'accordéon */

export class Accordion {
    constructor(selector) {
        this.accordion = document.querySelector(selector);
        this.blocks = this.accordion.querySelectorAll('.accordion__bloc');
        this.init();
    }

    /* Initialisation des events sur chaque bloc */
    init() {
        this.blocks.forEach(block => {
            const title = block.querySelector('.accordion__title');
            title.addEventListener('click', () => this.toggleBlock(block));
        });
    }

    /* Afficher ou masquer un bloc */
    toggleBlock(block) {
        const isActive = block.classList.contains('active');

        this.blocks.forEach(b => {
            b.classList.remove('active');
            const w = b.querySelector('.accordion__answer-bloc');
            w.style.height = '0px'; // On ferme tous les blocs
        });

        if (!isActive) {
            block.classList.add('active');
            const content = block.querySelector('.accordion__answer');
            const wrapper = block.querySelector('.accordion__answer-bloc');
            wrapper.style.height = content.clientHeight + 'px';
        }
    }
}

const accordion = new Accordion('.accordion');

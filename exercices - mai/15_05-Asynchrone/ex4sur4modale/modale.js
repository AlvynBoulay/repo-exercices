class ShareModal {
    constructor(buttonId) {
        this.button = document.getElementById(buttonId);
        this.modal = null;
        this.init();
    }

/* Initialisation des event */
init() {
    if (!this.button) return;
    this.button.addEventListener('click', () => this.openModal());
}

/* Liens de partage */
generateShareLinks() {
    const currentUrl = encodeURIComponent(window.location.href);
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`
    };
}

/* Template HTML de la modale */
createModal() {
    const shareUrls = this.generateShareLinks();
    const modalHTML = `
        <div class="modal" id="shareModal" aria-hidden="true">
         <div class="modal__overlay" data-close="true"></div>
          <div class="modal__content" role="dialog" aria-modal="true">
            <button class="modal__close" aria-label="Fermer" data-close="true">&times;</button>
          <h2>Partager cette page</h2>
          <ul>
            <li><a href="${shareUrls.facebook}" class="share-link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="${shareUrls.twitter}" class="share-link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="${shareUrls.linkedin}" class="share-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
`;
const wrapper = document.createElement('div');
wrapper.innerHTML = modalHTML;
this.modal = wrapper.firstElementChild;
document.body.appendChild(this.modal);

this.modal.setAttribute('aria-hidden', 'false');
this.addCloseEvents();
}

/* Afficher la modale */
openModal() {
    if (!this.modal) {
        this.createModal();
    }
}

/* Fermer et supprimer la modal du DOM */
closeModal() {
    if (this.modal) {
        this.modal.remove();
        this.modal = null;
        document.removeEventListener('keydown', this.handleEscape);
    }
}

/* Ajouter les events de fermeture */
addCloseEvents() {
    const closeElements = this.modal.querySelectorAll('[data-close="true"]');
    closeElements.forEach(el => {
        el.addEventListener('click', () => this.closeModal());
    });
    this.handleEscape = (e) => {
        if (e.key === 'Escape') {
            this.closeModal();
        }
    };
    document.addEventListener('keydown', this.handleEscape);
}
}

/* Lancer le composant quand le DOM est prêt */
document.addEventListener('DOMContentLoaded', () => {
    new ShareModal('openShareModal');
});
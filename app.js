// Fonction pour créer la modale d'affichage de l'image
function showImageModal(imgSrc) {
    // Crée le fond sombre
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    // Crée le conteneur de l'image et du bouton
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.background = '#fff';
    container.style.padding = '20px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';

    // Crée l'image
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = '80vw';
    img.style.maxHeight = '80vh';
    img.style.marginBottom = '20px';
    img.className = 'modal-img'; // Désactive l'effet CSS sur l'image modale

    // Crée le bouton de téléchargement
    const downloadBtn = document.createElement('a');
    downloadBtn.href = imgSrc;
    downloadBtn.download = '';
    downloadBtn.textContent = 'Télécharger';
    downloadBtn.style.padding = '10px 20px';
    downloadBtn.style.background = '#007bff';
    downloadBtn.style.color = '#fff';
    downloadBtn.style.border = 'none';
    downloadBtn.style.borderRadius = '4px';
    downloadBtn.style.textDecoration = 'none';
    downloadBtn.style.textAlign = 'center';

    // Bouton pour fermer la modale
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '20px';
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#333';

    closeBtn.onclick = () => document.body.removeChild(overlay);

    // Ajoute les éléments
    container.appendChild(closeBtn);
    container.appendChild(img);
    container.appendChild(downloadBtn);
    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // Ferme la modale si on clique en dehors du conteneur
    overlay.onclick = (e) => {
        if (e.target === overlay) document.body.removeChild(overlay);
    };
}


// Ajoute un écouteur sur toutes les images (adapte le sélecteur si besoin)
function setupImageModal() {
    document.querySelectorAll('img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => showImageModal(img.src));
    });
}

// Menu burger JS (fonctionne sur toutes les pages)
function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    if (!navbar || !burger) return;

    burger.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
        e.stopPropagation();
    });    

    // Ferme le menu au clic sur un lien
    const navbarLinks = document.querySelectorAll('.navbar__link a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {    
            navbar.classList.remove('show-nav');
        }); 
    });

    // Ferme le menu si clic en dehors du menu burger
    document.addEventListener('click', (e) => {
        if (navbar.classList.contains('show-nav') && !navbar.contains(e.target)) {
            navbar.classList.remove('show-nav');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupImageModal();
    toggleMenu();
});

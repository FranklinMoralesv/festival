
document.addEventListener('DOMContentLoaded', function() {
    createGallery();
});

function createGallery() {
    const gallery = document.querySelector('.gallery-img');

    for( let i = 1; i <= 12; i++ ) {
        const image = document.createElement('IMG');

        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.imageId = i;
        image.alt=`thumb ${i}`;
        image.loading="lazy";

        
        image.onclick = showImage;

       const li = document.createElement('LI');
       li.appendChild(image);

       gallery.appendChild(li);
    }
}

function showImage(e) {
    const id = parseInt( e.target.dataset.imageId );

    // Generar la imagen
    const image = document.createElement('IMG');
    image.src = `build/img/big/${id}.webp`;
    image.alt="big picture";

    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    
    // Boton para cerrar la imagen
    const closeImage = document.createElement('P');
    closeImage.textContent = 'X';
    closeImage.classList.add('btn-close');
    
    
    overlay.appendChild(closeImage)
    
    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fixed-body');
    
    // Cuando se presiona, se cierra la imagen
    closeImage.onclick = function() {
        overlay.remove();
    }

    // Cuando se da click, cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fixed-body');
    }
}
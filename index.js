import { agregarCarrito } from "./elementos.js";

export const productos = [{
        nombre: "Iphone 14",
        imagenes: ["imagenes/iphones/iphone-14/iphone-14-azul-128gb.webp", "imagenes/iphones/iphone-14/iphone-14-blanco-128gb.webp", "imagenes/iphones/iphone-14/iphone-14-morado-128gb.webp"],
        descripcion: "El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.",
        precio: 389499,
        categoria: "celulares",
        id: 0
    },
    {
        nombre: "Iphone 13",
        imagenes: ["imagenes/iphones/iphone-13/iphone-13-azul-128gb.webp", "imagenes/iphones/iphone-13/iphone-13-blanco-128gb.webp", "imagenes/iphones/iphone-13/iphone-13-rosa-128gb.webp"],
        descripcion: "iPhone 13. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.",
        precio: 339000,
        categoria: "celulares",
        id: 1
    },
    {
        nombre: "Iphone 12",
        imagenes: ["imagenes/iphones/iphone-12/iphone-12-azul-128gb.webp", "imagenes/iphones/iphone-12/iphone-12-blanco-128gb.webp", "imagenes/iphones/iphone-12/iphone-12-morado-128gb.webp"],
        descripcion: "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Potente chip A14 Bionic.",
        precio: 278999,
        categoria: "celulares",
        id: 2
    },
    {
        nombre: "Iphone 11",
        imagenes: ["imagenes/iphones/iphone-11/iphone-11-azul-128gb.webp", "imagenes/iphones/iphone-11/iphone-11-blanco-128gb.webp", "imagenes/iphones/iphone-11/iphone-11-morado-128gb.webp"],
        descripcion: "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales con la pantalla Liquid Retina de 6.1 pulgadas",
        precio: 255000,
        categoria: "celulares",
        id: 3
    },
    {
        nombre: "Iphone SE",
        imagenes: ["imagenes/iphones/iphone-SE/iphone-se-azul-128gb.webp", "imagenes/iphones/iphone-SE/iphone-se-blanco-128gb.webp", "imagenes/iphones/iphone-SE/iphone-se-rojo-128gb.webp"],
        descripcion: "Chip A15 Bionic superrápido. Una increíble duración de batería y una cámara que es una superestrella. Y además, el vidrio más resistente en un smartphone y botón de inicio con la seguridad de Touch ID.",
        precio: 190499,
        categoria: "celulares",
        id: 4
    },
    {
        nombre: "Iphone XR",
        imagenes: ["imagenes/iphones/iphone-XR/iphone-xr-negro-128gb.webp", "imagenes/iphones/iphone-XR/iphone-xr-blanco-128gb.webp", "imagenes/iphones/iphone-XR/iphone-xr-rojo-128gb.webp"],
        descripcion: "El iPhone XR viene con una pantalla Liquid Retina de 6.1 pulgadas. El avanzado sistema Face ID te permite desbloquearlo de forma segura e iniciar sesión con sólo una mirada. El chip A12 Bionic usa el aprendizaje automático en tiempo real.",
        precio: 234000,
        categoria: "celulares",
        id: 5
    },
    {
        nombre: "Airpods con cable",
        imagenes: ["imagenes/accesorios/accesorios-auriculares-cable.webp"],
        descripcion: "A diferencia de los audífonos circulares tradicionales, el diseño de los EarPods se basa en la geometría del oído, por eso son más cómodos que cualquier otro audífono de este tipo.",
        precio: 14255,
        categoria: "accesorios",
        id: 6
    },
    {
        nombre: "Airpods inalambricos",
        imagenes: ["imagenes/accesorios/accesorios-auriculares-inalambricos.webp"],
        descripcion: "Los AirPods te brindan una experiencia inalámbrica inigualable con un sonido de alta calidad, acceso a Siri y un estuche de carga que te ofrece más de 24 horas de reproducción de audio",
        precio: 24131,
        categoria: "accesorios",
        id: 7
    },
    {
        nombre: "Cargador con cable",
        imagenes: ["imagenes/accesorios/accesorios-cargador-cable.webp"],
        descripcion: "El adaptador de corriente USB tipo C de 20W de Apple ofrece una carga rápida y eficiente en el hogar, en la oficina o mientras viaja. El cable USB C Conecta tu iPhone, iPad o iPod al Adaptador de corriente de 20W.",
        precio: 7599,
        categoria: "accesorios",
        id: 8
    },
    {
        nombre: "Cargador inalambrico",
        imagenes: ["imagenes/accesorios/accesorios-cargador-inalambrico.webp"],
        descripcion: "El cargador MagSafe inalámbrico incorpora imanes perfectamente alineados para fijarse al instante a tu iPhone y cargarlo sin cables aún más rápido con hasta 15W",
        precio: 7899,
        categoria: "accesorios",
        id: 9
    },
    {
        nombre: "Usb lightning",
        imagenes: ["imagenes/accesorios/accesorios-usb.webp"],
        descripcion: "Este cable USB 2.0 conecta tu iPhone, iPad o iPod con conector Lightning al puerto USB de tu computadora para sincronizarlos y cargarlos. También puedes conectar tu dispositivo al adaptador de corriente USB de Apple.",
        precio: 3491,
        categoria: "accesorios",
        id: 10
    },
    {
        nombre: "Funda blanca",
        imagenes: ["imagenes/accesorios/accesorios-funda-blanco.webp"],
        descripcion: "Funda blanca de silicona, no a prueba de agua, modelos compatibles 11, 12 y 13",
        precio: 2899,
        categoria: "accesorios",
        id: 11
    },
    {
        nombre: "Funda Morada",
        imagenes: ["imagenes/accesorios/accesorios-funda-morado.webp"],
        descripcion: "Funda morada de silicona, no a prueba de agua, modelos compatibles 11, 12 y 13",
        precio: 2899,
        categoria: "accesorios",
        id: 12
    },
    {
        nombre: "Apple watch 8",
        imagenes: ["imagenes/watches/watch-8-azul.webp"],
        descripcion: "El Apple Watch Series 8 viene con apps y sensores de salud avanzados con los que puedes hacerte un electrocardiograma, medir tu frecuencia cardiaca y nivel de oxígeno en la sangre, y registrar cambios de temperatura.",
        precio: 180999,
        categoria: "relojes",
        id: 13
    },
    {
        nombre: "Apple watch 7",
        imagenes: ["imagenes/watches/watch-7-blanco.webp"],
        descripcion: "El Apple Watch Series 7 tiene la pantalla Retina siempre activa más grande y avanzada hasta ahora. Sus funcionalidades avanzadas te permiten medir tu nivel de oxígeno en la sangre, monitorear tus horas de sueño y practicar la conciencia plena.",
        precio: 170199,
        categoria: "relojes",
        id: 14
    },
    {
        nombre: "Apple watch 6",
        imagenes: ["imagenes/watches/watch-6-rojo.webp"],
        descripcion: "Con el Apple Watch Series 6, puedes medir tu nivel de oxígeno en la sangre gracias a un sensor revolucionarios. Además, tienes los datos de tus entrenamientos a la vista en la mejorada pantalla Retina, que ahora es 2.5 veces más brillante.",
        precio: 125890,
        categoria: "relojes",
        id: 15
    },
    {
        nombre: "Apple watch 3",
        imagenes: ["imagenes/watches/watch-3-blanco.webp"],
        descripcion: "Monitorea tu frecuencia cardiaca y recibe notificaciones si está demasiado baja o demasiado alta. Mide tus entrenamientos, lleva un registro de tu actividad y compártela. Además, recibe llamadas, responde mensajes.",
        precio: 75873,
        categoria: "relojes",
        id: 16
    },
    {
        nombre: "Apple watch SE",
        imagenes: ["imagenes/watches/watch-se-blanco.webp"],
        descripcion: "Tiene las funcionalidades esenciales para ayudarte a llevar una vida más activa, saludable y conectada. El Apple Watch SE es dos veces más rápido y tiene una pantalla un 30% más grande. Y cuenta con funcionalidades de seguridad como Detección de Caídas y Emergencia SOS.",
        precio: 129999,
        categoria: "relojes",
        id: 17
    }
];

if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

let main = document.querySelector("main");
let section = document.createElement("section");
main.appendChild(section);

function crearHtmlProductos(productos){
    let articles = [];
    for (let i = 0; i < productos.length; i++) {
        let article = document.createElement("article");
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let spanCategoria = document.createElement("span");
        let p = document.createElement("p");
        let spanPrecio = document.createElement("span");
        let button = document.createElement("button");
        let imagen = document.createElement("img");

        section.appendChild(article);

        imagen.classList.add(...["card-img-top"]);
        imagen.src = productos[i].imagenes[0];
        article.append(imagen, div);

        div.append(h3, spanCategoria, p, spanPrecio, button);

        main.classList.add(...["container"]);
        section.classList.add(...["row", "justify-content-center"]);
        article.classList.add(...["card", "m-3",  "col-lg-4", "col-md-6", "col-sm-12"]);
        article.style.width = "25rem";
        div.classList.add(...["card-body"]);
        h3.classList.add(...["card-title"]);
        p.classList.add(...["card-text", "cut-text"]);
        spanPrecio.classList.add(...["inicio-precio"]);
        button.classList.add(...["btn", "btn-lg", "btn-primary"]);
        button.setAttribute("data-id", `${productos[i].id}`);

        h3.textContent = productos[i].nombre;
        p.textContent = productos[i].descripcion;
        
        spanPrecio.textContent = `${productos[i].precio.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
        })}`;

        spanCategoria.textContent = productos[i].categoria;
        button.textContent = "Agregar al carrito";
        articles.push(article);
    }
    return articles;
}

crearHtmlProductos(productos);

/* filtrado */
let breadcrumb = document.querySelectorAll(".breadcrumb-item");
breadcrumb.forEach((categoria, index)=>{
    categoria.addEventListener('click', ()=>{
        let filtrados = productos.filter(item => item.categoria == categoria.textContent.toLowerCase());
        let articles = crearHtmlProductos(filtrados);
        section.replaceChildren(...articles);
        cambiarImagen();
        agregarCarrito();
        categoria.classList.add("activo");
        switch(index){
            case 0:
                categoria.nextElementSibling.classList.remove("activo");
                categoria.nextElementSibling.nextElementSibling.classList.remove("activo");
                break;
            case 1:
                categoria.previousElementSibling.classList.remove("activo");
                categoria.nextElementSibling.classList.remove("activo");
                break;
            case 2:
                categoria.previousElementSibling.classList.remove("activo");
                categoria.previousElementSibling.previousElementSibling.classList.remove("activo");
                break;
        }

        if(!document.querySelector(".oferta")){
            let fondoModal = document.createElement("div");
            let div = document.createElement("div");
            let progress = document.createElement("div");
            let progressBar = document.createElement("div");
            let img = document.createElement("img");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");
            let span = document.createElement("span");
            let button = document.createElement("button");

            document.body.appendChild(fondoModal);
            document.body.appendChild(div);
            div.append(img, h4, p, span, button, progress);
            progress.appendChild(progressBar);
            
            fondoModal.classList.add(...["modal-backdrop", "fade", "show", "fondo"]);
            fondoModal.style.display="block";
            div.classList.add(...["oferta", "p-3", "bg-white"]);
            progress.classList.add(...["progress", "w-100", "mt-4"]);
            progress.style="height:28px;";
            progressBar.classList.add(...["progress-bar", "bg-danger"]);
            h4.classList.add(...["mt-3", "display-6"]);
            p.classList.add(...["text-start", "my-2"]);
            span.classList.add(...["span-precio", "my-2"]);
            button.classList.add(...["btn", "btn-lg", "btn-primary", "my-2"]);

            let almostRandom = Math.floor(Math.random()*productos.length);
            let producto = productos[almostRandom];
            button.setAttribute("data-id", `${producto.id}`);

            img.src=producto.imagenes[0];
            h4.textContent=producto.nombre;
            p.textContent=producto.descripcion;
            let precioOferta = producto.precio > 100000 ? producto.precio-12000 : producto.precio-2000;
            span.textContent=`${precioOferta.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
            })}`;
            button.textContent="Agregar al carrito";
            agregarCarrito(precioOferta);
            document.querySelector(".oferta .btn-primary").addEventListener('click', (e)=>{
                e.target.disabled = true;
                segundos=2;
            });
        }

        var segundos = 11;

        let intervalo = setInterval(()=>{
            segundos--;
            let progressBar = document.querySelector(".progress-bar");
            progressBar.style=`width:${segundos*10}%`;
            progressBar.textContent=`${segundos > 1 ? `${segundos} segundos` : `${segundos} segundo`}`;
            if(segundos===0){
                document.querySelector(".oferta").remove();
                document.querySelector(".fondo").remove();
                clearInterval(intervalo);
            }
        }, 1000);

    });
});

function crearModalProducto(filtrado){
    let fondoModal = document.createElement("div");
    fondoModal.classList.add(...["modal-backdrop", "fade", "show"]);
    fondoModal.style="display: block; z-index:1;";
    document.body.appendChild(fondoModal);

    let article = document.createElement("article");
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let spanPrecio = document.createElement("span");
    let spanCategoria = document.createElement("span");
    let button = document.createElement("button");
    let modalHeader = document.createElement("div");
    let botonCerrar = document.createElement("button");
    let footer = document.createElement("div");
    let imagen = document.createElement("img");

    let hrs = ["hr", "hr"];
    const elementosHr = {};
    hrs.map((_, index) => {
        elementosHr[`hr${index}`] = document.createElement("hr");
    });

    document.body.appendChild(article);

    article.append(modalHeader, imagen);
    modalHeader.appendChild(botonCerrar);
    imagen.classList.add(...["card-img-top"]);
    imagen.src = filtrado.imagenes[0];

    if(filtrado.imagenes.length>1){
        let divImagenesPequeñas = document.createElement("div");
        divImagenesPequeñas.classList.add("contenedor-imagenes-pequeñas");
        article.appendChild(divImagenesPequeñas);
        filtrado.imagenes.forEach(img =>{
            let imagen = document.createElement("img");
            divImagenesPequeñas.appendChild(imagen);
            imagen.classList.add("imagenes-pequeñas");
            imagen.src = img;
        });
    }
    
    article.appendChild(div);
    div.append(h3, spanCategoria, elementosHr.hr0, p, elementosHr.hr1, footer);
    footer.append(button, spanPrecio);

    article.classList.add(...["card", "m-3", "articulo-modal"]);
    div.classList.add(...["card-body"]);
    h3.classList.add(...["card-title"]);
    p.classList.add(...["card-text"]);
    button.classList.add(...["btn", "btn-lg", "btn-primary"]);
    button.setAttribute("data-id", `${filtrado.id}`);
    spanPrecio.classList.add(...["span-precio"]);
    botonCerrar.classList.add(...["btn-close", "btn-lg", "btn"]);
    modalHeader.classList.add(...["modal-header", "justify-content-end", "mb-3"]);
    footer.classList.add(...["contenedor-boton-precio"]);

    h3.textContent = filtrado.nombre;
    p.textContent = filtrado.descripcion;
    spanPrecio.textContent = `${filtrado.precio.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
    })}`;

    spanCategoria.textContent = filtrado.categoria;
    button.textContent = "Agregar al carrito";

    /* Evento cerrar */
    [fondoModal, botonCerrar].forEach(cerrar => {
        cerrar.addEventListener('click', () => {
            document.body.removeChild(article);
            document.body.removeChild(fondoModal);
        });

        document.addEventListener("keydown", (e) => {
            if(e.key==="Escape"){
                document.body.removeChild(article);
                document.body.removeChild(fondoModal);
            }
        });
    });
}

let articles = document.querySelectorAll("article img");
articles.forEach(article =>{
    article.addEventListener('click', (e)=>{
        let padre = e.target.parentElement;
        let children = padre.children;
        let id = children[children.length-1].children[children[children.length-1].children.length-1].getAttribute("data-id");
        let filtrado = productos.filter(item => item.id == id)[0];
        crearModalProducto(filtrado);
        cambiarImagen();
        agregarCarrito();
    });
});

function cambiarImagen() {
    let imagenes = document.querySelectorAll(".imagenes-pequeñas");
    let imagen = document.querySelector(".articulo-modal .card-img-top");
    imagenes.forEach(img=>{
        img.addEventListener('click', (e) => {
            imagen.src = e.target.src;
        });
    });
}

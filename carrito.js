import { productos } from './index.js';
export class Carrito {

    producto;
    precioOferta;

    constructor(producto, precioOferta) {
        if(producto!==undefined){
            this.producto = producto;
            this.precioOferta = precioOferta;
            let carrito = JSON.parse(localStorage.getItem("carrito"));

            if(precioOferta){
                this.producto.precio = this.precioOferta;
            }

            if (carrito) {
                for (let i = 0; i < carrito.length; i++) {
                    if (carrito[i].nombre == producto.nombre) {
                        var validador = true;
                        var carritoIndex = i;
                        break;
                    }
                }
                if (!validador) {
                    this.producto.cantidad = 1;
                    carrito.push(this.producto);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                    return;
                }

                let productoCarrito = carrito.splice(carritoIndex, 1)[0];

                if (productoCarrito.cantidad >= 10) {
                    this.alerta("No se pueden agregar más de 10 veces el mismo producto");
                } else {
                    productoCarrito.cantidad++;
                    let precioUnitario = this.producto.precio;
                    productoCarrito.precio+=precioUnitario;
                    carrito.push(productoCarrito);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                }

            } else {
                this.producto.cantidad = 1;
                localStorage.setItem("carrito", JSON.stringify([this.producto]));
            }
        }
    }

    crearHTML(carrito) {
        let modal = document.querySelector(".modal");
        let fondoModal = document.querySelector(".modal-backdrop");
        let modalSelector = document.querySelector(".modal-body");
        let itemsSelector = document.querySelectorAll(".modal-body *");
        let footerAll = document.querySelectorAll(".modal-footer *");
        itemsSelector.forEach(item=> item.remove());
        footerAll.forEach(item=> item.remove());

        if (!modal && !fondoModal) {
            /* Fondo modal */
            let fondoModal = document.createElement("div");
            fondoModal.classList.add(...["modal-backdrop", "fade", "show"]);
            document.body.appendChild(fondoModal);

            /* Creacion de elementos para el modal */
            let modal = document.createElement("div");
            let modalDialog = document.createElement("div");
            let modalContent = document.createElement("div");
            let modalHeader = document.createElement("div");
            let h4 = document.createElement("h4");
            let boton = document.createElement("button");
            let modalBody = document.createElement("div");
            let modalFooter = document.createElement("div");

            /* Appends */
            document.body.appendChild(modal);
            modal.appendChild(modalDialog);
            modalDialog.appendChild(modalContent);
            modalContent.append(modalHeader, modalBody, modalFooter);
            modalHeader.append(h4, boton);

            /* Informacion */
            h4.textContent = "Carrito";

            /* Se agregan las clases y atributos de Bootstrap */
            modal.classList.add("modal");
            modal.id = "exampleModalScrollable";
            modalDialog.classList.add(...["modal-dialog", "modal-dialog-scrollable"]);
            modalContent.classList.add(...["modal-content", "bg-customize"]);
            modalHeader.classList.add("modal-header");
            h4.classList.add(...["modal-title", "text-center"]);
            boton.classList.add("btn-close");
            boton.setAttribute("type", "button");
            modalBody.classList.add("modal-body");
            modalFooter.classList.add("modal-footer");

        } else if (carrito && carrito.length > 0){
            let precioTotal = 0;
            let separador = document.createElement("hr");
            let precio = document.createElement("span");
            let botonEliminar = document.createElement("button");
            let modalFooter = document.querySelector(".modal-footer");
            modalFooter.append(botonEliminar);
            botonEliminar.textContent = "Vaciar carrito";
            botonEliminar.classList.add(...["btn", "btn-lg", "btn-danger", "text-light"]);

            carrito.forEach(item =>{
                let div = document.createElement("div");
                modalSelector.appendChild(div);
                div.classList.add(...["items", "gap-3", "mb-5"]);
                div.setAttribute("data-id-item", item.id);
                let img = document.createElement("img");
                let h5 = document.createElement("h5");
                let span = document.createElement("span");
                let divContenedorInput = document.createElement("div");
                let decrementador = document.createElement("button");
                let input = document.createElement("input");
                let incrementador = document.createElement("button");
                let eliminarItem = document.createElement("i");
                div.append(img, h5, span, divContenedorInput, eliminarItem);
                divContenedorInput.append(decrementador, input, incrementador);
                divContenedorInput.classList.add(...["contenedorInput"]);
                decrementador.setAttribute("data-name", "decrementador");
                incrementador.setAttribute("data-name", "incrementador");
                eliminarItem.classList.add(...["bi", "bi-trash2", "trash"]);
                decrementador.textContent = "-";
                incrementador.textContent = "+";
                img.style = "width:16%";
                h5.textContent = item.nombre;
                img.src = item.imagenes[0];
                span.textContent = `${item.precio.toLocaleString('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                })}`;
                input.value = item.cantidad;
                input.type = "number";
                input.readOnly = true;
                precioTotal+=item.precio;   
            });
            modalSelector.append(separador, precio);
            precio.classList.add("precio-total");
            precio.textContent = `Precio total: `;
            let spanPrecioTotal = document.createElement("span");
            precio.appendChild(spanPrecioTotal);
            spanPrecioTotal.textContent = `${precioTotal.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
            })}`;
        }

        /* Creo el boton de continuar */
        let modalFooter = document.querySelector(".modal-footer");
        let botonContinuar = document.createElement("button");
        modalFooter.append(botonContinuar);
        botonContinuar.textContent = "Continuar";
        botonContinuar.classList.add(...["btn", "btn-lg", "btn-success", "text-light"]);
        botonContinuar.setAttribute("data-continuar", "true");
        
        if(modalSelector!=null){
            let items = modalSelector.childNodes;
            return items;
        }
    }

    actualizarCantidadProductos(){
        let cantidadProductos = document.querySelector(".cantidad-productos");
        cantidadProductos.textContent = JSON.parse(localStorage.getItem("carrito"))?.length | 0;
        this.actualizarPrecioTotal();
    }

    actualizarPrecioTotal(){
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let precioGeneral = document.querySelector(".precio-general");
        let precioTotal = 0;
        if(carrito){
            carrito.forEach(item=>{
                precioTotal+=item.precio;
            });
        }
        precioGeneral.textContent=precioTotal.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
        });
    }

    abrirCarrito() {
        let modalBackdrop = document.querySelector(".modal-backdrop");
        let modal = document.querySelector(".modal");
        /* Animacion */
        modal.classList.add("transicionModal");
        modal.style.display = "block";
        modalBackdrop.style.display = "block";
    }

    cerrarCarrito() {
        document.querySelector(".btn-close").addEventListener("click", (e) => {
            this.simplificadorCerrarCarrito(e);
        });
        document.addEventListener("keydown", (e) => {
            if(e.key==="Escape"){
                this.simplificadorCerrarCarrito(e);
            }
        });
    }

    simplificadorCerrarCarrito(e){
        let padre;
        if(e.key==="Escape"){
            padre = document.querySelector(".modal");
        } else {
            padre = e.target.parentElement.parentElement.parentElement.parentElement;
        }
        /* Animacion */
        padre.previousElementSibling.classList.add("transicionInversaFondo");
        padre.classList.add("transicionInversa");
        // Elimino los elementos html para que no carguen la pagina por si se ejecutan varias veces, etc
        setTimeout(() => {
            padre.previousElementSibling.classList.remove("transicionInversaFondo");
            padre.classList.remove("transicionInversa");
            padre.previousElementSibling.style = "display:none;";
            padre.style = "display:none;";
        }, 1000);
    }

    mostrarProductos() {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let modalBody = document.querySelector(".modal-body");
        let modalFooter = document.querySelector(".modal-footer");
        let vaciarProducto = document.querySelector(".btn-danger");
        let continuar = document.querySelector("[data-continuar]");
        let h4 = document.querySelector("body .modal .modal-header h4");
        h4.textContent="Carrito";
        if(carrito&&carrito.length>0){
            carrito.sort((a, b) => b.id - a.id);
            let carritoActualizado = this.crearHTML(carrito);
            modalBody.replaceChildren(...carritoActualizado);
            this.incrementador();
            this.decrementador();
            this.eliminarItem();
            this.vaciarCarrito();
            if(vaciarProducto){
                vaciarProducto.style="display:block;";
            }
            continuar.disabled = false;
            modalFooter.style="justify-content:space-between;";
        } else {
            let p = document.createElement("p");
            p.textContent = "No hay productos agregados al carrito";
            modalBody?.replaceChildren(p);
            if(vaciarProducto){
                vaciarProducto.style="display:none;";
            }
            continuar.disabled=true;
            modalFooter.style="justify-content:flex-end;";
        }
        this.actualizarCantidadProductos();
        let botonContinuar = document.querySelector("[data-continuar]");
        botonContinuar.addEventListener('click', (e)=>{
            this.crearHTMLDireccion();
        });

    }

    incrementador() {
        let incrementador = document.querySelectorAll("[data-name='incrementador']");
        for (let i = 0; i < incrementador.length; i++) {
            incrementador[i].addEventListener("click", (e) => {
                let padre = e?.target?.parentElement.parentElement;
                let carrito = JSON.parse(localStorage.getItem("carrito")).sort((a, b) => b.id - a.id);
                let id = padre.getAttribute("data-id-item");
                let filtrado = carrito.filter(item => item.id == id)[0];
                let indexCarrito = carrito.indexOf(filtrado);
                let producto = carrito.splice(indexCarrito, 1)[0];
                let precio = producto.precio/producto.cantidad;
                if (producto.cantidad == 10) {
                    this.alerta("No se pueden agregar más de 10 productos");
                } else {
                    producto.cantidad++;
                    producto.precio += precio;
                    carrito.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                }
                this.mostrarProductos();
            });
        }
    }

    decrementador() {
        let carrito = JSON.parse(localStorage.getItem("carrito"))?.sort((a, b) => b.id - a.id);
        let decrementador = document.querySelectorAll("[data-name='decrementador']");
        for (let i = 0; i < decrementador.length; i++) {
            decrementador[i].addEventListener("click", (e) => {
                let padre = e?.target?.parentElement.parentElement;
                let id = padre.getAttribute("data-id-item");
                let filtrado = carrito.filter(item => item.id == id)[0];
                let indexCarrito = carrito.indexOf(filtrado);
                let producto = carrito.splice(indexCarrito, 1)[0];
                let precio = producto.precio/producto.cantidad;
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                    producto.precio -= precio;
                    carrito.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                } else {
                    this.alerta("No puede tener menos de un item,<br /> ¿Estas seguro de que quieres eliminarlo?", true, (confirm) => {
                        if(confirm){
                            padre.remove();
                            localStorage.setItem("carrito", JSON.stringify(carrito));
                            this.mostrarProductos();
                        } else {
                            this.alerta("El producto no se ha eliminado del carrito", undefined);
                        }
                    });
                }
                this.mostrarProductos();
            });
        }
    }

    eliminarItem() {
        let carrito = JSON.parse(localStorage.getItem("carrito"))?.sort((a, b) => b.id - a.id);
        let eliminar = document.querySelectorAll(".bi-trash2");
        eliminar.forEach(itemEliminado => {
            itemEliminado.addEventListener('click', (e) => {
                let padre = e?.target?.parentElement;
                let id = padre.getAttribute("data-id-item");
                let filtrado = carrito.filter(item => item.id == id)[0];
                let indexCarrito = carrito.indexOf(filtrado);
                let producto = carrito.splice(indexCarrito, 1)[0];
                this.alerta("¿Estas seguro de que quieres eliminarlo?", true, (confirm) => {
                    if(confirm){
                        padre.remove();
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                        this.mostrarProductos();
                    } else {
                        this.alerta(`No se ha eliminado el producto ${producto.nombre}`);
                    }
                });
                this.mostrarProductos();
            });
        });
    }

    vaciarCarrito() {
        let vaciar = document.querySelector(".btn-danger");
        vaciar?.addEventListener('click', () => {
            this.alerta("¿Estas seguro de que quieres vaciar el carrito?", true, (confirm) => {
                if(confirm){
                    localStorage.removeItem("carrito");
                    this.mostrarProductos();
                } else {
                    this.alerta(`No se ha vaciado el carrito`);
                }
            });
            this.mostrarProductos();
        });
    }

    alerta(texto, confirmacion, callback) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let fondoModal = document.createElement("div");
        let modal = document.querySelector(".modal");
        let alerta = document.querySelector(".alert");

        if(!alerta){
            document.body.appendChild(fondoModal);
            document.body.appendChild(div);
            div.appendChild(p);
            let botonAceptar = document.createElement("button");

            fondoModal.classList.add(...["modal-back-alert"]);
            div.classList.add(...["p-3", "bg-white", "alert", "transicionModal"]);
            
            modal.style="display:none";

            botonAceptar.classList.add(...["bg-success", "border", "rounded", "p-2", "text-white"]);
            p.style="font-size:18px; text-align:center;";

            p.innerHTML = texto;
            botonAceptar.textContent = "Aceptar";

            if(confirmacion){
                let botonCancelar = document.createElement("button");
                div.append(botonCancelar, botonAceptar);
                botonCancelar.classList.add(...["bg-danger", "border", "rounded", "p-2", "text-white"]);
                botonCancelar.textContent = "Cancelar";
                botonCancelar?.addEventListener('click', (e)=>{
                    e.target.parentElement.remove();
                    modal.style="display:block";
                    document.querySelector(".modal-backdrop").style="display:block;";
                    fondoModal.remove();
                    return callback(false);
                });
                botonAceptar?.addEventListener('click', (e)=>{
                    return callback(true);
                });
            } else {
                div.append(botonAceptar);
            }
            botonAceptar?.addEventListener('click', (e)=>{
                e.target.parentElement.remove();
                modal.style="display:block";
                document.querySelector(".modal-backdrop").style="display:block;";
                fondoModal.remove();
            });
        }
    }

    mensajeCarrito(i) {
        let toast = document.createElement("div");
        let toastHeader = document.createElement("div");
        let img = document.createElement("img");
        let strong = document.createElement("strong");
        let small = document.createElement("small");
        let button = document.createElement("button");
        let toastBody = document.createElement("div");

        toast.classList.add(...["toast"]);
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");
        toast.setAttribute("aria-atomic", "true");
        toastHeader.classList.add(...["toast-header"]);
        img.classList.add(...["rounded", "me-2"]);
        strong.classList.add(...["me-auto"]);
        button.classList.add(...["btn-close"]);
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-dismiss", "toast");
        button.setAttribute("aria-label", "close");
        toastBody.classList.add(...["toast-body"]);
        strong.textContent = "Tienda";
        small.textContent = "Hace un segundo";
        toastBody.textContent = `Se ha agregado el item ${productos[i].nombre}`;
        document.body.appendChild(toast);
        toast.appendChild(toastHeader);
        toast.appendChild(toastBody);

        button.addEventListener('click', () => {
            toast.remove();
        });

        toast.style = `display: block; position: fixed; top: 0; right: 0;`;
        [img, strong, small, button].forEach((HTMLElement) => {
            toastHeader.appendChild(HTMLElement);
        });

        setTimeout(() => {
            toast.remove();
        }, 2000);
    }

    crearHTMLDireccion() {
        document.querySelector(".modal-title").textContent = "Dirección";

        let continuar = document.querySelector("[data-continuar]");

        let modalBody = document.querySelector(".modal-body");
        let modalFooter = document.querySelector(".modal-footer");

        let childsBody =  document.querySelectorAll(".modal-body *");

        let botonVaciarCarrito = document.querySelector(".btn-danger");

        if(botonVaciarCarrito){
            botonVaciarCarrito.remove();
            let botonVolver = document.createElement("button");
            modalFooter.insertBefore(botonVolver, continuar);
            botonVolver.textContent = "Volver";
            botonVolver.classList.remove("btn-danger");
            botonVolver.classList.add(...["btn", "btn-lg", "btn-secondary"]);
        }

        childsBody.forEach(item=> item.remove());

        let direccion = JSON.parse(localStorage.getItem("direccion"));

        if(!direccion){
            let form = document.createElement("form");
            let labelName = document.createElement("label");
            let labelEmail = document.createElement("label");
            let row = document.createElement("div");
            let col1 = document.createElement("div");
            let col2 = document.createElement("div");
            let row2 = document.createElement("div");
            let col3 = document.createElement("div");
            let col4 = document.createElement("div");
            let labelPostal = document.createElement("label");
            let labelAddress = document.createElement("label");
            let labelNumber = document.createElement("label");
            let labelDate = document.createElement("label");
            let inputName = document.createElement("input");
            let inputEmail = document.createElement("input");
            let inputPostal = document.createElement("input");
            let inputAddress = document.createElement("input");
            let inputNumber = document.createElement("input");
            let inputDate = document.createElement("input");
            let buttonSubmit = document.createElement("button");

            modalBody.append(form);
            form.append(labelName, inputName, labelEmail, inputEmail, row, row2, buttonSubmit);
            form.classList.add(...["direccion"]);
            buttonSubmit.classList.add(...["btn", "btn-lg", "text-light", "bg-primary", "mt-4", "guardar"]);

            row.append(col1, col2);
            col1.append(labelPostal, inputPostal);
            col2.append(labelAddress, inputAddress);
            row.classList.add(...["row", "align-items-end", "mt-4"]);
            col1.classList.add(...["col"]);
            col2.classList.add(...["col"]);

            row2.append(col3, col4);
            col3.append(labelNumber, inputNumber);
            col4.append(labelDate, inputDate);
            row2.classList.add(...["row", "align-items-end", "mt-4"]);
            col3.classList.add(...["col"]);
            col4.classList.add(...["col"]);

            labelName.textContent="Nombre";
            labelEmail.textContent="Correo";
            labelPostal.textContent="Código postal";
            labelAddress.textContent="Dirección";
            labelNumber.textContent="Número";
            labelDate.textContent="Fecha de entrega";

            let arrayLabel = [labelName, labelEmail, labelPostal, labelAddress, labelNumber, labelDate];

            arrayLabel.forEach(label=> {
                label.classList.add(...["form-label", "mt-4"]);
                label.setAttribute("for", label.textContent.split(" ")[0].normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase());
            });

            [inputName, inputEmail, inputPostal, inputAddress, inputNumber, inputDate].forEach((input, indice) => {
                input.classList.add(...["form-control"]);
                input.name = arrayLabel[indice].textContent.split(" ")[0].normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
                input.id = arrayLabel[indice].textContent.split(" ")[0].normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
                //input.required=true;
            });

            inputName.type="text";
            inputEmail.type="email";
            inputPostal.type="number";
            inputAddress.type="text";
            inputNumber.type="number";
            inputDate.type="date";

            buttonSubmit.textContent = "Guardar";

            /* Disabled boton continuar */
            continuar.disabled = true;

        } else {

            let div = document.createElement("div");
            let h5 = document.createElement("h5");
            let span = document.createElement("span");
            let p = document.createElement("p");
            let i = document.createElement("i");

            modalBody.append(div);
            div.append(h5, span, p);

            p.classList.add(...["line-height-custom", "mt-3", "text-primary"]);
            i.classList.add(...["bi", "bi-trash", "mt-3", "d-block", "text-danger"]);

            h5.textContent="Tus datos";
            span.textContent="Acordate que para poner otra dirección vas a tener que eliminar esta.";

            let iHouse = document.createElement("i");
            let spanDireccion = document.createElement("span");
            let spanCodigoPostal = document.createElement("span");
            let spanNombre = document.createElement("span");
            let spanFechaEntrega = document.createElement("span");

            iHouse.classList.add(...["bi", "bi-house-door"]);
            spanDireccion.classList.add(...["ml-3", "text-capitalize"]);
            spanCodigoPostal.classList.add(...["ml-2-5", "d-block", "text-capitalize"]);
            spanNombre.classList.add(...["ml-2-5", "d-block"]);
            spanFechaEntrega.classList.add(...["ml-2-5", "d-block", "text-capitalize"]);


            spanDireccion.textContent=`DIRECCIÓN: ${direccion[3]}, ${direccion[4]}`;
            spanCodigoPostal.textContent=`CÓDIGO POSTAL: ${direccion[2]}`;
            spanNombre.textContent=`NOMBRE Y CORREO: ${direccion[0]} - ${direccion[1]}`;
            spanFechaEntrega.textContent=`FECHA DE ENTREGA: ${direccion[5]}`;

            p.append(iHouse, spanDireccion, spanCodigoPostal, spanNombre, spanFechaEntrega, i);

            /* Saco el disabled boton continuar */
            continuar.disabled = false;

        }

        let trash = document.querySelector(".bi-trash");
        if(trash){
            trash.addEventListener('click', ()=>{
                this.alerta("¿Estas seguro de que quieres eliminar la direccion cargada?", true, (confirm) => {
                    if(confirm){
                        localStorage.removeItem("direccion");
                        this.crearHTMLDireccion();
                    } else {
                        this.alerta(`No se ha eliminado la direccion`);
                    }
                });
            });
        }

        let botonVolver = document.querySelector(".btn-secondary");
        botonVolver.addEventListener('click', () => {
            this.mostrarProductos();
        });

        let inputs = document.querySelectorAll("input");
        inputs.forEach(input=>{
            input.setCustomValidity("El campo no puede quedar vacio");
        });

        this.validationInputs("direccion", null);
    }

    continuarForm(){
        let botonContinuar = document.querySelector("[data-continuar]");
        botonContinuar.addEventListener('click', () => {
                this.crearHTMLDireccion();
                this.crearHTMLTarjetas();
        });
    }

    validationInputs(direccion, tarjeta){
        
        /* Todos */
        document.querySelectorAll("input").forEach(input=>{
            input.addEventListener('input', (e) => {
                if(e.target.value.trim().length<1){
                    e.target.setCustomValidity("No puede haber campos vacios");
                } else {
                    e.target.setCustomValidity("");
                }
            });
        });


        /* Código */
        document.querySelector("#codigo")?.addEventListener('input', (e)=>{
            if(e.target.value.length!==4){
                e.target.setCustomValidity("El código postal debe tener 4 números. Ej: 1421");
            } else {
                e.target.setCustomValidity("");
            }
        });


        /* Número */
        document.querySelector("#numero")?.addEventListener('input', (e)=>{
            if(e.target.value.length < 1 || e.target.value.length > 4){
                e.target.setCustomValidity("El número debe tener menos de 4 números. Ej: 2302");
            } else {
                e.target.setCustomValidity("");
            }
        });


        /* Fecha de entrega */
        document.querySelector("#fecha")?.addEventListener('input', (e)=>{
            if(e.target.value < new Date(Date.now()).toISOString().split("T")[0]){
                e.target.setCustomValidity("La fecha debe ser mayor al día de hoy");
            } else {
                e.target.setCustomValidity("");
            }
        });
 

        /* Numero tarjeta */
        document.querySelector("#tarjeta")?.addEventListener('input', (e)=>{
            if(e.target.value.length!==16){
                e.target.setCustomValidity("La tarjeta debe tener 16 números");
            } else {
                e.target.setCustomValidity("");
            }
        });
        

        /* Vencimiento mes */
        document.querySelector("#vencimiento")?.addEventListener('input', (e)=>{
             if(!e.target.value.match(/^0[1-9]|1[0-2]$/)){
                e.target.setCustomValidity("El mes debe estar compuesto de dos números. Ej: 01");
            } else {
                e.target.setCustomValidity("");
            }
        });

        /* Vencimiento año */
        document.querySelector("#vencimientoa")?.addEventListener('input', (e)=>{
            if(e.target.value.length!==4){
                e.target.setCustomValidity("El año debe estar compuesto de cuatro números. Ej: 2022");
            } else if(e.target.value>2037){
                e.target.setCustomValidity("No existen tarjetas que expiren dentro de más de 15 años");
            } else if(e.target.value<2022){
                e.target.setCustomValidity("La tarjeta se encuentra expirada");
            } else {
                e.target.setCustomValidity("");
            }
        });

        /* CCV */
        document.querySelector("#seguridad")?.addEventListener('input', (e)=>{
            if(e.target.value.length!==3){
                e.target.setCustomValidity("El CCV debe estar compuesto de tres números. Ej: 287");
            } else {
                e.target.setCustomValidity("");
            }
        });

        /* DNI titular */
        document.querySelector("#titular")?.addEventListener('input', (e)=>{
            if(e.target.value.length!==8){
                e.target.setCustomValidity("El DNI debe estar compuesto por 12 digitos. Ej: 16202340");
            } else {
                e.target.setCustomValidity("");
            }
        });

        this.validationForm(direccion, tarjeta);
    }

    validationForm(direccion, tarjeta){

        let form = document.querySelector("form");

        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            let inputs = document.querySelectorAll("input");
            let arrayInputs = [];
           
            for(let i = 0; i<inputs.length; i++){
                arrayInputs.push(inputs[i].value);
            }
            
            if(direccion==="direccion"){
                if(!JSON.parse(localStorage.getItem("direccion"))){
                    localStorage.setItem("direccion", JSON.stringify(arrayInputs));
                } else {
                    this.alerta("Ya tiene una dirección cargada, eliminala y volve a cargarla");
                }
                this.crearHTMLDireccion();
            }

            if(tarjeta==="tarjeta"){
                if(!JSON.parse(localStorage.getItem("tarjeta"))){
                    localStorage.setItem("tarjeta", JSON.stringify(arrayInputs));
                } else {
                    this.alerta("Ya tiene una tarjeta cargada, eliminala y volve a cargarla");
                }
                this.crearHTMLTarjetas();
            }

        });

        this.continuarForm();
    }

    crearHTMLTarjetas() {

            document.querySelector(".modal-title").textContent = "Tarjeta";

            let continuar = document.querySelector("[data-continuar]");

            let modalBody = document.querySelector(".modal-body");

            let childsBody =  document.querySelectorAll(".modal-body *");

            childsBody.forEach(item=> item.remove());

            let tarjeta = JSON.parse(localStorage.getItem("tarjeta"));

            if(!tarjeta){
                let form = document.createElement("form");
                let labelNumeroTarjeta = document.createElement("label");
                let labelNombreTarjeta = document.createElement("label");
                let labelVencimiento = document.createElement("label");
                let labelCodigoSeguridad = document.createElement("label");
                let labelDocumentoTitular = document.createElement("label");
                let inputNumeroTarjeta = document.createElement("input");
                let inputNombreTarjeta = document.createElement("input");
                let row = document.createElement("div");
                let col1 = document.createElement("div");
                let col2 = document.createElement("div");
                let row2 = document.createElement("div");
                let col3 = document.createElement("div");
                let col4 = document.createElement("div");
                let inputVencimientoMes = document.createElement("input");
                let inputVencimientoA = document.createElement("input");
                let inputCodigoSeguridad = document.createElement("input");
                let inputDocumentoTitular = document.createElement("input");
                let buttonSubmit = document.createElement("button");

                modalBody.append(form);
                form.append(labelNumeroTarjeta, inputNumeroTarjeta, labelNombreTarjeta, inputNombreTarjeta, row, row2, buttonSubmit);
                form.classList.add(...["tarjeta"]);
                buttonSubmit.classList.add(...["btn", "btn-lg", "text-light", "bg-primary", "mt-4", "guardar"]);

                row.append(col1, col2);
                col1.append(labelVencimiento, inputVencimientoMes);
                col2.appendChild(inputVencimientoA);
                row.classList.add(...["row", "align-items-end", "mt-4"]);
                col1.classList.add(...["col"]);
                col2.classList.add(...["col"]);

                row2.append(col3, col4);
                col3.append(labelCodigoSeguridad, inputCodigoSeguridad);
                col4.append(labelDocumentoTitular, inputDocumentoTitular);
                row2.classList.add(...["row", "align-items-end", "mt-4"]);
                col3.classList.add(...["col"]);
                col4.classList.add(...["col"]);

                labelNumeroTarjeta.textContent="Número de tarjeta";
                labelNombreTarjeta.textContent="Nombre tarjeta principal";
                labelVencimiento.textContent="Fecha de vencimiento";
                labelCodigoSeguridad.textContent="Código de seguridad";
                labelDocumentoTitular.textContent="DNI del titular";

                let arrayLabel = [labelNumeroTarjeta, labelNombreTarjeta, labelVencimiento, labelCodigoSeguridad, labelDocumentoTitular];

                arrayLabel.forEach(label=> {
                    label.classList.add(...["form-label", "mt-4"]);
                    label.setAttribute("for", label.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().split(" ")[2]);
                });

                [inputNumeroTarjeta, inputNombreTarjeta, inputVencimientoMes, inputCodigoSeguridad, inputDocumentoTitular].forEach((input, indice) => {
                    input.classList.add(...["form-control"]);
                    input.name = arrayLabel[indice].textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().split(" ")[2];
                    input.id = arrayLabel[indice].textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().split(" ")[2];
                    //input.required=true;
                });

                inputVencimientoA.name="vencimientoa";
                inputVencimientoA.id="vencimientoa";
                inputVencimientoA.classList.add(...["form-control"]);
                inputVencimientoMes.classList.add(...["input-vencimiento"]);

                inputNumeroTarjeta.type="number";
                inputNombreTarjeta.type="text";
                inputVencimientoMes.type="text";
                inputVencimientoA.type="text";
                inputCodigoSeguridad.type="password";
                inputDocumentoTitular.type="number";

                inputNumeroTarjeta.placeholder="XXXX-XXXX-XXXX-XXXX";
                inputNombreTarjeta.placeholder="Nombre titular de la tarjeta";
                inputVencimientoMes.placeholder="MM";
                inputVencimientoA.placeholder="AAAA";
                inputCodigoSeguridad.placeholder="XXX";
                inputDocumentoTitular.placeholder="XX.XXX.XXX";

                buttonSubmit.textContent = "Guardar";

                /* Disabled boton continuar */
                continuar.disabled = true;

            } else {

                let div = document.createElement("div");
                let h5 = document.createElement("h5");
                let span = document.createElement("span");
                let p = document.createElement("p");
                let i = document.createElement("i");
    
                modalBody.append(div);
                div.append(h5, span, p);
    
                p.classList.add(...["line-height-custom", "mt-3", "text-primary"]);
                i.classList.add(...["bi", "bi-trash", "mt-3", "d-block", "text-danger"]);
    
                h5.textContent="Tus datos";
                span.textContent="Acordate que para poner otra tarjeta vas a tener que eliminar esta.";
    
                let iCreditCard = document.createElement("i");
                let spanNumero = document.createElement("span");
                let spanNombreTitular = document.createElement("span");
                let spanFechaVencimiento = document.createElement("span");
                let spanCodigoSeguridad = document.createElement("span");
                let spanDni = document.createElement("span");
    
                iCreditCard.classList.add(...["bi", "bi-credit-card"]);
                spanNumero.classList.add(...["ml-3", "text-capitalize"]);
                spanNombreTitular.classList.add(...["ml-5", "d-block", "text-capitalize"]);
                spanFechaVencimiento.classList.add(...["ml-5", "text-capitalize"]);
                spanCodigoSeguridad.classList.add(...["ml-3", "text-capitalize"]);
                spanDni.classList.add(...["ml-5", "d-block", "text-capitalize"]);
    
                spanNumero.textContent = `NÚMERO DE TARJETA: ${tarjeta[0].substring(0, 4)}-${tarjeta[0].substring(4, 8)}-${tarjeta[0].substring(8, 12)}-${tarjeta[0].substring(12, 16)}`;
                spanNombreTitular.textContent = `NOMBRE: ${tarjeta[1]}`;
                spanFechaVencimiento.textContent =`VENCIMIENTO: ${tarjeta[2]} / ${tarjeta[3]}`;
                spanCodigoSeguridad.textContent = `CCV: ***`;
                spanDni.textContent = `DNI: ${tarjeta[5].substring(0,2)}.${tarjeta[5].substring(2,5)}.${tarjeta[5].substring(5,8)}`;
    
                p.append(iCreditCard, spanNumero, spanNombreTitular, spanFechaVencimiento, spanCodigoSeguridad, spanDni, i);

                /* Saco el disabled boton continuar */
                continuar.disabled = false;
            }

            let trash = document.querySelector(".bi-trash");
            if(trash){
                trash.addEventListener('click', ()=>{
                    this.alerta("¿Estas seguro de que quieres eliminar los datos de la tarjeta?", true, (confirm) => {
                        if(confirm){
                            localStorage.removeItem("tarjeta");
                            this.crearHTMLTarjetas();
                        } else {
                            this.alerta(`No se ha eliminado los datos de tu tarjeta`);
                        }
                    });
                });
            }

            let inputs = document.querySelectorAll("input");
            inputs.forEach(input=>{
                input.setCustomValidity("El campo no puede quedar vacio");
            });

            this.validationInputs(null, "tarjeta");

            let botonContinuar = document.querySelector("[data-continuar]");
            botonContinuar.textContent="Finalizar compra";
            botonContinuar.addEventListener('click', (e) => {
                this.crearHTMLGracias(e);
            });
            
            let botonVolver = document.querySelector(".btn-secondary");
            botonVolver.addEventListener('click', () => {
                this.crearHTMLDireccion();
            });

    }

    crearHTMLGracias(e) {

        e.target.parentElement.previousElementSibling.previousElementSibling.children[0].textContent = "Gracias por tu compra";
        let modalBody = e.target.parentElement.previousElementSibling;

        let childsBody =  document.querySelectorAll(".modal-body *");

        let botonVolver = document.querySelector(".btn-secondary");
        botonVolver.style.display="none";

        let botonCerrar = document.querySelector("[data-continuar]");
        let botonClose = document.querySelector(".btn-close");
        botonCerrar.textContent = "Cerrar";

        childsBody.forEach(item=> item.remove());

        let gracias = document.querySelector(".gracias");

        if(!gracias){
            let div = document.createElement("div");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            let img = document.createElement("img");
            let span = document.createElement("span");
            let facebook = document.createElement("li");
            let twitter = document.createElement("li");
            let instagram = document.createElement("li");
            let ul = document.createElement("ul");
            let aF = document.createElement("a");
            let aT = document.createElement("a");
            let aI = document.createElement("a");

            modalBody.append(div);
            div.append(p, p2, img, span, ul);
            ul.append(facebook, twitter, instagram);
            facebook.append(aF);
            twitter.append(aT);
            instagram.append(aI);

            p2.textContent= "Dejanos un comentario en nuestras redes sociales y ganate un 5% de descuento";
            p.textContent="¿Amaste tus productos tanto como nosotros?";
            img.src = "imagenes/estrellas.png";
            img.style.width="60%";
            span.textContent="Seguinos en nuestras redes sociales"

            div.classList.add(...["gracias", "my-3"]);
            aF.classList.add(...["bi", "bi-facebook"]);
            aT.classList.add(...["bi", "bi-twitter"]);
            aI.classList.add(...["bi", "bi-instagram"]);

            aF.href="https://facebook.com";
            aT.href="https://twitter.com";
            aI.href="https://instagram.com";

            [aF, aT, aI].forEach(item => item.target="_blank");

        }

        localStorage.removeItem("carrito");

        [botonClose, botonCerrar].forEach(boton => {
            boton.addEventListener('click', (e) => {
                this.simplificadorCerrarCarrito(e);
                setTimeout(()=>{
                    this.mostrarProductos();
                }, 800);
            });
        });

    }

}

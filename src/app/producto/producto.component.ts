import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto: Producto[] = [
    { id: 1, nombre: 'Celular TCL 405', duracion: '$55.700', descripcion: 'el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas', cantidad: 30 },
    { id: 2, nombre: 'Smart TV Philco', duracion: '$159.999', descripcion: 'Marca pionera en la industria de la tecnología y de los electrodomésticos a nivel mundial, Philco es sinónimo de calidad e innovación constante', cantidad: 25 },
    { id: 3, nombre: 'Silla de escritorio', duracion: '$57.740', descripcion: 'La selección de una silla adecuada es muy importante para prevenir futuras lesiones. Con esta silla DeSillas, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada', cantidad: 12 },
    { id: 4, nombre: 'Horno eléctrico ATMA', duracion: '$63.499', descripcion: 'Si tu cocina es pequeña, el horno de mesa es la mejor solución. Vas a disfrutar de las mismas ventajas que con uno convencional y ganarás practicidad y comodidad.', cantidad: 35},
    { id: 5, nombre: 'Notebook Asus Vivobook Go 14', duracion: '$239.999', descripcion: 'El Asus Notebook Vivobook Go 14 Intel Celeron es la opción perfecta para aquellos que buscan un rendimiento confiable y una experiencia de uso fluida', cantidad: 35},
    { id: 6, nombre: 'Aire acondicionado BGH Silent Air split frío/calor 2300 frigorías', duracion: '$453.999', descripcion: 'El tipo de aire split es de bajo consumo energético, de fácil mantenimiento y sumamente silencioso ya que cuenta con una unidad exterior.', cantidad: 35}
  ];

  mostrarProducto = true;

  nuevoProducto: Producto = { id: 0, nombre: '', duracion: '', descripcion: '', cantidad: 0 };

  agregarProducto() {
    const productoConId = { ...this.nuevoProducto, id: this.producto.length + 1 };
    this.producto.push(productoConId);
    this.nuevoProducto = { id: 0, nombre: '', duracion: '', descripcion: '', cantidad: 0 };
  }

  eliminarProducto(index: number) {
    if (index >= 0 && index < this.producto.length) {
      this.producto.splice(index, 1);
    }
  }
  

  toggleMostrarProducto() {
    this.mostrarProducto = !this.mostrarProducto;
  }

  eliminarTodosLosProducto() {
    this.producto = [];
  }


  redirigirAFormulario() {
    const formularioElement = document.getElementById('formulario');
    if (formularioElement) {
      formularioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}



export interface Producto {
  id: number;
  nombre: string;
  duracion: string;
  descripcion: string;
  cantidad: number;
}

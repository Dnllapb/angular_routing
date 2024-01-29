Laboratorio Angular Router
Crea una aplicación de Angular usando ng new angular-routing --routing
Crea un componente ng generate component navbar
Crea una lista con tres link Home, About Us y Contact en el componente navbar
Crea tres componentes ng generate component Home, ng generate component AboutUs y ng generate component Contact
Ahora en el archivo app-routing.module.ts crea las siguientes rutas
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'AboutUs',
    component: AboutUsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
];
En el archivo app.component.html añade el componente <app-navbar></app-navbar> sobre la directiva <router-outlet></router-outlet>
En el archivo navbar.component.html, añade las rutas a cada link correspondiente
<a routerLink="/">Home</a>
<a routerLink="/AboutUs">About Us</a>
<a routerLink="/Contact">Contact</a>
Verifica que al hacer click sobre cada link se muestre la información de cada componente
Crea un componente adicional para validar las rutas inexistentes con error 404
Crea un componente dinámico que muestre el id que se envía por parámetro en la URL con la siguiente estructura: view/:id
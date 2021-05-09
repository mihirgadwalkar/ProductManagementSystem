import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'contact-us',component:ContactUsComponent},
  { path:'products',component:ProductsComponent},
  { path:'', redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

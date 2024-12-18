import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
  
    
      {path:'contact',component:ContactComponent},
      {path:'',component:AreaComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { DirectorComponent } from './director/director.component';
import { ManagerComponent } from './manager/manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CreateComponent } from "./expertSystem/create/create.component";
import { SelectComponent } from "./expertSystem/select/select.component";
import { WorkComponent } from "./expertSystem/work/work.component";


@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild([
         { path: '', redirectTo: '/login', pathMatch: 'full' },
         { path: 'login', component: LoginComponent },
         { path: 'owner', component: OwnerComponent },
         { path: 'director', component: DirectorComponent },
         { path: 'manager', component: ManagerComponent },
         { path: 'expertsystem/select', component: SelectComponent },
         { path: 'expertsystem/create', component: CreateComponent },
         { path: 'expertsystem/work', component: WorkComponent },

      ])
   ],
   exports: [

   ],
   declarations: [
      LoginComponent,
      OwnerComponent,
      DirectorComponent,
      ManagerComponent,
      SelectComponent,
      CreateComponent,
      WorkComponent
   ]
})

export class SFHModule {

}
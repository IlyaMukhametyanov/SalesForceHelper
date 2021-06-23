
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectComponent } from './select/select.component';
import { CreateComponent } from './create/create.component';
import { WorkComponent } from './work/work.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";




@NgModule({
   imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule

   ],
   exports: [

   ],
   declarations: [
      SelectComponent,
      CreateComponent,
      WorkComponent
   ]
})




export class expertSystem {


}
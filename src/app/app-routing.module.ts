import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { LibraryComponent } from './library/library.component';
import { PingComponent } from './ping/ping.component';

const routes: Routes = [
  {path:'',component:GeneratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

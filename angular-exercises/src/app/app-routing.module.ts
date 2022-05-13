import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteSimpleExampleComponent } from './autocomplete/autocomplete-simple-example/autocomplete-simple-example.component';

const routes: Routes = [
  {path: '', redirectTo: 'autocomplete/simple', pathMatch: 'full'},
  {path: 'autocomplete/simple', component: AutocompleteSimpleExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

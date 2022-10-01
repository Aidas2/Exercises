import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteSimpleExampleComponent } from './autocomplete/autocomplete-simple-example/autocomplete-simple-example.component';
import { DateParserComponent } from './date-parser/date-parser.component';

const routes: Routes = [
  {path: '', redirectTo: 'autocomplete/simple', pathMatch: 'full'},
  {path: 'autocomplete/simple', component: AutocompleteSimpleExampleComponent},
  {path: 'dateParser', component: DateParserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

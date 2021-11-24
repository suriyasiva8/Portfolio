import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilePageTwoComponent } from './profile-page-two/profile-page-two.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InterestCalcComponent } from './tools/interest-calc/interest-calc.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {path:'',component: ProfilePageComponent},
  {path:'next',component:ProfilePageTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

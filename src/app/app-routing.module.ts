import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./notfound/notfound.component";
import {AddStageComponent} from "./add-stage/add-stage.component";
import {StageComponent} from "./stage/stage.component";

const routes: Routes = [
  {path:'addStage',component:AddStageComponent},
  {path:'stage',component:StageComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

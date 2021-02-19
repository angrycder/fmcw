import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './land/land.component';
import { EventsComponent} from './events/events.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
{
	path:"",
	component: LandComponent
},
{
	path:"events",
	component: EventsComponent
},
{
	path:"workshops",
	component: WorkshopsComponent
},
{
	path:"dash",
	loadChildren:() => import('./dash/dash.module')
      .then(mod => mod.DashModule)
},
{
	path:"club",
	component: ClubComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

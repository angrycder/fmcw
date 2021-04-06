import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './land/land.component';
import { EventsComponent} from './events/events.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { TeamComponent } from './team/team.component';
import { CaComponent } from './ca/ca.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import {CaComponent as FaqComponent} from "./faq/ca.component";

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
	path:"sponsors",
	component: SponsorsComponent
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
	path:"team",
	component: TeamComponent
},
{
	path:"ambassador",
	component: CaComponent
},
{
	path:"faq",
	component: FaqComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      useHash:true,
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

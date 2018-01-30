import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './service/core/user/user.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BugComponent } from './bug/bug.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'bug',
    component: BugComponent
  },
  {
    path: 'codewar',
    loadChildren: './codewar/codewar.module#CodewarModule',
    canActivate: [UserService]
  },
  {
    path: 'topic',
    loadChildren: './topic/topic.module#TopicModule',
    canActivate: [UserService]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from '../service/core/user/user.service';
import { TopicComponent } from './topic.component';
import { IdeaListComponent } from './idea/idea-list/idea-list.component';
import { IdeaAddComponent } from './idea/idea-add/idea-add.component';

const routes: Routes = [
    {
        path: '',
        component: TopicComponent
    },
    {
        path: 'topic',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'idea/list',
        component: IdeaListComponent,
    },
    {
        path: 'idea/add',
        component: IdeaAddComponent,
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
export const TopicRouting: ModuleWithProviders = RouterModule.forChild(routes);

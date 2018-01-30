import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from '../service/core/user/user.service';
import { CodewarComponent } from './codewar.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: CodewarComponent
    },
    {
        path: 'codewar',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
export const CodewarRouting: ModuleWithProviders = RouterModule.forChild(routes);

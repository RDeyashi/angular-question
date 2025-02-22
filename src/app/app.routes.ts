import { Routes } from '@angular/router';
import { Problem1Component } from './problem-1/problem-1.component';
import { Problem2Component } from './problem-2/problem-2.component';
import { Problem3Component } from './problem-3/problem-3.component';
import { authGuard } from './problem-4/gard/auth.guard';
import { Problem5Component } from './problem-5/problem-5.component';
import { Problem6Component } from './problem-6/problem-6.component';

export const routes: Routes = [
    { path: '', redirectTo: '/problem/1', pathMatch: 'full' },
    {
        path: 'problem',
        children: [
            { path: '1', component: Problem1Component },
            { path: '2', component: Problem2Component },
            { path: '3', component: Problem3Component },
            {
                path: '4',
                loadComponent: () => import('./problem-4/problem-4.component').then(m => m.Problem4Component),
                canActivate: [authGuard]
            },
            { path: '5', component: Problem5Component },
            { path: '6', component: Problem6Component }
        ]
    }
];

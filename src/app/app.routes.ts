import { Routes } from '@angular/router';
import { Problem1Component } from './problem-1/problem-1.component';
import { Problem2Component } from './problem-2/problem-2.component';
import { Problem3Component } from './problem-3/problem-3.component';
import { authGuard } from './problem-4/gard/auth.guard';
import { Problem5Component } from './problem-5/problem-5.component';
import { Problem6Component } from './problem-6/problem-6.component';
import { Problem7Component } from './problem-7/problem-7.component';
import { Problem8Component } from './problem-8/problem-8.component';
import { Problem9Component } from './problem-9/problem-9.component';
import { Problem10Component } from './problem-10/problem-10.component';
import { Problem11Component } from './problem-11/problem-11.component';
import { Problem12Component } from './problem-12/problem-12.component';
import { Problem13Component } from './problem-13/problem-13.component';
import { Problem14Component } from './problem-14/problem-14.component';
import { Problem15Component } from './problem-15/problem-15.component';
import { Problem16Component } from './problem-16/problem-16.component';
import { Problem17Component } from './problem-17/problem-17.component';
import { Problem18Component } from './problem-18/problem-18.component';
import { Problem19Component } from './problem-19/problem-19.component';
import { Problem20Component } from './problem-20/problem-20.component';

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
            { path: '6', component: Problem6Component },
            { path: '7', component: Problem7Component },
            { path: '8', component: Problem8Component },
            { path: '9', component: Problem9Component },
            { path: '10', component: Problem10Component },
            { path: '11', component: Problem11Component },
            { path: '12', component: Problem12Component },
            { path: '13', component: Problem13Component },
            { path: '14', component: Problem14Component },
            { path: '15', component: Problem15Component },
            { path: '16', component: Problem16Component },
            { path: '17', component: Problem17Component },
            { path: '18', component: Problem18Component },
            { path: '19', component: Problem19Component },
            { path: '20', component: Problem20Component },
        ]
    }
];

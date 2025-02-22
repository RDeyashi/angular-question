import { Routes } from '@angular/router';
import { Problem1Component } from './problem-1/problem-1.component';
import { Problem2Component } from './problem-2/problem-2.component';

export const routes: Routes = [
    {path: '', redirectTo:'/problem/1', pathMatch: 'full'},
    {
        path: 'problem',
        children: [
            {path: '1', component: Problem1Component},
            {path: '2', component: Problem2Component}
        ]
    }
];

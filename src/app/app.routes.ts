import { Routes } from '@angular/router';
import { Problem1Component } from './problem-1/problem-1.component';

export const routes: Routes = [
    {path: '', redirectTo:'/problem/1', pathMatch: 'full'},
    {
        path: 'problem',
        children: [
            {path: '1', component: Problem1Component}
        ]
    }
];

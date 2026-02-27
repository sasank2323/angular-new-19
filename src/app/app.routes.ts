import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Sasank } from './sasank/sasank';
import { PageNotFound } from './page-not-found/page-not-found';
import { RouteCheck } from './route-check/route-check';

export const routes: Routes =
    [
        {
            path: "about",
            component: About
        },
        {
            path: "sasank",
            component: Sasank
        },
        {
            path: "login",
            component: Login
        },
        {
            path: "route-check",
            component: RouteCheck
        },
        {
            path: "**",
            component: PageNotFound
        },


    ];

import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Sasank } from './sasank/sasank';


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
        }

    ];

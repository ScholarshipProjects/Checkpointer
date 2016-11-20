import { CheckpointsComponent } from './checkpoints/checkpoints.component';
import { AppComponent } from './';
import { Router, RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: AppComponent, children: [

            { path: '', component: HomeComponent, pathMatch: 'full' },

            { path: 'checkpoints', loadChildren: "app/checkpoints/checkpoints.module#CheckpointsModule" }

            // { path: 'checkpoints', loadChildren: 'app/checkpoints/checkpoints.module#CheckpointsModule' }

            // { path: 'dashboard', component: DashboardComponent },
            // { path: 'profile', component: ProfileComponent },
            // { path: 'settings', component: SettingsComponent },
            // { path: 'help', component: HelpComponent },
            
        ]
    }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
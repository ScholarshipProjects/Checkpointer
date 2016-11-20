import { ActionsComponent } from './actions/actions.component';
import { CheckpointsComponent } from './checkpoints.component';
import { RouterModule, Routes } from '@angular/router';

const CHECKPOINTS_ROUTES: Routes = [
    {
        path: '', component: CheckpointsComponent, children: [
            { path: '', component: ActionsComponent}
        ]
    }
]

export const checkpointsRouting = RouterModule.forChild(CHECKPOINTS_ROUTES);
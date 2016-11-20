import { CheckpointsService } from './checkpoints.service';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions/actions.component';
import { checkpointsRouting } from './checkpoints.routing';
import { CheckpointsComponent } from './checkpoints.component';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        CommonModule,
        checkpointsRouting,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD1COgqz0VLTDGrZzZr4Spbrtr_9_DxvnQ'
        })
    ],
    exports: [],
    declarations: [
        CheckpointsComponent,
        ActionsComponent
    ],
    providers: [CheckpointsService],
})
export class CheckpointsModule { }

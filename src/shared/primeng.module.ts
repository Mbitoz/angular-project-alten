import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    AvatarModule,
    ScrollPanelModule,
    DividerModule,
    ProgressSpinnerModule,
    SkeletonModule,
    InputSwitchModule,
    SelectButtonModule,
    TooltipModule,
    DynamicDialogModule
  ]
})
export class PrimengModule { }

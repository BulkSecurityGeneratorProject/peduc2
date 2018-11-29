import { SuggestedLectureComponent } from './../entities/suggested-lecture/suggested-lecture.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Peduc2SharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { SidebarComponent } from 'app/sidebar/sidebar.component';

@NgModule({
    imports: [Peduc2SharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent, SidebarComponent, SuggestedLectureComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Peduc2HomeModule {}

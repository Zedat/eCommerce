import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentComponent } from './content.component';
import { CategoriesListModule } from '../categories-list/categories-list.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ContentComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CategoriesListModule
  ]
})
export class ContentModule { }

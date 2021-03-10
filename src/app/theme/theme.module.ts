import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommonModule} from '@angular/common';
import { ThemeComponent } from './theme.component';
import {StyleManagerService} from './../service/style-manager.service';
import {ThemeStorageService} from './../service/theme-storage.service';


@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports:[ThemeComponent],
  providers: [StyleManagerService,ThemeStorageService]
})
export class ThemeModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomePageComponent } from './home-page/home-page.component'
import { CustomMaterialModule } from '@app/core'

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, CustomMaterialModule],
})
export class HomeModule {}

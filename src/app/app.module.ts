import { CoreModule, CustomMaterialModule } from '@app/core'
import { NgModule, LOCALE_ID } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'
import { SharedModule } from './shared'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // core & shared
    CoreModule,
    SharedModule,
    CustomMaterialModule,
    FlexLayoutModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: ['en', 'fr', 'ja'] }],
  bootstrap: [AppComponent],
})
export class AppModule {}

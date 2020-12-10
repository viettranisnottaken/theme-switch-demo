import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInitializer } from './utils/app-initializer';
import { ThemeService } from './utils/theme.service';
import { BoxComponent } from './components/box/box.component';
import { AnotherBoxComponent } from './components/another-box/another-box.component';

@NgModule({
  declarations: [AppComponent, BoxComponent, AnotherBoxComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   deps: [ThemeService],
    //   multi: true,
    // }, // Circular DI
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

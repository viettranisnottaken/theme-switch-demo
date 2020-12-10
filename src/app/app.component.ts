import { Component, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './utils/theme.service';
import { Themes } from './utils/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'multi-themes-demo';
  themes = Themes;
  subscriptions = new Subscription();

  @HostBinding('class') public cssClass: string;

  constructor(private themeService: ThemeService) {
    this.subscriptions.add(
      this.themeService.selectedTheme.subscribe((theme: string) => {
        this.cssClass = theme;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  toLight() {
    this.themeService.changeTheme('light');
  }

  toDark() {
    this.themeService.changeTheme('dark');
  }
}

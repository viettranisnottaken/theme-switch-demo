import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Themes } from './themes';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  themes = Themes;
  selectedTheme = new BehaviorSubject<string>('light-them');

  constructor(private application: ApplicationRef) {
    const darkModeOn =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches; // detect system theme

    if (darkModeOn) {
      this.selectedTheme.next(this.themes.dark);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const turnOn = event.matches;

        this.selectedTheme.next(turnOn ? this.themes.dark : this.themes.light);

        this.application.tick();
      }); // listen to system theme change

    console.log(this.selectedTheme.getValue());
  }

  changeTheme(theme: string) {
    this.selectedTheme.next(this.themes[theme]);
  }
}

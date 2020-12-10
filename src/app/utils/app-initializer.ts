import { ThemeService } from './theme.service';

export function appInitializer(themeService: ThemeService) {
  return () => {
    new Promise((resolve) => {
      themeService.selectedTheme.subscribe((x) => console.log(x)).add(resolve);
    });
  };
}

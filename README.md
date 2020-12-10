# Theme switch demo from medium:

https://medium.com/@PhilippKief/automatic-dark-mode-detection-in-angular-material-8342917885a0

1. Pros

- Can detect system theme to set theme for the app (currently just light and dark)
- Can listen to system theme change

2. Cons

- Because styles have to be imported to `styles.scss`, styles are global

3. General ideas

- Create a `BehaviorSubject` to monitor theme
- Use `window.matchMedia` and listen to `'change'` event to detect system theme and monitor system theme change
- Add theme classes to `styles.scss`, i.e: `.light-theme`, `.dark-theme`, `.ember`, etc.
- Create a `@mixin` in each component for the colors, and `@include` the mixins under theme classes in `styles.scss`
- Create color schemes for each theme, and pass them in the mixins

4. Work arounds

- To minimize global style bleeding, you can:
  - Create a file solely for the mixins (or anything that needs to be imported into `styles.scss`)
  - Then import that file to both `styles.scss` and the component stylesheet. Or include it in the `styleUrls` array in `@Component()` metadata

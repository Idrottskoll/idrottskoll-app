# Idrottskoll
* [Web App](http://www.idrottskoll.se/)
* [iOS App store](https://itunes.apple.com/se/app/idrottskoll/id1308457065?l=en&mt=8)
* [Google play store](https://github.com/Idrottskoll)

## Installing
1.
```BASH
git clone https://github.com/Idrottskoll/idrottskoll-app.git <My App Name>
cd idrottskollApp <My App Name>
npm install
```
2. Copy the file `config_example.js` and rename it to `config.js` file path: `/src/actions/config_example.js`
3. Add your credentials in `config.js`
4. Run `react-native link && npm run start`
5. Double click on the file `idrottskollApp.xcodeproj` located in `/ios` (this will invoke [xcode](https://developer.apple.com/xcode/) so you can compile the application)

## Dependencies
```BASH
"axios": "^0.16.2",
"react": "16.0.0-alpha.12",
"react-native": "0.48.4",
"react-navigation": "^1.0.0-beta.13",
"react-redux": "^5.0.6",
"redux": "^3.7.2",
"redux-form": "^5.2.4",
"redux-thunk": "^2.2.0"
```

## Contrbuting

### General
* Most important: Look around. Match the style you see used in the rest of the project. This includes formatting, naming things in code, naming things in documentation.
* Add trailing commas,
* 4 spaces for indentation (no tabs)

### JavaScript
* Use semicolons `;`
* ES6 standards
* Prefer `'` over `"`
* 80 character line length
* Do NOT use `var` when declaring a variable

### JSX
* Prefer `"` over `'` for string literal props
* When wrapping opening tags over multiple lines, place one prop per line
* `{}` of props should hug their values (no spaces)
* Place the closing `>` of opening tags on the same line as the last prop
* Place the closing `/>` of self-closing tags on their own line and left-align them with the opening `<`

## License
#### [MIT License](https://mitlicense.org/)

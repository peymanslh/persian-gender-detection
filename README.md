# Persian Gender Detection

A simple NPM package to detect gender by Persian first name. (With more than 6K names)

Installation
------
Install with NPM:

```bash
$ npm install persian-gender-detection
```
With yarn:
```bash
$ yarn add persian-gender-detection
```

Example
------
```javascript
// Require module
const { getGender } = require('persian-gender-detection');

// Detect gender
getGender('  عــــلی  ');         // MALE
getGender('نرگـــ😉ــس');         // FEMALE
getGender('حســ😎ــن');          // MALE
getGender('۱۲۳۹۹۳محمدعلی123');  // MALE
getGender('۱۲۳مهناز۱۲۳');       // FEMALE
```

Issues
------

Feel free to submit issues and enhancement requests.

Contributing
------------

Please feel free to contribute names database with your kindly pull requests.

TODO
------
  - [ ] Add fingilish support

License
------------
Licensed under [GPL-3.0](LICENSE)

## "Made-With"
>Generating cool taglines for all the millenials out there.

_Made-With_ is a for-fun command-line tool. Globally install _Made-With_ and generare your next footer. No longer will `Made with Javascript and <3` dominate the footers of the internet.

### Install

`npm install made-with -g`

**Generate a random phrase:**

`made-with`

![](https://cloud.githubusercontent.com/assets/12987958/13902542/85e34662-ee22-11e5-8c3c-b49b27973d64.png)

**Install in an application:**

`npm install --save made-with`


**Require and generate phrase:**

```
madeWith = require('made-with')

console.log(madeWith.generatePhrase());
// => "Made with HTML5 and ice cream.""
```

### Development

**Setup:**

`npm install`

This will install `mocha`, `chalk`, and any other dependencies local to this project.

**Testing:**
To run the tests in `./tests` directory, simply run `npm run test`.

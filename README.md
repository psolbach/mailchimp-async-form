# mailchimp-async-form
Mailchimp's embedded signup forms open up new tabs. There's no way to ping the API directly if you're using double opt in. We want users to stay on our site after they click the subscribe button. This library does exactly that. All you need is your Mailchimp User and List id. Install via npm, include the js/css, add a small block of HTML wherever you need the embedded signup field — et voilà. Done.

## Install
```js
npm i --save mailchimp-async-form
```
Then include `mailchimp-async-form.js/mailchimp-async-form.css`.   
Insert the embedcode from `embed.html`, making sure to replace `{uid}` and `{listId}` respectively.

## Demo

You're welcome to try mailchimp-async-form here. Either sign up to my newsletter about future open source releases and thoughts about tech & the publishing industry. Or just use a fake address to test.


---
Licensed under MIT.   
Done by Paul Solbach.   
This is a WIP.   

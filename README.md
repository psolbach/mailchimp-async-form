# mailchimp-async-form
Mailchimp's embedded signup forms open up new tabs. There's no way to ping the API directly if you're using double opt in. We want users to stay on our site after they click the subscribe button. This library does exactly that. All you need is your Mailchimp User and List id. Install via npm, include the js/css, add a small block of HTML wherever you need the embedded signup field — et voilà. Done.

## Install
```js
npm i --save mailchimp-async-form
```
Then include `mailchimp-async-form.js` and `mailchimp-async-form.css`.   
Insert this embedcode, making sure to replace {uid} and {listId} respectively.
```
<div class="signup-box">
      <form class="signup-form" action="https://mc.us16.list-manage.com/subscribe/post-json?u={uid}&id={listId}" method="GET">
        <input type="hidden" name="mc_signupsource" value="hosted">
        <div class="multiple-inputs">
          <input class="input email-field" placeholder="" type="email" name="EMAIL" value="" id="mc-EMAIL" required>
          <button type="submit" name="submit_form" value="" class="button submit" type="submit">Subscribe</button>
        </div>
      </form>
    </div>
    <div class="status-box status-box--success status-box--hidden">
      <div class="status-animation status-animation--success">
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-263.5 236.5 26 26">
            <g class="svg-success">
              <circle cx="-250.5" cy="249.5" r="12"/>
              <path d="M-256.46 249.65l3.9 3.74 8.02-7.8"/>
            </g>
          </svg>
        </div>
      </div>
      <div class="status-notification">
        <p>Thank you! We just sent out a confirmation link to your address. Please confirm.</p>
      </div>
    </div>
    <div class="status-box status-box--error status-box--hidden">
      <div class="status-notification">
        <p>An error occured. Either you're already subscribed or your address is invalid.</p>
      </div>
    </div>
  </div>
```

## Demo

You're welcome to try mailchimp-async-form here. Either sign up to my newsletter about future open source releases and thoughts about tech & the publishing industry. Or just use a fake address to test.


---
Licensed under MIT.   
Done by Paul Solbach.   
This is a WIP.   

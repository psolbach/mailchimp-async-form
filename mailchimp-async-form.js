/*
 * https://mc.us16.list-manage.com/subscribe/post-json?
 * u={uid}&id={id}&c={callback}&EMAIL={address};
 */

document.addEventListener('DOMContentLoaded', () => {
  const signUpBox = document.querySelector('.signup-box');
  const form = document.querySelector('.signup-form');
  const formInput = document.querySelector('.signup-form input[type=email]');
  const formButton = document.querySelector('.signup-form button[type=submit]');
  const statusBoxLoading = document.querySelector('.status-box--loading');
  const statusBoxError = document.querySelector('.status-box--error');
  const statusBoxSuccess = document.querySelector('.status-box--success');

  const jsonpRequest = (url, callback) => {
    let callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    let script = document.createElement('script');

    window[callbackName] = data => {
      delete window[callbackName];
      document.body.removeChild(script);
      callback(data);
    };

    script.onerror = e => {
      console.info('error:', e);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'c=' + callbackName;
    document.body.appendChild(script);
  };

  const toggleStatus = ({ status }) => {
    document.querySelector('.signup-box').hidden = true;
    document.querySelectorAll('.status-box').forEach(item => {
      item.classList.add('status-box--hidden');
    });

    switch (status) {
    case 'loading':
      statusBoxLoading.classList.remove('status-box--hidden');
      break;
    case 'error':
      statusBoxError.classList.remove('status-box--hidden');
      break;
    case 'success':
      statusBoxSuccess.classList.remove('status-box--hidden');
      break;
    }
  };

  const handleFormSubmit = e => {
    const url = `${form.getAttribute('action')}&EMAIL=${formInput.value}`;

    jsonpRequest(url, data => {
      console.info(data);
      toggleStatus({ status: data.result });
    });
  };

  formButton.onclick = e => {
    if (!formInput.value || !formInput.validity.valid) {
      return;
    }

    e && e.preventDefault();
    document.querySelector('.signup-box').classList.add('signup-inactive');
    handleFormSubmit();
  };
});

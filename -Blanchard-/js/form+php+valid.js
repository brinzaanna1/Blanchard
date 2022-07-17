console.log('Init!');

// inputmask
const form = document.querySelector('.contacts__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.contacts__form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #d11616',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    fontSize: '',
    color: '#d11616',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите минимум 3 символа'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 символов'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Имя обязательно'
    }
  ])
  // .addField('.input-mail', [
  //   {
  //     rule: 'required',
  //     value: true,
  //     errorMessage: 'Email обязателен',
  //   },
  //   {
  //     rule: 'email',
  //     value: true,
  //     errorMessage: 'Введите корректный Email',
  //   },
  // ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите 10 цифер без +7',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

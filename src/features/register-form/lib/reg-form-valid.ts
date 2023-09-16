import { forward } from 'effector';
import { createForm } from 'effector-forms';
import { registerFx } from './reg-form-send';

export const registerForm = createForm({
  fields: {
    email: {
      init: '',
      rules: [
        {
          name: 'email',
          validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        },
      ],
    },
    username: {
      init: '',
      rules: [],
    },
    password: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => Boolean(value),
        },
      ],
    },
    passwordRepeat: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => {
            console.log(registerForm.fields.password);
            console.log(value);
            return true;
          },
        },
      ],
    },
  },
  validateOn: ['submit'],
});

forward({
  from: registerForm.formValidated,
  to: registerFx,
});

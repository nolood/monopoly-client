import { forward } from 'effector';
import { createForm } from 'effector-forms';
import { registerFx } from './reg-form-send';
import { checkEmail, checkLength, required } from '@/shared/lib/validators';

export const registerForm = createForm({
  fields: {
    email: {
      init: '',
      rules: [checkEmail(), required()],
    },
    username: {
      init: '',
      rules: [checkLength(3, 15), required()],
    },
    password: {
      init: '',
      rules: [checkLength(6, 20), required()],
    },
  },
  validateOn: ['submit'],
});

forward({
  from: registerForm.formValidated,
  to: registerFx,
});

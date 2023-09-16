import { forward } from 'effector';
import { createForm } from 'effector-forms';
import { registerFx } from './reg-form-send';
import { checkEmail, checkLength, required } from '@/shared/lib/validators';

export const registerForm = createForm({
  fields: {
    email: {
      init: '',
      rules: [required(), checkEmail()],
    },
    username: {
      init: '',
      rules: [required(), checkLength(3, 15)],
    },
    password: {
      init: '',
      rules: [required(), checkLength(6, 20)],
    },
  },
  validateOn: ['submit'],
});

forward({
  from: registerForm.formValidated,
  to: registerFx,
});

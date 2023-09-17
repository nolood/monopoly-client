import { required, checkLength } from '@/shared/lib/validators';
import { createForm } from 'effector-forms';
import { forward } from 'effector';
import { loginFx } from '@/features/login-form/lib/login.ts';

export const loginForm = createForm({
  fields: {
    email: {
      init: '',
      rules: [required()],
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
  from: loginForm.formValidated,
  to: loginFx,
});

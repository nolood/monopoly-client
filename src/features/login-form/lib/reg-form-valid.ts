import { checkEmail, required, checkLength } from '@/shared/lib/validators';
import { createForm } from 'effector-forms';

export const loginForm = createForm({
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

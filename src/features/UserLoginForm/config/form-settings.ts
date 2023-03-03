import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import { InputData } from '../../../entities/LoginFormFrame';

export const inputs: InputData[] = [
  {
    id: 'email',
    label: 'Почта:',
    placeholder: 'alexey.vilnusov@gmail.com',
    Icon: EmailIcon,
    type: 'email',
  },
  {
    id: 'password',
    label: 'Пароль:',
    placeholder: 'StrongPassword!!!',
    Icon: LockIcon,
    type: 'password',
  },
];
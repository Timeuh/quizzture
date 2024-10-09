import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

const credentialsSchema = vine.object({
  username: vine.string().optional(),
  picture: vine.string().optional(),
  email: vine.string().email(),
  type: vine.enum(['google', 'email']),
  password: vine.string().optional().requiredWhen('type', '=', 'email'),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type Credentials = Infer<typeof credentialsSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

export const credentialsValidator = vine.compile(credentialsSchema);

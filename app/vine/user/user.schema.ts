import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

const userSchema = vine.object({
  username: vine.string(),
  email: vine.string().email(),
  password: vine.string().nullable(),
  highest_score: vine.number(),
  victories: vine.number(),
  victories_chain: vine.number(),
  victories_three: vine.number(),
  games: vine.number(),
  games_chain: vine.number(),
  games_three: vine.number(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type User = Infer<typeof userSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

export const userValidator = vine.compile(userSchema);

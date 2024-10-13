import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// complete user
const userSchema = vine.object({
  username: vine.string(),
  picture: vine.string(),
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

// created user in database
const createdUserSchema = vine.object({
  email: vine.string().email(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// complete user
export type User = Infer<typeof userSchema>;

// created user in database
export type CreatedUser = Infer<typeof createdUserSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// complete user
export const userValidator = vine.compile(userSchema);

// created user in database
export const createdUserValidator = vine.compile(createdUserSchema);

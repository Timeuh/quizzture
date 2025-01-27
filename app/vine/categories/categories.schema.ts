import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// Complete category schema
const categorySchema = vine.object({
  id: vine.number().positive(),
  name: vine.string(),
});

// Category creation schema
const categoryCreationSchema = vine.object({
  name: vine.string(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// Complete category type
export type Category = Infer<typeof categorySchema>;

// Category creation type
export type CategoryCreation = Infer<typeof categoryCreationSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// Validate complete category
export const categoryValidator = vine.compile(categorySchema);

// Validate category creation
export const categoryCreationValidator = vine.compile(categoryCreationSchema);

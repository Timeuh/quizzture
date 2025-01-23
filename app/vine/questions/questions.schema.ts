import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// Complete question schema
const questionSchema = vine.object({
  id: vine.number().positive(),
  heading: vine.string(),
  answer: vine.string(),
  category_id: vine.number().positive(),
});

// Question creation schema
const questionCreationSchema = vine.object({
  heading: vine.string(),
  answer: vine.string(),
  category_id: vine.number().positive(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// Complete question type
export type Question = Infer<typeof questionSchema>;

// Question creation type
export type QuestionCreation = Infer<typeof questionCreationSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// Validate complete question
export const questionValidator = vine.compile(questionSchema);

// Validate question creation
export const questionCreationValidator = vine.compile(questionCreationSchema);

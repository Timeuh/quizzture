import bcrypt from 'bcrypt';

/**
 * Compare hashed password with provided password
 *
 * @param {string} password provided password
 * @param {string} hashedPassword hashed password
 *
 * @return {Promise<boolean>} a promise containing the result of the comparison
 */
const validatePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  if (!process.env.BCRYPT_SALT) {
    throw new Error('You must define an env variable with the name BCRYPT_SALT');
  }

  // add custom salt to the password
  const toDecode = process.env.BCRYPT_SALT + password;

  return await bcrypt.compare(toDecode, hashedPassword);
};

export default validatePassword;

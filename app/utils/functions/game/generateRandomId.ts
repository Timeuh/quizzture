/**
 * Generate a random game id
 */
const generateRandomId = (): string => {
  // all possible characters
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  // generate a random id of 8 characters
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // return the id
  return id;
};

export default generateRandomId;

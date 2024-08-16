import jwt, { Secret } from "jsonwebtoken";
import * as bcrypt from "bcrypt";

/**
 * creates a unique jwt from user id and user email
 * @param user
 * @returns {string} the jsonwebtoken
 */
export const createJWT = (user: any): string => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as Secret
  );
  return token;
};

/**
 * compare password from user with the hashed password
 * @param password - password from user
 * @param hash - hashed password
 * @returns {boolean} validation result of the given password
 */
export const validatePassword = (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

/**
 * make a hash from a given password
 * @param password - password from user
 * @returns {string} hashed password
 */
export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

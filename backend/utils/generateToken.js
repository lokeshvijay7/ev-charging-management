import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const jwtsecret = process.env.JWT_SECRET;

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, jwtsecret, { expiresIn: '15d' });
  res.cookie("JWT-EV-CHARGING", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development', 
  });
  return token;
};

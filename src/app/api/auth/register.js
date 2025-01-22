// src/app/api/auth/register/route.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Dummy in-memory user storage (replace with a real database)
let users = [];

export async function POST(req, res) {
  try {
    const { email, password } = await req.json();

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'User already exists' }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user (replace with actual database logic)
    const newUser = { email, password: hashedPassword };
    users.push(newUser);

    // Create a JWT token
    const token = jwt.sign({ email: newUser.email }, 'your-secret-key', {
      expiresIn: '1h',
    });

    return new Response(
      JSON.stringify({ message: 'User registered successfully', token }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Error during registration' }),
      { status: 500 }
    );
  }
}

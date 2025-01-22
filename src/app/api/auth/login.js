// src/app/api/login/route.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Dummy in-memory user storage (replace with a real database)
const users = [
  { id: 1, username: 'test', password: '$2a$10$eQ5f2P5l1XvXlV1Jq7PjJeXwX7X6e1bm5eX9J3z4Wq5kP1iyk4n6m' }, // hashed password for 'password123'
];

export async function POST(req, res) {
  const { username, password } = await req.json();

  // Find the user by username
  const user = users.find((user) => user.username === username);

  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  // Compare the password with the hashed password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 403 });
  }

  // Generate a JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });

  // Send the token as a response
  return new Response(JSON.stringify({ token }), { status: 200 });
}

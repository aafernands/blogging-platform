// src/app/middleware.js
import jwt from 'jsonwebtoken';

export async function middleware(req) {
  const token = req.headers.get('Authorization')?.split(' ')[1]; // Get token from the Authorization header

  if (!token) {
    return new Response(JSON.stringify({ error: 'No token provided' }), { status: 403 });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your secret key
    req.user = decoded; // Store the user info in the request object
    return NextResponse.next(); // Proceed to the next middleware or API route
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid or expired token' }), { status: 403 });
  }
}

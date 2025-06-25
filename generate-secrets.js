const crypto = require('crypto');

// Generate a random string for JWT access token secret
const jwtAccessSecret = crypto.randomBytes(64).toString('hex');
console.log('JWT_ACCESS_SECRET:', jwtAccessSecret);

// Generate a random string for JWT refresh token secret
const jwtRefreshSecret = crypto.randomBytes(64).toString('hex');
console.log('JWT_REFRESH_SECRET:', jwtRefreshSecret);
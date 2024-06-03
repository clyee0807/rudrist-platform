export default defineEventHandler((event) => {
  setCookie(event, 'user_token', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    expires: new Date(0) // Set the expiration date to a past date
  });

  return { message: 'Cookie cleared' };
});
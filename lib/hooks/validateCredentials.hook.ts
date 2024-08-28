const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASS = process.env.ADMIN_PASS;

export async function validateCredentials(email: string, password: string) {
  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    return { id: "admin", name: "Admin", email };
  }
  return null;
}

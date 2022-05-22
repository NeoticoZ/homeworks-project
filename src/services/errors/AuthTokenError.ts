export class AuthTokenError extends Error {
  constructor() {
    super("Auth token is invalid");
  }
}

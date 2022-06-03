export class AuthTokenError extends Error {
  constructor() {
    super("Token de autenticação inválido");
  }
}

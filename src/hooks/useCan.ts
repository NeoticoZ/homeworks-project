import { useAuth } from "./useAuth";

export function useCan() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return false;
  }

  if (user.admin) {
    return true;
  }

  return false;
}

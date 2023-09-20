import http from "../../shared/services/axios";
import { AuthInterface } from "../interfaces/auth-login.interface";

class AuthService {
  constructor() {}

  async httpPost(data: AuthInterface): Promise<{ token: string }> {
    const response = await http.post<AuthInterface, { token: string }>("login/", { data });
    return response.data;
  }

  setTokenToStorage(accessToken: string): void {
    localStorage.setItem("access_token", accessToken);
  }

  getTokenToStorage(accessToken: string): string | null {
    return localStorage.getItem("access_token");
  }
}
export default new AuthService();

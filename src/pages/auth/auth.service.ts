import { BehaviorSubject } from "rxjs";
import http from "../../shared/services/axios";
import { AuthInterface } from "../interfaces/auth-login.interface";

class AuthService {
  private user$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
    this.recoveryDataFromLocalStorage();
  }

  async httpPost(data: AuthInterface): Promise<{ token: string }> {
    const response = await http.post<AuthInterface, { token: string }>("login/", { data });
    return response.data;
  }

  setTokenToStorage(accessToken: string): void {
    localStorage.setItem("access_token", accessToken);
    this.user$.next(accessToken);
  }

  getTokenToStorage(): string | null {
    return localStorage.getItem("access_token");
  }

  getCurrentUser() {
    console.log(this.user$.getValue());
    return this.user$.getValue();
  }

  private recoveryDataFromLocalStorage() {
    const bearer_ = localStorage.getItem("access_token");
    if (bearer_) {
      this.user$.next(bearer_);
    }
  }
}
export default new AuthService();

import http from "../../shared/services/axios";
import authService from "../auth/auth.service";
import { WaitListInterface } from "./interfaces/waitlist.interface";

class WaitListService {
  async httpGet(): Promise<any> {
    return (
      await http.get<WaitListInterface, WaitListInterface>("bancoespera/", {
        config: { headers: { Authorization: `Token ${authService.getTokenToStorage()}` } },
      })
    ).data;
  }
}

export default new WaitListService();

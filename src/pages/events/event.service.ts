import http from "../../shared/services/axios";
import authService from "../auth/auth.service";
import { EventInterface } from "../interfaces/event.interface";

class EventService {
  constructor() {}

  async httpPost(data: EventInterface): Promise<any> {
    return (
      await http.post<EventInterface, EventInterface>("eventos/", {
        data,
        config: { headers: { Authorization: `Token ${authService.getTokenToStorage()}` } },
      })
    ).data;
  }

  async httpGet(): Promise<EventInterface[]> {
    return (await http.get<EventInterface, EventInterface[]>("eventos/")).data;
  }
}
export default new EventService();

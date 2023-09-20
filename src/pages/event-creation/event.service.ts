import http from "../../shared/services/axios";
import { EventInterface } from "../interfaces/event.interface";

class EventService {
  constructor() {}

  async httpPost(data: EventInterface): Promise<any> {
    const response = await http.post<EventInterface, EventInterface>("eventos/", { data });
    return response.data;
  }
}
export default new EventService();

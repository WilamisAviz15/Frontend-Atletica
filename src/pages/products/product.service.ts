import http from "../../shared/services/axios";
import authService from "../auth/auth.service";
import { ProductCreateInterface } from "../interfaces/product-create-interface";

class ProductService {
  constructor() {}

  async httpPost(data: ProductCreateInterface): Promise<any> {
    return (
      await http.post<ProductCreateInterface, ProductCreateInterface>("produtos/", {
        data,
        config: { headers: { Authorization: `Token ${authService.getTokenToStorage()}` } },
      })
    ).data;
  }
}

export default new ProductService();

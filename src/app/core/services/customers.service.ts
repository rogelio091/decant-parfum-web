import { Injectable, inject } from '@angular/core';
import { CustomerResponse } from '../models-api/Customers';
import { Endpoints, REQUEST_METHOD } from '../api/configs';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiService = inject(ApiService);

  getCustomers(): Observable<CustomerResponse[]> {
    return this.apiService.CallApi<CustomerResponse[]>(REQUEST_METHOD.GET, Endpoints.CUSTOMER);
  }

  postCustomer(customer: CustomerResponse): Observable<CustomerResponse> {
    return this.apiService.CallApi<CustomerResponse>(
      customer.id ? REQUEST_METHOD.PUT : REQUEST_METHOD.POST,
      Endpoints.CUSTOMER,
      customer,
      customer.id ? customer.id.toString() : ''
    );
  }

  deleteCustomer(customer: CustomerResponse): Observable<any> {
    return this.apiService.CallApi(
      REQUEST_METHOD.DELETE,
      Endpoints.CUSTOMER,
      {},
      customer.id.toString()
    );
  }
}

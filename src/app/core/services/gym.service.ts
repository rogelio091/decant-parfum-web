import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../models-api/PaginatedResponse';
import { GymReponse } from '../models-api/Gym';
import { ApiService } from '../api/api.service';
import { REQUEST_METHOD, Endpoints } from '../api/configs';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  private apiService = inject(ApiService);

  getGyms(
    pagination: {
      PageNumber: number;
      PageSize: number;
    },
    filters?: string
  ): Observable<PaginatedResponse<GymReponse>> {
    return this.apiService.CallApi<PaginatedResponse<GymReponse>>(
      REQUEST_METHOD.GET,
      `${Endpoints.GYM}?PageNumber=${pagination.PageNumber}&PageSize=${pagination.PageSize}${filters ? `&Filters=${filters}` : ''}`
    );
  }
}

import { inject, Injectable } from '@angular/core';
import { Item } from '../models/item.type';
import { ApiService } from '../api/api.service';
import { REQUEST_METHOD } from '../api/configs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private _apiService = inject(ApiService);

  addPerfume(item: Item) {
    return this._apiService.CallApi(REQUEST_METHOD.POST, '/add', item);
  }

  getPerfumes() {
    return this._apiService.CallApi(REQUEST_METHOD.GET, '/list');
  }
}

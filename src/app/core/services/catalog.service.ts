import { inject, Injectable } from '@angular/core';
import { Item } from '../models/item.type';
import { ApiService } from '../api/api.service';
import { REQUEST_METHOD } from '../api/configs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private _apiService = inject(ApiService);

  addPerfume(item: Item) {
    return this._apiService.CallApi(REQUEST_METHOD.POST, '/add', item);
  }

  getPerfumes(): Observable<Item[]> {
    return this._apiService.CallApi(REQUEST_METHOD.GET, '/list');
  }

  updatePerfume(item: Item): Observable<any> {
    return this._apiService.CallApi(
      REQUEST_METHOD.PUT,
      '/update',
      item,
      '?id=' + item.id.toString()
    );
  }
}

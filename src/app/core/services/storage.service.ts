import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject } from 'rxjs';
import { ClaimsResponse, UserResponse } from '../models-api/Identity';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  userData$ = new BehaviorSubject<UserResponse>(null);

  setUserValue(value) {
    localStorage.setItem(
      'udata',
      CryptoJS.AES.encrypt(JSON.stringify(value), environment.S_KEY).toString()
    );
  }

  setLastStoreSelection(value) {
    sessionStorage.setItem(
      'ltStr',
      CryptoJS.AES.encrypt(JSON.stringify(value), environment.S_KEY).toString()
    );
  }

  getUserValue(): UserResponse {
    if (localStorage.getItem('udata')) {
      const decrypt = CryptoJS.AES.decrypt(
        localStorage.getItem('udata').toString(),
        environment.S_KEY
      ).toString(CryptoJS.enc.Utf8);
      const userData = JSON.parse(decrypt) as UserResponse;
      this.userData$.next(userData);
      return userData;
    } else return null;
  }

  // getLastStoreSelection(): StoreResponse {
  //     if (sessionStorage.getItem('ltStr')) {
  //         const decrypt = CryptoJS.AES.decrypt(
  //             sessionStorage.getItem('ltStr').toString(),
  //             environment.S_KEY
  //         ).toString(CryptoJS.enc.Utf8);
  //         const lastStore = JSON.parse(decrypt) as StoreResponse;
  //         return lastStore;
  //     } else return null;
  // }

  removeUserValue() {
    localStorage.clear();
    sessionStorage.clear();
  }
}

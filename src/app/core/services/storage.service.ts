import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  saveValue(key: string, value) {
    localStorage.setItem(
      key,
      CryptoJS.AES.encrypt(JSON.stringify(value), environment.S_KEY).toString()
    );
  }

  getValue<T>(key: string) {
    if (localStorage.getItem(key)) {
      const decrypt = CryptoJS.AES.decrypt(
        localStorage.getItem(key).toString(),
        environment.S_KEY
      ).toString(CryptoJS.enc.Utf8);
      const decryptData = JSON.parse(decrypt) as T;
      return decryptData;
    } else return null;
  }

  clearValues() {
    localStorage.clear();
  }
}

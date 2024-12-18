import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'environments/environment';
import { REQUEST_METHOD } from './configs';

const url = environment.API_URL;

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private http = inject(HttpClient);

    CallApi<T>(
        requestMethod: string,
        endpoint: string,
        body?: any,
        query: string = ''
    ): Observable<T> {
        const upperCaseMethod = requestMethod.toUpperCase();
        if (REQUEST_METHOD.hasOwnProperty(upperCaseMethod)) {
            const methodName = requestMethod.toLowerCase() as
                | 'get'
                | 'post'
                | 'put'
                | 'delete'
                | 'patch';
            if (
                methodName !== 'post' &&
                methodName !== 'put' &&
                methodName !== 'patch' &&
                methodName !== 'get'
            ) {
                return this.http[methodName](url + endpoint + query, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                    }),
                    withCredentials: true,
                }).pipe(map((response) => response as T));
            } else if (methodName === 'get') {
                return this.http[methodName](url + endpoint + query, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                    }),
                    withCredentials: true,
                }).pipe(map((response) => response as T));
            } else {
                return this.http[methodName](url + endpoint + query, body, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                    }),
                    withCredentials: true,
                }).pipe(map((response) => response as T));
            }
        } else {
            throw new Error(`Método HTTP no válido: ${endpoint}`);
        }
    }

    CallApiFile<T>(
        requestMethod: string,
        endpoint: string,
        body?: any,
        query: string = ''
    ): Observable<T> {
        const upperCaseMethod = requestMethod.toUpperCase();
        if (REQUEST_METHOD.hasOwnProperty(upperCaseMethod)) {
            const methodName = requestMethod.toLowerCase() as
                | 'get'
                | 'post'
                | 'put'
                | 'delete'
                | 'patch';
            if (
                methodName !== 'post' &&
                methodName !== 'put' &&
                methodName !== 'patch' &&
                methodName !== 'get'
            ) {
                return this.http[methodName](url + endpoint + query, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/pdf',
                        responseType: 'blob',
                    }),
                    withCredentials: true,
                }).pipe(map((response) => response as T));
            } else if (methodName === 'get') {
                return this.http[methodName](url + endpoint + query, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/pdf',
                        Accept: 'application/pdf',
                    }),
                    responseType: 'blob',
                    withCredentials: true,
                }).pipe(map((response) => response as T));
            } else {
                return this.http[methodName](url + endpoint + query, body, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/pdf',
                        responseType: 'blob',
                    }),
                    withCredentials: true,
                }).pipe(map((response) => response as T));
            }
        } else {
            throw new Error(`Método HTTP no válido: ${endpoint}`);
        }
    }

    CallApiPostFormData<T>(
        endpoint: string,
        body?: FormData | FormData[],
        query: string = ''
    ): Observable<T> {
        return this.http
            .post<T>(url + endpoint + query, body, {
                withCredentials: true,
            })
            .pipe(map((response) => response as T));
    }

    CallApiGetFormData<T>(endpoint: string, query: string = ''): Observable<T> {
        const dat = new Date().getTime();
        return this.http
            .get(url + endpoint + query, {
                headers: new HttpHeaders({
                    'Content-Type': 'image/png',
                    Accept: 'image/png',
                    'cache-control': 'no-cache',
                }),
                responseType: 'arraybuffer',
                withCredentials: true,
            })
            .pipe(map((response) => response as T));
    }
}

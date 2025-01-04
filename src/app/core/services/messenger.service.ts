import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private webhookUrl = 'https://webhook-worker.diegorogelio.workers.dev/webhook'; // URL de tu Worker

  constructor(private http: HttpClient) {}

  sendMessageToMessenger(userId: string, message: string): Observable<any> {
    const body = {
      userId,
      message
    };

    return this.http.post(this.webhookUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export function initializeApp(configService: ConfigService): () => Promise<void> {
  return () => configService.loadConfig(); // Cargar el archivo de configuración
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;
  private http = inject(HttpClient);

  // Método para cargar el archivo de configuración
  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get('/config.json'))
      .then((data) => {
        this.config = data;
        console.log('Configuración cargada', this.config);
      })
      .catch((error) => {
        console.error('Error al cargar config.json', error);
      });
  }

  // Método para obtener las configuraciones
  getConfig() {
    return this.config;
  }

  // Método para obtener un valor específico
  getSetting(key: string) {
    return this.config ? this.config[key] : null;
  }
}

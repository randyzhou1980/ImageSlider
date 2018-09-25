import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public get imageBaseUrl(): string {
    return 'assets/images/';
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  private cookieStore: Array<string>[] = [];

  constructor() {
    this.parseCookies(document.cookie);
  }

  public parseCookies(cookies = document.cookie): void {
    this.cookieStore = [];
    if (!cookies) { return; }
    const cookiesArr: string[] = cookies.split(';');
    for (const cookie of cookiesArr) {
      const cookieArr: string[] = cookie.split('=');
      this.cookieStore.indexOf(cookieArr[0].trim()); // ARREGLAR ESTA PUTA MIERDA
      this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
    }

    get(key: string) {
      this.parseCookies();
      return !!this.cookieStore[key] ? this.cookieStore[key] : null;
    }

    remove(key: string) {
      document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
    }

    set(key: string, value: string) {
      document.cookie = key + '=' + (value || '');
    }
  }
}

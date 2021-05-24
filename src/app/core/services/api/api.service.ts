import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { AppConfig } from '../../config/app-config'
import { Observable } from 'rxjs'

const BASE_URL = AppConfig.API_URL

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  }

  constructor(private httpClient: HttpClient) {}

  public get(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.httpClient.get(BASE_URL + path, { params })
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient.put(
      BASE_URL + path,
      JSON.stringify(body),
      this.options
    )
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient.post(
      BASE_URL + path,
      JSON.stringify(body),
      this.options
    )
  }

  public delete(path: string, options: object = {}): Observable<any> {
    return this.httpClient.delete(BASE_URL + path, options)
  }
}

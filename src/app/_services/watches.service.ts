import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watches } from '../watches';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WatchesService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAllWatches(): Observable<Watches[]> {
    return this.http.get<Watches[]>(`${this.apiServerUrl}/api/watches/all`);
}

public addWatches(watches: Record<string, unknown>): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(`${this.apiServerUrl}/api/watches/add`, watches);
}

public deleteWatches(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/watches/delete/${id}`);
}

public getAllMyWatches(id: number | undefined): Observable<Watches[]> {
    return this.http.get<Watches[]>(`${this.apiServerUrl}/api/watches/all/${id}`);
}


}

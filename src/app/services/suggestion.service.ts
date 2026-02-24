import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  url = "http://localhost:3000/suggestions/";
  constructor(private http: HttpClient) { }

  addSuggestion(suggestion: Suggestion): Observable<Suggestion> {
    return this.http.post<Suggestion>(this.url, suggestion);
  }
  getAllSuggestion(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.url);
  }

  getSuggestionById(id: number): Observable<any> {
    return this.http.get<any>(this.url + id);
  }

  updateSuggestion(id: string, suggestion: Suggestion): Observable<any> {
    return this.http.put<any>(this.url + id, suggestion);
  }

  deleteSuggestion(id: number): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from './poll.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseUrl: string="http://localhost:8080/api/polls";

  constructor(private http: HttpClient) { }

  createPoll(poll:Poll): Observable<Poll>{
    return this.http.post<Poll>(`${this.baseUrl}/add-poll`,poll);
  }


  getPolls(): Observable<Poll[]>{
    return this.http.get<Poll[]>(`${this.baseUrl}/get-all-polls`);
  }

  vote(pollId: number,optionIndex: number):Observable<void>{
    const url = `${this.baseUrl}/vote`;
    return this.http.post<void>(url, { pollId, optionIndex });
  }

}

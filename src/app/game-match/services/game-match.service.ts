import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatchResult } from '../models/MatchResult';
import { MatchSummary } from '../models/MatchSummary';
import { Move } from '../models/Move';

@Injectable({
  providedIn: 'root'
})
export class GameMatchService {

  playMatchGetMapping = '/match/play/';
  matchSummaryGetMapping = '/match/summary/';

  constructor(
    private httpClient: HttpClient
  ) { }

  playMatch(playerMove: Move) : Observable<MatchResult> {
    return this.httpClient.get<MatchResult>(environment.apiRest + this.playMatchGetMapping + playerMove);
  }

  getMatchSummary() : Observable<MatchSummary> {
    return this.httpClient.get<MatchSummary>(environment.apiRest + this.matchSummaryGetMapping);
  }
}

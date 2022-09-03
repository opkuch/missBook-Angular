import { Injectable } from '@angular/core';
import { QuoteModel } from '../../models/quote.model';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
import { Subscription, BehaviorSubject, interval } from 'rxjs';
import { UtilService } from '../utilservice/util.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient, private UtilService: UtilService) { }
  // _quotes$ = new BehaviorSubject<Array<QuoteModel>>([])
  // quotes$ = this._quotes$.asObservable()

  public getQuotesFromApi() {
    return this.http.get<{quotes: Array<Object>}>('https://goquotes-api.herokuapp.com/api/v1/random?count=300').pipe(
      map(res => res.quotes),
      map(quotes => quotes[this.UtilService.generateRandom(quotes.length)])
  )
  }
}

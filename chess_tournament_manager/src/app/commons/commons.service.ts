import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CommonService {
  private pageTitle = new BehaviorSubject('Accueil');
  pageTitle$ = this.pageTitle.asObservable();

  changePageTitle(pageTitle: string) {
    this.pageTitle.next(pageTitle)
  }
}

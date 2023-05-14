import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EMPTY, Observable, empty, fromEvent, map, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scroll$: Observable<number>;


  /** 
    The @Inject() is a constructor parameter decorator, which tells angular to Inject the parameter 
    with the dependency provided in the given token. It is a manual way of injecting the dependency.

    In the previous example, when we removed the @Injectable decorator from the ProductService we got an error.

    We can manually inject the LoggerService by using the @Inject decorator applied to the parameter loggerService as shown below.

    The @Inject takes the Injector token as the parameter. The token is used to locate the dependency in the Providers. 
  */


  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if(isPlatformBrowser(this.platformId)){
      this.scroll$ = fromEvent(window, 'scroll').pipe(
        map(event => {
          return window.scrollY || this.document.documentElement.scrollTop;
        }),  
        share()
      );
    }
    else{
      //in non-browser environments, provide an empty observable so you can safely subscribe to scroll$
      this.scroll$ = EMPTY
      
    }
  }
}

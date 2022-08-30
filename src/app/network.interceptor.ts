import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SharedService } from './services/shared.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader: SharedService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() =>{
        this.loader.hide();
      })
    )
  }
}

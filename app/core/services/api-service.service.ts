import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

  public getRequest(url:string,headers):Observable<any>|null{
    console.log(url);
    return this.httpClient.get(url,{headers: headers});
  }
  public postRequest(url:string,body,headers):Observable<any>|null{
    console.log(url);
    return this.httpClient.post(url,body,{headers: headers});
  }
  public putRequest(url:string,body,headers):Observable<any>|null{
    console.log(url);
    return this.httpClient.put(url,body,{headers: headers});
  }
  public deleteRequest(url:string,body,headers):Observable<any>|null{
    console.log(url);
    return this.httpClient.delete(url,{headers: headers});
  }

}

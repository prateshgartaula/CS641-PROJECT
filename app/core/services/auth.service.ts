import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  ) { }
  public logout() :void {    
    sessionStorage.setItem('isLoggedIn','false');  
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    }
}

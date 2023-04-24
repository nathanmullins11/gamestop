import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";
import { Subject} from "rxjs";
import { tap } from "rxjs/operators"
import { User } from "./user.model";


@Injectable ({
  providedIn: 'root'
})

export class AuthService {
  baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
  signUpEndpoint: string = "signUp";
  signInEndPoint: string = 'signInWithPassword';
  public user:Subject<User> = new Subject<User>();

  public constructor(private http:HttpClient) {

  }

  public signup(email: string, password: string) {
    const requestBody = {
      "email": email,
      "password": password,
      "returnSecureToken": true
    };

    return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
  }

  public login(email: string, password: string) {
    const requestBody = {
      "email": email,
      "password": password,
      "returnSecureToken": true
    };

    return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndPoint + '?' + 'key=' + environment.firebase.apiKey, requestBody)
    .pipe(
      tap(
      (data:AuthResponse) => {
        const currentTime = new Date().getTime();
        const expiirationDate = new Date(currentTime + +data.expiresIn * 1000);
        const user = new User(data.email, data.localId, data.idToken, expiirationDate);
        this.user.next(user);
      }
      )
    );
  }

}
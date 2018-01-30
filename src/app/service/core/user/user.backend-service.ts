import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User, UserInfo } from './user.service';
@Injectable()
export class UserBackendService {
    private baseUrl = 'http://localhost:3000/user';
    private checkUserAccountUrl = this.baseUrl + '/checkUserAccount';
    private userAuthorizeUrl = this.baseUrl + '/userAuthorize';
    private checkAdminUrl = this.baseUrl + '/checkAdmin';
    private getUserInfoUrl = this.baseUrl + '/getUserInfo';
    constructor(private _http: HttpClient) { }
    async get(url: string, data: any) {
        if (url === this.checkUserAccountUrl) {
            console.log('checkUserAccount call');
            const params = new HttpParams().set('userAccount', data.loginAccount);
            const result = await this._http.get<User>(this.baseUrl, { params: params }).toPromise();
            if (result) {
                return true;
            } else {
                return false;
            }
        }
        if (url === this.userAuthorizeUrl) {
            console.log('userAuthorize call');
            const params = new HttpParams().set('userAccount', data.loginAccount);
            const result = await this._http.get<User>(this.baseUrl, { params: params }).toPromise();
            if (data.loginAccount === result.userAccount && data.loginPassword === result.userPassword) {
                return true;
            } else {
                return false;
            }
        }
        if (url === this.checkAdminUrl) {
            console.log('checkAdmin call');
            const params = new HttpParams().set('userAccount', data.loginAccount);
            const result = await this._http.get<User>(this.baseUrl, { params: params }).toPromise();
            return result.isAdmin;
        }
        if (url === this.getUserInfoUrl) {
            console.log('getUserInfo call');
            const params = new HttpParams().set('userAccount', data.loginAccount);
            const result = await this._http.get<UserInfo>(this.baseUrl, { params: params }).toPromise();
            return result;
        }
    }
}

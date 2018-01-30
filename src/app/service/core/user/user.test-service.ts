import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserBackendService } from './user.backend-service';
import { MaterializeService } from '../../../service/shared/materialize/materialize.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class UserService {
    baseUrl = 'http://localhost:3000/user';
    constructor(private _router: Router, private _http: UserBackendService,
        private _cookieService: CookieService, private _materialize: MaterializeService) { }
    // auth guard for routing
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLoggedIn()) {
            // component is admin only and is admin user
            console.log('canActivate call');
            if (this.isPremission(route.url, this.checkIsAdmin())) {
                return true;
            } else {
                // component is admin only but isn't admin user
                this._materialize.toast('Only admin can see this!', 3000, 'danger');
                this._router.navigateByUrl('home');
            }
        } else {
            this._router.navigateByUrl('home');
        }
    }

    // need to change to Token
    isLoggedIn(): boolean {
        if (this._cookieService.check('currentUserAccount')) {
            return true;
        } else {
            this._materialize.toast('You are not Login!', 1000, 'danger');
            return false;
        }
    }
    // check if url is admin only or not
    isPremission(urlList, isAdmin) {
        for (const i of urlList) {
            if (this.isAdminOnly(i.path)) {
                if (isAdmin) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
    // admin only url table change to api
    isAdminOnly(path) {
        switch (path) {
            case 'topic':
                return true;
            default:
                return false;
        }
    }
    async doLogin(account: string, password: string) {
        if (await this._http.get(this.baseUrl + '/checkUserAccount', { loginAccount: account })) {
            if (await this._http.get(this.baseUrl + '/userAuthorize', { loginAccount: account, loginPassword: password })) {
                this._cookieService.set('currentUserAccount', account);
                return { status: true, message: 'login success!' };
            } else {
                return { status: false, message: 'wrong password!' };
            }
        } else {
            return { status: false, message: 'doesn\'t match any account!' };
        }
    }
    doLogout(): void {
        this._cookieService.delete('currentUserAccount');
    }
    async getCurrentUserInfo() {
        const account = this.getCurrentUserAccount();
        // change to api
        const userInfo = await this._http.get(this.baseUrl + '/getUserInfo', { loginAccount: account });
        return userInfo;
    }
    async checkIsAdmin() {
        const account = this.getCurrentUserAccount();
        // change to api
        const isAdmin = await this._http.get(this.baseUrl + '/checkAdmin', { loginAccount: account });
        return isAdmin;
    }
    getCurrentUserAccount(): string {
        return this._cookieService.get('currentUserAccount');
    }
}
export class User {
    userAccount: string;
    userPassword: string;
    userName: string;
    photoUrl: string;
    isAdmin: boolean;
}
export class UserInfo {
    userName: string;
    photoUrl: string;
}

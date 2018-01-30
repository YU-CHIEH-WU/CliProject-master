import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MaterializeService } from '../../../service/shared/materialize/materialize.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class UserService {
    apiUrl = 'http://localhost:3000/user';
    userList: User[];
    constructor(private _router: Router, private _http: HttpClient,
        private _cookieService: CookieService, private _materialize: MaterializeService) { }
    // auth guard for routing
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLoggedIn()) {
            // component is admin only and is admin user
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
        if (!this.userList) {
            await this.getUserList();
        }
        for (const i of this.userList) {
            if (account === i.userAccount) {
                if (password === i.userPassword) {
                    this._cookieService.set('currentUserAccount', account);
                    return { status: true, message: 'login success!' };
                } else {
                    return { status: false, message: 'wrong password!' };
                }
            }
        }
        return { status: false, message: 'doesn\'t match any account!' };
    }
    doLogout(): void {
        this._cookieService.delete('currentUserAccount');
    }
    async getCurrentUserInfo() {
        if (!this.userList) {
            await this.getUserList();
        }
        this.getUserList();
        const account = this.getCurrentUserAccount();
        // change to api
        for (const i of this.userList) {
            if (i.userAccount === account) {
                const userInfo = new UserInfo();
                userInfo.userName = i.userName;
                userInfo.photoUrl = i.photoUrl;
                return userInfo;
            }
        }
    }
    async checkIsAdmin() {
        if (!this.userList) {
            await this.getUserList();
        }
        const account = this.getCurrentUserAccount();
        // change to api
        for (const i of this.userList) {
            if (i.userAccount === account) {
                return i.isAdmin;
            }
        }
    }
    getCurrentUserAccount(): string {
        return this._cookieService.get('currentUserAccount');
    }
    async getUserList() {
        this.userList = await this._http.get<User[]>(this.apiUrl).toPromise();
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

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MaterializeService } from '../../../service/shared/materialize/materialize.service';
import { UserService, UserInfo } from '../../../service/core/user/user.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    collapsible: any;
    clickedTab: string;
    loginAccount: string;
    loginPassword: string;
    isLoggedIn = false;
    isAdmin: boolean;
    error = { isAccountValid: true, isPasswordValid: true };
    currentUserInfo: UserInfo = { userName: '', photoUrl: '' };
    userMenu: any;
    loadCount: number;
    constructor(private _router: Router, private _userService: UserService,
        private _materialize: MaterializeService) { }

    async ngOnInit() {
        this.loadCount = 0;
        this.userMenu = this._materialize.collapsible('.user-menu');
        this.isLoggedIn = this._userService.isLoggedIn();
        if (this.isLoggedIn) {
            const userInfo: any = await this._userService.getCurrentUserInfo();
            this.currentUserInfo = userInfo;
            this.checkIsAdmin();
        }
        this._router.events.subscribe((res) => {
            if (res instanceof NavigationEnd) {
                this.clickedTab = this._router.url;
            }
        });
    }
    clickTab(clickedTab): void {
        this.clickedTab = clickedTab;
    }
    validInput(model: string): void {
        if (this['login' + model] === '') {
            this.error['is' + model + 'Valid'] = false;
        } else {
            this.error['is' + model + 'Valid'] = true;
        }
    }
    async doLogin() {
        if (this.loginAccount === '' && this.loginPassword === '') {
            this.error.isAccountValid = false;
            this.error.isPasswordValid = false;
            return false;
        }
        if (this.error.isAccountValid && this.error.isPasswordValid) {
            const result = await this._userService.doLogin(this.loginAccount, this.loginPassword);
            if (result.status) {
                const userInfo: any = await this._userService.getCurrentUserInfo();
                this.currentUserInfo = userInfo;
                this.isLoggedIn = true;
                this._materialize.toast(result.message, 3000);
            } else {
                this._materialize.toast(result.message, 3000, 'danger');
            }
            this._router.navigateByUrl('home');
        }
    }
    doLogout() {
        this._userService.doLogout();
        this.loginAccount = '';
        this.loginPassword = '';
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.currentUserInfo = new UserInfo();
        this._router.navigateByUrl('home');
        this._materialize.closeCollapsible(this.userMenu);
    }
    async checkIsAdmin() {
        console.log('navcheckisadmin call');
        if (this.isAdmin === undefined) {
            const result: any = await this._userService.checkIsAdmin();
            this.isAdmin = result;
        }
    }
}

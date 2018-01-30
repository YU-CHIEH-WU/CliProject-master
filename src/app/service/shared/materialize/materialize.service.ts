import { Injectable } from '@angular/core';

declare let M: any;

@Injectable()
export class MaterializeService {

    toast(message: string, duration: number, classes: string = '') {
        M.toast({ html: message, displayLength: duration, classes: classes });
    }

    collapsible(target: string, option?) {
        const elem = document.querySelector(target);
        const instance = M.Collapsible.init(elem, option);
        return instance;
    }
    openCollapsible(target, index) {
        const instance = M.Collapsible.getInstance(target);
        instance.open(index);
    }

    closeCollapsible(instance, index?) {
        instance.close(index);
    }
}

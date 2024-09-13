import { makeAutoObservable } from "mobx";
import getLocation from "../../../utilities/helpers/GetLocationHelper";
import { toastMsg } from "../../../utilities/helpers/ToastHelper";

class HeaderState{
    locationInfo: any = null
    constructor(){
        makeAutoObservable(this);
    }
    async handleLocationGetting(){
        this.locationInfo = await getLocation();
    }
}
export const headerState = new HeaderState();
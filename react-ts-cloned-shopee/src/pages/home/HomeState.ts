import { makeAutoObservable } from "mobx";
import getLocation from "../../utilities/helpers/GetLocationHelper";

class HomeState{
    locationInfo: any = null;
    constructor(){
        makeAutoObservable(this);
    }
    async handleLocationGetting(){
        this.locationInfo = await getLocation();
        console.log(this.locationInfo)
    }
}
export const homeState = new HomeState();
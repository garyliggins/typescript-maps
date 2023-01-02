import { Company } from "./Company";

// we will pass this into the addMarker function and if a class has the properties of this interface we can pass it into the function
export interface Mappable {
location: {
    lat: number;
    lng: number;
 };
 markerContent(): string;
}


export class CustomMap {
   private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center:{
                lat:0,
                lng:0
            }
        });

      
        
    }

    
    //this function eliminates the repeating code and lets company or user use this function to add a marker
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng:mappable.location.lng
            }
        })
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content:mappable.markerContent()
            })
            infoWindow.open(this.googleMap,marker)
        })
    }


}
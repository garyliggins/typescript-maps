// /// <reference types="@types/google.maps" />
import {User} from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";

//creating a instance of a user
const user = new User();
console.log(user);

//creating a instance of a company
const company = new Company();
console.log(company);

//creating a instance of a google map
const customMap = new CustomMap("map");

// taking the instance of the google map. then using the addUserMarker function and passing in the user instance which will add the marker where the location that the user has in the user class
customMap.addMarker(user);

// taking the instance of the google map. then using the addCompanyMarker function and passing in the company instance which will add the marker where the location that the company has in the company class
customMap.addMarker(company);
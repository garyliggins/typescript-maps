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
new CustomMap("map");

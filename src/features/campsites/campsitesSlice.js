//The file name is lowercased because we do NOT plan to export a react component.

//IMPORTS
import { CAMPSITES } from '../../app/shared/CAMPSITES';
//This is a relative path because it is a path to campsites.js and it is relative to the location of this file.

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};
import {tabletojson} from '../lib';
tabletojson.convertUrl('https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes', function (tablesAsJson) {
    console.log(tablesAsJson[1]);
});

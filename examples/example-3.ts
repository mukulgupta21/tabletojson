import {tabletojson} from '../lib';
tabletojson.convertUrl(
    'https://www.timeanddate.com/holidays/ireland/2017',
    {
        useFirstRowForHeadings: true,
    },
    function (tablesAsJson) {
        console.log(tablesAsJson[0]);
    },
);

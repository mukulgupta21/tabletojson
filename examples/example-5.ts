import {tabletojson} from '../lib';
import {Parser} from 'json2csv';
const url = 'http://en.wikipedia.org/wiki/List_of_countries_by_credit_rating';
tabletojson.convertUrl(url).then(function (tablesAsJson) {
    const fitchRatings = tablesAsJson[2];
    const json2csvParser = new Parser({
        fields: ['Country/Region', 'Outlook'],
    });
    const csv = json2csvParser.parse(fitchRatings);
    console.log(csv);
    /* Example output
          "Country/Region","Outlook"
          "Abu Dhabi, UAE","Stable"
          "Albania","Stable"
          "Andorra","Negative"
          "Angola","Stable"
          "Argentina","Negative"
          "Aruba","Stable"
          "Australia","Stable"
          "Austria","Negative"
          "Azerbaijan","Positive"
          ...
        */
});

// {
//     "title": "Fleet GPS & Telematics",
//     "expiration": "2021-06-01T08:00:00.000Z",
//     "contract_number": "022217-WEX",
//     "files" [
//       {
//         "contract-forms": "https://www.sourcewell-mn.gov/sites/default/files/2018-05/WEX%20Contract%20022217.pdf"
//       }
//     ]
//     "vendor": {
//       "name": "WEX",
//       "contacts": [
//         {
//           "name": "Denise Baumgart",
//           "phone": "888-842-0075",
//           "email": "denise.baumgart@wexinc.com"
//         }
//       ]
//     }
//   }
const $ = require('cheerio');
const rp = require('request-promise');

const options = {
    uri: 'https://www.sourcewell-mn.gov/cooperative-purchasing/022217-wex#tab-contact-information',
    transform: function (body) {
        return $.load(body);
    }
};

const output = {};

rp(options)
    .then($ => {
        const title = $('p.lead', '.vendor-contract-header');
        const afterTitle = title.next().text().split('\n');
        const contact = $('article div.inline-user', '#tab-contact-information');
        // filter for "contract forms". There could be additional files in the collection worth hanging onto
        const contractDocs = $('a', '#tab-contract-documents').filter((i, el) => {
            console.log($(el).text().toLowerCase());
            return $(el).text().toLowerCase().includes('contract forms');
        });
        output.title = title.text();
        output.expiration = new Date(afterTitle[1].toLowerCase().replace('maturity date:', '').trim());
        output.contract_number = afterTitle[0].slice(afterTitle.indexOf('#') + 1);
        output.files = [
            {
                [contractDocs.text().toLowerCase().replace(' ', '-').trim()]: contractDocs.attr('href')
            }
        ];
        output.vendor = { name: $('h1', '.vendor-contract-header').text() };
        output.vendor.contacts = [
            {
                name: contact.children().first('div').text(),
                phone: contact.children().eq(1).children().eq(1).text(),
                email: contact.children().eq(2).children().eq(1).text()
            }
        ];
        console.log(JSON.parse(JSON.stringify(output)));
    });
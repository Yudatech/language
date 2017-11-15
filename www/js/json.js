let lang = 'sv';

let labels = {
  sv: {
     firstName: 'Förnamn',
     lastName: 'Efternamn',
     birthDate: 'Födelsedatum',
     phone: 'Telefonnnummer'
  },
  en: {
     firstName: 'First name',
     lastName: 'Last name',
     birthDate: 'Birth date',
     phone: 'Telephone number'
  }

}
console.log(JSON.stringify(labels,'','  '));
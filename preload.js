var licenseKey = require('license-key-gen');

function generate() {

  var userInfo = {company:"MGH Developpers", name: "Abdo MGH"}
  var licenseData = {
    info: userInfo,
    ProdName: document.querySelector('#prod-name').value,
    prodCode: document.querySelector('#prod-code').value,
    appVersion: document.querySelector('#prod-version').value
    }

  try{
    var license = licenseKey.createLicense(licenseData)
    console.log('** LICENCE KEY **', license);
    document.querySelector('#generated-key').innerHTML = license.license
  }catch(err){
    console.log(err);
  }
}

function getValuesFromIntegrationJson(formJSONValues) {
  var result = {};
  formJSONValues.forEach(
    function (jsonValue) {
      if(jsonValue.label)
        result[jsonValue.label] = jsonValue.value;
    }
  );

  return result;
}


console.log(JSON.parse(process.argv[2]).formJSONValues);
//var jsonValues = getValuesFromIntegrationJson(JSON.parse(process.argv[2]).formJSONValues);

//console.log('docker login  -u "' + jsonValues.username + '" -p "' + jsonValues.password + '"');

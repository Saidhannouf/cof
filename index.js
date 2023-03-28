const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
var cors = require('cors')
var XLSX = require("xlsx");
var workbook = XLSX.readFile("frn.xlsx");
let worksheet = workbook.Sheets[workbook.SheetNames[0]];
var sheet = workbook.SheetNames;
app.use(cors())

let a1;

sheet.forEach(element => {

  console.log(element);
  var test = XLSX.utils.sheet_to_json(workbook.Sheets[element]);
  console.log(test);
  a1 = test;
}
);
app.get('/', function (req, res) {
  res.send(a1)
}
)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

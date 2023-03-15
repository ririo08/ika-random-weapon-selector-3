const Papa = require('papaparse');
const fs = require('fs-extra');
const axios = require('axios');

const parseCSV = async () => {
  let csvData = '';

  // URLからデータ取得
  await axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vTi3UrRpq4eBER9bN_AkXZwevBVlmwol05CJj8j3pRNGEci1UEfG3CYSmrjpP63sSV0LfrehqwyWmgq/pub?gid=0&single=true&output=csv").then(async (res) => {
    csvData = res.data;
  });

  let objectArray = [];
  // CSVファイルをオブジェクトに変換
  Papa.parse(csvData, {
    delimiter: ',',
    header: true,
    complete: (res) => {
      objectArray = res.data;
    },
  });

  fs.writeFileSync(`src/weapon.json`, JSON.stringify(objectArray));
};

parseCSV()
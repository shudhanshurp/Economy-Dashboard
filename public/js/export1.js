$.getScript("js/generalMethod.js", function () {

// General method
const chart = (url, id, parentId, chartType, yearNo = 5) => {
  const res = fetch(url)
    .then((r) => r.json())
    .then((response) => {
      const res = response[1].reverse();
      const value = res.map((resp) => resp.value).reverse();
      const years = res.map((resp) => resp.date).reverse();

      let val = [];
      let lab = [];
      const title = response[1][0].indicator.value;
      //   var yearNo = 5;

      for (let index = 0; yearNo > 0; index++, yearNo--) {
        val.push(value[index]);
        lab.push(years[index]);
      }

      // val = val;
      // lab = lab;

      const data = {
        labels: lab,
        datasets: [
          {
            label: title,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: val,
          },
        ],
      };

      const config = {
        type: chartType,
        data: data,
        options: {
          elements: {
            bar: {
              backgroundColor: " #bcedf3",
            },
          },
        },
      };
      const workspace = document.getElementById(parentId);
      const blank = document.createElement("canvas");
      blank.id = id;
      workspace.appendChild(blank);
      const myChart = new Chart(document.getElementById(blank.id), config);
    })
    .catch((err) => console.log(err));
};

const editChart = (url, id, parentId, chartType, yearNo) => {
  const res = fetch(url)
    .then((r) => r.json())
    .then((response) => {
      const res = response[1].reverse();
      const value = res.map((resp) => resp.value).reverse();
      const years = res.map((resp) => resp.date).reverse();

      const title = response[1][0].indicator.value;

      let val = [];
      let lab = [];

      // var yearNo = 5 ;
      if (yearNo == "Max") {
        val = value;
        lab = years;
      } else {
        yearNo = parseInt(yearNo);
        console.log(yearNo, typeof yearNo);
        for (let index = 0; yearNo > 0; index++, yearNo--) {
          val.push(value[index]);
          lab.push(years[index]);
        }
      }

      console.log(val, lab);

      // val = val;
      // lab = lab;

      const data = {
        labels: lab,
        datasets: [
          {
            label: title,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: val,
          },
        ],
      };

      const config = {
        type: chartType,
        data: data,
        options: {
          elements: {
            bar: {
              backgroundColor: " #bcedf3",
            },
          },
        },
      };

      const workspace = document.getElementById(parentId);
      workspace.removeChild(workspace.firstElementChild);

      const blank = document.createElement("canvas");
      blank.id = id;
      workspace.appendChild(blank);

      const myChart = new Chart(document.getElementById(blank.id), config);

      // workspace.innerHTML = blank ;
    })
    .catch((err) => console.log(err));
};

myFun = (element) => {
  console.log(element);
  console.log(element.value);

  var parentNode = element.parentElement.nextElementSibling;
  var parentId = parentNode.id;
  var id = parentNode.childNodes[0].id;

//   const chartType = "bar";

  //Export volume index (2000 = 100)
  const url0 =
    "https://api.worldbank.org/v2/country/IND/indicator/TX.QTY.MRCH.XD.WD?format=json";
  const chartType0 = "bar";

  // Taxes on exports (% of tax revenue)
  const url1 =
    "https://api.worldbank.org/v2/country/IND/indicator/GC.TAX.EXPT.ZS?format=json";
  const chartType1 = "bar";

  // //Export unit value index (2000 = 100)
  const url2 =
    "https://api.worldbank.org/v2/country/IND/indicator/TX.UVI.MRCH.XD.WD?format=json";
  const chartType2 = "bar";

  //Exports of goods and services (USD) //BX.GSR.GNFS.CD
  const url3 =
    "https://api.worldbank.org/v2/country/IND/indicator/BX.GSR.GNFS.CD?format=json";
  const chartType3 = "bar";

  if (id == "myChart0") bubbleChartDiffBubble(url0, id, parentId, chartType0, element.value);

  if (id == "myChart1") areaChartNotTension(url1, id, parentId, chartType1, element.value);

  if (id == "myChart2") radarChart(url2, id, parentId, chartType2, element.value);

  if (id == "myChart3") hBarChartWithColor(url3, id, parentId, chartType3, element.value);

};

//Export volume index (2000 = 100) 
const url0 = 'https://api.worldbank.org/v2/country/IND/indicator/TX.QTY.MRCH.XD.WD?format=json';
const chartType0 = "bar";
bubbleChartDiffBubble(url0, "myChart0", "evi", chartType0);

// Taxes on exports (% of tax revenue) 
const url1 = 'https://api.worldbank.org/v2/country/IND/indicator/GC.TAX.EXPT.ZS?format=json' ;
const chartType1 = "bar";
areaChartNotTension(url1, "myChart1", "exportTax", chartType1);

// //Export unit value index (2000 = 100)
const url2 = 'https://api.worldbank.org/v2/country/IND/indicator/TX.UVI.MRCH.XD.WD?format=json';
const chartType2 = "bar";
radarChart(url2, "myChart2", "euvi", chartType2);

//Exports of goods and services (USD) //BX.GSR.GNFS.CD
const url3 = 'https://api.worldbank.org/v2/country/IND/indicator/BX.GSR.GNFS.CD?format=json';
const chartType3 = "bar";
hBarChartWithColor(url3, "myChart3", "goodserv", chartType3);

});
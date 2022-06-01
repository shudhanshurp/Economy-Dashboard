$.getScript("js/generalMethod.js", function () {

  myFun = (element) => {
    console.log(element);
    console.log(element.value);

    var parentNode = element.parentElement.nextElementSibling;
    var parentId = parentNode.id;
    var id = parentNode.childNodes[0].id;

    //Import volume index (2000 = 100)
    const url0 =
      "https://api.worldbank.org/v2/country/IND/indicator/TM.VAL.MRCH.XD.WD?format=json";
    const chartType0 = "bar";

    // //Import unit value index (2000 = 100)
    const url2 =
      "https://api.worldbank.org/v2/country/IND/indicator/TM.UVI.MRCH.XD.WD?format=json";
    const chartType2 = "bar";

    //Imports of goods and services (USD)
    const url3 =
      "https://api.worldbank.org/v2/country/IND/indicator/BM.GSR.TOTL.CD?format=json";
    const chartType3 = "bar";

    if (id == "myChart0")
      // editChart(url0, id, parentId, chartType0, element.value);
       bubbleChart(url0, id, parentId, chartType0, element.value);

    if (id == "myChart2")
      doughnutChart(url2, id, parentId, chartType2, element.value);

    if (id == "myChart3")
      barChartWithColor(url3, id, parentId, chartType3, element.value);
  };

  //Import volume index (2000 = 100)
  const url0 =
    "https://api.worldbank.org/v2/country/IND/indicator/TM.VAL.MRCH.XD.WD?format=json";
  const chartType0 = "bar";
  bubbleChart(url0, "myChart0", "ivi", chartType0);

  // //Import unit value index (2000 = 100)
  const url2 =
    "https://api.worldbank.org/v2/country/IND/indicator/TM.UVI.MRCH.XD.WD?format=json";
  const chartType2 = "bar";
  doughnutChart(url2, "myChart2", "iuvi", chartType2);

  //Imports of goods and services (USD)
  const url3 =
    "https://api.worldbank.org/v2/country/IND/indicator/BM.GSR.TOTL.CD?format=json";
  const chartType3 = "bar";
  barChartWithColor(url3, "myChart3", "igoodserv", chartType3);
});

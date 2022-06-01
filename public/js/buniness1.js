$.getScript("js/generalMethod.js", function () {

  myFun = (element) => {
    console.log(element);
    console.log(element.value);

    var parentNode = element.parentElement.nextElementSibling;
    var parentId = parentNode.id;
    var id = parentNode.childNodes[0].id;

    const chartType = "bar";

    //Cost of business start-up procedures (% of GNI per capita)
    const url0 =
      "https://api.worldbank.org/v2/country/IND/indicator/IC.REG.COST.PC.ZS?format=json";

    // Ease of doing business score
    const url1 =
      "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.DFRN.XQ?format=json";

    // //New businesses registered (number)
    const url2 =
      "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.NREG?format=json";

    //New business density
    const url3 =
      "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.NDNS.ZS?format=json";

    //Individuals using the Internet (% of population)
    const url4 =
      "https://api.worldbank.org/v2/country/IND/indicator/IT.NET.USER.ZS?format=json";

    //Inflation (annual %)
    const url5 =
      "https://api.worldbank.org/v2/country/IND/indicator/FP.CPI.TOTL.ZG?format=json";

    //cpi
    const url6 =
      "https://api.worldbank.org/v2/country/IND/indicator/FP.CPI.TOTL?format=json";

    if (id == "myChart0")
      pieChart(url0, id, parentId, chartType, element.value);

    if (id == "myChart1")
      doughnutChart(url1, id, parentId, chartType, element.value);

    if (id == "myChart2")
      doughnutChart(url2, id, parentId, chartType, element.value);

    if (id == "myChart3")
      pieChart(url3, id, parentId, chartType, element.value);

    if (id == "myChart4")
      editChart(url4, id, parentId, chartType, element.value);

    if (id == "myChart5")
      polarAreaChart(url5, id, parentId, chartType, element.value);

    if (id == "myChart6")
      scatterChart(url6, id, parentId, chartType, element.value);
  };

  //Cost of business start-up procedures (% of GNI per capita)
  const url0 =
    "https://api.worldbank.org/v2/country/IND/indicator/IC.REG.COST.PC.ZS?format=json";
  const chartType0 = "bar";
  pieChart(url0, "myChart0", "cost", chartType0);

  // Ease of doing business score
  const url1 =
    "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.DFRN.XQ?format=json";
  const chartType1 = "bar";
  doughnutChart(url1, "myChart1", "ease", chartType1);

  // //New businesses registered (number)
  const url2 =
    "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.NREG?format=json";
  const chartType2 = "bar";
  doughnutChart(url2, "myChart2", "busino", chartType2);

  //New business density
  const url3 =
    "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.NDNS.ZS?format=json";
  const chartType3 = "bar";
  pieChart(url3, "myChart3", "density", chartType3);

  //Individuals using the Internet (% of population)
  const url4 =
    "https://api.worldbank.org/v2/country/IND/indicator/IT.NET.USER.ZS?format=json";
  const chartType4 = "bar";
  chart(url4, "myChart4", "internet", chartType4);

  //Inflation (annual %)
  const url5 =
    "https://api.worldbank.org/v2/country/IND/indicator/FP.CPI.TOTL.ZG?format=json";
  const chartType5 = "bar";
  polarAreaChart(url5, "myChart5", "inflation", chartType5);

  //cpi
  const url6 =
    "https://api.worldbank.org/v2/country/IND/indicator/FP.CPI.TOTL?format=json";
  const chartType6 = "bar";
  scatterChart(url6, "myChart6", "cpi", chartType6);
});

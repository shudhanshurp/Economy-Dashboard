$.getScript("js/generalMethod.js", function () {
  console.log("file successfully append ...");

  myFun = (element) => {
    console.log(element);
    console.log(element.value);

    var parentNode = element.parentElement.nextElementSibling;
    var parentId = parentNode.id;
    var id = parentNode.childNodes[0].id;

    const chartType = "bar";

    //gdp per capita (usd)
    const urlForGdpCapita =
      "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.CD?format=json";
    const chartType0 = "line";

    //Gross fixed capital formation (% of GDP)
    const urlForFixedCapitalFormation =
      "https://api.worldbank.org/v2/country/IND/indicator/NE.GDI.FTOT.ZS?format=json";
    const chartType1 = "bar";

    // GDP Growth
    const urlForGdpGrowth =
      "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.KD.ZG?format=json";
    const chartType2 = "bar";

    //GDP (current US$)
    const urlForGdp =
      "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.CD?format=json";
    const chartType3 = "bar";

    //GDP per capita growth (annual %)
    const urlForGdpPerCapitaGrowth =
      "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.KD.ZG?format=json";
    const chartType4 = "bar";

    // gdp for ppp
    const urlForGdpForPpp =
      "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.PP.CD?format=json";
    const chartType5 = "bar";

    if (id == "myChart0")
      // editChart(urlForGdpCapita, id, parentId, chartType0, element.value);
      // editChartLine(urlForGdpCapita, id, parentId, chartType0, element.value);
      lineChart(urlForGdpCapita, id, parentId, chartType0, element.value);

    if (id == "myChart1")
      editChart(
        urlForFixedCapitalFormation,
        id,
        parentId,
        chartType1,
        element.value
      );

    if (id == "myChart2")
      // editChart(urlForGdpGrowth, id, parentId, chartType2, element.value);
      areaChart(urlForGdpGrowth, id, parentId, chartType2, element.value);

    if (id == "myChart3")
      editChart(urlForGdp, id, parentId, chartType3, element.value);

    if (id == "myChart4")
      barChart(
        urlForGdpPerCapitaGrowth,
        id,
        parentId,
        chartType4,
        element.value
      );

    if (id == "myChart5")
      // editChart(urlForGdpForPpp, id, parentId, chartType5, element.value);
      lineChartNotension(
        urlForGdpForPpp,
        idForGdpPpp,
        parentId5,
        chartType5,
        element.value
      );
  };

  //gdp per capita (usd)
  const urlForGdpCapita =
    "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.CD?format=json";
  const idForGdpCapita = "myChart0";
  const chartType0 = "line";
  const parentId0 = "gdpCapita";
  // chart(urlForGdpCapita, idForGdpCapita, parentId0, chartType0);
  lineChart(urlForGdpCapita, idForGdpCapita, parentId0, chartType0);
  // clickBtn(urlForGdpCapita, chartType0);

  //Gross fixed capital formation (% of GDP)
  const urlForFixedCapitalFormation =
    "https://api.worldbank.org/v2/country/IND/indicator/NE.GDI.FTOT.ZS?format=json";
  const idForFixedCapitalFormation = "myChart1";
  const chartType1 = "bar";
  const parentId1 = "fixGDP";
  chart(
    urlForFixedCapitalFormation,
    idForFixedCapitalFormation,
    parentId1,
    "bar"
  );
  // clickBtn(urlForFixedCapitalFormation, chartType1);

  // GDP Growth
  const urlForGdpGrowth =
    "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.KD.ZG?format=json";
  const idForGdpGrowth = "myChart2";
  const chartType2 = "bar";
  const parentId2 = "gdpGrowth";
  // chart(urlForGdpGrowth, idForGdpGrowth, parentId2, chartType2);
  areaChart(urlForGdpGrowth, idForGdpGrowth, parentId2, chartType2);
  // clickBtn(urlForGdpGrowth, chartType2);

  //GDP (current US$)
  const urlForGdp =
    "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.CD?format=json";
  const idForGdp = "myChart3";
  const chartType3 = "bar";
  const parentId3 = "gdp";
  chart(urlForGdp, idForGdp, parentId3, "bar");
  // clickBtn(urlForGdp, chartType3);

  //GDP per capita growth (annual %)
  const urlForGdpPerCapitaGrowth =
    "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.KD.ZG?format=json";
  const idForGdpPerCapitaGrowth = "myChart4";
  const chartType4 = "bar";
  const parentId4 = "capitaGrowth";
  barChart(urlForGdpPerCapitaGrowth, idForGdpPerCapitaGrowth, parentId4, "bar");
  // clickBtn(urlForGdpPerCapitaGrowth, chartType4);

  // gdp for ppp
  const urlForGdpForPpp =
    "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.PP.CD?format=json";
  const idForGdpPpp = "myChart5";
  const chartType5 = "bar";
  const parentId5 = "gdpppp";
  lineChartNotension(urlForGdpForPpp, idForGdpPpp, parentId5, "bar");
  // clickBtn(urlForGdpForPpp, chartType5);
});

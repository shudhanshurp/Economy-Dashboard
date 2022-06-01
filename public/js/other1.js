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
      .catch((err) => err);
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
          // console.log(yearNo, typeof yearNo);
          for (let index = 0; yearNo > 0; index++, yearNo--) {
            val.push(value[index]);
            lab.push(years[index]);
          }
        }

        // console.log(val, lab);

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

  // pie chart
  const pieChart1 = (url, id, parentId, chartType, yearNo = 10) => {
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

        // val = val;
        // lab = lab;
        val = val.reverse();
        lab = lab.reverse();

        const data = {
          labels: lab,
          datasets: [
            {
              label: title,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              data: val,
            },
          ],
        };

        const config = {
          type: "pie",
          data: data,
          options: {
            layout: {
              padding: 30,
            },
            radius: "100%",
            elements: {
              bar: {
                backgroundColor: " #bcedf3",
              },
            },
          },
        };
        const workspace = document.getElementById(parentId);
        const blank = document.createElement("canvas");
        if (workspace.children.length > 0) {
          workspace.removeChild(workspace.firstElementChild);
        }
        blank.id = id;
        workspace.appendChild(blank);
        const myChart = new Chart(document.getElementById(blank.id), config);
      })
      .catch((err) => console.log(err));
  };

  myFun = (element) => {
    // console.log(element);
    // console.log(element.value);

    var parentNode = element.parentElement.nextElementSibling;
    var parentId = parentNode.id;
    var id = parentNode.childNodes[0].id;

    //   const chartType = "bar";

    //Total greenhouse gas emissions (kt of CO2 equivalent):
    const url0 =
      "https://api.worldbank.org/v2/country/IND/indicator/EN.ATM.GHGT.KT.CE?format=json";
    const chartType0 = "bar";

    // Total greenhouse gas emissions (% change from 1990):
    const url1 =
      "https://api.worldbank.org/v2/country/IND/indicator/EN.ATM.GHGT.ZG?format=json";
    const chartType1 = "bar";

    //Forest area (sq. km):
    const url2 =
      "https://api.worldbank.org/v2/country/IND/indicator/AG.LND.FRST.K2?format=json";
    const chartType2 = "bar";

    //Forest area(%):
    const url3 =
      "https://api.worldbank.org/v2/country/IND/indicator/AG.LND.FRST.ZS?format=json";
    const chartType3 = "bar";

    //PM2.5 air pollution, population exposed to levels exceeding WHO guideline value (% of total):
    const url4 =
      "https://api.worldbank.org/v2/country/IND/indicator/EN.ATM.PM25.MC.ZS?format=json";
    const chartType4 = "bar";
    // chart(url4, "myChart4", "pm25", chartType4);

    //Population, total:
    const url5 =
      "https://api.worldbank.org/v2/country/IND/indicator/SP.POP.TOTL?format=json";
    const chartType5 = "bar";

    //Population growth(%):
    const url6 =
      "https://api.worldbank.org/v2/country/IND/indicator/SP.POP.GROW?format=json";
    const chartType6 = "bar";

    //Unemployment, total (% of total labor force):
    const url7 =
      "https://api.worldbank.org/v2/country/IND/indicator/SL.UEM.TOTL.NE.ZS?format=json";
    const chartType7 = "bar";

    //Access to electricity (% of population):
    const url8 =
      "https://api.worldbank.org/v2/country/IND/indicator/EG.ELC.ACCS.ZS?format=json";
    const chartType8 = "bar";

    if (id == "myChart0")
      doughnutChart(url0, id, parentId, chartType0, element.value);

    if (id == "myChart1")
      pieChart1(url1, id, parentId, chartType1, element.value);

    if (id == "myChart2")
      barChartWithColor(url2, id, parentId, chartType2, element.value);

    if (id == "myChart3")
      barChartWithColor(url3, id, parentId, chartType3, element.value);

    if (id == "myChart4")
      lineChartNotension(url4, id, parentId, chartType4, element.value);

    if (id == "myChart5")
      lineChartNotension(url5, id, parentId, chartType5, element.value);

    if (id == "myChart6")
      areaChart(url6, id, parentId, chartType6, element.value);

    if (id == "myChart7")
      editChart(url7, id, parentId, chartType7, element.value);

    if (id == "myChart8")
      scatterChartWithRadius(url8, id, parentId, chartType8, element.value);
  };

  //Total greenhouse gas emissions (kt of CO2 equivalent):
  const url0 =
    "https://api.worldbank.org/v2/country/IND/indicator/EN.ATM.GHGT.KT.CE?format=json";
  const chartType0 = "bar";
  doughnutChart(url0, "myChart0", "green", chartType0);

  // Total greenhouse gas emissions (% change from 1990):
  const url1 =
    "https://api.worldbank.org/v2/country/IND/indicator/EN.ATM.GHGT.ZG?format=json";
  const chartType1 = "bar";
  pieChart1(url1, "myChart1", "gas", chartType1);

  //Forest area (sq. km):
  const url2 =
    "https://api.worldbank.org/v2/country/IND/indicator/AG.LND.FRST.K2?format=json";
  const chartType2 = "bar";
  barChartWithColor(url2, "myChart2", "forest", chartType2);

  //Forest area(%):
  const url3 =
    "https://api.worldbank.org/v2/country/IND/indicator/AG.LND.FRST.ZS?format=json";
  const chartType3 = "bar";
  barChartWithColor(url3, "myChart3", "area", chartType3);

  //PM2.5 air pollution, population exposed to levels exceeding WHO guideline value (% of total):
  const url4 =
    "https://api.worldbank.org/v2/country/IND/indicator/EN.ATM.PM25.MC.ZS?format=json";
  const chartType4 = "bar";
  lineChartNotension(url4, "myChart4", "pm25", chartType4);

  //Population, total:
  const url5 =
    "https://api.worldbank.org/v2/country/IND/indicator/SP.POP.TOTL?format=json";
  const chartType5 = "bar";
  lineChartNotension(url5, "myChart5", "population", chartType5);

  //Population growth(%):
  const url6 =
    "https://api.worldbank.org/v2/country/IND/indicator/SP.POP.GROW?format=json";
  const chartType6 = "bar";
  areaChart(url6, "myChart6", "growth", chartType6);

  //Unemployment, total (% of total labor force):
  const url7 =
    "https://api.worldbank.org/v2/country/IND/indicator/SL.UEM.TOTL.NE.ZS?format=json";
  const chartType7 = "bar";
  chart(url7, "myChart7", "une", chartType7);

  //Access to electricity (% of population):
  const url8 =
    "https://api.worldbank.org/v2/country/IND/indicator/EG.ELC.ACCS.ZS?format=json";
  const chartType8 = "bar";
  scatterChartWithRadius(url8, "myChart8", "elect", chartType8);
});

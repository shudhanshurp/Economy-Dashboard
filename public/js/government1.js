$.getScript("js/generalMethod.js", function () {
  const doughnutChartForEdE = (url, id, parentId, chartType, yearNo = 20) => {
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
              // width: 400,
            },
          ],
        };

        const config = {
          type: "doughnut",
          data: data,
          options: {
            layout: {
              padding: 30,
            },
            radius: "100%",
          },
        };
        const workspace = document.getElementById(parentId);
        workspace.style.width = "600px";
        const blank = document.createElement("canvas");
        // blank.style.width = "400px";
        if (workspace.children.length > 0) {
          workspace.removeChild(workspace.firstElementChild);
        }
        blank.id = id;
        workspace.appendChild(blank);
        const myChart = new Chart(document.getElementById(blank.id), config);
        // myChart.resize(600, 600);
      })
      .catch((err) => console.log(err));
  };

  const polarAreaChart1 = (url, id, parentId, chartType, yearNo = 10) => {
    const res = fetch(url)
      .then((r) => r.json())
      .then((response) => {
        const res = response[1].reverse();
        const value = res.map((resp) => resp.value).reverse();
        const years = res.map((resp) => resp.date).reverse();

        let val = [];
        let lab = [];
        const title = response[1][0].indicator.value;

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
          type: "polarArea",
          data: data,
          animation: {
            animateScale: true,
          },
          options: {
            // radius: "60%",
            elements: {
              bar: {
                backgroundColor: " #bcedf3",
              },
            },
          },
        };
        const workspace = document.getElementById(parentId);
        workspace.style.width = "600px";
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

  // water fall chart
  const waterFallChart = (url, id, parentId, chartType, yearNo = 5) => {
    const res = fetch(url)
      .then((r) => r.json())
      .then((response) => {
        const res = response[1].reverse();
        const value = res.map((resp) => resp.value).reverse();
        const years = res.map((resp) => resp.date).reverse();

        let val = [];
        let lab = [];
        const title = response[1][0].indicator.value;

        let y = yearNo;
        if (yearNo == "Max") {
          for (let index = 0; index < value.length - 29; index++) {
            // val.push(value[index]);
            let differVal = [];
            differVal.push(value[index]);
            if (index < value.length - 29)
              differVal.push(value[index] - value[index + 1]);
            else differVal.push(0);

            val.push(differVal);
            lab.push(years[index]);
          }
        } else {
          yearNo = parseInt(yearNo);
          // console.log(yearNo, typeof yearNo);

          for (let index = 0; yearNo > 0; index++, yearNo--) {
            // val.push(value[index]);
            let differVal = [];
            differVal.push(value[index]);
            if (index < y) differVal.push(value[index] - value[index + 1]);
            else differVal.push(0);

            val.push(differVal);
            lab.push(years[index]);
          }
        }

        // val = val;
        // lab = lab;
        val = val.reverse();

        console.log(val);

        lab = lab.reverse();

        const data = {
          labels: lab,

          datasets: [
            {
              label: title,
              // fill: true,
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
              borderWidth: 2,
              borderSkipped: false,
            },
          ],
        };

        const config = {
          type: "bar",
          data: data,
          options: {
            // radius: "60%",
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
    console.log(element);
    console.log(element.value);

    var parentNode = element.parentElement.nextElementSibling;
    var parentId = parentNode.id;
    var id = parentNode.childNodes[0].id;

    //   const chartType = "bar";

    //Military expenditure (% of general government expenditure) :
    const url0 =
      "https://api.worldbank.org/v2/country/IND/indicator/MS.MIL.XPND.ZS?format=json";
    const chartType0 = "bar";

    // Domestic general government health expenditure:
    const url1 =
      "https://api.worldbank.org/v2/country/IND/indicator/SH.XPD.GHED.GE.ZS?format=json";
    const chartType1 = "bar";

    //Expenditure on education:
    const url2 =
      "https://api.worldbank.org/v2/country/IND/indicator/GC.DOD.TOTL.CN?format=json";
    const chartType2 = "bar";

    //General government final consumption expenditure (current US$):
    const url3 =
      "https://api.worldbank.org/v2/country/IND/indicator/NE.CON.GOVT.CD?format=json";
    const chartType3 = "bar";

    //Central government debt, total:
    const url4 =
      "https://api.worldbank.org/v2/country/IND/indicator/GC.DOD.TOTL.CN?format=json";
    const chartType4 = "bar";

    //Tax revenue (current LCU):
    const url5 =
      "https://api.worldbank.org/v2/country/IND/indicator/GC.TAX.TOTL.CN?format=json";
    const chartType5 = "bar";

    //Profit tax (% of commercial profits):
    const url6 =
      "https://api.worldbank.org/v2/country/IND/indicator/IC.TAX.PRFT.CP.ZS?format=json";
    const chartType6 = "bar";

    const url7 =
      "https://api.worldbank.org/v2/country/IND/indicator/IC.TAX.PAYM?format=json";
    const chartType7 = "bar";

    //Stocks traded, total value (current US$):
    const urll8 =
      "https://api.worldbank.org/v2/country/IND/indicator/CM.MKT.TRAD.CD?format=json";
    const chartType8 = "bar";

    if (id == "myChart0")
      radarChart(url0, id, parentId, chartType0, element.value);

    if (id == "myChart1")
      hLineChart(url1, id, parentId, chartType1, element.value);

    if (id == "myChart2")
      doughnutChartForEdE(url2, id, parentId, chartType2, element.value);

    if (id == "myChart3")
      lineChart(url3, id, parentId, chartType3, element.value);

    if (id == "myChart4")
      polarAreaChart1(url4, id, parentId, chartType4, element.value);

    if (id == "myChart5")
      editChart(url5, id, parentId, chartType5, element.value);

    if (id == "myChart6")
      pieChart(url6, id, parentId, chartType6, element.value);

    if (id == "myChart7")
      doughnutChart(url7, id, parentId, chartType7, element.value);

    if (id == "myChart8")
      waterFallChart(url8, id, parentId, chartType8, element.value);
  };

  //Military expenditure (% of general government expenditure) :
  const url0 =
    "https://api.worldbank.org/v2/country/IND/indicator/MS.MIL.XPND.ZS?format=json";
  const chartType0 = "bar";
  radarChart(url0, "myChart0", "military", chartType0);

  // Domestic general government health expenditure:
  const url1 =
    "https://api.worldbank.org/v2/country/IND/indicator/SH.XPD.GHED.GE.ZS?format=json";
  const chartType1 = "bar";
  hLineChart(url1, "myChart1", "health", chartType1);

  //Expenditure on education:
  const url2 =
    "https://api.worldbank.org/v2/country/IND/indicator/SE.XPD.TOTL.GD.ZS?format=json";
  const chartType2 = "bar";
  doughnutChartForEdE(url2, "myChart2", "education", chartType2);

  //General government final consumption expenditure (current US$):
  const url3 =
    "https://api.worldbank.org/v2/country/IND/indicator/NE.CON.GOVT.CD?format=json";
  const chartType3 = "bar";
  lineChart(url3, "myChart3", "consume", chartType3);

  //Central government debt, total:
  const url4 =
    "https://api.worldbank.org/v2/country/IND/indicator/GC.DOD.TOTL.CN?format=json";
  const chartType4 = "bar";
  polarAreaChart1(url4, "myChart4", "dept", chartType4);

  //Tax revenue (current LCU):
  const url5 =
    "https://api.worldbank.org/v2/country/IND/indicator/GC.TAX.TOTL.CN?format=json";
  const chartType5 = "bar";
  chart(url5, "myChart5", "revenue", chartType5);

  //Profit tax (% of commercial profits):
  const url6 =
    "https://api.worldbank.org/v2/country/IND/indicator/IC.TAX.PRFT.CP.ZS?format=json";
  const chartType6 = "bar";
  pieChart(url6, "myChart6", "profit", chartType6);

  const url7 =
    "https://api.worldbank.org/v2/country/IND/indicator/IC.TAX.PAYM?format=json";
  const chartType7 = "bar";
  doughnutChart(url7, "myChart7", "payment", chartType7);

  //Stocks traded, total value (current US$):
  const url8 =
    "https://api.worldbank.org/v2/country/IND/indicator/CM.MKT.TRAD.CD?format=json";
  const chartType8 = "bar";
  waterFallChart(url8, "myChart8", "stock", chartType8);
});

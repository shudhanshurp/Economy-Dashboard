// // General method
// const chart = (url, id, parentId, chartType, yearNo = 5) => {
//   const res = fetch(url)
//     .then((r) => r.json())
//     .then((response) => {
//       const res = response[1].reverse();
//       const value = res.map((resp) => resp.value).reverse();
//       const years = res.map((resp) => resp.date).reverse();

//       let val = [];
//       let lab = [];
//       const title = response[1][0].indicator.value;
//       //   var yearNo = 5;

//       for (let index = 0; yearNo > 0; index++, yearNo--) {
//         val.push(value[index]);
//         lab.push(years[index]);
//       }

//       // val = val;
//       // lab = lab;

//       const data = {
//         labels: lab,
//         datasets: [
//           {
//             label: title,
//             backgroundColor: "rgb(255, 99, 132)",
//             borderColor: "rgb(255, 99, 132)",
//             data: val,
//           },
//         ],
//       };

//       const config = {
//         type: chartType,
//         data: data,
//         options: {
//           elements: {
//             bar: {
//               backgroundColor: " #bcedf3",
//             },
//           },
//         },
//       };
//       const workspace = document.getElementById(parentId);
//       const blank = document.createElement("canvas");
//       blank.id = id;
//       workspace.appendChild(blank);
//       const myChart = new Chart(document.getElementById(blank.id), config);
//     })
//     .catch((err) => console.log(err));
// };

// const editChart = (url, id, parentId, chartType, yearNo) => {
//   const res = fetch(url)
//     .then((r) => r.json())
//     .then((response) => {
//       const res = response[1].reverse();
//       const value = res.map((resp) => resp.value).reverse();
//       const years = res.map((resp) => resp.date).reverse();

//       const title = response[1][0].indicator.value;

//       let val = [];
//       let lab = [];

//       // var yearNo = 5 ;
//       if (yearNo == "Max") {
//         val = value;
//         lab = years;
//       } else {
//         yearNo = parseInt(yearNo);
//         console.log(yearNo, typeof yearNo);
//         for (let index = 0; yearNo > 0; index++, yearNo--) {
//           val.push(value[index]);
//           lab.push(years[index]);
//         }
//       }

//       console.log(val, lab);

//       // val = val;
//       // lab = lab;

//       const data = {
//         labels: lab,
//         datasets: [
//           {
//             label: title,
//             backgroundColor: "rgb(255, 99, 132)",
//             borderColor: "rgb(255, 99, 132)",
//             data: val,
//           },
//         ],
//       };

//       const config = {
//         type: chartType,
//         data: data,
//         options: {
//           elements: {
//             bar: {
//               backgroundColor: " #bcedf3",
//             },
//           },
//         },
//       };

//       const workspace = document.getElementById(parentId);
//       workspace.removeChild(workspace.firstElementChild);

//       const blank = document.createElement("canvas");
//       blank.id = id;
//       workspace.appendChild(blank);

//       const myChart = new Chart(document.getElementById(blank.id), config);

//       // workspace.innerHTML = blank ;
//     })
//     .catch((err) => console.log(err));
// };

// // export function chart ;
// export  { editChart,chart };

// General method
console.log("this is the file include");

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

      val = val.reverse();
      lab = lab.reverse();
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
      if (workspace.children.length > 0) {
        workspace.removeChild(workspace.firstElementChild);
      }
      blank.id = id;
      workspace.appendChild(blank);
      const myChart = new Chart(document.getElementById(blank.id), config);
    })
    .catch((err) => console.log(err));
};
//--------------------------------------------------------------------------------------------------------

// barchart
const barChart = (url, id, parentId, chartType, yearNo = 5) => {
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

      val = val.reverse();
      lab = lab.reverse();
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
          indexAxis: "y",
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

// bar chart with color
const barChartWithColor = (url, id, parentId, chartType, yearNo = 5) => {
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

// bar chart with color
const hBarChartWithColor = (url, id, parentId, chartType, yearNo = 5) => {
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
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          indexAxis: "y",
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

// bubble chart
const bubbleChart = (url, id, parentId, chartType, yearNo = 5) => {
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

      var objArr = [];
      //   let d = 0;

      if (yearNo == "Max") {
        yearNo = value.length;
        console.log(yearNo, typeof yearNo);
        for (let index = 0; yearNo > 0; index++, yearNo--) {
          let obj = {
            x: years[index],
            y: value[index],
            r: value[index] / 100,
          };

          val.push(value[index]);
          lab.push(years[index]);

          objArr.push(obj);
        }
      } else {
        yearNo = parseInt(yearNo);
        console.log(yearNo, typeof yearNo);
        for (let index = 0; yearNo > 0; index++, yearNo--) {
          let obj = {
            x: years[index],
            y: value[index],
            r: value[index] / 50,
          };

          val.push(value[index]);
          lab.push(years[index]);

          objArr.push(obj);
        }
      }

      objArr.reverse();

      console.log(objArr);
      // val = val;
      // lab = lab;

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
            data: objArr,
            clip: false,
          },
        ],
      };

      const config = {
        type: "bubble",
        data: data,
        options: {
          layout: {
            padding: {
              top: 10,
              right: 30,
            },
          },
          elements: {
            bar: {
              // backgroundColor: " #bcedf3",
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
    .catch((err) => err);
};

const bubbleChartDiffBubble = (url, id, parentId, chartType, yearNo = 5) => {
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

      var objArr = [];
      //   let d = 0;

      if (yearNo == "Max") {
        yearNo = value.length;
        console.log(yearNo, typeof yearNo);
        for (let index = 0; yearNo > 0; index++, yearNo--) {
          let obj = {
            x: years[index],
            y: value[index],
            r: value[index] / 20,
          };

          val.push(value[index]);
          lab.push(years[index]);

          objArr.push(obj);
        }
      } else {
        yearNo = parseInt(yearNo);
        console.log(yearNo, typeof yearNo);
        for (let index = 0; yearNo > 0; index++, yearNo--) {
          let obj = {
            x: years[index],
            y: value[index],
            r: value[index] / 20,
          };

          val.push(value[index]);
          lab.push(years[index]);

          objArr.push(obj);
        }
      }

      objArr.reverse();

      console.log(objArr);
      // val = val;
      // lab = lab;

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
            data: objArr,
            clip: false,
            pointStyle: [
              "rect",
              "circle",
              "star",
              "rectRounded",
              "cross",
              "triangle",
            ],
          },
        ],
      };

      const config = {
        type: "bubble",
        data: data,
        options: {
          layout: {
            padding: {
              top: 10,
              right: 30,
            },
          },
          elements: {
            bar: {
              // backgroundColor: " #bcedf3",
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
    .catch((err) => err);
};

// doughnut chart
const doughnutChart = (url, id, parentId, chartType, yearNo = 5) => {
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

// pie chart
const pieChart = (url, id, parentId, chartType, yearNo = 5) => {
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

// Area chart with tension property
const areaChart = (url, id, parentId, chartType, yearNo = 5) => {
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
            fill: true,
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
            pointRadius: 5,
            tension: 0.5,
            spanGaps: true,
          },
        ],
      };

      const config = {
        type: "line",
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

// Area chart not tension property
const areaChartNotTension = (url, id, parentId, chartType, yearNo = 5) => {
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
            fill: true,
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
            pointRadius: 10,
            // tension: 0.5,
            spanGaps: true,
          },
        ],
      };

      const config = {
        type: "line",
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

// line chart
const lineChart = (url, id, parentId, chartType, yearNo = 5) => {
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
            pointRadius: 5,
            tension: 0.5,
            spanGaps: true,
          },
        ],
      };

      const config = {
        type: "line",
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

const hLineChart = (url, id, parentId, chartType, yearNo = 5) => {
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
            fill:true,
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
            fill: {
              above: "rgb(255, 0, 0)", // Area will be red above the origin
              below: "rgb(0, 0, 255)",
            },
            data: val,
            pointRadius: 5,
            tension: 0.5,
            spanGaps: true,
          },
        ],
      };

      const config = {
        type: "line",
        data: data,
        above: "blue",
        below: "red",
        options: {
          // radius: "60%",
          indexAxis: "y",

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

// line chart with no tension property
const lineChartNotension = (url, id, parentId, chartType, yearNo = 5) => {
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
            pointRadius: 5,
            // tension: 0.5,
            spanGaps: true,
          },
        ],
      };

      const config = {
        type: "line",
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

// line chart with high tension
const lineChartWithHighTension = (url, id, parentId, chartType, yearNo = 5) => {
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
            pointRadius: 15,
            tension: 0.5,
            spanGaps: true,
            pointStyle: ["rect", "circle", "rectRounded", "triangle"],
          },
        ],
      };

      const config = {
        type: "line",
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

//polar Area chart
const polarAreaChart = (url, id, parentId, chartType, yearNo = 5) => {
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

// radar chart
const radarChart = (url, id, parentId, chartType, yearNo = 5) => {
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
            pointRadius: 15,
          },
        ],
      };

      const config = {
        type: "radar",
        data: data,
        animation: {
          animateScale: true,
        },
        options: {
          layout: {
            padding: 50,
          },
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

// scatter chart defult radius
const scatterChart = (url, id, parentId, chartType, yearNo = 5) => {
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
        type: "scatter",
        data: data,
        animation: {
          animateScale: true,
        },
        options: {
          // radius: "60%",
          elements: {
            point: {
              radius: 6,
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

// scatter chart with high radius
const scatterChartWithRadius = (url, id, parentId, chartType, yearNo = 5) => {
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
        type: "scatter",
        data: data,
        animation: {
          animateScale: true,
        },
        options: {
          // radius: "60%",
          elements: {
            point: {
              radius: 10,
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

      // console.log(val, lab);

      val = val.reverse();
      lab = lab.reverse();

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

const editChartLine = (url, id, parentId, chartType, yearNo) => {
  lineChart(url, id, parentId, chartType, yearNo);
};

console.log("file ending ...");
// export default lineChart;

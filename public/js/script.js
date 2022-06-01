// Make table using JSON file now its store at local storge but at project time its
// redering using database and fetch the code into server using API database
// example : (Student Api)

console.log("this is the script file ");

const countryCodeArr = ["USA","CHN",'JPN',"DEU","GBR","IND","FRA","ITA","CAN","KOR"];

const gdpData = async function () {
  try {
    const res = await fetch("gdp_data_2020.json", { method: "GET" });

    const arrGdp = await res.json();

    console.log(arrGdp);

    const top10Gdp = [];

    let i = 50;
    while (i > 0) {
      var maxIndex = 0;
      for (let index = 1; index < arrGdp.length; index++) {

        if (arrGdp[maxIndex].year2020 < arrGdp[index].year2020)
          maxIndex = index;
      }

      const element = arrGdp[maxIndex];

      if (countryCodeArr.includes(element.countryCode)) 
        top10Gdp.push(arrGdp[maxIndex]);

      arrGdp.splice(maxIndex, 1);

      i--;

    }

    return top10Gdp ;

  } catch (err) {
    console.log(err);
  }
};

gdpData().then((res) =>{

  // console.log(res);

// 0: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'United States', countryCode: 'USA', year2020: 20953030000000}
// 1: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'China', countryCode: 'CHN', year2020: 14722730697890.1}
// 2: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'Japan', countryCode: 'JPN', year2020: 5057758958706.64}
// 3: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'Germany', countryCode: 'DEU', year2020: 3846413928653.71}
// 4: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'United Kingdom', countryCode: 'GBR', year2020: 2759804061837.07}
// 5: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'India', countryCode: 'IND', year2020: 2660245248867.63}
// 6: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'France', countryCode: 'FRA', year2020: 2630317731455.26}
// 7: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'Italy', countryCode: 'ITA', year2020: 1888709443687.48}
// 8: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'Canada', countryCode: 'CAN', year2020: 1645423407568.36}
// 9: {seriesName: 'GDP (current US$)', seriesCodes: 'NY.GDP.MKTP.CD', countryName: 'Korea, Rep.', countryCode: 'KOR', year2020: 1637895802792.9}

  const divTable = document.getElementById("gdp-table");


  var table = `
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Sr No</th>
          <th scope="col">Country Name</th>
          <th scope="col">Country Code</th>
          <th scope="col">GDP (current US$)</th>
        </tr>
      </thead>
      <tbody>
       `;
  let i = 1;

  res.forEach(element => {
    
    table += `<tr>
          <th scope="row">${i++}</th>
          <td>${element.countryName}</td>
          <td>${element.countryCode}</td>
          <td>$${(element.year2020 / 10e11).toFixed(4)}T</td>
        </tr>`;

  });
  
  table += ` </tbody>
    </table>`;

  divTable.innerHTML = table ;



});


/*

*/
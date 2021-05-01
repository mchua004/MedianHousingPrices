d3.json("Samples.json").then(data => {

    var sampleYear = ["Atlanta, GA", "Chicago, IL", "Dallas, TX", "Houston, TX", "Los Angeles, CA", "Miami, FL", "New York, NY", "Philadelphia, PA", "Phoenix, AZ", "Washington DC"];
    var dropdownMenu = d3.select("#selDataset1");

    sampleYear.forEach(item => {
        var optionTag = dropdownMenu.append("option");
        optionTag.text(item);
        optionTag.attr(item);
    })

    init()
});

d3.selectAll("#selDataset1").on("change", updatePlotly_5);

function init() {
    var dropdownMenu1 = d3.select("#selDataset1");
    var dataset = dropdownMenu1.property("value");

    updatePlotly_5(dataset)
}





function updatePlotly_5() {
    var dropdownMenu = d3.select("#selDataset1");

    var dataset = dropdownMenu.property("value");
    console.log("DATA SET: ", dataset)

    d3.json("Samples.json").then(data => {


        if (dataset == "Atlanta, GA") {

            var sampleYear = [];
            var YearList = [];

            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));
            //console.log(StatesList)
            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            console.log(DateA);

            var selectAtl = data.metadata.filter(data => { return data.CityName == "Atlanta, GA" })

            console.log(YearList);

            var MedHousingAtl = [];
            var MedHousingpriceAtl = selectAtl.forEach(element =>
                MedHousingAtl = MedHousingAtl.concat(element.MedianHousingPrice));

            var sampleIncomeAtl = [];
            var MedIncomeListAtl = [];
            var sampleIncomeColAtl = selectAtl.forEach(element => sampleIncomeAtl = sampleIncomeAtl.concat(element.MedianIncome));

            MedIncomeListAtl = [...new Set(sampleIncomeAtl)];

            console.log(MedHousingAtl);

            console.log(MedIncomeListAtl);

            var trace9 = {
                x: DateA,
                y: MedHousingAtl,
                type: "scatter",
                name: "Atlanta",
                orientation: "h"

            };

            var tracebar9 = {
                x: YearList,
                y: MedIncomeListAtl,
                type: "bar",
                name: "Atlanta"
            };


            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }

            console.log("TRACE 9: ", trace9)
            console.log("LAYOUT 1: ", layout1)

            var data1 = [trace9];
            var data2 = [tracebar9];

            console.log("TRACE 9 IN ARRAY", data1)

            Plotly.newPlot("scatter2", data1, layout1);
        
            //console.log("GRAPPH: ", Plotly.newPlot("scatter", data1, layout1))

            Plotly.newPlot("bar2", data2, layout2);



        } else if (dataset == "Chicago, IL") {

            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));
            //console.log(StatesList)
            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            var selectChi = data.metadata.filter(data => { return data.CityName == "Chicago, IL" })
            var MedHousingChi = [];
            var MedHousingpriceChi = selectChi.forEach(element =>
                MedHousingChi = MedHousingChi.concat(element.MedianHousingPrice));

            var sampleIncomeChi = [];
            var MedIncomeListChi = [];
            var sampleIncomeColChi = selectChi.forEach(element => sampleIncomeChi = sampleIncomeChi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListChi = [...new Set(sampleIncomeChi)];

            var trace3 = {
                x: DateA,
                y: MedHousingChi,
                type: "scatter",
                name: "Chicago",
                orientation: "h"
            };

            var tracebar3 = {
                x: YearList,
                y: MedIncomeListChi,
                type: "bar",
                name: "Chicago"

            };
            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }

            var data1 = [trace3];
            var data2 = [tracebar3];

            console.log("DATA 1: ", data1)
            console.log("LAYOUT 1: ", layout1)

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);




        } else if (dataset == "Dallas, TX") {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));
            //console.log(StatesList)
            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            var selectDal = data.metadata.filter(data => { return data.CityName == "Dallas-Fort Worth, TX" })
            var sampleIncomeDal = [];
            var MedIncomeListDal = [];
            var sampleIncomeColDal = selectDal.forEach(element => sampleIncomeDal = sampleIncomeDal.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListDal = [...new Set(sampleIncomeDal)];
            var MedHousingDal = [];
            var MedHousingpriceDal = selectDal.forEach(element =>
                MedHousingDal = MedHousingDal.concat(element.MedianHousingPrice));
            console.log("DAL: ", MedIncomeListDal)

            var trace4 = {
                x: DateA,
                y: MedHousingDal,
                type: "scatter",
                name: "Dallas",
                orientation: "h"
            };

            var tracebar4 = {
                x: YearList,
                y: MedIncomeListDal,
                type: "bar",
                name: "Dallas"
            };

            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }

            var data1 = [trace4];
            var data2 = [tracebar4];

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);
            


        } else if (dataset == "Houston, TX") {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));

            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];

            var selectHou = data.metadata.filter(data => { return data.CityName == "Houston, TX" })
            var sampleIncomeHou = [];
            var MedIncomeListHou = [];
            var sampleIncomeColHou = selectHou.forEach(element => sampleIncomeHou = sampleIncomeHou.concat(element.MedianIncome));
            MedIncomeListHou = [...new Set(sampleIncomeHou)];
            var MedHousingHou = [];
            var MedHousingpriceHou = selectHou.forEach(element =>
                MedHousingHou = MedHousingHou.concat(element.MedianHousingPrice));

            var trace5 = {
                x: DateA,
                y: MedHousingHou,
                type: "scatter",
                name: "Houston",
                orientation: "h"
            };


            var tracebar5 = {
                x: YearList,
                y: MedIncomeListHou,
                type: "bar",
                name: "Houston"

            };

            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }

            var data1 = [trace5];
            var data2 = [tracebar5];

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);
            console.log("Houston: ", MedIncomeListHou);


        } else if (dataset == "Los Angeles, CA") {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));

            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            var selectLa = data.metadata.filter(data => { return data.CityName == "Los Angeles-Long Beach-Anaheim, CA" })
            var sampleIncomeLa = [];
            var MedIncomeListLa = [];
            var sampleIncomeColLa = selectLa.forEach(element => sampleIncomeLa = sampleIncomeLa.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListLa = [...new Set(sampleIncomeLa)];
            var MedHousingLa = [];
            var MedHousingpriceLa = selectLa.forEach(element =>
                MedHousingLa = MedHousingLa.concat(element.MedianHousingPrice));

            var trace2 = {
                x: DateA,
                y: MedHousingLa,
                type: "scatter",
                name: "Los Angeles",
                orientation: "h"
            };
            var tracebar2 = {
                x: YearList,
                y: MedIncomeListLa,
                type: "bar",
                name: "Los Angeles"
            };

            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
    
            }
            var data1 = [trace2];
            var data2 = [tracebar2];

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);


        } else if (dataset == "Miami, FL") {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));
            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];

            var selectMi = data.metadata.filter(data => { return data.CityName == "Miami-Fort Lauderdale, FL" })
            var sampleIncomeMi = [];
            var MedIncomeListMi = [];
            var sampleIncomeColMi = selectMi.forEach(element => sampleIncomeMi = sampleIncomeMi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesListMi)
            MedIncomeListMi = [...new Set(sampleIncomeMi)];
            var MedHousingMi = [];
            var MedHousingpriceMi = selectMi.forEach(element =>
                MedHousingMi = MedHousingMi.concat(element.MedianHousingPrice));

            var trace7 = {
                x: DateA,
                y: MedHousingMi,
                type: "scatter",
                name: "Miami",
                orientation: "h"
            };

            var tracebar7 = {
                x: YearList,
                y: MedIncomeListMi,
                type: "bar",
                name: "Miami"
            };

            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }

            var data1 = [trace7];
            var data2 = [tracebar7];

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);


        } else if (dataset == "New York, NY") {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));

            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            var selectNy = data.metadata.filter(data => { return data.CityName == "New York, NY" })
            var sampleIncomeNy = [];
            var MedIncomeListNy = [];
            var sampleIncomeColNy = selectNy.forEach(element => sampleIncomeNy = sampleIncomeNy.concat(element.MedianIncome));
            MedIncomeListNy = [...new Set(sampleIncomeNy)];
            var MedHousingNy = [];
            var MedHousingpriceNy = selectNy.forEach(element =>
                MedHousingNy = MedHousingNy.concat(element.MedianHousingPrice));
            var trace1 = {
                x: DateA,
                y: MedHousingNy,
                type: "scatter",
                name: "New York",
                orientation: "h"
            };
            var tracebar1 = {
                x: YearList,
                y: MedIncomeListNy,
                type: "bar",
                name: "New York"
            };

            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }

            var data1 = [trace1];
            var data2 = [tracebar1];

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);


        } else if (dataset == "Philadelphia, PA") {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));
            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            var selectPhi = data.metadata.filter(data => { return data.CityName == "Philadelphia, PA" })
            var sampleIncomePhi = [];
            var MedIncomeListPhi = [];
            var sampleIncomeColPhi = selectPhi.forEach(element => sampleIncomePhi = sampleIncomePhi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListPhi = [...new Set(sampleIncomePhi)];
            var MedHousingPhi = [];
            var MedHousingpricePhi = selectPhi.forEach(element =>
                MedHousingPhi = MedHousingPhi.concat(element.MedianHousingPrice));

            var trace8 = {
                x: DateA,
                y: MedHousingPhi,
                type: "scatter",
                name: "Philadelphia",
                orientation: "h"
            };

            var tracebar8 = {
                x: YearList,
                y: MedIncomeListPhi,
                type: "bar",
                name: "Philadelphia"

            };


            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }

            var data1 = [trace8];
            var data2 = [tracebar8];

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);

        } else if (dataset == "Phoenix, AZ") {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));
            //console.log(StatesList)
            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            var selectPho = data.metadata.filter(data => { return data.CityName == "Phoenix, AZ" })
            var sampleIncomePho = [];
            var MedIncomeListPho = [];
            var sampleIncomeColPho = selectPho.forEach(element => sampleIncomePho = sampleIncomePho.concat(element.MedianIncome));
            MedIncomeListPho = [...new Set(sampleIncomePho)];
            var MedHousingPho = [];
            var MedHousingpricePho = selectPho.forEach(element =>
                MedHousingPho = MedHousingPho.concat(element.MedianHousingPrice));

            var trace10 = {
                x: DateA,
                y: MedHousingPho,
                type: "scatter",
                name: "Phoenix",
                orientation: "h"
            };

            var tracebar10 = {
                x: YearList,
                y: MedIncomeListPho,
                type: "bar",
                name: "Phoenix"
            };

            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }
            }
            var data1 = [trace10];
            var data2 = [tracebar10];
            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);



        } else {
            var sampleYear = [];
            var YearList = [];
            var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));

            YearList = [...new Set(sampleYear)];
            var DateA = [];
            var DateList = data.metadata.forEach(element =>
                DateA = DateA.concat(element.Date));
            DateA = [...new Set(DateA)];
            var selectDc = data.metadata.filter(data => { return data.CityName == "Washington, DC" })
            var sampleIncomeDc = [];
            var MedIncomeListDc = [];
            var sampleIncomeColDc = selectDc.forEach(element => sampleIncomeDc = sampleIncomeDc.concat(element.MedianIncome));

            MedIncomeListDc = [...new Set(sampleIncomeDc)];
            var MedHousingDc = [];
            var MedHousingpriceDc = selectDc.forEach(element =>
                MedHousingDc = MedHousingDc.concat(element.MedianHousingPrice));

            var trace6 = {
                x: DateA,
                y: MedHousingDc,
                type: "scatter",
                name: "Washington DC",
                orientation: "h"
            };

            var tracebar6 = {
                x: YearList,
                y: MedIncomeListDc,
                type: "bar",
                name: "Washington DC"

            };


            var layout1 = {
                xaxis: { title: "Date" },
                yaxis: { title: "Housing ($)" }
            }

            var layout2 = {
                xaxis: { title: "Year" },
                yaxis: { title: "Income ($)" }


            }

            var data1 = [trace6];
            var data2 = [tracebar6];

            Plotly.newPlot("scatter2", data1, layout1);
            Plotly.newPlot("bar2", data2, layout2);



        }





    })
};
d3.json("Samples.json").then(data => {
    
    var sampleYear = [];
    var YearList = [];
    var sampleYearcol = data.metadata.forEach(element => sampleYear = sampleYear.concat(element.Year));
    //console.log(StatesList)
    YearList = [...new Set(sampleYear)];
    //console.log(States)
    
    var dropdownMenu = d3.select("#selDataset");
    
    YearList.forEach(item => {
        var optionTag = dropdownMenu.append("option");
        optionTag.text(item);
        optionTag.attr(item);
        });

    updatePlotly();
});

d3.selectAll("#selDataset").on("change", updatePlotly);

    //var dropdownMenu = d3.select("#selDataset");
    //var dataset = dropdownMenu.property("value");
    
   // updatePlotly();
//}


function updatePlotly() {
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    console.log(dataset);

    d3.json("Samples.json").then(data => {


        //var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];
        //Plotly.newPlot("scatter", data, layout1);
        if (dataset == 2017){
        
            var selectYear = data.metadata.filter(data => 
                {return data.Year == 2017})
            var selectNy = selectYear.filter(selectYear => {return selectYear.CityName == "New York, NY"})
            var selectLa = selectYear.filter(selectYear => {return selectYear.CityName == "Los Angeles-Long Beach-Anaheim, CA"})
            var selectChi = selectYear.filter(selectYear => {return selectYear.CityName == "Chicago, IL"})
            var selectDal = selectYear.filter(selectYear => {return selectYear.CityName == "Dallas-Fort Worth, TX"})
            var selectHou = selectYear.filter(selectYear => {return selectYear.CityName == "Houston, TX"})
            var selectDc = selectYear.filter(selectYear => {return selectYear.CityName == "Washington, DC"})
            var selectMi = selectYear.filter(selectYear => {return selectYear.CityName == "Miami-Fort Lauderdale, FL"})
            var selectPhi = selectYear.filter(selectYear => {return selectYear.CityName == "Philadelphia, PA"})
            var selectAtl = selectYear.filter(selectYear => {return selectYear.CityName == "Atlanta, GA"})
            var selectPho = selectYear.filter(selectYear => {return selectYear.CityName == "Phoenix, AZ"})
            //1    
            var sampleIncomeNy = [];
            var MedIncomeListNy = [];
            var sampleIncomeColNy = selectNy.forEach(element => sampleIncomeNy = sampleIncomeNy.concat(element.MedianIncome));
            MedIncomeListNy = [...new Set(sampleIncomeNy)];
            
            //2
            var sampleIncomeLa = [];
            var MedIncomeListLa = [];
            var sampleIncomeColLa = selectLa.forEach(element => sampleIncomeLa = sampleIncomeLa.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListLa = [...new Set(sampleIncomeLa)];

            //3
            var sampleIncomeChi = [];
            var MedIncomeListChi = [];
            var sampleIncomeColChi = selectChi.forEach(element => sampleIncomeChi = sampleIncomeChi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListChi = [...new Set(sampleIncomeChi)];
            
            //4
            var sampleIncomeDal = [];
            var MedIncomeListDal = [];
            var sampleIncomeColDal = selectDal.forEach(element => sampleIncomeDal = sampleIncomeDal.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListDal = [...new Set(sampleIncomeDal)];
            //5
            var sampleIncomeHou = [];
            var MedIncomeListHou = [];
            var sampleIncomeColHou = selectHou.forEach(element => sampleIncomeHou = sampleIncomeHou.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListHou = [...new Set(sampleIncomeHou)];
            //6
            var sampleIncomeDc = [];
            var MedIncomeListDc = [];
            var sampleIncomeColDc = selectDc.forEach(element => sampleIncomeDc = sampleIncomeDc.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListDc = [...new Set(sampleIncomeDc)];
            //7
            var sampleIncomeMi = [];
            var MedIncomeListMi = [];
            var sampleIncomeColMi = selectMi.forEach(element => sampleIncomeMi = sampleIncomeMi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesListMi)
            MedIncomeListMi = [...new Set(sampleIncomeMi)];
            //8
            var sampleIncomePhi = [];
            var MedIncomeListPhi = [];
            var sampleIncomeColPhi = selectPhi.forEach(element => sampleIncomePhi = sampleIncomePhi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListPhi = [...new Set(sampleIncomePhi)];

            //9
            var sampleIncomeAtl = [];
            var MedIncomeListAtl = [];
            var sampleIncomeColAtl = selectAtl.forEach(element => sampleIncomeAtl = sampleIncomeAtl.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListAtl = [...new Set(sampleIncomeAtl)];

            //10
            var sampleIncomePho = [];
            var MedIncomeListPho = [];
            var sampleIncomeColPho = selectPho.forEach(element => sampleIncomePho = sampleIncomePho.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListPho = [...new Set(sampleIncomePho)];
        
            
            var Monthly = [];
            var MonthList = selectYear.forEach(element => 
                Monthly = Monthly.concat(element.Date));
    
            //1
            var MedHousingNy = [];
            var MedHousingpriceNy = selectNy.forEach(element => 
                MedHousingNy = MedHousingNy.concat(element.MedianHousingPrice));
            //2
            var MedHousingLa = [];
            var MedHousingpriceLa = selectLa.forEach(element => 
                MedHousingLa = MedHousingLa.concat(element.MedianHousingPrice));
            //3
            var MedHousingChi = [];
            var MedHousingpriceChi = selectChi.forEach(element => 
                MedHousingChi = MedHousingChi.concat(element.MedianHousingPrice));
            //4
            var MedHousingDal = [];
            var MedHousingpriceDal = selectDal.forEach(element => 
                MedHousingDal = MedHousingDal.concat(element.MedianHousingPrice));
            //5
            var MedHousingHou = [];
            var MedHousingpriceHou = selectHou.forEach(element => 
                MedHousingHou = MedHousingHou.concat(element.MedianHousingPrice));
            //6
            var MedHousingDc = [];
            var MedHousingpriceDc = selectDc.forEach(element => 
                MedHousingDc = MedHousingDc.concat(element.MedianHousingPrice));
            //7
            var MedHousingMi = [];
            var MedHousingpriceMi = selectMi.forEach(element => 
                MedHousingMi = MedHousingMi.concat(element.MedianHousingPrice));
            //8
            var MedHousingPhi = [];
            var MedHousingpricePhi = selectPhi.forEach(element => 
                MedHousingPhi = MedHousingPhi.concat(element.MedianHousingPrice));
            //9
            var MedHousingAtl = [];
            var MedHousingpriceAtl = selectAtl.forEach(element => 
                MedHousingAtl = MedHousingAtl.concat(element.MedianHousingPrice));
            //10
            var MedHousingPho = [];
            var MedHousingpricePho = selectPho.forEach(element => 
                MedHousingPho = MedHousingPho.concat(element.MedianHousingPrice));

            var CityList = ["","","","","","","","","",""];
            //var CityList = ["New York", "Los Angeles", "Chicago", "Dallas", "Houston", "Washington DC", "Miami", "Philadelphia", "Atlanta", "Phoenix"];
    
    
        
    
    
          // Plot 1st Dropdown menus:
          var trace1 = {
            x: Monthly,
            y: MedHousingNy,
            type: "scatter",
            name: "New York",
            orientation: "h"
        };

        var trace2 = {
            x: Monthly,
            y: MedHousingLa,
            type: "scatter",
            name: "Los Angeles",
            orientation: "h"
        };

        var trace3 = {
            x: Monthly,
            y: MedHousingChi,
            type: "scatter",
            name: "Chicago",
            orientation: "h"
        };

        var trace4 = {
            x: Monthly,
            y: MedHousingDal,
            type: "scatter",
            name: "Dallas",
            orientation: "h"
        };

        var trace5 = {
            x: Monthly,
            y: MedHousingHou,
            type: "scatter",
            name: "Houston",
            orientation: "h"
        };

        var trace6 = {
            x: Monthly,
            y: MedHousingDc,
            type: "scatter",
            name: "Washington DC",
            orientation: "h"
        };

        var trace7 = {
            x: Monthly,
            y: MedHousingMi,
            type: "scatter",
            name: "Miami",
            orientation: "h"
        };

        var trace8 = {
            x: Monthly,
            y: MedHousingPhi,
            type: "scatter",
            name: "Philadelphia",
            orientation: "h"
        };

        var trace9 = {
            x: Monthly,
            y: MedHousingAtl,
            type: "scatter",
            name: "Atlanta",
            orientation: "h"
        };

        var trace10 = {
            x: Monthly,
            y: MedHousingPho,
            type: "scatter",
            name: "Phoenix",
            orientation: "h"
        };
        
        /////////////////////////////////
        var tracebar1 = {
            x: CityList,
            y: MedIncomeListNy,
            type: "bar",
            name: "New York"
        };

        var tracebar2 = {
            x: CityList,
            y: MedIncomeListLa,
            type: "bar",
            name: "Los Angeles"
        };

        var tracebar3 = {
            x: CityList,
            y: MedIncomeListChi,
            type: "bar",
            name: "Chicago"
        };

        var tracebar4 = {
            x: CityList,
            y: MedIncomeListDal,
            type: "bar",
            name: "Dallas"
        };

        var tracebar5 = {
            x: CityList,
            y: MedIncomeListHou,
            type: "bar",
            name: "Houston"
            
        };

        var tracebar6 = {
            x: CityList,
            y: MedIncomeListDc,
            type: "bar",
            name: "Washington DC"
            
        };

        var tracebar7 = {
            x: CityList,
            y: MedIncomeListMi,
            type: "bar",
            name: "Miami"
           
        };

        var tracebar8 = {
            x: CityList,
            y: MedIncomeListPhi,
            type: "bar",
            name: "Philadelphia"
            
        };

        var tracebar9 = {
            x: CityList,
            y: MedIncomeListAtl,
            type: "bar",
            name: "Atlanta"
        };

        var tracebar10 = {
            x: CityList,
            y: MedIncomeListPho,
            type: "bar",
            name: "Phoenix"
        };
        ////////////////////////////

        
        
        var layout1 = {
            xaxis: { title: "Date"},
            yaxis: {title: "Housing ($)"}
        }

        var layout2 = {
            xaxis: { title: "Cities (n/a for Washington DC)"},
            yaxis: {title: "Income ($)"}
        }

        var data = [trace1, trace2, trace3, trace4, trace5, trace7, trace8, trace9, trace10, trace6];

        console.log("DATA: ", data)
        console.log("LAYOUT 1: ", layout1)

        Plotly.newPlot("scatter1", data, layout1);

        var data2 = [tracebar1, tracebar2, tracebar3, tracebar4, tracebar5, tracebar7, tracebar8, tracebar9, tracebar10];

        Plotly.newPlot("bar1", data2, layout2);

        }else if(dataset == 2018){

            var selectYear = data.metadata.filter(data => 
                {return data.Year == 2018})
            var selectNy = selectYear.filter(selectYear => {return selectYear.CityName == "New York, NY"})
            var selectLa = selectYear.filter(selectYear => {return selectYear.CityName == "Los Angeles-Long Beach-Anaheim, CA"})
            var selectChi = selectYear.filter(selectYear => {return selectYear.CityName == "Chicago, IL"})
            var selectDal = selectYear.filter(selectYear => {return selectYear.CityName == "Dallas-Fort Worth, TX"})
            var selectHou = selectYear.filter(selectYear => {return selectYear.CityName == "Houston, TX"})
            var selectDc = selectYear.filter(selectYear => {return selectYear.CityName == "Washington, DC"})
            var selectMi = selectYear.filter(selectYear => {return selectYear.CityName == "Miami-Fort Lauderdale, FL"})
            var selectPhi = selectYear.filter(selectYear => {return selectYear.CityName == "Philadelphia, PA"})
            var selectAtl = selectYear.filter(selectYear => {return selectYear.CityName == "Atlanta, GA"})
            var selectPho = selectYear.filter(selectYear => {return selectYear.CityName == "Phoenix, AZ"})
            
            //1    
            var sampleIncomeNy = [];
            var MedIncomeListNy = [];
            var sampleIncomeColNy = selectNy.forEach(element => sampleIncomeNy = sampleIncomeNy.concat(element.MedianIncome));
            MedIncomeListNy = [...new Set(sampleIncomeNy)];
            
            //2
            var sampleIncomeLa = [];
            var MedIncomeListLa = [];
            var sampleIncomeColLa = selectLa.forEach(element => sampleIncomeLa = sampleIncomeLa.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListLa = [...new Set(sampleIncomeLa)];

            //3
            var sampleIncomeChi = [];
            var MedIncomeListChi = [];
            var sampleIncomeColChi = selectChi.forEach(element => sampleIncomeChi = sampleIncomeChi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListChi = [...new Set(sampleIncomeChi)];
            
            //4
            var sampleIncomeDal = [];
            var MedIncomeListDal = [];
            var sampleIncomeColDal = selectDal.forEach(element => sampleIncomeDal = sampleIncomeDal.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListDal = [...new Set(sampleIncomeDal)];
            //5
            var sampleIncomeHou = [];
            var MedIncomeListHou = [];
            var sampleIncomeColHou = selectHou.forEach(element => sampleIncomeHou = sampleIncomeHou.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListHou = [...new Set(sampleIncomeHou)];
            //6
            var sampleIncomeDc = [];
            var MedIncomeListDc = [];
            var sampleIncomeColDc = selectDc.forEach(element => sampleIncomeDc = sampleIncomeDc.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListDc = [...new Set(sampleIncomeDc)];
            //7
            var sampleIncomeMi = [];
            var MedIncomeListMi = [];
            var sampleIncomeColMi = selectMi.forEach(element => sampleIncomeMi = sampleIncomeMi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesListMi)
            MedIncomeListMi = [...new Set(sampleIncomeMi)];
            //8
            var sampleIncomePhi = [];
            var MedIncomeListPhi = [];
            var sampleIncomeColPhi = selectPhi.forEach(element => sampleIncomePhi = sampleIncomePhi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListPhi = [...new Set(sampleIncomePhi)];

            //9
            var sampleIncomeAtl = [];
            var MedIncomeListAtl = [];
            var sampleIncomeColAtl = selectAtl.forEach(element => sampleIncomeAtl = sampleIncomeAtl.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListAtl = [...new Set(sampleIncomeAtl)];

            //10
            var sampleIncomePho = [];
            var MedIncomeListPho = [];
            var sampleIncomeColPho = selectPho.forEach(element => sampleIncomePho = sampleIncomePho.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListPho = [...new Set(sampleIncomePho)];

            var Monthly = [];
            var MonthList = selectYear.forEach(element => 
                Monthly = Monthly.concat(element.Date));
    
            //1
            var MedHousingNy = [];
            var MedHousingpriceNy = selectNy.forEach(element => 
                MedHousingNy = MedHousingNy.concat(element.MedianHousingPrice));
            //2
            var MedHousingLa = [];
            var MedHousingpriceLa = selectLa.forEach(element => 
                MedHousingLa = MedHousingLa.concat(element.MedianHousingPrice));
            //3
            var MedHousingChi = [];
            var MedHousingpriceChi = selectChi.forEach(element => 
                MedHousingChi = MedHousingChi.concat(element.MedianHousingPrice));
            //4
            var MedHousingDal = [];
            var MedHousingpriceDal = selectDal.forEach(element => 
                MedHousingDal = MedHousingDal.concat(element.MedianHousingPrice));
            //5
            var MedHousingHou = [];
            var MedHousingpriceHou = selectHou.forEach(element => 
                MedHousingHou = MedHousingHou.concat(element.MedianHousingPrice));
            //6
            var MedHousingDc = [];
            var MedHousingpriceDc = selectDc.forEach(element => 
                MedHousingDc = MedHousingDc.concat(element.MedianHousingPrice));
            //7
            var MedHousingMi = [];
            var MedHousingpriceMi = selectMi.forEach(element => 
                MedHousingMi = MedHousingMi.concat(element.MedianHousingPrice));
            //8
            var MedHousingPhi = [];
            var MedHousingpricePhi = selectPhi.forEach(element => 
                MedHousingPhi = MedHousingPhi.concat(element.MedianHousingPrice));
            //9
            var MedHousingAtl = [];
            var MedHousingpriceAtl = selectAtl.forEach(element => 
                MedHousingAtl = MedHousingAtl.concat(element.MedianHousingPrice));
            //10
            var MedHousingPho = [];
            var MedHousingpricePho = selectPho.forEach(element => 
                MedHousingPho = MedHousingPho.concat(element.MedianHousingPrice));

            var CityList = ["","","","","","","","","",""];
            //var CityList = ["New York", "Los Angeles", "Chicago", "Dallas", "Houston", "Washington DC", "Miami", "Philadelphia", "Atlanta", "Phoenix"];
    
        
    
    
     // Plot 1st Dropdown menus:
            var trace1 = {
                x: Monthly,
                y: MedHousingNy,
                type: "scatter",
                name: "New York",
                orientation: "h"
            };
    
            var trace2 = {
                x: Monthly,
                y: MedHousingLa,
                type: "scatter",
                name: "Los Angeles",
                orientation: "h"
            };
    
            var trace3 = {
                x: Monthly,
                y: MedHousingChi,
                type: "scatter",
                name: "Chicago",
                orientation: "h"
            };
    
            var trace4 = {
                x: Monthly,
                y: MedHousingDal,
                type: "scatter",
                name: "Dallas",
                orientation: "h"
            };
    
            var trace5 = {
                x: Monthly,
                y: MedHousingHou,
                type: "scatter",
                name: "Houston",
                orientation: "h"
            };
    
            var trace6 = {
                x: Monthly,
                y: MedHousingDc,
                type: "scatter",
                name: "Washington DC",
                orientation: "h"
            };
    
            var trace7 = {
                x: Monthly,
                y: MedHousingMi,
                type: "scatter",
                name: "Miami",
                orientation: "h"
            };
    
            var trace8 = {
                x: Monthly,
                y: MedHousingPhi,
                type: "scatter",
                name: "Philadelphia",
                orientation: "h"
            };
    
            var trace9 = {
                x: Monthly,
                y: MedHousingAtl,
                type: "scatter",
                name: "Atlanta",
                orientation: "h"
            };
    
            var trace10 = {
                x: Monthly,
                y: MedHousingPho,
                type: "scatter",
                name: "Phoenix",
                orientation: "h"
            };
            
           
            /////////////////////////////////
        var tracebar1 = {
            x: CityList,
            y: MedIncomeListNy,
            type: "bar",
            name: "New York"
        };

        var tracebar2 = {
            x: CityList,
            y: MedIncomeListLa,
            type: "bar",
            name: "Los Angeles"
        };

        var tracebar3 = {
            x: CityList,
            y: MedIncomeListChi,
            type: "bar",
            name: "Chicago"
        };

        var tracebar4 = {
            x: CityList,
            y: MedIncomeListDal,
            type: "bar",
            name: "Dallas"
        };

        var tracebar5 = {
            x: CityList,
            y: MedIncomeListHou,
            type: "bar",
            name: "Houston"
            
        };

        var tracebar6 = {
            x: CityList,
            y: MedIncomeListDc,
            type: "bar",
            name: "Washington DC"
            
        };

        var tracebar7 = {
            x: CityList,
            y: MedIncomeListMi,
            type: "bar",
            name: "Miami"
           
        };

        var tracebar8 = {
            x: CityList,
            y: MedIncomeListPhi,
            type: "bar",
            name: "Philadelphia"
            
        };

        var tracebar9 = {
            x: CityList,
            y: MedIncomeListAtl,
            type: "bar",
            name: "Atlanta"
        };

        var tracebar10 = {
            x: CityList,
            y: MedIncomeListPho,
            type: "bar",
            name: "Phoenix"
        };
        ////////////////////////////
    
            
            
            var layout1 = {
                xaxis: { title: "Date"},
                yaxis: {title: "Housing ($)"}
            }

            var layout2 = {
                xaxis: { title: "Cities (n/a for Washington DC)"},
                yaxis: {title: "Income ($)"}
            }

            var data = [trace1, trace2, trace3, trace4, trace5, trace7, trace8, trace9, trace10, trace6];
            Plotly.newPlot("scatter1", data, layout1);
            var data2 = [tracebar1, tracebar2, tracebar3, tracebar4, tracebar5, tracebar7, tracebar8, tracebar9, tracebar10];
            Plotly.newPlot("bar1", data2, layout2);



        }else{

            var selectYear = data.metadata.filter(data => 
                {return data.Year == 2019})
            var selectNy = selectYear.filter(selectYear => {return selectYear.CityName == "New York, NY"})
            var selectLa = selectYear.filter(selectYear => {return selectYear.CityName == "Los Angeles-Long Beach-Anaheim, CA"})
            var selectChi = selectYear.filter(selectYear => {return selectYear.CityName == "Chicago, IL"})
            var selectDal = selectYear.filter(selectYear => {return selectYear.CityName == "Dallas-Fort Worth, TX"})
            var selectHou = selectYear.filter(selectYear => {return selectYear.CityName == "Houston, TX"})
            var selectDc = selectYear.filter(selectYear => {return selectYear.CityName == "Washington, DC"})
            var selectMi = selectYear.filter(selectYear => {return selectYear.CityName == "Miami-Fort Lauderdale, FL"})
            var selectPhi = selectYear.filter(selectYear => {return selectYear.CityName == "Philadelphia, PA"})
            var selectAtl = selectYear.filter(selectYear => {return selectYear.CityName == "Atlanta, GA"})
            var selectPho = selectYear.filter(selectYear => {return selectYear.CityName == "Phoenix, AZ"})
            
            //1    
            var sampleIncomeNy = [];
            var MedIncomeListNy = [];
            var sampleIncomeColNy = selectNy.forEach(element => sampleIncomeNy = sampleIncomeNy.concat(element.MedianIncome));
            MedIncomeListNy = [...new Set(sampleIncomeNy)];
            
            //2
            var sampleIncomeLa = [];
            var MedIncomeListLa = [];
            var sampleIncomeColLa = selectLa.forEach(element => sampleIncomeLa = sampleIncomeLa.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListLa = [...new Set(sampleIncomeLa)];

            //3
            var sampleIncomeChi = [];
            var MedIncomeListChi = [];
            var sampleIncomeColChi = selectChi.forEach(element => sampleIncomeChi = sampleIncomeChi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListChi = [...new Set(sampleIncomeChi)];
            
            //4
            var sampleIncomeDal = [];
            var MedIncomeListDal = [];
            var sampleIncomeColDal = selectDal.forEach(element => sampleIncomeDal = sampleIncomeDal.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListDal = [...new Set(sampleIncomeDal)];
            //5
            var sampleIncomeHou = [];
            var MedIncomeListHou = [];
            var sampleIncomeColHou = selectHou.forEach(element => sampleIncomeHou = sampleIncomeHou.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListHou = [...new Set(sampleIncomeHou)];
            //6
            var sampleIncomeDc = [];
            var MedIncomeListDc = [];
            var sampleIncomeColDc = selectDc.forEach(element => sampleIncomeDc = sampleIncomeDc.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListDc = [...new Set(sampleIncomeDc)];
            //7
            var sampleIncomeMi = [];
            var MedIncomeListMi = [];
            var sampleIncomeColMi = selectMi.forEach(element => sampleIncomeMi = sampleIncomeMi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesListMi)
            MedIncomeListMi = [...new Set(sampleIncomeMi)];
            //8
            var sampleIncomePhi = [];
            var MedIncomeListPhi = [];
            var sampleIncomeColPhi = selectPhi.forEach(element => sampleIncomePhi = sampleIncomePhi.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListPhi = [...new Set(sampleIncomePhi)];

            //9
            var sampleIncomeAtl = [];
            var MedIncomeListAtl = [];
            var sampleIncomeColAtl = selectAtl.forEach(element => sampleIncomeAtl = sampleIncomeAtl.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListAtl = [...new Set(sampleIncomeAtl)];

            //10
            var sampleIncomePho = [];
            var MedIncomeListPho = [];
            var sampleIncomeColPho = selectPho.forEach(element => sampleIncomePho = sampleIncomePho.concat(element.MedianIncome));
            //MedIncomeList.log(StatesList)
            MedIncomeListPho = [...new Set(sampleIncomePho)];

            var Monthly = [];
            var MonthList = selectYear.forEach(element => 
                Monthly = Monthly.concat(element.Date));
    
            //1
            var MedHousingNy = [];
            var MedHousingpriceNy = selectNy.forEach(element => 
                MedHousingNy = MedHousingNy.concat(element.MedianHousingPrice));
            //2
            var MedHousingLa = [];
            var MedHousingpriceLa = selectLa.forEach(element => 
                MedHousingLa = MedHousingLa.concat(element.MedianHousingPrice));
            //3
            var MedHousingChi = [];
            var MedHousingpriceChi = selectChi.forEach(element => 
                MedHousingChi = MedHousingChi.concat(element.MedianHousingPrice));
            //4
            var MedHousingDal = [];
            var MedHousingpriceDal = selectDal.forEach(element => 
                MedHousingDal = MedHousingDal.concat(element.MedianHousingPrice));
            //5
            var MedHousingHou = [];
            var MedHousingpriceHou = selectHou.forEach(element => 
                MedHousingHou = MedHousingHou.concat(element.MedianHousingPrice));
            //6
            var MedHousingDc = [];
            var MedHousingpriceDc = selectDc.forEach(element => 
                MedHousingDc = MedHousingDc.concat(element.MedianHousingPrice));
            //7
            var MedHousingMi = [];
            var MedHousingpriceMi = selectMi.forEach(element => 
                MedHousingMi = MedHousingMi.concat(element.MedianHousingPrice));
            //8
            var MedHousingPhi = [];
            var MedHousingpricePhi = selectPhi.forEach(element => 
                MedHousingPhi = MedHousingPhi.concat(element.MedianHousingPrice));
            //9
            var MedHousingAtl = [];
            var MedHousingpriceAtl = selectAtl.forEach(element => 
                MedHousingAtl = MedHousingAtl.concat(element.MedianHousingPrice));
            //10
            var MedHousingPho = [];
            var MedHousingpricePho = selectPho.forEach(element => 
                MedHousingPho = MedHousingPho.concat(element.MedianHousingPrice));
            

                var CityList = ["","","","","","","","","",""];
            //var CityList = ["New York", "Los Angeles", "Chicago", "Dallas", "Houston", "Washington DC", "Miami", "Philadelphia", "Atlanta", "Phoenix"];
    
    
        
    
    
     // Plot 1st Dropdown menus:
                 // Plot 1st Dropdown menus:
                 var trace1 = {
                    x: Monthly,
                    y: MedHousingNy,
                    type: "scatter",
                    name: "New York",
                    orientation: "h"
                };
        
                var trace2 = {
                    x: Monthly,
                    y: MedHousingLa,
                    type: "scatter",
                    name: "Los Angeles",
                    orientation: "h"
                };
        
                var trace3 = {
                    x: Monthly,
                    y: MedHousingChi,
                    type: "scatter",
                    name: "Chicago",
                    orientation: "h"
                };
        
                var trace4 = {
                    x: Monthly,
                    y: MedHousingDal,
                    type: "scatter",
                    name: "Dallas",
                    orientation: "h"
                };
        
                var trace5 = {
                    x: Monthly,
                    y: MedHousingHou,
                    type: "scatter",
                    name: "Houston",
                    orientation: "h"
                };
        
                var trace6 = {
                    x: Monthly,
                    y: MedHousingDc,
                    type: "scatter",
                    name: "Washington DC",
                    orientation: "h"
                };
        
                var trace7 = {
                    x: Monthly,
                    y: MedHousingMi,
                    type: "scatter",
                    name: "Miami",
                    orientation: "h"
                };
        
                var trace8 = {
                    x: Monthly,
                    y: MedHousingPhi,
                    type: "scatter",
                    name: "Philadelphia",
                    orientation: "h"
                };
        
                var trace9 = {
                    x: Monthly,
                    y: MedHousingAtl,
                    type: "scatter",
                    name: "Atlanta",
                    orientation: "h"
                };
        
                var trace10 = {
                    x: Monthly,
                    y: MedHousingPho,
                    type: "scatter",
                    name: "Phoenix",
                    orientation: "h"
                };
                
                /////////////////////////////////
                
        var tracebar1 = {
            x: CityList,
            y: MedIncomeListNy,
            type: "bar",
            name: "New York"
        };

        var tracebar2 = {
            x: CityList,
            y: MedIncomeListLa,
            type: "bar",
            name: "Los Angeles"
        };

        var tracebar3 = {
            x: CityList,
            y: MedIncomeListChi,
            type: "bar",
            name: "Chicago"
        };

        var tracebar4 = {
            x: CityList,
            y: MedIncomeListDal,
            type: "bar",
            name: "Dallas"
        };

        var tracebar5 = {
            x: CityList,
            y: MedIncomeListHou,
            type: "bar",
            name: "Houston"
            
        };

        var tracebar6 = {
            x: CityList,
            y: MedIncomeListDc,
            type: "bar",
            name: "Washington DC"
            
        };

        var tracebar7 = {
            x: CityList,
            y: MedIncomeListMi,
            type: "bar",
            name: "Miami"
           
        };

        var tracebar8 = {
            x: CityList,
            y: MedIncomeListPhi,
            type: "bar",
            name: "Philadelphia"
            
        };

        var tracebar9 = {
            x: CityList,
            y: MedIncomeListAtl,
            type: "bar",
            name: "Atlanta"
        };

        var tracebar10 = {
            x: CityList,
            y: MedIncomeListPho,
            type: "bar",
            name: "Phoenix"
        };
        ////////////////////////////
        
                
                
                var layout1 = {
                    xaxis: { title: "Date"},
                    yaxis: {title: "Housing ($)"}
                }
                var layout2 = {
                    xaxis: { title: "Cities (n/a for Washington DC)"},
                    yaxis: {title: "Income ($)"}
                }
    
                var data = [trace1, trace2, trace3, trace4, trace5, trace7, trace8, trace9, trace10, trace6];

                Plotly.newPlot("scatter1", data, layout1);
                var data2 = [tracebar1, tracebar2, tracebar3, tracebar4, tracebar5, tracebar7, tracebar8, tracebar9, tracebar10];
                Plotly.newPlot("bar1", data2, layout2);

             }
        

        

        

    //data1 = [trace1]
       //Plotly.newPlot("bar", data1, layout2);

     //  data2 = [trace2]
      //  Plotly.newPlot("bubble", data2, layout2);



  })
};
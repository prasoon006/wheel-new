import define1 from "./a2e58f97fd5e8d7c@736.js";

function _1(md) {
  return (
    md`# 
`
  )
}

function _languageSelector(Radio, md) {
  return (
    Radio(["en", "es"], {
      label: md`**New!** Language`,
      value: "en" // Default value
    })
  )
}



function _3(languageSelector, md) {
  return (
    languageSelector === "en"
      ? md`**New!** Click on their names to explore their Wikipedia entries.`
      : md`**Nuevo!** Haz click en sus nombres para explorar sus entradas en Wikipedia.`
  )
}

function* _chart2(html, styles, drawRadialChart) {
  yield html`
    ${styles}
    <div id="radialChart">      
    </div>`;
  drawRadialChart();
}





function _7(md) {
  return (
    md`---`
  )
}

// function _data1(){return(
// fetch("https://api.weather.gov/gridpoints/OKX/33,37/forecast").then((response) => response.json())
// )}

function _drawRadialChart(heightRadial, xRadial, yRadial, d3, width, margin, locale, languageSelector, colorMain, data, innerRadius, outerRadius, onMouseOver, onMouseOut, myDomain, extractWorkYear) {
  return (
    async function drawRadialChart() {
      const height = heightRadial;
      const x = xRadial;
      const y = yRadial;

      const svg = d3
        .select("#radialChart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      // CHART TITLE
      const titleChart = svg.append("g").attr("id", "titleChart");
      const initPosit = 60;
      const diffPosit = 40;
      const fontSize = "40px";

      titleChart
        .append("text")
        .attr("x", width / 2)
        .attr("y", initPosit)
        .text(locale[languageSelector].title.a)
        .style('font-family', 'inter')
        .style("font-size", fontSize)
        .style("text-anchor", "middle");
      titleChart
        .append("text")
        .attr("x", width / 2)
        .attr("y", initPosit + diffPosit)
        .text(locale[languageSelector].title.b)
        .style('font-family', 'inter')
        .style("font-weight", 800)
        .style("font-size", fontSize)
        .style("fill", colorMain)
        .style("text-anchor", "middle");
      titleChart
        .append("text")
        .attr("x", width / 2)
        .attr("y", initPosit + diffPosit * 2)
        .text(locale[languageSelector].title.c)
        .style('font-family', 'inter')
        .style("font-size", fontSize)
        .style("text-anchor", "middle");
      titleChart
        .append("text")
        .attr("x", width / 2)
        .attr("y", initPosit + diffPosit * 3)
        .text(locale[languageSelector].title.d)
        .style('font-family', 'inter')
        .style("font-size", fontSize)
        .style("text-anchor", "middle");

      // CENTRAL IMAGE // Image size
      const imgWidth = 170;
      const imgTest = d3
        .select("#radialChart")
        .append("div")
        .attr("id", "imgProfile")
        .style("width", `${imgWidth}px`)
        .style("height", `${imgWidth}px`)
        // .style("filter", "grayscale(100%)")
        .style("border-radius", "50%")
        .style("background-size", "cover")
        .style("background-position", "center center")
        .style("position", "absolute")
        .style("top", `${margin.top + height / 1.97 - imgWidth / 2}px`)
        .style("left", `${width / 2 - imgWidth / 2.2}px`)
        .append("p")
        .attr("class", "workInfoExtra")
        .text("");

      // CENTRAL TEXT
      // If empty image: some central text visible
      const titleCenter = svg.append("g").attr("id", "centerText");
      titleCenter
        .append("text")
        .attr("x", width / 2)
        .attr("y", margin.top + height / 2 - 25)
        .text(locale[languageSelector].centerText.a)
        .style('font-family', 'inter')
        .style("font-size", "19px")
        .style("dominant-baseline", "hanging")
        .style("text-anchor", "middle")
        .style("fill", colorMain)
        .attr('opacity', 0.7)
      titleCenter
        .append("text")
        .attr("x", width / 2)
        .attr("y", margin.top + height / 2)
        .text(locale[languageSelector].centerText.b)
        .style('font-family', 'inter')
        .style("font-size", "19px")
        // .style("font-weight", 800)
        .style("dominant-baseline", "hanging")
        .style("text-anchor", "middle")
        .style("fill", colorMain)
        .attr('opacity', 0.7)
      titleCenter
        .append("text")
        .attr("x", width / 2)
        .attr("y", margin.top + height / 2 + 20)
        .text(locale[languageSelector].centerText.c)
        .style('font-family', 'inter')
        .style("font-size", "12px")
        .style("dominant-baseline", "hanging")
        .style("text-anchor", "middle")
        .style("fill", colorMain);

      // SVG CHART
      const chartElGroup = svg
        .append("g")
        .attr("id", "chartElGroup")
        .attr("transform", `translate(0,${margin.top})`);

      // RADIAL BARS
      const barsGroup = chartElGroup
        .append("g")
        .attr("id", "barsGroup")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


      const rectBar = chartElGroup
        .append("g")
        .attr("id", "barsGroup")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")



      const rectBar1 = chartElGroup
        .append("g")
        .attr("id", "barsGroup")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")




      rectBar
        .selectAll("path")
        .style('z-index', 3)
        .data(data)
        .enter()
        .append("path")
        .attr("data-id", (d) => d.id)
        .attr("fill", (d => `${d["COLOR"]}` || colorMain))
        .attr(
          "d",
          d3
            .arc()
            .innerRadius((d) => y(+d["YEAR_B"]))
            .outerRadius((d) => y(+d["YEAR_D"] || 2021))
            .startAngle((d) => x(d.id) + 0.11)
            .endAngle((d) => x(d.id) + x.bandwidth() - 0.11)
            .padAngle(-0.4)
            .padRadius(outerRadius)
        )

        .attr("opacity", 1)
        .transition()
        .duration(500)
        // .delay((d, i) => i * 15)
        .attr("opacity", 1)
        .style("pointer-events", "none");



      rectBar1
        .selectAll("path")
        .style('z-index', 3)
        .data(data)
        .enter()
        .append("path")
        .attr("data-id", (d) => d.id)
        .attr("fill", (d => `${d["COLOR"]}` || colorMain))
        .attr(
          "d",
          d3
            .arc()
            .innerRadius((d) => y(+d["YEAR_B1"]))
            .outerRadius((d) => y(+d["YEAR_D1"]))
            .startAngle((d) => x(d.id) + 0.11)
            .endAngle((d) => x(d.id) + x.bandwidth() - 0.11)
            .padAngle(-0.4)
            .padRadius(outerRadius)
        )

        .attr("opacity", 1)
        .transition()
        .duration(500)
        // .delay((d, i) => i * 15)
        .attr("opacity", 1)
        .style("pointer-events", "none");

      barsGroup
        .selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("data-id", (d) => d.id)
        .attr("fill", (d => `${d["COLOR"]}` || colorMain))
        .attr(
          "d",
          d3
            .arc()
            .innerRadius((d) => y(+1940))
            .outerRadius((d) => y(+2040))
            .startAngle((d) => x(d.id))
            .endAngle((d) => x(d.id) + x.bandwidth())
            .padAngle(0.5)
            .padRadius(innerRadius)
        )
        .attr("opacity", 0)
        .transition()
        .duration(5)
        .delay((d, i) => i * 15)
        .attr("opacity", 0)
        .style("pointer-events", "none");

      ///////////

      // NEW!! Aux elements for interaction
      const barsAux = chartElGroup
        .append("g")
        .attr("id", "barsAux")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      barsAux
        .selectAll("a")
        .data(data)
        .enter()
        .append("a")
        .attr("target", "_blank")
        .attr("href", (d) =>
          d.wikipedia != "" && d.wikipedia != "x" ? d.wikipedia : null
        )
        .append("path")
        .attr("class", "aux")
        .attr("data-id", (d) => d.id)
        .attr("fill", "transparent")
        .attr(
          "d",
          d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(500)
            .startAngle((d) => x(d.id))
            .endAngle((d) => x(d.id) + x.bandwidth())
            .padAngle(0.1)
            .padRadius(innerRadius)
        )
        .style("cursor", (d) =>
          d.wikipedia != "" && d.wikipedia != "x" ? "pointer" : "auto"
        )
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut);

      ///////

      // TIME RINGS
      const decades = [1890, 1940, 1965, 1990, 2015, 2040];
      const constDates = chartElGroup.append("g").attr("id", "circlesDates");
      const constDates1 = chartElGroup.append("g").attr("id", "circlesDates");

      const innerData = ["", ".    DESIGN", , "", "BUILD", "", ".       USE", "", ".  END OF"];
      const color = ['green', 'blue', 'green', 'blue', 'green', 'blue', 'green'];




      // .on('mouseover', function (d, i) {
      //   console.log(this)
      //   d3.select(this)

      //     .style('stroke-width', 40)

      //     .style("stroke", (d, i) => color[i])
      // })

      constDates
        .selectAll("circle")
        .data(decades)
        .join("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", (d) => y(d))
        .style("pointer-events", "none")
        // .each(function(d,i,j) {
        //   console.log(i, d, this);
        //   // console.log(this);
        //   console.log(i, color[i])
        //   d3.select(this)
        //     .attr("fill",color[i])
        //     .style("pointer-events", "all")
        //     .on('mouseover',function(l){
        //       console.log(l)
        //       console.log(d)
        //       console.log(i)
        //       console.log(j)
        //       console.log(this)
        //     })

        // })
        .style("fill", 'none')



        // .style('stroke-width', 40)
        //         .style('stroke', (d) => col(d.name)) 
        // .style("stroke", (d,i)=> color[i])

        .style("stroke", 'blue')
        .style("stroke-dasharray", "3")
        .style("pointer-events", "none");




      constDates
        .selectAll("text")
        .data(innerData)
        .join("text")
        .attr("x", (d, i) => width / 2 + 183 + i * 18 + (i - 4) * 2)
        .attr("y", (d) => height / 2)
        .text((d) => d)
        .style("fill", "black")
        .style("opacity", 1)
        .style('font-family', 'inter')
        .style("font-size", "13px")
        .style("pointer-events", "none");


      constDates
        .selectAll("text2")
        .data(["LIFE"])
        .join("text")
        .attr("x", (d, i) => width / 2 + 350)
        .attr("y", (d) => height / 2 + 20)
        .text((d) => d)
        .style("fill", "black")
        .style("opacity", 1)
        .style('font-family', 'inter')
        .style("font-size", "13px")
        .style("pointer-events", "none");


      constDates1
        .selectAll("circle")
        .data(decades)
        .join("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", (d) => y(d))

        .style("fill", "transparent")
        .each(function (d, i, j) {
          console.log(i, d, this);
          d3.select(this)
          // .attr("fill", 'grey')
          // .style('opacity', 0.1)  
        })



      constDates1
        .selectAll("circle")
        .data(decades)
        .join("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", (d) => y(d))
        // .style("fill", "none")
        .each(function (d, i, j) {

          if (i == 1) {
            console.log(i, d, this);


            d3.select(this)
              .attr("fill", 'white')

              .style('opacity', 1)
          }

        })





      constDates1
        .selectAll("text")
        .data(["BUILDING LIFECYCLE"])
        .join("text")
        .attr("x", (d, i) => width / 2 + 430)
        .attr("y", (d) => height / 2)
        .text((d) => d)

        .style("fill", "black")
        .style("opacity", 1)
        .style('font-family', 'inter')
        .style("font-size", "15px")
        .style("pointer-events", "none");




      const circle22 = chartElGroup.append("g").attr("id", "circlesDates");
      circle22
        .selectAll("circle")
        .data(decades)
        .join("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", (d) => y(d))
        .style("fill", "none")
        .each(function (d, i, j) {
          console.log(i, d, this);


          d3.select(this)
          // .attr("fill", color[i])
          // .style('stroke-width', 40)
          // .style("stroke", (d) => color[i])
          // .style('opacity',0.1)

        })





      circle22
        .selectAll("text")
        .data([""])
        .join("text")
        .attr("x", (d, i) => width / 2 - 30)
        .attr("y", (d) => height / 2)
        .text((d) => d)

        .style("fill", "black")
        .style("opacity", 1)
        .style("font-size", "15px")
        .style('font-family', 'inter')
        .style("pointer-events", "none")
      // .attr("transform", function(d, i) { return "rotate(" + (10) + ")"; })
      // .attr("translate", 80)





      // var svg2 = d3.select("body").append("svg")

      svg.append("path")
        .attr("id", "wavy") //Unique id of the path
        .attr("d", `M ${width / 2 + 162}, ${height / 2 + 160} m 0, 0 a -75,75 1 1,1 -320,0 a 75,75 1 1,1 320,1`)
        .style("fill", "none")
        .style("stroke", "#C5FD89 ")
        .style('stroke-width', 30)
        .style('opacity', 0.9)

        .on('mouseover', function (d, i) {
          console.log("DD")
          d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.85')
        })

        .on('mouseout', function (d, i) {
          d3.select(this).transition()
            .duration('50')
            .attr('opacity', '1')
        })



      svg.append("path")
        .attr("id", "wavy1") //Unique id of the path
        .attr("d", `M ${width / 2 + 232}, ${height / 2 + 160} m 0, 0 a -75,75 1 1,1 -464,0 a 75,75 1 1,1 464,1`)
        .style("fill", "none")
        .style("stroke", "lightblue")
        .style('stroke-width', 44)
        .style('opacity', 0.2)

        .on('mouseover', function (d, i) {
          console.log("wavy1")
          d3.select(this)
            .style('opacity', 0.3)
        })
        .on('mouseout', function (d, i) {
          d3.select(this)
            .style('opacity', 0.2)
        })
        .on('click', function (d, i) {

          d3.select(this)
            .style('opacity', 0.4)


          d3.select('#womenInfo')
            .selectAll('text')
            .style('opacity', (d) => ((d.YEAR_B <= 1940 && d.YEAR_D > 1940) || (d.YEAR_B < 1965 && d.YEAR_D >= 1965) || ((d.YEAR_B1 <= 1940 && d.YEAR_D1 > 1940) || (d.YEAR_B1 < 1965 && d.YEAR_D1 >= 1965))) ? 1 : 0.1)


        })



      svg.append("path")
        .attr("id", "wavy2") //Unique id of the path
        .attr("d", `M ${width / 2 + 274}, ${height / 2 + 160} m 0, 0 a -75,75 1 1,1 -550,0 a 75,75 1 1,1 550,1`)
        .style("fill", "none")
        .style("stroke", "#9AF45E")
        .style('stroke-width', 43)
        .style('opacity', 0.1)

        .on('mouseover', function (d, i) {
          console.log("wavy2")
          d3.select(this)

            .style('opacity', '0.3')
        })
        .on('mouseout', function (d, i) {
          d3.select(this)

            .style('opacity', '0.1')
        })
        .on('click', function (d, i) {

          d3.select(this)
            .style('opacity', 0.4)
          d3.select('#womenInfo')
            .selectAll('text')
            .style('opacity', (d) => (d.YEAR_B <= 1965 && d.YEAR_D > 1965) || (d.YEAR_B < 1990 && d.YEAR_D >= 1990) || (d.YEAR_B1 <= 1965 && d.YEAR_D1 > 1965) || (d.YEAR_B1 < 1990 && d.YEAR_D1 >= 1990) ? 1 : 0.1)
           

        })



      svg.append("path")
        .attr("id", "wavy3") //Unique id of the path
        .attr("d", `M ${width / 2 + 318}, ${height / 2 + 160} m 0, 0 a -75,75 1 1,1 -638,0 a 75,75 1 1,1 638,1`)
        .style("fill", "none")
        .style("stroke", "#FF7B48 ")
        .style('stroke-width', 43)
        .style('opacity', 0.1)
        .on('mouseover', function (d, i) {
          console.log("wavy3")
          d3.select(this)
            .style('opacity', 0.3)
        })
        .on('mouseout', function (d, i) {

          d3.select(this)
            .style('opacity', 0.1)
        })
        .on('click', function (d, i) {

          d3.select(this)
            .style('opacity', 0.4)
          d3.select('#womenInfo')
            .selectAll('text')
            .style('opacity', (d) => (d.YEAR_B <= 1990 && d.YEAR_D > 1990) || (d.YEAR_B < 2015 && d.YEAR_D >= 2015) || (d.YEAR_B1 <= 1990 && d.YEAR_D1 > 1990) || (d.YEAR_B1 < 2015 && d.YEAR_D1 >= 2015) ? 1 : 0.1)


        })


      svg.append("path")
        .attr("id", "wavy4") //Unique id of the path
        .attr("d", `M ${width / 2 + 363}, ${height / 2 + 160} m 0, 0 a -75,75 1 1,1 -726,0 a 75,75 1 1,1 726,1`)
        .style("fill", "none")
        .style("stroke", "#FCFE4F")
        .style('stroke-width', 43)
        .style('opacity', 0.2)


        .on('mouseover', function (d, i) {
          console.log("wavy4")
          d3.select(this)
            .style('opacity', 0.4)
        })
        .on('mouseout', function (d, i) {

          d3.select(this)
            .style('opacity', 0.2)
        })

        .on('click', function (d, i) {

          d3.select(this)
            .style('opacity', 0.4)
          d3.select('#womenInfo')
            .selectAll('text')
            .style('opacity', (d) => (d.YEAR_B <= 2015 && d.YEAR_D > 2015) || (d.YEAR_B < 2040 && d.YEAR_D >= 2040) || (d.YEAR_B1 <= 2015 && d.YEAR_D1 > 2015) || (d.YEAR_B1 < 2040 && d.YEAR_D1 >= 2040) ? 1 : 0.1)
          

        })









      //Create an SVG text element and append a textPath element
      svg.append("text")
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy") //place the ID of the path here
        .style("text-anchor", "middle") //place the text halfway on the arc
        .attr("startOffset", "80%")
        .style('font-weight', '800')
        .style('font-family', 'inter')
        .text(["Decision Making"])
        .style('font-size', '18px')



      svg.append("text")
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy") //place the ID of the path here
        .style("text-anchor", "middle") //place the text halfway on the arc
        .attr("startOffset", "60%")
        .style('font-weight', '800')
        .style('font-family', 'inter')
        .text(["Design"])
        .style('font-size', '18px')


      svg.append("text")
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy") //place the ID of the path here
        .style("text-anchor", "middle") //place the text halfway on the arc
        .attr("startOffset", "40%")
        .style('font-family', 'inter')
        .style('font-weight', '800')
        .text(["Users"])
        .style('font-size', '18px')

      svg.append("text")
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy") //place the ID of the path here
        .style("text-anchor", "middle") //place the text halfway on the arc
        .attr("startOffset", "13%")
        .style('font-family', 'inter')
        .style('font-weight', '800')
        .text(["Knowledge Transfer"])
        .style('font-size', '18px')














      // WOMEN'S INFO
      const womenInfoGroup = chartElGroup
        .append("g")
        .attr("id", "womenInfo")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      womenInfoGroup
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "womanInfo")
        .attr("id", (d) => d.id)
        .attr("opacity", 0.8)
        .attr("transform", function (d) {
          const defunctionYear = +d["YEAR_D"] || 2021;
          const angleToRotate =
            ((x(d.id) + x.bandwidth() / 2) * 180) / Math.PI - 90;
          return `rotate(${angleToRotate})`;
        })
        .attr("text-anchor", function (d) {
          return (x(d.id) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
            ? "end"
            : "start";
        })
        .each(function (d) {
          const el = d3.select(this);

          // NAMES (anchors to wikipedia links)
          el.append("text")
            .attr("data-id", (d) => d.id)
            .style('opacity', 1)

            .attr("x", function (d) {
              return (x(d.id) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) <
                Math.PI
                ? -y(2045)
                : y(2045)
            })
            .attr("y", 0)
            .text((d) => `${d.NAME} `)
            .style("font-size", "20px")
            .style('font-family', 'inter')
            .style('fill', (d) => d.COLOR || 'black')
            .style('opacity', 1)

            .style("dominant-baseline", "middle")
            // Rotation to improve readability
            .attr("transform", function (d) {
              return (x(d.id) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) <
                Math.PI
                ? "rotate(180)"
                : "rotate(0)";



            })
          el.append("text")
            .attr("data-id", (d) => d.id)
            .style('opacity', 1)

            .attr("x", function (d) {
              return (x(d.id) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) <
                Math.PI
                ? -y(2045)
                : y(2045)
            })
            .attr("y", 25)
            .text((d) => `${d.SURNAME}.`)
            .style("font-size", "20px")
            .style('font-family', 'inter')

            .style('fill', (d) => d.COLOR || 'black')
            .style('opacity', 1)

            .style("dominant-baseline", "middle")
            // Rotation to improve readability
            .attr("transform", function (d) {
              return (x(d.id) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) <
                Math.PI
                ? "rotate(180)"
                : "rotate(0)";
            })







          // LINES
          el.append("line")
            .attr("x1", 120)
            .attr("x2", y(myDomain[1]) + 100)
            .attr("y1", 0)
            .attr("y2", 0)
            .style("stroke", "black")
            .style("opacity", 0.7)
            .style("stroke-width", 0.15);

          // SELECTED WORK POINT
          el.append("circle")
            .attr("class", "selectedWorkPoint")
            .attr("cx", (d) => y(extractWorkYear(d)))
            .attr("cy", 0)
            .attr("r", 2.5)
            .style("fill", "black");
        })
        .style("pointer-events", "none");

      // LEGEND
      // Just on desktop
      if (width >= 340) {
        d3.select("#barsGroup path") // First path
          .clone()
          .attr("id", "legendBar")
          .attr("transform", "translate(10, 475)rotate(-5)");
        d3.select("#womenInfo g .selectedWorkPoint") // First group
          .clone()
          .attr("id", "legendInfo")
          .attr("transform", "translate(10, 445)");

        const legend = svg
          .append("g")
          .attr("id", "legend")
          // Apply same transform as chart
          .attr("transform", "translate(" + width / 2 + "," + height + ")");
        legend
          .append("line")
          .attr("x1", outerRadius - 107)
          .attr("x2", outerRadius - 107)
          .attr("y1", 133)
          .attr("y2", 153)
          .style("stroke", "black")
          .style("stroke-width", 0.5)
          .style("stroke-dasharray", 3);
        legend
          .append("line")
          .attr("x1", outerRadius - 29)
          .attr("x2", outerRadius - 29)
          .attr("y1", 100)
          .attr("y2", 130)
          .style("stroke", "black")
          .style("stroke-width", 0.5)
          .style("stroke-dasharray", 3);
        legend
          .append("text")
          .attr("x", outerRadius - 180)
          .attr("y", 155)
          .text(locale[languageSelector].legend.yearOfBirth)
          .style("font-size", "12px")
          .style('font-family', 'inter')
        legend
          .append("text")
          .attr("x", outerRadius + 20)
          .attr("y", 135)
          .text(locale[languageSelector].legend.name)
          .style("opacity", 0.5)
          .style('font-family', 'inter')
          .style("font-size", "16px");
        legend
          .append("text")
          .attr("x", outerRadius - 70)
          .attr("y", 75)
          .text(locale[languageSelector].legend.exampleWork.a)
          .style("font-size", "12px");
        legend
          .append("text")
          .attr("x", outerRadius - 70)
          .attr("y", 90)
          .text(locale[languageSelector].legend.exampleWork.b)
          .style('font-family', 'inter')
          .style("font-size", "12px");
      }
    }
  )
}








function _onMouseOver(d3, extractWorkNAME) {
  return (
    function onMouseOver(event, d, i) {
      const myImgProfile = d.imgProfile;
      const myId = d.id;
      //console.log(myImgProfile);

      d3.select('#barsGroup')
        .selectAll(`path:not(path[data-id=${myId}])`)
        .style('opacity', 0);

      d3.select('#barsGroup')
        .selectAll(`path[data-id=${myId}]`)
        .style('opacity', 0.6);



      d3.select('#womenInfo')
        .selectAll(`text[data-id=${myId}]`)
        .style('opacity', 0.6);

      d3.select('#womenInfo')
        .selectAll(`text:not(text[data-id=${myId}])`)
        .style('opacity', 0.2);

      // Update bckg img
      d3.select('#imgProfile')
        .style(
          'background-image',
          `url(/wheel/files/${myImgProfile})`
        )
        .select('p')
        .text(extractWorkNAME(d));

      d3.select(this).style('opacity', 1);
    }
  )
}


function _onMouseOut(d3) {
  return (
    function onMouseOut(event, d, i) {
      d3.select(this).style('opacity', 0.8);

      d3.select('#barsGroup')
        .selectAll('path')
        .style("opacity", 0);

      d3.select('#womenInfo')
        .selectAll(`text`)
        .style('opacity', d =>
          d.wikipedia != "" && d.wikipedia != "x" ? 0.7 : 0.3
        );

      d3.select('#imgProfile')
        .style('background-image', `none`)
        .select('p')
        .text('');
    }
  )
}

function _12(md) {
  return (
    md`---`
  )
}

function _13(md) {
  return (
    md`### Data exploration`
  )
}

function _search03(Search, architectsAndDesigners_Features) {
  return (
    Search(
      architectsAndDesigners_Features.map(d => d.properties),
      {
        placeholder: "Buscador designers_2Features"
      }
    )
  )
}

function _table03(Table, search03, html) {
  return (
    Table(search03, {
      //rows: 110,
      columns: [
        "NAME",
        "SURNAME",
        "COLOR",
        "YEAR_B",
        "YEAR_D",

        //"IMG_SRC_D",
        "WORKS_NA_2"
        //"WORK_PREC"
      ],
      format: {
        //culmen_length_mm: x => x.toFixed(1),
        //culmen_depth_mm: x => x.toFixed(1),
        //sex: x => x === "MALE" ? "M" : x === "FEMALE" ? "F" : ""
        NAME: x => html`${x}`,
        SURNAME: x => html`${x}`,
        COLOR: x => html`${x}`,
        IMG_SRC_D: x => html`${x}`,
        //IMAGE: x => html`${x}`,
        WORKS_NA_2: x => html`${x}`,
        //WORK_PREC: x => html`${x}`,
        WORKS_IMG1: x => html`${x}`
        //html`<span class="contratos-btn"></span><span class="contratos-label">${x}</span>`,
      }
    })
  )
}

function _16(md) {
  return (
    md`---`
  )
}



async function _18(html, FileAttachment) {
  return (
    html`
<figure style="display: width: 600px">
  ${await FileAttachment("Sketches_A.jpg").image()}
  <figcaption></figcaption>
</figure>
<figure style="display: inline-block; width: 315px">
  ${await FileAttachment("Sketches_B.jpg").image()}
  <figcaption></figcaption>
</figure>
<figure style="display: inline-block; width: 315px">
  ${await FileAttachment("Sketches_C.jpg").image()}
  <figcaption></figcaption>
</figure>
`
  )
}

function _19(md) {
  return (
    md`---`
  )
}

function _20(md) {
  return (
    md`### First approach: a simple timeline`
  )
}

function _chart(d3, height, width, margin, data, y, axisBottom, x, myDomain, colorMain, parseHtmlToText, extractWorkYear) {
  //const svg = d3.select(DOM.svg(width, height));
  const svg = d3
    .create('svg')
    .attr('height', height)
    .attr('width', width);

  const g = svg
    .append("g")
    .attr("transform", (d, i) => `translate(${margin.left} ${margin.top})`);

  const groups = g
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "civ");

  groups.attr("transform", (d, i) => `translate(0 ${y(i)})`);

  // Timeline axis - years
  svg
    .append("g")
    .attr(
      "transform",
      `translate(${margin.left} ${height - margin.bottom + 20})`
    )
    .call(axisBottom);

  groups.each(function (d) {
    const bandWidth = y.bandwidth();
    const el = d3.select(this);
    const bornYear = +d["YEAR_B"];
    const defunctionYear = +d["YEAR_D"] || 2021;

    el.append('line')
      .attr("x1", x(myDomain[0]))
      .attr("x2", x(myDomain[1]))
      .attr("y1", bandWidth * 0.5)
      .attr("y2", bandWidth * 0.5)
      .style("stroke", "grey")
      .style('stroke-width', 0.5)
      .style('stroke-dasharray', 3);

    el.append('rect')
      .attr("x", d => x(bornYear))
      .attr("height", bandWidth)
      .attr("width", d => x(defunctionYear) - x(bornYear))
      .attr('fill', colorMain);

    el.append("text")
      //.text(d => `${d.NAME} ${d.SURNAME}`)
      .text(d => `${parseHtmlToText(d.NAME)}`)
      .attr("x", d => x(bornYear) - 5)
      .attr("y", bandWidth / 2)
      .attr("fill", "black")
      .style("text-anchor", "end")
      .style("dominant-baseline", "middle")
      .style('font-family', 'inter')
      .style('font-size', '1.5rem');

    el.append('circle')
      .attr('cx', d => x(extractWorkYear(d)))
      .attr('cy', bandWidth / 2)
      .attr('r', 3)
      .style('fill', "black");
  });

  return svg.node();
}


function _22(md) {
  return (
    md`---`
  )
}

function _23(md) {
  return (
    md`### Final approach: going radial`
  )
}

function _24(md) {
  return (
    md`**New!** Time-lapse process captures 🙃`
  )
}



function _26(md) {
  return (
    md`---`
  )
}

function _27(md) {
  return (
    md`### Improvements`
  )
}

function _28(md) {
  return (
    md`

**Update** after the [contest resolution](https://observablehq.com/@observablehq/announcing-the-womens-history-month-dataviz-contest-winne) with some extra improvements :)
  - [x] Improve hover interaction: I have added auxiliar shapes that cover bigger areas for interactions, instead of using just the text names areas.
  - [x] Language ES/EN toggle: done, via radio btn.
  - [x] Search for each woman's wikipedia entry and implement the interactions on click with that info.
  - [x] Compile some visual info about the process: sketches, screenshots?
  - [x] Fix legend!!
  - [ ] Small walk around / autoplay?
  - [ ] Responsive?
---`
  )
}


function _json_architectsAndDesigners_URL() {
  return (
    "./files/stakeholdersData.json"
  )
}

async function _json_architectsAndDesigners(json_architectsAndDesigners_URL) {
  return (
    (await fetch(
      json_architectsAndDesigners_URL
    )).json()
  )
}

function _architectsAndDesigners_Features(json_architectsAndDesigners) {
  return (
    json_architectsAndDesigners.features
  )
}

function _wikipedia() {
  return (
    {
      en: {

        "woman-92": "x",
        "woman-93": "x",
        "woman-94": "https://en.wikipedia.org/wiki/Victoria_Angelova",
        "woman-95": "x",
        "woman-96": "https://en.wikipedia.org/wiki/Hanne_Kj%C3%A6rholm",
        "woman-97": "https://en.wikipedia.org/wiki/Francine_Houben",
        "woman-98": "x",
        "woman-99": "x"
      },
      es: {
        "woman-0": "https://es.wikipedia.org/wiki/Sonia_Delaunay",
        "woman-1": "https://es.wikipedia.org/wiki/Gunta_St%C3%B6lzl",
        "woman-2": "x",
        "woman-3": "https://es.wikipedia.org/wiki/Alma_Siedhoff-Buscher",
        "woman-4": "https://es.wikipedia.org/wiki/Marianne_Brandt",
        "woman-5": "x",
        "woman-6": "https://es.wikipedia.org/wiki/Margarete_Sch%C3%BCtte-Lihotzky",
        "woman-7": "https://es.wikipedia.org/wiki/Elisabeth_Whitworth_Scott",
        "woman-8": "https://es.wikipedia.org/wiki/Eileen_Gray",
        "woman-9": "x",
        "woman-10": "https://es.wikipedia.org/wiki/Aino_Aalto",
        "woman-11": "x",
        "woman-12": "https://es.wikipedia.org/wiki/Martta_Martikainen-Ypy%C3%A4",
        "woman-13": "https://es.wikipedia.org/wiki/Lilly_Reich",
        "woman-14": "x",
        "woman-15": "x",
        "woman-16": "x",
        "woman-17": "x",
        "woman-18": "https://es.wikipedia.org/wiki/Greta_Magnusson-Grossman",
        "woman-19": "https://es.wikipedia.org/wiki/Rita_Fern%C3%A1ndez_Queimadelos",
        "woman-20": "x",
        "woman-21": "https://es.wikipedia.org/wiki/Elsi_Naemi_Borg",
        "woman-22": "https://es.wikipedia.org/wiki/Anni_Albers",
        "woman-23": "https://es.wikipedia.org/wiki/Elena_Luzzatto",
        "woman-24": "https://es.wikipedia.org/wiki/Lux_Guyer",
        "woman-25": "x",
        "woman-26": "x",
        "woman-27": "x",
        "woman-28": "https://es.wikipedia.org/wiki/Franca_Helg",
        "woman-29": "https://es.wikipedia.org/wiki/Jane_Drew",
        "woman-30":
          "https://es.wikipedia.org/wiki/Tamara_Davydovna_Katsenelenbogen",
        "woman-31": "x",
        "woman-32": "https://es.wikipedia.org/wiki/Alison_y_Peter_Smithson",
        "woman-33": "https://es.wikipedia.org/wiki/Lina_Bo_Bardi",
        "woman-34": "x",
        "woman-35": "x",
        "woman-36": "x",
        "woman-37": "x",
        "woman-38": "x",
        "woman-39": "x",
        "woman-40": "x",
        "woman-41": "https://es.wikipedia.org/wiki/Cini_Boeri",
        "woman-42": "x",
        "woman-43": "x",
        "woman-44": "x",
        "woman-45": "https://es.wikipedia.org/wiki/Margaret_Kropholler-Staal",
        "woman-46":
          "https://es.wikipedia.org/wiki/Maria_Jos%C3%A9_Marques_da_Silva",
        "woman-47": "x",
        "woman-48": "x",
        "woman-49": "x",
        "woman-50": "https://es.wikipedia.org/wiki/Anna_Castelli_Ferrieri",
        "woman-51": "x",
        "woman-52": "https://es.wikipedia.org/wiki/Charlotte_Perriand",
        "woman-53": "x",
        "woman-54": "x",
        "woman-55": "x",
        "woman-56": "x",
        "woman-57": "x",
        "woman-58": "x",
        "woman-59": "https://es.wikipedia.org/wiki/Gae_Aulenti",
        "woman-60": "x",
        "woman-61": "https://es.wikipedia.org/wiki/Andr%C3%A9e_Putman",
        "woman-62": "x",
        "woman-63": "x",
        "woman-64": "https://es.wikipedia.org/wiki/Zaha_Hadid",
        "woman-65": "x",
        "woman-66": "x",
        "woman-67": "x",
        "woman-68": "x",
        "woman-69": "https://es.wikipedia.org/wiki/Amanda_Levete",
        "woman-70": "x",
        "woman-71": "x",
        "woman-72": "x",
        "woman-73": "x",
        "woman-74": "x",
        "woman-75": "https://es.wikipedia.org/wiki/Benedetta_Tagliabue",
        "woman-76": "https://es.wikipedia.org/wiki/Odile_Decq",
        "woman-77": "https://es.wikipedia.org/wiki/Patricia_Urquiola",
        "woman-78": "x",
        "woman-79": "x",
        "woman-80": "https://es.wikipedia.org/wiki/Blanca_Lle%C3%B3_Fern%C3%A1ndez",
        "woman-81": "https://es.wikipedia.org/wiki/Manuelle_Gautrand",
        "woman-82": "https://es.wikipedia.org/wiki/In%C3%AAs_Lobo",
        "woman-83": "https://es.wikipedia.org/wiki/Sheila_O%27Donnell",
        "woman-84": "https://es.wikipedia.org/wiki/Christine_Conix",
        "woman-85": "https://es.wikipedia.org/wiki/Eva_Ji%C5%99i%C4%8Dn%C3%A1",
        "woman-86": "x",
        "woman-87": "x",
        "woman-88": "x",
        "woman-89": "https://nl.wikipedia.org/wiki/Jeanne_Dekkers",
        "woman-90": "x",
        "woman-91": "https://es.wikipedia.org/wiki/Carme_Pin%C3%B3s",
        "woman-92": "x",
        "woman-93": "x",
        "woman-94": "x",
        "woman-95": "x",
        "woman-96": "x",
        "woman-97": "https://es.wikipedia.org/wiki/Francine_Houben",
        "woman-98": "x",
        "woman-99": "x"
      }
    }
  )
}


//Returning name
function _data(table03, parseHtmlToText, extractWorkYear, getImg, wikipedia, languageSelector) {
  return (
    table03
      .map((d, i) => {
        d.NAME = parseHtmlToText(d.NAME);
        d.SURNAME = parseHtmlToText(d.SURNAME);
        d.workPiece = extractWorkYear(d);
        d.id = `woman-${i}`;
        d.imgProfile = getImg(d.IMG_SRC_D);
        d.wikipedia = wikipedia[languageSelector][`woman-${i}`];
        return d;
      })
      //.sort((a, b) => d3.ascending(a.NAME, b.NAME)) // By name
      //.sort((a, b) => b.YEAR_B - a.YEAR_B) // By bird
      //.sort((a, b) => extractWorkYear(a) - extractWorkYear(b)) // By selected piece
      .sort((b, a) => extractWorkYear(a) - extractWorkYear(b))
  )
}

function _dataTable(Table, data) {
  return (
    Table(data, {
      columns: ["NAME", "SURNAME", "MARRIEDN", "workPiece", "id", "wikipedia"],
      sort: "workPiece"
    })
  )
}



function _extractWorkYear() {
  return (
    d => +d.WORKS_NA_2.split(',')[1]
  )
}

function _extractWorkNAME(parseHtmlToText) {
  return (
    d => parseHtmlToText(d.WORKS_NA_2)
  )
}

function _getImg() {
  return (
    function (string) {
      //console.log(string);
      const array = string.split('/');
      const imgName = array[array.length - 1].slice(0, -2);

      return imgName;
    }
  )
}

function _workYear(data) {
  return (
    data.map(d => +d.WORKS_NA_2.split(',')[1])
  )
}

function _parseHtmlToText() {
  return (
    d => d.replace(/(<([^>]+)>)/gi, "")
  )
}

function _42(md) {
  return (
    md`### Dimensions`
  )
}

function _margin() {
  return (
    { top: 160, right: 10, bottom: 50, left: 70 }
  )
}

function _height() {
  return (
    3000
  )
}

function _heightRadial() {
  return (
    1000
  )
}

function _myDomain() {
  return (
    [1850, 2021]
  )
}

function _47(md) {
  return (
    md`### B. Timeline Radials`
  )
}

function _xRadial(d3, data) {
  return (
    d3
      .scaleBand()
      .range([Math.PI / 2 + 0.04, Math.PI / 2 + 2 * Math.PI - 0.1])
      .align(0)
      .domain(data.map(d => d.id))
  )
}

function _innerRadius() {
  return (
    50
  )
}

function _outerRadius() {
  return (
    350
  )
}

function _yRadial(d3, innerRadius, outerRadius, myDomain) {
  return (
    d3
      .scaleLinear()
      .range([innerRadius, outerRadius])
      .domain(myDomain)
  )
}

function _52(md) {
  return (
    md`### A. Timeline chart`
  )
}

function _x(d3, myDomain, width, margin) {
  return (
    d3
      .scaleLinear()
      .domain(myDomain)
      .range([0, width - margin.left - margin.right])
  )
}

function _y(d3, data, height, margin) {
  return (
    d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([0, height - margin.bottom - margin.top])
      .padding(0.4)
  )
}



function _axisBottom(d3, x) {
  return (
    d3
      .axisBottom(x)
      .tickPadding(2)
      .tickFormat(d => d)
  )
}

function _56(md) {
  return (
    md`### Some styles `
  )
}

function _colorMain() {
  return (
    '#E16767'
  )
}

function _colorBckg() {
  return (
    "#ffffff"
  )
}

function _styles(html, colorBckg) {
  return (
    html`
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Baumans&display=swap" rel="stylesheet">

<style>
  svg {
    font-family: 'Baumans', sans-serif;
  }
  #radialChart {
    background-color: ${colorBckg};
  }
  #imgProfile {
    box-shadow: 0px 0px 27px 2px rgba(0,0,0,0.15) inset;
    -webkit-box-shadow: 0px 0px 27px 2px rgba(0,0,0,0.15) inset;
    -moz-box-shadow: 0px 0px 27px 2px rgba(0,0,0,0.15) inset;
  }

  #barsGroup path#legendBar{
    opacity: 1!important;
  }

  .workInfoExtra {
    position: relative;
    top: 150px;
    left: 70px;
    font-size: 10px;
    font-family: 'Baumans', sans-serif;
    //background: rgba(255,255,255,0.5);
    background: ${colorBckg};
    padding: 0 5px;
  }
</style>
`
  )
}

function _60(md) {
  return (
    md`### Language `
  )
}

function _locale() {
  return (
    {
      en: {
        title: {
          a: "",
          b: "",
          c: "",
          d: ""
        },
        centerText: {
          a: "Participating in the",
          b: "Building Lifecycle",
        },
        legend: {
          yearOfBirth: "",
          name: "",
          exampleWork: {
            a: "",
            b: ""
          }
        }
      },
      es: {
        title: {
          a: "Algunas de las",
          b: "MUJERES ARQUITECTAS & DISEÑADORAS",
          c: "de las que no escuché hablar",
          d: "en la universidad"
        },
        centerText: {
          a: "100 años",
          b: "100 MUJERES INSPIRADORAS",
          c: "solo en Europa"
        },
        legend: {
          yearOfBirth: "Año de nacimiento",
          name: "Nombre",
          exampleWork: {
            a: "Un ejemplo de su",
            b: "trabajo artístico"
          }
        }
      }
    }
  )
}

function _62(md) {
  return (
    md`### Appendix `
  )
}

function _d3(require) {
  return (
    require("d3@6")
  )
}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Sketches_A.jpg", { url: new URL("./files/e64377c72e5b5b40f032b76ffd189a02d819d8dcd8648213f79c2bd11baf9a85c7df845a06bce31ce9143ca355256eec49f9949cd7bbf738fcb9190e5805d45", import.meta.url), mimeType: "image/jpeg", toString }],
    ["Sketches_B.jpg", { url: new URL("./files/88bd555886b16a98a3888548582029ece06ad10522776030605650d63210674fcaf64798c414900e6b940e170bac8ae52b703bb0b8d846c3cb8d3893fc97a0b", import.meta.url), mimeType: "image/jpeg", toString }],
    ["Sketches_C.jpg", { url: new URL("./files/1050924727391680c443fc26f0fad3d8d7b159aa9991af4cc637ec9c845f26ee5da0f99f618fa67362c335e0629e60270f2b5b4988160b4923196717b5c3abb", import.meta.url), mimeType: "image/jpeg", toString }],
    ["WomenContestProcess01.gif", { url: new URL("./files/9faa5eee703011081935b88696a58809cfaf74216c493e9b436a5199e7f60428f159a0e2a510aa2a4fc3bec4038929e76fa7c555829e3cc4b67eeb6582ba0c73", import.meta.url), mimeType: "image/gif", toString }]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof languageSelector")).define("viewof languageSelector", ["Radio", "md"], _languageSelector);
  main.variable(observer("languageSelector")).define("languageSelector", ["Generators", "viewof languageSelector"], (G, _) => G.input(_));
  main.variable(observer()).define(["languageSelector", "md"], _3);
  main.variable(observer("chart2")).define("chart2", ["html", "styles", "drawRadialChart"], _chart2);


  // main.variable(observer("data1")).define("data1", _data1);
  main.variable(observer("drawRadialChart")).define("drawRadialChart", ["heightRadial", "xRadial", "yRadial", "d3", "width", "margin", "locale", "languageSelector", "colorMain", "data", "innerRadius", "outerRadius", "onMouseOver", "onMouseOut", "myDomain", "extractWorkYear"], _drawRadialChart);
  main.variable(observer("onMouseOver")).define("onMouseOver", ["d3", "extractWorkNAME"], _onMouseOver);

  main.variable(observer("onMouseOut")).define("onMouseOut", ["d3"], _onMouseOut);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer("viewof search03")).define("viewof search03", ["Search", "architectsAndDesigners_Features"], _search03);
  main.variable(observer("search03")).define("search03", ["Generators", "viewof search03"], (G, _) => G.input(_));
  main.variable(observer("viewof table03")).define("viewof table03", ["Table", "search03", "html"], _table03);
  main.variable(observer("table03")).define("table03", ["Generators", "viewof table03"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _16);

  main.variable(observer()).define(["html", "FileAttachment"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer("chart")).define("chart", ["d3", "height", "width", "margin", "data", "y", "axisBottom", "x", "myDomain", "colorMain", "parseHtmlToText", "extractWorkYear"], _chart);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);

  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer()).define(["md"], _28);

  main.variable(observer("json_architectsAndDesigners_URL")).define("json_architectsAndDesigners_URL", _json_architectsAndDesigners_URL);
  main.variable(observer("json_architectsAndDesigners")).define("json_architectsAndDesigners", ["json_architectsAndDesigners_URL"], _json_architectsAndDesigners);
  main.variable(observer("architectsAndDesigners_Features")).define("architectsAndDesigners_Features", ["json_architectsAndDesigners"], _architectsAndDesigners_Features);
  main.variable(observer("wikipedia")).define("wikipedia", _wikipedia);
  main.variable(observer("data")).define("data", ["table03", "parseHtmlToText", "extractWorkYear", "getImg", "wikipedia", "languageSelector"], _data);
  main.variable(observer("viewof dataTable")).define("viewof dataTable", ["Table", "data"], _dataTable);
  main.variable(observer("dataTable")).define("dataTable", ["Generators", "viewof dataTable"], (G, _) => G.input(_));
  // main.variable(observer()).define(["md"], _36);
  main.variable(observer("extractWorkYear")).define("extractWorkYear", _extractWorkYear);
  main.variable(observer("extractWorkNAME")).define("extractWorkNAME", ["parseHtmlToText"], _extractWorkNAME);
  main.variable(observer("getImg")).define("getImg", _getImg);
  main.variable(observer("workYear")).define("workYear", ["data"], _workYear);
  main.variable(observer("parseHtmlToText")).define("parseHtmlToText", _parseHtmlToText);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer("heightRadial")).define("heightRadial", _heightRadial);
  main.variable(observer("myDomain")).define("myDomain", _myDomain);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer("xRadial")).define("xRadial", ["d3", "data"], _xRadial);
  main.variable(observer("innerRadius")).define("innerRadius", _innerRadius);
  main.variable(observer("outerRadius")).define("outerRadius", _outerRadius);
  main.variable(observer("yRadial")).define("yRadial", ["d3", "innerRadius", "outerRadius", "myDomain"], _yRadial);
  main.variable(observer()).define(["md"], _52);
  main.variable(observer("x")).define("x", ["d3", "myDomain", "width", "margin"], _x);
  main.variable(observer("y")).define("y", ["d3", "data", "height", "margin"], _y);
  main.variable(observer("axisBottom")).define("axisBottom", ["d3", "x"], _axisBottom);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer("colorMain")).define("colorMain", _colorMain);
  main.variable(observer("colorBckg")).define("colorBckg", _colorBckg);
  main.variable(observer("styles")).define("styles", ["html", "colorBckg"], _styles);
  main.variable(observer()).define(["md"], _60);
  main.variable(observer("locale")).define("locale", _locale);
  main.variable(observer()).define(["md"], _62);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  const child1 = runtime.module(define1);
  main.import("Radio", child1);
  main.import("Toggle", child1);
  main.import("Checkbox", child1);
  main.import("Range", child1);
  main.import("Select", child1);
  main.import("Text", child1);
  main.import("Table", child1);
  main.import("Search", child1);
  return main;
}

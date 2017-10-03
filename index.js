/*Code taken from: https://bl.ocks.org/mbostock/3883245*/

/*Variables declared for svg, to be able to call upon it and to set width/height*/

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*Variable parseTime is created to make it easier to tell d3 how to interpret the dates*/

var parseTime = d3.timeParse("%Y%m%d");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temp); });

/*CSV file is loaded in*/

d3.csv("index.csv", function(d) {
  d.date = parseTime(d.date); /*The earlier created parseTime is now used to tell d3 how the dates are formatted*/
  d.temp = +d.temp;
  return d;
}, function(error, data) {
  if (error) throw error; /*An error is thrown if there if no data can be found from the CSV*/

/*The domains for the x and y axis are set by checking the extent (length) of the array 'data'*/

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.temp; }));

/*The x axis is put at the bottom of the svg*/

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();

/*The y axis is put on the left of the svg. Text is added to give the axis a title.*/

  g.append("g")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "white")
      .attr("dx", 80)
      .attr("dy", "2em")
      .attr("text-anchor", "end")
      .text("Temperature C°");

/*Ultimately, the line is drawn and its properties are set.*/

  g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 2)
      .attr("d", line);
});

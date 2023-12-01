import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Chart = ({ data }) => {
  const svgRef = useRef();

  // Define width and height outside the useEffect hook
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = 400 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, d => new Date(d.time)))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, d => d.low), d3.max(data, d => d.high)])
      .range([height, 0]);

    const line = d3
      .line()
      .x(d => xScale(new Date(d.time)))
      .y(d => yScale(d.high));

    svg.selectAll('*').remove(); // Clear previous content

    // Draw the high line
    svg
      .append('path')
      .data([data])
      .attr('class', 'line high')
      .attr('d', line);

    // Draw the low line
    line.y(d => yScale(d.low));
    svg
      .append('path')
      .data([data])
      .attr('class', 'line low')
      .attr('d', line);

    // Add x-axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append('g').call(d3.axisLeft(yScale));
  }, [data, width, height]); // Add width and height to the dependencies array

  return (
    <svg width={width} height={height} ref={svgRef}>
      <g transform={`translate(${margin.left}, ${margin.top})`} />
    </svg>
  );
};

export default Chart;

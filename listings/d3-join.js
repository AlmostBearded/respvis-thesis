function renderCircles(container, positions) {
  container.selectAll('circle').data(positions).join(
  	(enter) => enter.append('circle')
      .attr('r', '50')
      .attr('fill', 'lightgray')
      .attr('stroke', 'darkgray')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y),
    (update) => update
      .attr('cx', d => d.x)
      .attr('cy', d => d.y),
    (exit) => exit.remove()
  );
}
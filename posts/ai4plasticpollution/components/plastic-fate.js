import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLegend,
  VictoryArea,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

class PlasticFate extends React.PureComponent {
  render() {
    
    const discardedData = this.props.data.filter(d => d.Entity === 'Discarded');
    const incineratedData = this.props.data.filter(d => d.Entity === 'Incinerated');
    const recycledData = this.props.data.filter(d => d.Entity === 'Recycled');
    const discardedColor = '#fb4e44';
    const incineratedColor = '#5b1cbc';
    const recycledColor = '#0f795c';
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `${datum.Fate}% in ${datum.Year}`
            }
            labelComponent={
                <VictoryTooltip />
            }
            voronoiDimension="x"
          />
        }
      >
        <VictoryLegend x={250} y={40}
            title="Plastic's Fate"
            centerTitle
            orientation="vertical"
            style={{title: {fontWeight: 600}}}
            data={[
                {name: "Discarded", symbol: {fill: discardedColor}},
                {name: "Incinerated", symbol: {fill: incineratedColor}},
                {name: "Recycled", symbol: {fill: recycledColor}}
            ]}
        />
        <VictoryAxis style={{ grid: { stroke: "none" } }} />
        <VictoryAxis
          dependentAxis
          style={{ grid: { stroke: "none" } }}
          tickFormat={(x) => `${x}%`}
        />
        <VictoryArea
          data={discardedData}
          x="Year"
          y="Fate"
          style={{
            data: { fill: discardedColor },
            labels: {fill: discardedColor}
          }}
        />
        <VictoryArea
          data={incineratedData}
          x="Year"
          y="Fate"
          style={{
            data: { fill: incineratedColor },
            labels: {fill: incineratedColor}
          }}
        />
        <VictoryArea
          data={recycledData}
          x="Year"
          y="Fate"
          style={{
            data: { fill: recycledColor },
            labels: {fill: recycledColor}
          }}
        />
      </VictoryChart>
    );
  }
}

export default PlasticFate;

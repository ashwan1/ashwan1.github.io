import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLegend,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

class PlasticInOcean extends React.PureComponent {
  render() {
    
    const macroPlasticData = this.props.data.filter(d => d.Entity === 'Macroplastic');
    const microPlasticData = this.props.data.filter(d => d.Entity === 'Microplastic');
    const macroColor = 'red';
    const microColor = 'blueviolet';
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `${datum.EmissionMT / 1000000} million tonnes\nin ${datum.Year}`
            }
            labelComponent={
                <VictoryTooltip />
            }
            voronoiDimension="x"
          />
        }
      >
        <VictoryLegend x={60} y={50}
            title="Plastic type"
            centerTitle
            orientation="vertical"
            style={{title: {fontWeight: 600}}}
            data={[
                {name: "MacroPlastic (>0.5cm)", symbol: {fill: macroColor}},
                {name: "MicroPlastic (<0.5cm)", symbol: {fill: microColor}}
            ]}
        />
        <VictoryAxis style={{ grid: { stroke: "none" } }} />
        <VictoryAxis
          dependentAxis
          style={{ grid: { stroke: "none" } }}
          tickFormat={(x) => `${x / 1000000}M`}
        />
        <VictoryLine
          data={macroPlasticData}
          x="Year"
          y="EmissionMT"
          style={{
            data: { stroke: macroColor },
            labels: {fill: macroColor}
          }}
          
        />
        <VictoryLine
          data={microPlasticData}
          x="Year"
          y="EmissionMT"
          style={{
            data: { stroke: microColor },
            labels: {fill: microColor}
          }}
        />
      </VictoryChart>
    );
  }
}

export default PlasticInOcean;

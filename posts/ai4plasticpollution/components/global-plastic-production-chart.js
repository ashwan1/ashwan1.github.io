import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
} from "victory";

class GlobalPlasticProductionChart extends React.PureComponent {
  render() {
    return (
      <VictoryChart theme={VictoryTheme.material} animate={{duration: 1000}}
        containerComponent={<VictoryVoronoiContainer
          labels={( {datum} ) => `${datum.Production / 1000000} million tonnes\nin ${datum.Year}`}/>}>
        <VictoryAxis style={{ grid: { stroke: "none" } }} />
        <VictoryAxis
          dependentAxis
          style={{ grid: { stroke: "none" } }}
          tickFormat={(x) => `${x / 1000000}M`}
        />
        <VictoryLine
          data={this.props.data}
          x="Year"
          y="Production"
          style={{
            data: { stroke: "red" },
          }}
        />
      </VictoryChart>
    );
  }
}

export default GlobalPlasticProductionChart;

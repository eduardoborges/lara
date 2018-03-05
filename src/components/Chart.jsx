import React, { Component } from 'react'
import { ResizableBox } from 'react-resizable'
import _ from 'underscore'

//
import { Chart, Axis, Series, Tooltip, Line } from 'react-charts'

class Story extends Component {
  constructor() {
    super()
    this.state = {
      data: makeData()
    }
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              data: makeData()
            })}
        >
          Randomize Data
        </button>

        <br />
        <br />

        {_.range(1).map((d, i) =>
          <ResizableBox key={i} width="auto" height={300}>
            <Chart data={data}>
              <Axis primary type="time" position="bottom" />
              <Axis type="linear" position="left" />
              <Series type={Line} showPoints={true} />
              <Tooltip />
            </Chart>
          </ResizableBox>
        )}

        <br />
        <br />
      </div>
    )
  }
}

export default () => <Story />

function makeData() {
  return _.map(_.range(Math.max(Math.round(Math.random() * 4), 1)), d =>
    makeSeries()
  )
}

function makeSeries() {
  const startDate = new Date()
  // const length = Math.round(Math.random() * 30)
  const length = 30
  const max = 100
  // const max = Math.random() > 0.5 ? 100000 : 10
  // const multiplier = 10
  // const multiplier = Math.round((Math.random() * 10) + Math.round(Math.random() * 50))
  return _.map(_.range(length), d => ({
    // x: d * multiplier,
    x: new Date().setDate(startDate.getDay() + 1 * d),
    y: Math.round(Math.random() * max + Math.round(Math.random() * 50)),
    r: Math.round(Math.random() * 5)
  }))
}
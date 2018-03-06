import React, { Component } from 'react'
import { ResizableBox } from 'react-resizable'
import { makeData, makeSeries } from "../services/_utils";
import _ from 'underscore'

//
import { Chart, Axis, Series, Tooltip, Line, Bar, Pie} from 'react-charts'

class LineChart extends Component {
  constructor() {
    super()
    this.state = {
      data: makeData()
    }
  }

  componentDidMount(){
    console.log('update time', this.props.updateTime);
    setInterval( ()=>{
      this.setState({ data: makeData()  })
    }, this.props.updateTime * 1000 )
  }

  
  render() {
    const { data } = this.state
    return (  
        <div className="card">
            <div className="card-header">
                <div className="card-header-title">{this.props.nome}</div>
            </div>
            <div className="card-content">
                <button onClick={() => this.setState({ data: makeData() })} >
                  Simular dados randomicos (teste)
                </button>

                <br />

                {_.range(1).map((d, i) =>
                <ResizableBox key={i} width="auto" height={300}>
                    <Chart data={data}>
                        <Axis primary type="time" position="bottom" />
                        <Axis type="linear" position="left" />
                        <Series type={Bar} showPoints={true} />
                        <Tooltip />
                    </Chart>
                </ResizableBox>
                )}

                <br />
            </div>  
            <footer className="card-footer">
                <button className=" button is-light is-fullwidth" value={this.props.id} onClick={this.props.handleRemoveDashboardItem}>Excluir</button>
            </footer>
        </div>

    )
  }
}

export default LineChart;
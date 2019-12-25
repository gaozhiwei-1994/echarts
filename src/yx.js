import React from 'react';
import echarts from './lib/echarts';
import ResizeDetector from 'react-resize-detector';
import { Table } from 'antd';
import yx from './static/yx.png';

import './yx.css';

class Yx extends React.PureComponent {

  constructor(props) {
  super(props);

  this.topChartRef = React.createRef();
  this.bottomChartRef = React.createRef();
  this.onResize = this.onResize.bind(this);
}

componentDidMount () {
  this.topChart = echarts.init(this.topChartRef.current);
  this.bottomChart = echarts.init(this.bottomChartRef.current);
  this.topConfig();
  this.bottomConfig();
}

componentDidUpdate() {
  this.topConfig();
  this.bottomConfig();
}

onResize = (a: number, b: number) => {
  this.topChart.resize();
  this.bottomChart.resize();
}

topConfig = () => {
  const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
  const days = ['5#机组', '4#机组', '4#机组', '2#机组', '1#机组'];

  const data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0]];

  const option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

days.forEach((day, idx) => {
    option.title.push({
        textBaseline: 'middle',
        textStyle: {
          fontSize: 10
        },
        top: (idx + 0.5) * 100 / 7 + 12 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 50,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 7 + 15) + '%',
        height: (100 / 7 - 10) + '%',
        axisLabel: {
            interval: 2
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function (dataItem) {
            return dataItem[1] * 2;
        }
    });
})

data.forEach((dataItem) => {
  option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
})

this.topChart.setOption(option);
}

bottomConfig = () => {
  const option = {
    xAxis: {
        type: 'category',
        data: ['1#机组', '2#机组', '3#机组', '4#机组', '5#机组'],
    },
    yAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        top: (100 / 7 + 15) + '%',
        height: (100 / 7 - 10) + '%',
        // splitNumber: 30,
        maxInterval: 500,
        minInterval: 30,
    },
    series: [{
        data: [50, 200, 150, 80, 70],
        type: 'bar'
    }]
};
this.bottomChart.setOption(option);
}

  render () {
    const data = [
  {
    key: '1',
    name: '1#机组',
    signNum: 0,
    abnormalNum: 0,
    faultNum: 0,
    status: 1,
  },
  {
    key: '2',
    name: '2#机组',
    signNum: 0,
    abnormalNum: 0,
    faultNum: 0,
    status: 1,
  },
  {
    key: '3',
    name: '3#机组',
    signNum: 0,
    abnormalNum: 0,
    faultNum: 0,
    status: 1,
  },
  {
    key: '4',
    name: '4#机组',
    signNum: 0,
    abnormalNum: 0,
    faultNum: 0,
    status: 1,
  },
];

const columns = [
  {
   title: '设备名称',
   width: 400,
   // align: 'center' as  'center',
   dataIndex: 'name',
   key: 'name',
   show: 'hide'
  },
  {
   title: '征兆',
   width: 100,
   align: 'center',
   dataIndex: 'signNum',
   key: 'signNum',
  },
  {
   title: '异常',
   width: 100,
   align: 'center',
   dataIndex: 'abnormalNum',
   key: 'abnormalNum',
  },
  {
   title: '故障',
   width: 100,
   align: 'center',
   dataIndex: 'faultNum',
   key: 'faultNum',
  },
  {
   title: '状态',
   width: 200,
   // align: 'center' as  'center',
   dataIndex: 'status',
   key: 'status',
   render: (status) => {
     let color = '';
     let display = '';
     switch (status) {
      case 1:
          color = 'rgba(126,211,33,1)';
          display='正常';
           break;
      case 2:
          color = 'rgba(255,152,0,1)';
          display='监视运行';
           break;
      case 3:
          color = 'rgba(255,73,73,1)';
          display='故障';
           break;
      case 0:
          color = 'rgba(192,204,218,1)';
          display='未诊断';
           break;
      default:
          color = '';
          display='';
    }
    const style = {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: '5px',
      background: color,
    }
     return (
       <div>
         <div style={style} />
         <span>{display}</span>
       </div>
     )
   }
  }
];
    return (
        <div className="yx-wrapper">
          <div className="top">
            <div className="left">
              <img src={yx} style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="right">
              <div className="r-top">
                <div style={{ height: '100%' }} className="top-echarts" ref={this.topChartRef} />
                <ResizeDetector handleWidth handleHeight skipOnMount onResize={this.onResize} />
              </div>
              <div className="r-bottom">
              <div style={{ height: '100%' }} className="bottom-echarts" ref={this.bottomChartRef} />
              <ResizeDetector handleWidth handleHeight skipOnMount onResize={this.onResize} />
              </div>
            </div>
          </div>
          <div className="bottom" style={{ overflowY: 'scroll' }}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              showHeader={false}
              size="middle"
            />
          </div>
        </div>
    );
  }
}

export default Yx;

import * as echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/chart/lines';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/radar';

import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/radar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/markLine';

import 'echarts/extension/bmap/bmap'
import 'echarts-leaflet';

import defaultTheme from './defaultTheme.json';

const theme = defaultTheme;

export {
  theme,
};

echarts.registerTheme(theme);

export default echarts;

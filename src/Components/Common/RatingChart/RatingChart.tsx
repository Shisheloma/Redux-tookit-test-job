import { FC, memo, useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { productType } from '../../../store/products/products.slice';

type chartProps = {
    data: productType[];
    filter: string;
};

const RatingChart: FC<chartProps> = ({ filter, data}) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const categories = data.map(product => product.title);
    const rating = data.map(product => product.rating);
    const capitilizedFilter = filter[0].toUpperCase() + filter.slice(1);

    const options: Highcharts.Options = { 
        title: {
            text: `${capitilizedFilter} rating`
        },
        xAxis: {
            categories,
            crosshair: true
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Rating'
            }
        },
        series: [
            {
                name: capitilizedFilter,
                type: 'column',
                data: [...rating]
            }
        ]
    };
 
    return ( 
        <div>
            <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    ref={chartComponentRef}/>
        </div>
    )
}

export default memo(RatingChart)
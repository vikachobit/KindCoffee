import React from 'react';
import './details.css';
import 'react-router';
import CreateReport from "../create report/create report";
import Calendar from "../calendar/calendar";
import {addDays} from "date-fns";
import {fetchProductDetails} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class Details extends React.Component {


    constructor(props) {
        super(props);

        /*this.state = {
            details: [],
            product: [],
            search: '',
            value: [],
            maxItems: [],
            minItems: [],
            avgItems: [],
            filteredItems: [],
            switchIndex: -1,
            direction: {
                name: '', max: '', min: '', avg: ''
            },
            dateRangePicker: {

                startDate: new Date(),
                endDate: addDays(new Date(), 31),


            }
        };
        this.storeProduct = this.storeProduct.bind(this);
        this.getDataRange = this.getDataRange.bind(this, 'dateRangePicker');
        this.filterByDate = this.filterByDate.bind(this);*/

    }

    getDataRange = (which, payload) => {
/*
        this.setState({
                [which]: {
                    ...this.state[which],
                    ...payload,
                },
            }
        );*/
    };
    filterByDate(details){
/*
        let filteredWeeks = details.map((elem)=>{

            return elem.pricingDataByWeek.filter((item) =>{

                return (new Date(item.week) < this.state.dateRangePicker.endDate)
                &&(new Date(item.week) > this.state.dateRangePicker.startDate)})

         });

        console.log(filteredWeeks);
      this.setState({details: filteredWeeks})*/
    }
    storeProduct(data) {
      /*  console.log(data);
        let details = data.data;
        let product = data.product;


        let value = details.map((el) => {
            let allPrices = el.pricingDataByWeek.map(elem => elem.price);
           // console.log(allPrices);
            return {
                id: el.banner.id,
                name: el.banner.name,
                max: Math.max(...allPrices).toFixed(2),
                min: Math.min(...allPrices).toFixed(2),
                avg: (allPrices.reduce((a, b) => parseFloat(a) + parseFloat(b)) / allPrices.length).toFixed(2)

            };

        });

        let maxItems = value.map(item => {
            return item.max
        });

        let minItems = value.map(item => {
            return item.min
        });

        let avgItems = value.map(item => {
            return item.avg
        });

        let avgItem = (avgItems.reduce((a, b) => parseFloat(a) + parseFloat(b)) / avgItems.length).toFixed(2);

        const filteredItems = this.filterSearch(this.state.search, value);

        this.setState({
            value: value,
            maxItems: maxItems,
            minItems: minItems,
            avgItem: avgItem,
            product: product,
            filteredItems: filteredItems,
            details: details,
        })*/
    }
    getData() {
      /*  const id = this.props.match.url;
        fetch(`http://159.89.106.160/products${id}`)
            .then(response => response.json())
            .then(this.storeProduct);*/

    }

    componentDidMount() {
      /*  this.getData();*/
    }
    componentWillMount() {
        const id = this.props.match.url;
        this.props.fetchProductDetails(id);
    }


    updateSearch(event) {
/*        let direction = {
            name: '', max: '', min: '', avg: ''
        };
        let search = event.target.value.substr(0, 20);
        const filteredItems = this.filterSearch(search, this.state.value);
        this.setState({
            filteredItems: filteredItems,
            search: search,
            direction: direction,});*/
    }


    filterSearch = (search, value) => {
        let filteredItems = value.filter((item) => {
            return (item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                || (item.max.toString().indexOf(search) !== -1)
                || (item.min.toString().indexOf(search) !== -1)
                || (item.avg.toString().indexOf(search) !== -1);
        });

        return filteredItems;
    };
    arrowUp = ' ⏶';
    arrowDown = ' ⏷';
    sortColumn = (n) => {
    /*    let rows = this.state.filteredItems.slice();

        let direction = {
            name: '', max: '', min: '', avg: ''
        };
        if (this.state.switchIndex !== n) {
            switch (n) {
                case ('name'): {
                    rows.sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    });
                    direction.name = this.arrowUp;
                    break;
                }
                case ('max'): {
                    rows.sort((a, b) => {
                        return a.max.localeCompare(b.max);
                    });
                    direction.max = this.arrowUp;
                    break;
                }
                case ('avg'): {
                    rows.sort((a, b) => {
                        return a.avg.localeCompare(b.avg);
                    });
                    direction.avg = this.arrowUp;
                    break;
                }
                case ('min'): {
                    rows.sort((a, b) => {
                        return a.min.localeCompare(b.min);
                    });
                    direction.min = this.arrowUp;
                    break;
                }
                default: break;
            }
            this.setState({
                direction: direction,
                switchIndex: n,
                filteredItems: rows
            })
        } else {
            switch (n) {
                case ('name'): {
                    rows.sort((b, a) => {
                        return a.name.localeCompare(b.name);
                    });
                    direction.name = this.arrowDown;
                    break;
                }
                case ('max'): {
                    rows.sort((b, a) => {
                        return a.max.localeCompare(b.max);
                    });
                    direction.max = this.arrowDown;
                    break;
                }
                case ('avg'): {
                    rows.sort((b, a) => {
                        return a.avg.localeCompare(b.avg);
                    });
                    direction.avg = this.arrowDown;
                    break;
                }
                case ('min'): {
                    rows.sort((b, a) => {
                        return a.min.localeCompare(b.min);
                    });
                    direction.min = this.arrowDown;
                    break;
                }
                default: break;
            }
            this.setState({
                direction: direction,
                switchIndex: -1,
                filteredItems: rows
            })
        }*/
    };


    render() {
       let direction = this.props.direction;


      // console.log(this.state.dateRangePicker);
        return (
            <div>
                <h1 className='head'>{this.props.product ? this.props.product.name: null}</h1>

                <table className='general'>
                    <colgroup>
                        <col span="1" className="col"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Max Price</th>
                        <th>Average Price</th>
                        <th>Min Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.selected ? this.props.selected.product.name: ''}</td>
                    {/*    <td>{`$${Math.max(...this.state.maxItems).toFixed(2)}`}</td>
                        <td>{`$${this.state.avgItem}`}</td>
                        <td>{`$${Math.min(...this.state.minItems).toFixed(2)}`}</td>*/}
                    </tr>
                    </tbody>
                </table>

                <table className='options'>
                    <colgroup>
                        <col span="1" className="col"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>
                            {/*<input
                                type='text'
                                placeholder="Search.."
                                value={this.state.search}
                                onChange={this.updateSearch.bind(this)}/>*/}
                        </th>
                        <th>
                           <Calendar
                               calendarRange = {this.getDataRange}
                               onChange={this.filterByDate}
                           />
                        </th>
                        <th>
                            {/*<CreateReport
                                product = {this.state.product}
                                filteredItems = {this.state.filteredItems}

                             />*/}
                        </th>
                    </tr>
                    </thead>
                </table >

                <table className='details'>
                    <colgroup>
                        <col span="1" className="col"/>
                    </colgroup>
                    <thead className='sorting'>
                    <tr>
                        <th onClick={this.sortColumn.bind(this, 'name')}>
                            {`Name${direction.name}`}
                        </th>
                        <th onClick={this.sortColumn.bind(this, 'max')}>
                            {`Max Price${direction.max}`}
                        </th>
                        <th onClick={this.sortColumn.bind(this, 'avg')}>
                            {`Average Price${direction.avg}`}
                        </th>
                        <th onClick={this.sortColumn.bind(this, 'min')}>
                            {`Min Price${direction.min}`}
                        </th>
                    </tr>
                    </thead>
                    <tbody>{
                        this.props.filteredItems ? (
                            this.props.filteredItems.map((el) => {

                                return (
                                    <tr key={el.id}>
                                        <td>{el.name}</td>
                                        <td>{`$${el.max}`}</td>
                                        <td>{`$${el.avg}`}</td>
                                        <td>{`$${el.min}`}</td>
                                    </tr>
                                )
                            })) : null
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
return {
    filteredItems: state.products.filteredItems,
    product: state.products.selected,
    direction: state.products.direction
}
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProductDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
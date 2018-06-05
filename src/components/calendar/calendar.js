import React, { Component } from 'react';
import { DateRange } from 'react-date-range';
import { format, addDays } from 'date-fns';
import './calendar.css'

function formatDateDisplay(date, defaultText) {
    if (!date) return defaultText;
    return format(date, 'MM/DD/YYYY');
}
export default class Calendar extends Component {
    constructor() {
        super();

        this.state = {
            isHidden: true,

            dateRangePicker: {

                startDate: new Date(),
                endDate: addDays(new Date(), 38),


            }
        };

        this.toggleHidden = this.toggleHidden.bind(this);
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });

    }

    handleRangeChange(which, payload) {

        this.setState({
            [which]: {
                ...this.state[which],
                ...payload,
            },
        }
        );
        this.props.calendarRange(payload);
        // console.log(payload)
    }

    render() {
        let startDate = formatDateDisplay(this.state.dateRangePicker.startDate);
        let endDate = formatDateDisplay(this.state.dateRangePicker.endDate);

        return (
            <div>

                <button className='calendarButton'
                        onClick={this.toggleHidden}
                >
                      {`${startDate} → ${endDate}`}
                </button>
                {
                    !this.state.isHidden && <div className='calendar'>
                        <DateRange
                            onChange={this.handleRangeChange.bind(this, 'dateRangePicker')}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            direction="horizontal"

                        />
                    </div>
                }
            </div>
        )
    }
}

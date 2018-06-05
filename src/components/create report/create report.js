import React from 'react';
import ReactModal from 'react-modal';
import './modal.css';

const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

ReactModal.setAppElement('#root');
export default class CreateReport extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.postData = this.postData.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000000';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    postData() {
        let data = this.props.filteredItems.map(el => {
            return {
                max: `$${el.max}`,
                min: `$${el.min}`,
                name: el.name
            }
        });
        fetch('http://159.89.106.160/products/sendemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                to: 'vika.chobit23@gmail.com',
                dates: '26/02/2018 - 29/04/2018',
                data: data,
                product: this.props.product.name
            })
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <button className='calendarButton' onClick={this.openModal}>Create Report</button>
                <ReactModal
                    overlayClassName="Overlay"
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.product.name}</h2>
                    <form>

                    </form>
                    <button onClick={this.closeModal}>Cancel</button>
                    <button onClick={this.postData}>Sent</button>
                </ReactModal>
            </div>
        );
    }
}
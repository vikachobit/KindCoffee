import React from 'react';
import './home.css';
import americano from './elements/Americano_Header.png';
import cappuccino from './elements/cappuccino.png';
import espresso from './elements/espresso.png';
import flat_white from './elements/latte-glass-275ml.png';
import latte from './elements/latte-macchiato.png';
import long_white from './elements/zwilling-sorrento-double-wall-glassware-latte-glass-11-8oz-350-ml-2-pc-5.png';
import {NavLink} from 'react-router-dom';


export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: [],
            images: []
        };
        this.storeProducts = this.storeProducts.bind(this);
    }
    storeProducts(data) {
        // console.log(data);
        let products = data.data;
        this.setState({products});
    }

    getData() {

        fetch('http://159.89.106.160/products')
            .then(response => response.json())
            .then(this.storeProducts);
    }
    componentWillMount(){

    }
    componentDidMount(){
        let images = [
            {id: 1,image: <img src ={cappuccino} alt = 'coffee'/>},
            {id: 2,image: <img src ={americano} alt = 'coffee'/>},
            {id: 3,image: <img src ={espresso} alt = 'coffee'/>},
            {id: 4,image: <img src ={latte} alt = 'coffee'/>},
            {id: 5,image: <img src ={flat_white} alt = 'coffee'/>},
            {id: 6,image: <img src ={long_white} alt = 'coffee'/>}
        ];
        this.setState({images});
        this.getData()
    }

    findImage = (id)=> {
        let image;
        image = this.state.images.filter(image => image.id === id);

        return image[0].image;
    };
    render(){

        return(

            <div>
                <h1 className='header'>Home</h1>

                <div className= 'coffee'>
                    {
                        this.state.products.map((el, id) => {
                            return (
                                <div className='oval' key={el.id}>
                                    <NavLink to={`/${id + 1}`}>
                                        <div className='coffee-image'>
                                            {this.findImage(el.id)}
                                        </div>
                                        <div className='coffee-name'>

                                            {el.name}
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }

                </div>
            </div>




        )

    }

}
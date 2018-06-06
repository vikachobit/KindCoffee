import React from 'react';
import './home.css';
import americano from './elements/Americano_Header.png';
import cappuccino from './elements/cappuccino.png';
import espresso from './elements/espresso.png';
import flat_white from './elements/latte-glass-275ml.png';
import latte from './elements/latte-macchiato.png';
import long_white from './elements/zwilling-sorrento-double-wall-glassware-latte-glass-11-8oz-350-ml-2-pc-5.png';
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { fetchAllProducts } from "../../actions/index";

class Home extends React.Component{

    constructor(props){
        super(props);
     /*   this.state = {
            products: [],
            images: []
        };
        this.storeProducts = this.storeProducts.bind(this);*/
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
        this.props.fetchAllProducts();
        /* let images = [
             {id: 1,image: <img src ={cappuccino} alt = 'coffee'/>},
             {id: 2,image: <img src ={americano} alt = 'coffee'/>},
             {id: 3,image: <img src ={espresso} alt = 'coffee'/>},
             {id: 4,image: <img src ={latte} alt = 'coffee'/>},
             {id: 5,image: <img src ={flat_white} alt = 'coffee'/>},
             {id: 6,image: <img src ={long_white} alt = 'coffee'/>}
         ];
         this.setState({images});
         this.getData()*/
    }

    findImage = (id)=> {
        let images = [
            {id: 1,image: <img src ={cappuccino} alt = 'coffee'/>},
            {id: 2,image: <img src ={americano} alt = 'coffee'/>},
            {id: 3,image: <img src ={espresso} alt = 'coffee'/>},
            {id: 4,image: <img src ={latte} alt = 'coffee'/>},
            {id: 5,image: <img src ={flat_white} alt = 'coffee'/>},
            {id: 6,image: <img src ={long_white} alt = 'coffee'/>}
        ];
        let image;
        image = images.filter(image => image.id === id);

        return image[0].image;
    };
    render(){

        const { fetching, products } = this.props;
        return(
            <div>
                <h1 className='header'>Home</h1>

                <div className= 'coffee'>
                    {
                        products ? (
                           products.map((el, id) => {
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
                        ) : (
                            <div>Loading products</div>
                        )

                    }
                </div>
                <div> {fetching}</div>
            </div>

        )

    }

}

const mapStateToProps = state => {
    return {

            fetching: state.productsReducer.fetching,
        products: state.productsReducer.products,
        error: state.productsReducer.error
    }
};

/*const mapDispatchToProps = dispatch => {
    return {
        onRequestProducts: () => dispatch({ type: "PRODUCTS_API_CALL_REQUEST" })
    };
};*/
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
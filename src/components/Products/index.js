import React from 'react';
import Grid from '@material-ui/core/Grid';
import {products} from './ProductList';
import './Products.css';

const tabs = ["Furniture", "Accessories", "Decoration"]

const Products = () => {
    const [activeTab, setActiveTab] = React.useState("Furniture")

    return (
        <div className="products-container">

            <h2 className="text-center opacity-80">
                #most.popular
            </h2>

            <div className="products-tab">
                {tabs.map(tab => (
                    <p
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={activeTab === tab ? "tab-active" : null}
                    >
                        {tab}
                    </p>
                ))}
            </div>

            <Grid container spacing={5}>
                {
                    products
                    .filter(product => product.type === activeTab)
                    .map(product => (
                        <Grid key={product.name} item xs={6} sm={4} md={3}>
                            <div className="product-card">
                                <img src={product.image} alt={product.image} />
                                <p className="product-name">{product.name}</p>
                                <p className="opacity-80">{product.price}</p>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
            
        </div>
    );
};

export default Products;
import React from 'react';
import { Link } from 'react-router';

import products from '../../../Assets/products.js';

export default class OtherProducts extends React.Component {
	render() {
		const items = [];
		for (let i = 0; i < products.length; i++) {
			if (i != this.props.id) {
				items.push(
					<Link key={i} className='products__item' to={`/products/${products[i].url}`}>
						<img src={products[i].img} alt={products[i].name} />
						<span>{products[i].name}</span>
						<span>{products[i].price}</span>
					</Link>
				);
			}
		}
		return (
			<div className='other-products'>
				<div className='other-products__container'>
					<h1 className='other-products__header'>Other Products</h1>
					<div className='other-products__wrapper'>
						{items}
					</div>
				</div>
			</div>
		);
	}
}

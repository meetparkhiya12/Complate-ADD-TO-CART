import React, { useEffect, useState } from 'react'

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
import { addcart } from '../../Services/Action/action'
import { useNavigate } from 'react-router'
import { parsedata } from './product.js'
import '../Product/productData.css'



function Product() {
	const product = parsedata.products



	const dispatch = useDispatch()


	const handleproduct = (id, data) => {

		dispatch(addcart(id, data))

	}

	return (


		<Container>

			<div className='d-flex flex-wrap justify-content-evenly'>
				{
					product.map((data, index) => {
						return (
							<div className='col-3 my-3 mx-1'>
								<div className="card" style={{ height: "600px",width:"300px" }}>
									<img src={data.image} className="card-img-top" alt="..." style={{ width: "60%", height: "210px", margin: "0 auto" }} />
									<div className="card-body">
										<h5 className="card-title">
											{
												data.title
											}
										</h5>
										<p className="card-text">
											{
												data.description
											}
										</p>
										<h5>
											{
												data.category
											}
										</h5>

										<h4 className='text-success'>
											{
												data.price + "  " + "Rs"
											}
										</h4>
										<button className="btn btn-primary"  onClick={() => handleproduct(data.id, data, index)}>Add Cart</button>
									</div>
								</div>
							</div>

						)
					})
				}
			</div>

		</Container>

	)
}

export default Product;
import React, { useState, useSelector }  from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ProductDialog } from './ProductDialog';
// import { useState, useSelector } from 'react-redux'

export const Products = () => {
    const [show, setShow] = useState(false);
    // const user = useSelector(state => state.firebase_user)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
    <>
        <ProductDialog />
    </>
        
    )
}
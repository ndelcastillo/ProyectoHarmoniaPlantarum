import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';
import { createBuyOrder } from '../../services/firestore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './checkoutForm.css'
import FormInput from './FormInput';

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
    detail: "",
    zipcode: "",
    city: "",
    state: "",
  })

  const navigate = useNavigate()
  const context = useContext(CarritoContext);
  const { carrito, isInCarrito, addProduct, emptyCarrito, deleteProduct, getProductQty, getProductPrice } = context

  function handleCheckout(event) {
    event.preventDefault()
    const orderData = {
      date: new Date(),
      buyer: dataForm,
      items: carrito,
      total: getProductPrice()
    }
    createBuyOrder(orderData).then(orderid => {
      navigate(`/checkout/${orderid}`)
    })
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name
    let value = event.target.value
    const newDataForm = { ...dataForm }
    newDataForm[inputName] = value
    setDataForm(newDataForm)
  }

  return (
    <div className='mt-4 pt-4'>
      <div className='form-container flex items-center justify-left min-h-screen m-5 p-5'>
        <div className="px-12 py-12 text-left bg-white shadow-lg">
          <Form onSubmit={handleCheckout}>
            <Form.Label className='pb-3'>Datos de contacto</Form.Label>
            <div className='flex'>
              <div className=''>
                <FormInput name="name" inputChangeHandler={inputChangeHandler} >
                  Nombre
                </FormInput>
              </div>
              <div className='ms-3'>
                <FormInput name="surname" inputChangeHandler={inputChangeHandler} >
                  Apellido
                </FormInput>
              </div>
            </div>
            <FormInput name="phone" inputChangeHandler={inputChangeHandler} >
              Telefono
            </FormInput>
            <FormInput name="email" inputChangeHandler={inputChangeHandler} >
              Email
            </FormInput>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check className='mt-0 ms-1 formBasicCheckbox' type="checkbox" label="Recibir ofertas y novedades de Filotaxia por email" />
            </Form.Group>
            <Form.Label className='pt-3 pb-3'>Direccion de envio</Form.Label>
            <div className='flex'>
              <div className=''>
                <FormInput name="address" inputChangeHandler={inputChangeHandler} >
                  Direccion
                </FormInput>
              </div>
              <div className='ms-3'>
                <FormInput name="detail" inputChangeHandler={inputChangeHandler} >
                  Detalle
                </FormInput>
              </div>
            </div>
            <FormInput name="zipcode" inputChangeHandler={inputChangeHandler} >
              Codigo Postal
            </FormInput>
            <FormInput name="city" inputChangeHandler={inputChangeHandler} >
              City
            </FormInput>
            <FormInput name="state" inputChangeHandler={inputChangeHandler} >
              Provincia
            </FormInput>
            <div className='mt-5 text-right'>
              <Button onClick={handleCheckout} size="s" className='' variant="secondary">
                Finalizar Compra
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
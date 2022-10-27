import { Form, ButtonContainer } from "./style";
import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import FormGroup from "../FormGroup";
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from "../../utils/is-valid-email";
import useErrors from "../../hooks/use-erros";
import formatPhone from '../../utils/format-phone';

export default function ContactForm({ buttonLabel }){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [category,setCategory] = useState('');

    const { createError,removeError, getErrorMesssageByFieldName, errors } = useErrors();

    const isFormValid = ( name && errors.length === 0 );

    const handleName = event => {
        setName(event.target.value);
        if(!event.target.value){
            createError({field:'name',message:'Nome é obrigatório'});
        }else{
            removeError('name');
        }
    }

    const handleEmail = event => {
        setEmail(event.target.value);
        if(event.target.value && !isEmailValid(event.target.value)){
            createError({field:'email',message:'Email inválido'});
        }else{
            removeError('email');
        }
    }

    const handlePhone = event => {
        setPhone(formatPhone(event.target.value));
    }
    const handleCategory = event => setCategory(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();
    }


    return(
       <Form onSubmit={handleSubmit} noValidate>
         <FormGroup error={getErrorMesssageByFieldName('name')}>
            <Input error={getErrorMesssageByFieldName('name')} value={name} onChange={handleName} placeholder="Nome *"/>
         </FormGroup>
         <FormGroup  error={getErrorMesssageByFieldName('email')}>
            <Input type='email' value={email} onChange={handleEmail} error={getErrorMesssageByFieldName('email')} placeholder="E-mail"/>
         </FormGroup>
         <FormGroup>
            <Input maxLength={15} value={phone} onChange={handlePhone} placeholder="Telefone"/>
         </FormGroup>
         <FormGroup>
            <Select value={category} onChange={handleCategory}>
                <option>Categoria</option>
                <option>Instagram</option>
                <option>Whatsapp</option>
                <option>Discord</option>
            </Select>
         </FormGroup>
         <ButtonContainer>
            <Button disabled={!isFormValid} type="submit">{buttonLabel}</Button>
         </ButtonContainer>
       </Form>
    )
}

ContactForm.PropTypes = {
    buttonLabel: PropTypes.string.isRequired
}

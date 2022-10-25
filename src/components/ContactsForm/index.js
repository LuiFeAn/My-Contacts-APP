import { Form, ButtonContainer } from "./style";
import PropTypes from 'prop-types';
import FormGroup from "../FormGroup";
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }){
    return(
       <Form>

         <FormGroup>
            <Input placeholder="Nome"/>
         </FormGroup>
         <FormGroup>
            <Input placeholder="E-mail"/>
         </FormGroup>
         <FormGroup>
            <Input placeholder="Telefone"/>
         </FormGroup>
         <FormGroup>
            <Select>
                <option>Instagram</option>
                <option>Whatsapp</option>
            </Select>
         </FormGroup>
         <ButtonContainer>
            <Button type="submit">{buttonLabel}</Button>
         </ButtonContainer>
       </Form>
    )
}

ContactForm.prototype = {
    buttonLabel: PropTypes.string.isRequired
}
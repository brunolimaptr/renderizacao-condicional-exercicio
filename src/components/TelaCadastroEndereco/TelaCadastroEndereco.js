import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";


 export const TelaCadastroEndereço = (props) => {
   
  return (
    <FormContainer >
      <h1>Endereço</h1>
      <Form>
        <StyledLabel>Endereço:
          <Input />
        </StyledLabel>
        <StyledLabel>Numero da residência:
          <Input />
        </StyledLabel>
        <StyledLabel>Telefone:
          <Input />
        </StyledLabel>
        <StyledLabel>Complemento:
          <Input />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
        <RegisterButton onClick={() => props.mudarTela(2)} >Voltar</RegisterButton>
      </Form>
    </FormContainer>
  );
}
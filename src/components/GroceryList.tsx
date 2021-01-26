import styled from 'styled-components';

export default function GroceryList() {
  return (
    <GroceryListContainer>
      <Form>
        <Label htmlFor='grocery'>Add Grocery Item</Label>
        <Input autoFocus id='grocery' type='text' />
        <Button type='submit'>Add Item</Button>
      </Form>
    </GroceryListContainer>
  );
}

const GroceryListContainer = styled.div`
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 5rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 2rem;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: 1px solid white;
  color: #fff;
  font-size: 2rem;
  padding: 0.6rem;
  width: 30%;
  margin: auto;
  margin-top: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    color: #333;
    cursor: pointer;
  }
`;

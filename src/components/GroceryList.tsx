import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import GroceryItem from './GroceryItem';

export type TItem = {
  key: number;
  text: string;
};

export default function GroceryList() {
  const [items, setItems] = useState<TItem[]>([]);
  const [input, setInput] = useState('');

  function addItem(e: FormEvent) {
    e.preventDefault();
    const newItems = [...items, { key: Math.random(), text: input }];
    setItems(newItems);
    setInput('');
  }

  function removeItem(key: number) {
    const newItems = items.filter((item) => item.key !== key);
    setItems(newItems);
  }

  return (
    <GroceryListContainer>
      <Form onSubmit={addItem}>
        <Label htmlFor='grocery'>Add Grocery Item</Label>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          id='grocery'
          type='text'
        />
        <Button type='submit'>Add Item</Button>
      </Form>
      {items?.map((item) => (
        <GroceryItem removeItem={removeItem} key={item.key} item={item} />
      ))}
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
  margin-top: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    color: #333;
    cursor: pointer;
  }
`;

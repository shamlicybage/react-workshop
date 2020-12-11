import { render, screen } from '@testing-library/react';
// import App from './App';

import Avatar from './Avatar'
import {BrowserRouter} from 'react-router-dom'
import cards from '../../cards'

describe("Avatar Component",()=>{
    it("Should display All Avatar Components",()=>{
      render(
        <BrowserRouter>
          <Avatar image={cards.image} name={cards.name}/>
        </BrowserRouter>
      );
      
    })
  })
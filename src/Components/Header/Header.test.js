import { render, screen } from '@testing-library/react';
// import App from './App';
import Header from './Header'

import {BrowserRouter} from 'react-router-dom'


describe("Header Component",()=>{
    it("Should display All Header Components",()=>{
      render(
        <BrowserRouter>
          <Header isLoggedIn={true}/>
        </BrowserRouter>
      );
      expect(screen.getByText("BlogIt")).toBeInTheDocument();
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Login")).toBeInTheDocument();
      
      
    })
  })
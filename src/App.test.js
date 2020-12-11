import { render } from '@testing-library/react';

import App from './Components/App/App'


describe("card Component",()=>{
  it("Should display App Component",()=>{
    render(
     
       <App/>
      
    );
    
  })
})
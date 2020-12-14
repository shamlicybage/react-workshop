import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';

import Filters from './Filters'




describe("Filter Component",()=>{
    it("Should display All Filter Components",()=>{
      render(
      <Filters filters="text" onFilterChange={()=>{}}/>
        );
      
    })
    it('Should have default value all',()=>{
        render(<Filters filters="text" onFilterChange={()=>{}}/>);
        expect(screen.getByDisplayValue('All')).toBeInTheDocument();
    })

    it('Should change the type',()=>{
        render(<Filters filters="text" onFilterChange={()=>{}}/>);
        const dropdown = screen.getByTestId("filter-component")
        fireEvent.change(dropdown,{target:{value:'Image'}})
        expect(screen.getByDisplayValue('Image')).toBeInTheDocument();
        
    })
  })
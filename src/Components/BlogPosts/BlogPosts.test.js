import { render, screen } from '@testing-library/react';
// import App from './App';

import BlogPosts from './BlogPosts'
import {BrowserRouter,Route} from 'react-router-dom'
import Avatar from '../Avatar/Avatar'


const cards = 
  {
    id: 1,
    type: "image",
    content: "https://picsum.photos/id/237/200/300",
    user: {
      id: 1,
      name: "katarina toren",
      image: "https://randomuser.me/api/portraits/thumb/women/20.jpg"
    }
  }
const image=cards.user.image;
const name=cards.name;
describe("card Component",()=>{
    it("Should display BlogPost Components",()=>{
      render(
        <BrowserRouter>
        <Route>
          <BlogPosts blogs={cards} />
        
            </Route>
            </BrowserRouter>
       
      );
      
    })
  })
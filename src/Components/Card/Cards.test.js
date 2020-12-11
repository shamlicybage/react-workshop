import { render, screen } from '@testing-library/react';
// import App from './App';

import Card from './Card'
import {BrowserRouter} from 'react-router-dom'

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
    it("Should display All Card Components",()=>{
      render(
        <BrowserRouter>
          <Card data={cards} key={cards.id}>
            <Avatar  image={image} name={cards.user.name}/>
            </Card>
        </BrowserRouter>
      );
      
    })
  })
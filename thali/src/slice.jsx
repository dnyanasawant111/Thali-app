

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  
  thaliStore:[
    {

image:"https://1.bp.blogspot.com/-xgitg3WFQEY/YG7WWHJYtkI/AAAAAAAAohg/kKz0GGKjCyQCy6zxsySZmDYeIwlJhF0ngCLcBGAsYHQ/s0/chapati.jpg",

      name:"Chapati",
      price:"15",
      
    },

    {
      image:'https://img1.exportersindia.com/product_images/bc-full/dir_107/3187062/mango-pickles-1272212.jpg',
      name:"Piccle",
      price:"20"
    },
    {
      image:"https://tse2.mm.bing.net/th?id=OIP.MIDZxsevQssOQy3R5XNQaAHaFW&pid=Api&P=0",
      name:"curd",
      price:"40"
    },
    {
      image:"https://i1.wp.com/yourfoodfantasy.com/wp-content/uploads/2015/10/Rasgulla-Recipe-YourFoodFantasy.com_.jpg?fit=2201%2C1478&ssl=1",
      name:"Rasogulla",
      price:'90',
    },
    {
    image:"https://i1.wp.com/vegecravings.com/wp-content/uploads/2018/02/Dal-Fry-Recipe-Step-By-Step-Instructions.jpg?fit=1629%2C1683&ssl=1",
    name:"Dal",
      price:"160"
    },

    {
      image:"https://bing.com/th?id=OSK.6ef923eb7c70b925ed2e7161de03fcb8",
      name:"Panir-Butter-Masala",
      price:"230"
    },
  ],
  thali:[]
  
}

export const thaliApp =createSlice({
  name:"thali",
  initialState,
  reducers:{
    addThali:(state,action)=>{
      state.thali.push(action.payload);
    },
    
     RemoveElement: (state, action) => {
      state.thali.splice(action.payload, 1);
    },
    
  }
  
})


export const {addThali, RemoveElement} =thaliApp.actions

export default thaliApp.reducer
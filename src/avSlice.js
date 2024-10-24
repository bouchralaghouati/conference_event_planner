import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
      {
        img: "https://mediaserver.goepson.com/ImConvServlet/imconv/b405fdceb71bf171658c2461424c50f032f13ded/original?use=productpictures&hybrisId=B2C&assetDescr=Projectors-Hub_2col_LS12000_1140x450",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://img.creative.com/images/products/hero/creative-t15-wireless/hero-creative-t15-wireless.jpg?width=750",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://sterlingaudio.net/wp-content/uploads/2023/01/Sterling-P20-vocal-microphone-front-500x500-1.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://m.media-amazon.com/images/I/513aJsLpSiL.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://media.istockphoto.com/id/172323484/photo/blank-sign-on-blue.jpg?s=612x612&w=0&k=20&c=gMjuy_FgmWUM5lSIakmX35vuopaU9dJU-FByNbF4CfA=",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const setSelectedProduct = createAction("SET_SELECTED_PRODUCT");
export const setSelectedCategory = createAction("SET_SELECTED_CATEGORY");



export const getData = createAsyncThunk(
    'book/getBooks',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json();
            return data.products;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })

// Search By Price 

export const searchByCategory = createAsyncThunk("book/searchByPrice",async(cat,thunkAPI)=>{
    try{
        const response = await axios.get(`https://dummyjson.com/products/search?q=${cat}`);

            return response.data;    

    }catch (error) {
        return rejectWithValue(error.message);
    }
})

// Filter By Category
export const filterByCategory = createAsyncThunk(
    'book/getCat',
    async (cat, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`https://dummyjson.com/products/category/${cat}`)
            const data = await res.json();
            return data.products;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })




export const singleProducts = createAsyncThunk(
    'book/productInfo',
    async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
       try {
            const res = await fetch(`https://dummyjson.com/products/${item}`)
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })

    const cartState = {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        counter: 1,
      };
      const updateCartTotals = (state) => {
        const cartItems = state.addToCart.cartItems;
        state.addToCart.cartTotalQuantity = cartItems.length;
        state.addToCart.cartTotalAmount = cartItems.reduce((acc, item) => {
          return acc + item.price;
        }, 0) * state.addToCart.counter; // استخدام القيمة في الحساب
      };
const apiSlice = createSlice({
    name: 'book',
    initialState: { products: [], productsSearch :[] ,isLoading: false, error: null, productInfo: null, userPath: '', categoryFilter: null, addToCart:cartState },
    reducers: {
        // تحديث المسار
        setUserPath: (state, action) => {
          state.userPath = action.payload;
          // console.log(action)
        },
        setCatFilter: (state, action) => {
          state.isLoading = false;
          state.categoryFilter = action.payload;
        },
        addToCart: (state, action) => {
          const tempProduct = { ...action.payload, cartQuantity: 1 };
          const index = state.addToCart.cartItems.findIndex(
            (item) => item.id === tempProduct.id
          );
          if (index === -1) {
            state.addToCart.cartItems.push(tempProduct);
          } else {
            console.log("Item already added to cart");
          }
          updateCartTotals(state);
        },
      },
    
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null
        },
        [getData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload

        },
        [getData.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;


        },




        // Get Info of single products
        [singleProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.productInfo = action.payload;
            
        },
        [singleProducts.pending]: (state, action) => {
            state.isLoading = true;
            state.productInfo = action.payload;
        },
        [singleProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.productInfo = action.payload;
        },
       
        // Filter By Catigory 
        [filterByCategory.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categoryFilter = action.payload;
        },




        [searchByCategory.pending]:(state,action)=>{
            state.isLoading = true;

        },
        [searchByCategory.fulfilled]:(state,action)=>{
            state.isLoading = false;

        },
        [searchByCategory.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.productsSearch = action.payload;
        },
        [searchByCategory.rejected]:(state,action)=>{
            state.isLoading = false;
            state.productsSearch = [];
        },







    }
})





export const { setUserPath,setCatFilter,setProductInfo,addToCart } = apiSlice.actions;

export default apiSlice.reducer;

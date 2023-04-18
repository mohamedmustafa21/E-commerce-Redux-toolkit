import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const setSelectedProduct = createAction("SET_SELECTED_PRODUCT");
export const setSelectedCategory = createAction("SET_SELECTED_CATEGORY");



export const getData = createAsyncThunk(
    'book/getBooks',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json();
            return data?.products;
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
        cartItems: localStorage.getItem("CartItems")
        ? JSON.parse(localStorage.getItem("CartItems"))
        :[],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        counter: 1,
        message: '',
      };
      const favState = {
        cartItems: [],
        cartTotalQuantity: 0,
        counter: 1,
        message: '',
        status: null
      }
      
      const updateCartTotals = (state) => {
        const cartItems = state.buyCart.cartItems;
        state.buyCart.cartTotalQuantity = cartItems.length;
        state.buyCart.cartTotalAmount = cartItems.reduce((acc, item) => {
          return acc + item.price;
        }, 0) * state.buyCart.counter; // استخدام القيمة في الحساب
      };
const apiSlice = createSlice({
    name: 'book',
    initialState: { products: [], productsSearch :[] ,isLoading: false, error: null, productInfo: null, userPath: '', categoryFilter: null , buyCart:cartState ,favCart:favState,favMassege:favState.message},
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
            const index = state.buyCart.cartItems.findIndex(
              (item) => item.id === tempProduct.id
            );
            if (index === -1) {
              state.buyCart.cartItems.push(tempProduct);
              state.cartMassege = "Product has been successfully added to Your cart.";
                toast.success("تمت اضافه المنتج الي السلة ",{
                    position:"bottom-right",
                })
            } else {
              state.cartMassege = "Item has been Remove From Cart ";
              state.buyCart.cartItems.splice(tempProduct);
              toast.error("تم حذف المنتج من السلة",{
                position:"bottom-right",
            })
            }
            updateCartTotals(state);

            localStorage.setItem("CartItems",JSON.stringify(state.buyCart.cartItems))

          },
        //   removeFromCart:(state,action){
        //     const next
        //   }

          addToFav: (state, action) => {
            const tempProduct = { ...action.payload, cartQuantity: 1 };
            const index = state.favCart.cartItems.findIndex(
              (item) => item.id === tempProduct.id
            );
            if (index === -1) {
              state.favCart.cartItems.push(tempProduct);
              state.cartMassege = "Product has been successfully added to Your Favourite.";
              state.status = true;
              

            } else {
              state.favMassege = "Item has been remove From Cart";
              state.favCart.cartItems.splice(tempProduct);
              state.status = false;
              
            }
            // updateCartTotals(state);
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





export const { setUserPath,setCatFilter,setProductInfo,addToCart,addToFav,favCart,buyCart } = apiSlice.actions;

export default apiSlice.reducer;

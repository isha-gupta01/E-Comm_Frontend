import React, { useEffect } from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {useState} from "react"
import {fetchProductsByFilters} from "../redux/slices/productsSlice"

const Home = () => {
    const dispatch = useDispatch();
    const {products , loading,error} = useSelector((state)=> state.products);
    const [bestSellerProducts, setBestSellerProducts] = useState(null);
    useEffect(() => {
      //fetch products for a specific collection
      dispatch(
        fetchProductsByFilters({
            gender:"Women",
            category:"Bottom Wear",
            limit:8,
        })
      );
      //fetch best seller product
      const fetchBestSeller = async() =>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`);
            // setBestSellerProducts(response.data);
            const Data = response.data;
            console.log(Data._id);
            setBestSellerProducts(Data);
        } catch (error) {
            console.error(error);
        }
      };
      fetchBestSeller();
    }, [dispatch])
    
    return (
        <div >
            <Hero />
            <div className='md:mx-16'>
                <GenderCollectionSection />
                <NewArrivals />
                <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
                {bestSellerProducts ? (<ProductDetails productId={bestSellerProducts._id}/> ):(
                    <p className='text-center'>Loading best seller product...</p>
                )}
                

                <div className="container mx-auto">
                    <h2 className="text-3xl text-center font-bold mb-4">
                        Top Wears for Women
                    </h2>
                    <ProductGrid products={products} loading={loading} error={error}/>
                </div>
                <FeaturedCollection/>
                <FeaturesSection/>
            </div>
        </div>
    )
}

export default Home

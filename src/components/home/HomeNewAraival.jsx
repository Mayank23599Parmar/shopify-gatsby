import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function HomeNewAraival({homeNewAraivals}) {
   const {products}=homeNewAraivals;
  return (
    <div className="container pb-16">
    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{
     products.map((product,index)=>{
      const imageData=getImage(product.featuredImage?.gatsbyImageData)
        return   <div className="bg-white shadow rounded overflow-hidden group flex justify-between flex-col" key={index}>
        <div className="relative">
            <GatsbyImage image={imageData} alt="product 1" className="w-full"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link to={``}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
                <Link to={``}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist">
                    <i className="fa-solid fa-heart"></i>
                </Link>
            </div>
        </div>
        <div className="pt-4 pb-3 px-4">
            <Link to={``}>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{product.title}</h4>
            </Link>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
            </div>
            <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
            </div>
        </div>
        <Link to={``}
            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
            to cart</Link>
    </div>
    })
}
     
        
    </div>
</div>
  )
}

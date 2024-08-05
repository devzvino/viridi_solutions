import React from 'react'
import hero_bg from '../assets/viridi-home-landing.jpg'
import MainButton from '../components/MainButton'
import { FaArrowRightLong } from "react-icons/fa6";
import { productTypes } from '../utils/products';

const Home = () => {
    const [products, setProducts] = React.useState(productTypes)
    const [open, setOpen] = React.useState(false)
    const [selectedProduct, setSelectedProduct] = React.useState(null)
    return (
        <div>
            <div className='w-full contWide flex gap-y-10 flex-col md:max-2xl:justify-center justify-end pb-10 md:max-2xl:pb-0  h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${hero_bg})` }} >
                <div className='text-white md:max-2xl:w-[45%] flex flex-col gap-y-5'>
                    <h1 className='md:max-2xl:text-7xl text-5xl font-extrabold '>
                        Reduce your footprint and go green.
                    </h1>
                    <p className='text-white w-[90%]'>
                        We provide innovative and targeted solutions to ensure on-time delivery, quality results and cost-effective products. Our growth has been guided by a vision to build a green solutions company that blends with the top-notch chemical engineering and project management capabilities
                    </p>
                </div>
                <MainButton title="Get a quote" onClick={() => { }} mainColor={'bg-[#FFF]'} textColor={'text-[#348B06]'} icon={<FaArrowRightLong />} />
            </div>
            <div className='w-full contWide flex md:max-2xl:flex-row flex-col gap-10 py-20'>

                <div className='flex flex-col  gap-y-5 w-full'>
                    <h1 className=' font-regular uppercase text-xl text-gray-600'>Who we are</h1>
                    <h3 className='md:max-2xl:text-7xl text-5xl font-bold text-[#348B06]'>
                        Going green is at the heart of what we do.
                    </h3>
                </div>
                <div className=' flex flex-col gap-y-10 w-full'>
                    <p>
                        Viridi Solutions is a private limited company with its head office in Harare, Zimbabwe. The company was established in the year 2017. The company specializes in production of green innovative solutions in the energy sector. Research on various green innovative products began as back as 2011; quality, effectiveness and impact of products on offer were tested by different accredited institutions which include: the Standard Association of Zimbabwe (SAZ); the Government Analyst (Under Ministry of Health and Child Welfare) and Zimbabwe Electricity Transmission and Distribution Centre (ZETDC).
                    </p>
                    <MainButton title="Get a quote" onClick={() => { }} mainColor={'bg-[#348B06]'} textColor={'text-[#FFF]'} icon={<FaArrowRightLong />} />
                </div>
            </div>
            <div className='w-full flex gap-y-20 contWide bg-slate-100 py-20' >
                <div className='flex w-full flex-col gap-y-5 '>
                    <h1 className=' font-regular uppercase text-xl text-gray-600'>Our Products</h1>
                    {
                        productTypes.map((item) => (
                            <div

                                key={item.id}
                                className='flex flex-col gap-y-5 cursor-pointer '
                            >

                                <h3
                                    onMouseEnter={() => { setOpen(true); setSelectedProduct(item) }}
                                    onMouseLeave={() => { setOpen(false); setSelectedProduct(null) }}
                                    className='md:max-2xl:text-7xl text-4xl w-fit flex font-bold text-[#348B06]'>
                                    {item.name}
                                </h3>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full md:max-2xl:flex hidden '>
                    {
                        open ? (
                            <div className='w-full  bg-black/60  bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${selectedProduct.img})` }}>
                            </div>
                        ) :
                            (
                                <div className='w-full  bg-black/60  bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${productTypes[0].img})` }}>
                                </div>
                            )
                    }
                </div>
            </div>
        </div >
    )
}

export default Home
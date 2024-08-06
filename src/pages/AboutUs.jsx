import React from 'react'
import viridi_site from '../assets/viridi_site.webp'

const AboutUs = () => {
    return (
        <div className='w-full '>
            <div className='w-full py-20 contWide flex gap-20  '>
                <div className='w-full flex flex-col gap-y-5 h-full'>
                    <h1 className='text-5xl font-semibold text-[#348B06]'>
                        We are Viridi Solutions
                    </h1>
                    <p className='text-slate-500 leading-relaxed'>
                        Viridi Solutions is a private limited company with its head office in Harare, Zimbabwe. The
                        company was established in the year 2017. The company specializes in production of
                        green innovative solutions in the energy sector. Research on various green innovative
                        products began as back as 2011; quality, effectiveness and impact of products on offer
                        were tested by different accredited institutions which include: the Standard Association
                        of Zimbabwe (SAZ); the Government Analyst (Under Ministry of Health and Child
                        Welfare) and Zimbabwe Electricity Transmission and Distribution Centre (ZETDC).
                        <br />
                        <br />
                        The company is cognizant of the fact that success is the ability of a company to innovate
                        and develop quality products that stay ahead of market expectations. Current Products
                        on Offer are Vegetable based transformer oil (, unlike the fossil oil, has simpler carbon
                        chains that are simple to degrade in case of accidental spillages that pollute the
                        environment. The product is free of Polychlorinated biphenyls (PCBs) which are
                        carcinogenic (cancer causing) which is common with fossil oils.
                    </p>
                </div>
                <div className='w-full bg-cover bg-center h-[60vh] ' style={{ backgroundImage: `url(${viridi_site})` }}>

                </div>



            </div>
        </div>
    )
}

export default AboutUs
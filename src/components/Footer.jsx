import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import footerLogo from '../assets/Viridi_logo.svg'
import { footerMenu, main_website, socialLinks } from '../utils/weblinks';
import rilpix_logo from "../assets/rilpix_logo.svg";
const Footer = () => {
    return (
        <div className='footer w-full bg-[#151515] border-t-[1px] flex flex-col gap-y-10 border-slate-700 text-white contWide md:max-2xl:pt-20 py-10 pb-10'>
            <div className='flex md:max-2xl:flex-row flex-col gap-y-10 justify-between'>
                <div className='md:max-2xl:w-3/12 flex flex-col gap-y-5'>
                    <img
                        src={footerLogo}
                        alt='hackeye-logo-footer'
                        className='footerLogo'
                        width={150}
                        height={50}
                    />
                    <p className='text-sm text-white'>
                        Guided by a vision to build a green solutions company that blends with the top-notch chemical engineering and project management capabilities.
                    </p>
                    <div className='social-links flex gap-x-5'>
                        {
                            socialLinks.map((item) => (
                                <a key={item.id} href={item.link} className='text-xl hover:text-[#1376BA]'>
                                    {item.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className='flex md:max-2xl:flex-row flex-col gap-y-10 gap-x-10 md:max-2xl:w-3/7'>
                    <div className='flex flex-col gap-y-8'>
                        <h1 className='font-bold'>
                            Company
                        </h1>
                        <div className='flex flex-col font-light gap-y-2'>
                            {
                                main_website.slice(1, main_website.length).map((item) => (
                                    <a key={item.id} href={item.link} className='hover:underline'>
                                        {item.name}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-8'>
                        <h1 className='font-bold'>
                            Contact us
                        </h1>
                        <div className='flex flex-col  font-light gap-y-2'>
                            <div className='flex items-center gap-x-3'>
                                <FiMail />
                                <a href="mailto:info@hackeye.co.zw" className=''>info@viridisolutions.com</a>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <FiPhone />
                                <p className=''>+263 (713) 118 873</p>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <FiPhone />
                                <p className=''>+263 (771) 114 443</p>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <FiMapPin />
                                <p className='w-[50%]'>Eight2Five Innovation Hub, 4th Floor, 54 Jason Moyo Ave, Harare
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-10' />
            <div className='flex flex-col-reverse lg:max-2xl:flex-row gap-y-5 justify-between w-[100%]'>
                <div className='flex lg:max-2xl:flex-row flex-col gap-y-5 items-center'>
                    <p className='flex text-sm items-center gap-x-1 text-center font-light'>Copyright © {new Date().getFullYear()}. All Rights Reserved. Viridi Solutions.</p>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-sm'>
                            Designed by
                        </p>
                        <a href='https://rilpix.com' target='_blank' className='flex items-center'>
                            <img src={rilpix_logo} width={50} height={40} alt='rilpix logo' />
                        </a>
                    </div>
                </div>
                <div className='flex gap-x-5 lg:max-2xl:justify-end lg:max-2xl:flex-row flex-col items-center justify-center flex-1 lg:max-2xl:items-start'>
                    {
                        footerMenu.map((item) => (
                            <div key={item.id} className="cursor-pointer text-sm hover:text-slate-500">
                                <a className='hover:underline' href={item.path}>{item.name}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;

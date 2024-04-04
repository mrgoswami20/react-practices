import serviceImage from './assets/Service 24_7-pana 1.svg';
import logo from './assets/logo1.jpg'

function App() {
    return (
        <div className='h-screen absolute'>
            <nav className='flex bg-slate-100 h-14 min-w-full fixed justify-between shadow-md '>
                <span><img src={logo} alt="" className='h-14 p-1 md:pl-16 items-center'/></span>
                <ul className='flex pr-16 md:gap-8 items-center text-black'>
                    <li className='hover:font-semibold cursor-pointer'>Home</li>
                    <li className='hover:font-semibold cursor-pointer'>About</li>
                    <li className='hover:font-semibold cursor-pointer'>Contact</li>
                </ul>
            </nav>
            <h1 className=" font-extrabold text-5xl pb-3 pt-32 ml-2 md:pl-44 uppercase">Contact Us</h1>
            <p className=" text-gray-500 font-semibold text- ml-2 md:pl-44 md:mr-72">
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
                WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
                REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
                EMAIL, OR SOCIAL MEDIA.{" "}
            </p>
            <div className="md:flex ml-2 md:pl-44 md:gap-20 ">
                <div className='pt-10 max-w-[30rem] w-1/2 '>
                    <div className=' flex gap-2 pb-4'>
                        <button className=' bg-black text-white p-2 rounded-md w-1/2'>via support chat</button>
                        <button className=' bg-black text-white p-2 rounded-md w-1/2'>via call</button>
                    </div>
                        <button className=' bg-white text-black p-2 border-black border-2 border-solid rounded-md w-full'>via email form</button>
                    <div className='flex flex-col gap-3 pt-4 pb-4'>
                            <input type="text" placeholder='Name' className=' border-solid border-2 p-1 rounded-sm mx-3'/>
                            <input type="text" placeholder='Email' className=' border-solid border-2 p-1 rounded-sm mx-3' />
                            <input type="text" placeholder='Text' className=' border-solid border-2 p-1 rounded-sm mx-3' />
                            <div className='flex justify-end'>
                                <button className=' bg-black text-white w-1/2 p-2 mx-3 rounded-md'>Submit</button>
                            </div>
                    </div>                    
                            
                </div>
                <div className='w-1/2 relative'>
                    <img className=' absolute -top-10 h-[550px]' src={serviceImage}/>
                </div>
            </div>
        </div>
    );
}

export default App;

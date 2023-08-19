import Image from 'next/image'
import Pic from '../pics/profile.png'
export default function Blog() {
    return (
        <>
            <h1 className=" font-bold text-xl pl-40 pt-10 fontdash ">My Blogs</h1>
            <div className='flex justify-center items-center ' >
            <div className=' w-3/4'>
                <div className=' h-96 mt-10 border border-gray-300' >
                   <div className=' flex justify-between items-center' >
                     <div>
                        <Image className='ml-10 mt-10 rounded-full'
                            src={Pic}
                            width={80}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className=' mr-[530px] mt-10' >
                        <h1 className=' text-xl font-bold' >How to make a website Using NextJs</h1>
                        <p className=' text-gray-600 font-bold'>Syed Murtaza Ali - Developer</p>
                    </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
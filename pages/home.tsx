import Image from 'next/image';
const HomePage = () => {

    return (
        <div className="h-screen bg-center w-full flex m-5">
            <div className="flex grow flex-col mx-2 item-center justify-center">
                <span className='text-gray-800 text-7xl mt-2 mb-4 font-bold'>Sahat P. Lumban Batu</span>
                <span className='text-gray-800 text-4xl mt-2'>I m a Web Developer</span>
                <div className='block'>
                    <button className='bg-blue-600 p-3 text-white mt-4 '>Hire Me</button>
                </div>
            </div>
            <div className="flex grow">
                {/* <Image src="/picture.webp" alt="profile" width={300} height={200} /> */}
                <img src="/picture.webp" alt="picture" style={{ 'width': "500" }} />
            </div>
        </div>
    )
}

export default HomePage;
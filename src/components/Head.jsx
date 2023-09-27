import pjLogo from '../assets/pjlogo.svg'
import pj from '../assets/pj.png'
const Head = () => {
  return (
    <>


      <div className='fixed top-20 left-[-280px]'>
        <img src={pjLogo} className='w-[500px] h-[500px] opacity-5' />
      </div>
      <div className='fixed bottom-10 right-[-280px]'>
        <img src={pjLogo} className='w-[500px] h-[500px] opacity-5' />
      </div>
      <div className="max-w-[800px]  w-full h-auto sm:h-screen mx-auto text-left flex flex-col justify-center px-4">

        {/* Web */}
        <div className='hidden sm:flex'>
          <img src={pj} className='w-[300px] h-[300px]  ml-24' />
          <div className='relative font-freestyle font-semibold text-[180px]'>
            <span className='text-[#724526] absolute top-[-45px] tracking-wide'>aula</span>
            <span className='text-[#292929] absolute top-[130px] left-[100px]  text-[60px] tracking-wide font-normal opacity-40'>and</span>
            <span className='text-[#292929] absolute top-[100px] left-[-100px] tracking-wide'>ulbert</span>
          </div>
        </div>

        {/* mobile */}
        <div className='flex sm:hidden h-screen items-center px-6'>
          <img src={pj} className='h-[170px]' />
          <span className='relative font-freestyle font-semibold text-[100px]'>
            <span className='text-[#724526] absolute top-[-100px] tracking-wide'>aula</span>
            <span className='text-[#292929] absolute top-[-10px] left-[40px]  text-[45px] tracking-wide font-normal opacity-40'>and</span>
            <span className='text-[#292929] absolute top-[-15px] left-[-55px] tracking-wide'>ulbert</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Head
import pjLogo from '../../public/pjlogo.svg'
import pj from '../../public/pj.png'
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


        <div className='flex justify-center items-center'>
          <img src={pj} className='w-[300px] h-[300px] p-2' />
          <div className='font-freestyle font-semibold text-[180px]'>
            <h1 className=' text-[#724526] relative top-[120px] tracking-wide'>aula</h1>
            <h1 className=' text-[#292929] relative top-[25px] right-[-80px]  text-[60px] tracking-wide font-normal opacity-40'>and</h1>
            <h1 className=' text-[#292929] relative top-[-90px] right-28 tracking-wide'>ulbert</h1>
         
          </div>
        </div>

      </div>
    </>
  )
}

export default Head
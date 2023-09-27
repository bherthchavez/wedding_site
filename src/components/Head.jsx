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
      <div className="max-w-[800px] w-full h-auto sm:h-screen mx-auto text-left flex flex-col justify-center px-4">


        <div className='flex justify-center items-center'>
          <img src={pj} className='w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] p-2' />
          <h1 className='font-freestyle font-semibold text-[100px] sm:text-[180px]'>

            <span className='text-[#724526] relative top-[-60px] tracking-wide'>aula</span>
            <span className='text-[#292929] relative top-[-10px] right-[80px]  text-[60px] tracking-wide font-normal opacity-40'>and</span>
            <span className='text-[#292929] relative top-[100px] right-[350px] tracking-wide'>ulbert</span>
         
          </h1>
        </div>

      </div>
    </>
  )
}

export default Head
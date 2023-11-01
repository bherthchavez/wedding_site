
const Footer = () => {
  return (
    <div className='bg-custom3 bg-local  bg-center bg-cover text-[#f1f0e3]'>
      <div className={'p-4 text-xs lg:text-base flex justify-center'}>
          <a href='https://julbertpruel.netlify.app/' className=' '>
            ⓒ {new Date().getFullYear()} Julbert Pruel
          </a>
      </div>
    </div>
  )
}

export default Footer
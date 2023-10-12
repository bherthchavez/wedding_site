
const Footer = () => {
  return (
    <div className='bg-[#9f7648] text-[#f1f0e3] sm:pt-20'>
      <div className={'p-4 text-xs lg:text-base flex justify-center'}>
          <a href='https://julbertpruel.netlify.app/' className=' '>
            ⓒ {new Date().getFullYear()} Julbert Pruel
          </a>
      </div>
    </div>
  )
}

export default Footer
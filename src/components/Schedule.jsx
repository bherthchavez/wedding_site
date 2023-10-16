/* eslint-disable react/no-unescaped-entities */


function Schedule() {
  return (
    <section className="bg-[#f1f0e3] sm:py-10">
      <div className="container max-w-[1200px] px-4 pb-10 sm:pb-10 sm:py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            {/* <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400"> */}
            <div className='relative'>
              <div className='text-[#4e4e4e] font-freestyle  text-left text-[95px] leading-[63px] '>
              Iskedyul
              </div>
              <span className=' w-[200px] h-2 bg-[#eac9a5] block my-2'></span>
            </div>
            <span className="text-sm font-bold tracki uppercase dark:text-gray-400">December 3, 2023</span>
            {/* </div> */}
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 text-[#4e4e4e] pt-10 sm:pt-0">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-[#c7a277]">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#9f7648]">
                <h3 className="text-3xl font-semibold tracki text-[#9f7648]">Seremonya </h3>
                <time className="text-lg tracki uppercase text-gray-400">2:00 PM</time>
                <p className="mt-3 text-lg">Ang Seremonya ay magsisimula ng saktong alas-dos ng hapon, 
                kaya't inirerekomenda namin na dumating ng kaunting maaga at maglibot-libot muna bago umupo.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#9f7648]">
                <h3 className="text-3xl font-semibold tracki text-[#9f7648]">Pagtanggap / Salu-salo </h3>
                <time className="text-lg tracki uppercase text-gray-400">4:00 - 8:00 PM</time>
                <p className="mt-3 text-lg">Ipagdiwang natin ang aming kasal! 
                Oras na para magtipon-tipon tayo kasama ang ating mga kamangha-manghang bisita (kayo!). 
                May mga masasarap na pagkain, inumin, at magkakaroon ng patimpalak. Magbihis para sumayaw! Ang inyong kasuotan (at mga hakbang sa sayaw) 
                ay kukunan ng aming kamangha-manghang wedding photographer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;

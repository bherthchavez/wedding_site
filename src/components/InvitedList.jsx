import { useEffect, useState } from "react";
import useApi from "../hooks/useAPI";
import pg from '../assets/pj.png'
import firebase from "../firebase";


function InvitedList() {

  const [invited, setInvited] = useState([])
  const [addInv, setAddInv] = useState(false)
  const [editInv, setEditInv] = useState(false)
  const [pass, setPass] = useState(false)
  const [password, setPassword] = useState('')
  const [wrongPassword, setWrongPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  const [details, setDetails] = useState(
    {
      first_name: '',
      last_name: '',
      status: '',
      gender: '',
      remarks: ''
    }
  )

  const { getInvited } = useApi();


  useEffect(() => {
    const fetchInvited = async () => {
      try {
        const result = await getInvited()
        setInvited(result)

      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchInvited();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchTrigger])

 

  const saveInv = () => {
    if( details.first_name && details.last_name && details.status && details.gender ){

      firebase
        .firestore().collection('invited')
        .add(details)
        .then(() => {
          console.log('New Invited SAVED!')
          setRefetchTrigger(prev => !prev)
          cancelUpdateAdd()
        }).catch((error) => {
          console.log(error.message)
        });
    }
  }
  const updateInv = () => {
    if( details.first_name && details.last_name && details.status && details.gender ){

      firebase
        .firestore().collection('invited')
        .doc(details.id)
        .update(details)
        .then(() => {
          console.log('Invited updated!')
          setRefetchTrigger(prev => !prev)
          cancelUpdateAdd()
        }).catch((error) => {
          console.log(error.message)
        });
    }
  }

  const checkPass = ()=>{
    if(password.toLowerCase() === 'chochotaba'){
      setPass(prev => !prev)
      setPassword("")
      setWrongPassword("")
    }else{
      setWrongPassword("Wrong passcode!")
    }
    
    
  }

  const invEdit =(id)=>{
      

      const existing = invited.find(inv=> inv.id === id)
      if(existing){
        setDetails(existing)
        setEditInv(prev=> !prev)
        console.log(existing)
      }
  }

const cancelUpdateAdd = ()=>{
  setAddInv(false)
  setEditInv(false)
  setDetails({
    first_name: '',
    last_name: '',
    status: '',
    gender: '',
    remarks: ''
  })
}

const deleteInv =()=>{
  if (confirm(`Are You Sure You want to Delete! ${details.first_name} ${details.last_name}`)) {
    console.log("Deleted")
    firebase
        .firestore().collection('invited')
        .doc(details.id)
        .delete()
        .then(() => {
          console.log('Invited Deleted!')
          setRefetchTrigger(prev => !prev)
          cancelUpdateAdd()
        }).catch((error) => {
          console.log(error.message)
        });
    
  } else {
    console.log("Cancel")
  }
}

  return (
    <section name='Kulay' className="flex flex-col justify-between bg-custom2 bg-local bg-[#f1f0e3] h-screen bg-center bg-cover font-sans">

      <div className="container flex flex-col p-8 gap-3 sm:gap-5 mx-auto md:p-8 max-w-[1200px]">
        <div className='flex flex-col justify-center items-center'>
          <div className="flex flex-col justify-center items-center text-[#745129] mb-4 text-xs gap-1 italic">
            <a href='/' className="cursor-pointer">
              <img src={pg} alt='Logo' className='w-20' />
            </a>
            <span>Disyembre  3, 2023</span>
          </div>
        </div>
        {
          pass
            ?
            <>
              <div className='text-[#727171] flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10  text-center text-[20px] sm:text-[25px] leading-7 sm:leading-[43px] '>
                <div>Listahan ng Inbitado sa Kasal </div>
               {editInv
               ?
               <div className="flex justify-center items-center gap-3">
                  <button
                    onClick={cancelUpdateAdd}
                    className={!editInv ? `py-2 px-4 text-sm rounded-md  bg-[#db9b51] hover:bg-[#b97b33] text-white shadow-md` : `py-2 px-7 text-sm bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md`}>
                    Cancel
                  </button>

                  
                    <button
                      onClick={updateInv}
                      className="py-2 px-4 text-sm rounded-md  bg-blue-800 hover:bg-[#b97b33] text-white shadow-md">
                      Update
                    </button>
                    <button
                      onClick={deleteInv}
                      className="py-2 px-4 text-sm rounded-md  bg-red-700 hover:bg-[#b97b33] text-white shadow-md">
                      Delete
                    </button>
                  
                </div>
               :
                <div className="flex justify-center items-center gap-6">
                  <button
                    onClick={()=> setAddInv(prev=>!prev)}
                    className={!addInv ? `py-2 px-7 text-sm rounded-md  bg-[#db9b51] hover:bg-[#b97b33] text-white shadow-md` : `py-2 px-7 text-sm bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md`}>
                    {addInv ? 'Cancel' : 'Add'}
                  </button>

                  {addInv
                    &&
                    <button
                      onClick={saveInv}
                      className="py-2 px-7 text-sm rounded-md  bg-green-700 hover:bg-[#b97b33] text-white shadow-md">
                      Save
                    </button>
                  }
                </div>
               }

              </div>
              <div className="flex flex-col items-center justify-center gap-5">

                <div className="overflow-x-auto h-[330px] sm:h-96 w-[300px] sm:w-[500px] md:[700px] rounded-lg border border-gray-200 bg-white">
                  {addInv || editInv
                    ?
                    <div className="min-w-full p-5 sm:p-10 flex flex-col justify-center items-center gap-3">
                      <label
                        htmlFor="Pangalan"
                        className="relative block w-full overflow-hidden rounded-md border-2 border-gray-500 px-3 pt-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
                      >
                        <input
                          id="Pangalan"
                          name="Pangalan"
                          type="text"
                          placeholder="Pangalan "
                          required
                          className="peer uppercase tracking-widest h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          onChange={(e) => setDetails({ ...details, first_name: e.target.value.toLowerCase() })}
                          value={details.first_name}
                        />

                        <span
                          className="absolute tracking-widest start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                        >
                          Pangalan
                        </span>
                      </label>
                      <label
                        htmlFor="Apelyido"
                        className="relative block w-full overflow-hidden rounded-md border-2 border-gray-500 px-3 pt-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
                      >
                        <input
                          id="apelyido"
                          name="apelyido"
                          type="text"
                          placeholder="Apelyido "
                          required
                          className="peer uppercase tracking-widest h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          onChange={(e) => setDetails({ ...details, last_name: e.target.value.toLowerCase() })}
                          value={details.last_name}

                        />

                        <span
                          className="absolute tracking-widest start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                        >
                          Apelyido
                        </span>
                      </label>

                      <div className="w-full">
                        <select
                          name="Status"
                          id="Status"
                          className="mt-1.5 w-full uppercase tracking-widest  text-gray-700 sm:text-sm rounded-md border-2 border-gray-500 px-3 py-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
                          onChange={(e) => setDetails({ ...details, status: e.target.value.toLowerCase() })}
                          value={details.status}
                        >
                          <option value="">Status</option>
                          <option value="pending">Pending</option>
                          <option  value="attending" >Attending</option>
                          <option  value="not attending" >Not Attending</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <select
                          name="Gender"
                          id="Gender"
                          className="mt-1.5 w-full uppercase tracking-widest  text-gray-700 sm:text-sm rounded-md border-2 border-gray-500 px-3 py-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
                          onChange={(e) => setDetails({ ...details, gender: e.target.value.toLowerCase() })}
                          value={details.gender}
                        >
                          <option value="">Gender</option>
                          <option value="female" >Female</option>
                          <option value="male" >Male</option>
                        </select>
                      </div>

                      <label
                        htmlFor="Remarks"
                        className="relative block w-full overflow-hidden rounded-md border-2 border-gray-500 px-3 pt-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
                      >
                        <input
                          id="Remarks"
                          name="Remarks"
                          type="text"
                          placeholder="Remarks "
                          required
                          className="peer uppercase tracking-widest h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          onChange={(e) => setDetails({ ...details, remarks: e.target.value.toLowerCase() })}
                          value={details.remarks}
                        />

                        <span
                          className="absolute tracking-widest start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                        >
                          Remarks
                        </span>
                      </label>
                    </div>
                    :
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                      <thead className="text-left bg-[#bd874e] text-white">
                        <tr>
                          
                          <th className="whitespace-nowrap px-4 py-2 font-medium ">
                            Name
                          </th>
                          <th className="whitespace-nowrap px-4 py-2 font-medium ">
                            Status
                          </th>
                          <th className="whitespace-nowrap px-4 py-2 font-medium ">
                            Gender
                          </th>
                          <th className="whitespace-nowrap px-4 py-2 font-medium ">
                            Remarks
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200 text-gray-700">

                        {invited
                          ? invited.map(inv => (
                            <tr 
                             onClick={()=> invEdit(inv.id)}
                            className="hover:bg-[#ffe9d3] cursor-pointer" key={inv.id}>
                              {/* <td className="whitespace-nowrap px-2 py-2 font-medium capitalize">
                                <button
                                onClick={()=> invEdit(inv.id)}
                                 className="p-2 text-xs rounded bg-[#ffe4c7] text-gray-600">Edit</button>
                              </td> */}
                              <td className="whitespace-nowrap px-4 py-2 font-medium capitalize">
                                {inv.first_name}  {inv.last_name}
                              </td>
                              <td className={inv.status.toLowerCase() == 'attending' ? `whitespace-nowrap px-4 py-2 capitalize text-green-600 font-semibold` : inv.status.toLowerCase() == 'not attending' ? `whitespace-nowrap px-4 py-2 capitalize text-red-600 font-semibold` : `whitespace-nowrap px-4 py-2 capitalize text-orange-600 font-semibold`}>
                                {inv.status}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 capitalize">{inv.gender}</td>
                              <td className="whitespace-nowrap px-4 py-2 capitalize">{inv.remarks}</td>
                            </tr>
                          ))


                          :
                          <span>No Invited</span>
                        }


                      </tbody>
                    </table>
                 
                  }
                </div>




              </div>
            </>
            :
            <div className="flex flex-col w-64 sm:w-96 p-8 gap-3 sm:gap-5 mx-auto md:p-8 max-w-[1200px]">
              <label
                htmlFor="Password"
                className="relative block overflow-hidden rounded-md border-2 border-gray-500 px-3 pt-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
              >
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  placeholder="Password "
                  required
                  className="peer uppercase tracking-widest h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute tracking-widest start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  Password
                </span>
              </label>
              <h1 className="text-red-800 text-sm text-center">{wrongPassword}</h1>

              <button
                onClick={checkPass}
                className="py-2 px-7 text-sm rounded-md  bg-[#c77a21] hover:bg-[#b97b33] text-white shadow-md">
                Login
              </button>

            </div>
        }




      </div>


      <div className={'p-4 text-xs lg:text-base flex justify-center text-[#f1f0e3]'}>
        <a href='https://julbertpruel.netlify.app/' className=' '>
          ⓒ {new Date().getFullYear()} Julbert Pruel
        </a>
      </div>
    </section>
  )
}

export default InvitedList
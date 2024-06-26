import React, { useEffect, useState } from 'react'
import Image2 from '../../assets/contactus.jpg'
const Contact = () => {
  const [data, setData] = useState(false);
  const [contact, setContact] = useState({
    fname:"",
    lname:"",
    email:"",
    mob_num:"",
    message:""
  })
  
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },1000)
  },[])

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value

    setContact({
      ...contact,
      [name]: value
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:4004/api/form/contact`, {
        method: "POST",
        headers: {
          'Content-Type':"application/json",
        },
        body:JSON.stringify(contact),
      });
      
      if(response.ok){
        setContact({
          fname:"",
          lname:"",
          email:"",
          mob_num:"",
          message:""
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
 
     {
    data ? (
      <>
    
      <div data-aos="zoom-in" data-aos-duration="1000" className="max-w-screen-xl mt-6 px-8 font-philosopher grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg bg-gray-100">
        <div className="flex flex-col justify-between">
          <div>

            <h2 className="text-4xl lg:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500">
              Let us connect!
              <div class="w-24 h-1 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-500 mt-2 mb-8 "></div>


            </h2>
            <div className="p-6 pl-0">
              <img src={Image2} className="rounded-lg" alt='contactus'/>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="w-full max-w-lg md:py-24" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-2 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-blue-700 text-xl font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" autoComplete='off' value={contact.fname} onChange={handleInput} required placeholder="Jane" name='fname' />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-blue-700 text-xl font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='lname' type="text" autoComplete='off' value={contact.lname} onChange={handleInput} required placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-blue-700 text-xl font-bold mb-2" for="grid-email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" name='email' autoComplete='off' value={contact.email} onChange={handleInput} required placeholder="xyz@gmail.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-blue-700 text-xl font-bold mb-2" for="grid-number">
                Contact Number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="text" name='mob_num' autoComplete='off' value={contact.mob_num} onChange={handleInput} required placeholder="78xxx xxxxx" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-blue-700 text-xl font-bold mb-2" for="grid-textarea">
                Feeback
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" name="message" type="textarea" autoComplete='off' value={contact.message} onChange={handleInput} required placeholder="Your text here...." />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full flex justify-center">
                <button
                className="relative px-8 py-2 uppercase text-blue-200 hover:text-blue-700 font-semibold rounded-md bg-blue-500 isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

      </div>
      </>
      ):(
        <div className='flex flex-col items-center justify-center mt-[15%]'>
        <img src='../Eclipse-1s-200px.svg' alt='' width={"12%"}/>
    </div>
    )
   }
    </>
     


  )
}

export default Contact
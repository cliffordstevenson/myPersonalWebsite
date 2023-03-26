import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#1f1f1f]'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#99afe6]'>Contact</h1>
            <form action="https://getform.io/f/f910316b-5f9c-4e23-805f-3c2af52d2c00" method="POST" encType="multipart/form-data">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-[#b2b2b2]'>Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-[#616161] bg-[#1f1f1f]" type="text" name="name" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-[#b2b2b2]'>Phone</label>
                        <input className="border-2 rounded-lg p-3 flex  border-[#616161] bg-[#1f1f1f]" type="text" name="phone" />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#b2b2b2]'>Email</label>
                    <input className="border-2 rounded-lg p-3 flex  border-[#616161] bg-[#1f1f1f]" type="email" name="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#b2b2b2]'>Subject</label>
                    <input className="border-2 rounded-lg p-3 flex  border-[#616161] bg-[#1f1f1f]" type="text" name="subject" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#b2b2b2]'>Message</label>
                    <textarea className="border-2 rounded-lg p-3  border-[#616161] bg-[#1f1f1f]" rows="10" name="message" />
                </div>
                <button className='bg-[#122249] text-[#eeeeef] mt-4 w-full p-4 rounded-lg'>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact
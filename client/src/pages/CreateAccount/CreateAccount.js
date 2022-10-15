import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../components/InputField'
import Modal from '../../components/Modal'

function CreateAccount() {
  const [ showModal, setShowModal ] = useState(false)
  const [ checkboxChecked, setCheckboxChecked ] = useState(false)

  const formRef = useRef()

  return (
    <>
      <div className='flex flex-col space-y-4 w-full'>
        {/* header */}
        <h1 className='text-4xl mt-32'>Create Account</h1>
        {/* google sign in */}
        <button
          className="flex w-full justify-center rounded-md border border-lightGray bg-white p-1 text-black sm:p-2"
          onClick={() => {}}
        >
          <img
            src="https://freesvg.org/img/1534129544.png"
            className="mr-2 w-6 object-fill"
          />
          Register with Google
        </button>
        {/* or */}
        <p className='py-6 text-center'>Or</p>
        {/* form */}
        <form
          className='space-y-4'
          onSubmit={(e) => {
            e.preventDefault()
          }}
          ref={formRef}
        >
          <InputField
            label="Full Name"
            placeholder='Enter full name'
            name='fullname'
            type='text'
            required
          />
          <InputField
            label="Email Address"
            placeholder='Enter email address'
            name='email'
            type='email'
            required
          />
          <InputField
            label="Create Password"
            placeholder='Enter password'
            name='password'
            type='password'
            required
          />
          <InputField
            label="Confirm Password"
            placeholder='Re-enter password'
            name='cpassword'
            type='password'
            required
          />
          <div className='space-x-2'>
            <input
              type="checkbox"
              name="terms"
              checked={checkboxChecked}
              onChange={() => setCheckboxChecked(curr => !curr)}
              required
            />
            <label htmlFor="terms">I have read and accepted the <button type='button' className='text-secondary' onClick={() => setShowModal(true)}>Terms and Conditions</button></label>
          </div>
          <button className='bg-primary text-white p-2 w-full rounded-md' type="submit">Submit</button>
        </form>
      </div>
      {
        showModal ?
          <Modal isOpen={showModal}>
            <div className='flex flex-col space-y-4 max-h-[90vh] p-4 xl:p-8'>
              <h1 className='text-4xl text-center'>Terms and Conditions</h1>
              <p>Last Created: 16th October 2022</p>
              <div className='flex-grow overflow-y-auto'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure tempore quidem aperiam blanditiis et nemo, perferendis autem omnis ducimus, minus laborum facilis repudiandae architecto odit fuga distinctio voluptatum recusandae quaerat!</p>
                <p>Consectetur autem nemo vero maiores aspernatur labore. Dolorem inventore ex aliquid facere rem! Reprehenderit nostrum voluptate corrupti minima repellat, laborum laudantium, optio, iusto quas doloremque reiciendis dolores ipsa voluptatibus debitis.</p>
                <p>Quisquam, hic, laboriosam est ducimus laudantium beatae modi neque libero voluptates totam ipsa maiores excepturi deleniti sit dignissimos fugit repudiandae aperiam reiciendis quod nostrum iure sint? Nesciunt ut expedita natus.</p>
                <p>Nemo necessitatibus velit, unde esse fuga iste ea earum, explicabo adipisci numquam alias eius odit vitae fugit illo amet corrupti cum nesciunt! Voluptas architecto nulla praesentium aut corporis pariatur optio?</p>
                <p>Ex cupiditate magnam blanditiis harum dolor modi maxime distinctio eveniet quasi, et saepe vel provident. Libero numquam aspernatur animi minima provident sapiente nesciunt possimus rerum distinctio et expedita, dolores harum.</p>
                <p>Exercitationem illum sequi accusantium nihil, tempora nemo perferendis commodi voluptates qui, esse consectetur totam dolorem dolore cum quaerat non maxime consequatur delectus ea pariatur laborum minima! Quos est mollitia accusamus?</p>
                <p>Maxime ratione rerum fugit assumenda laudantium nisi iusto, at atque nobis cupiditate reiciendis, consectetur a ducimus nemo! Aut qui porro nam asperiores vel enim ea incidunt magnam! Earum, ab iusto.</p>
                <p>Nam ex, pariatur sapiente, quidem, eos suscipit blanditiis placeat iste sint excepturi quae rerum esse minima perspiciatis incidunt quaerat libero fuga dignissimos recusandae quos nulla. Aliquam magni quidem nemo! Saepe!</p>
                <p>Ipsum illum consequuntur natus tempore alias error consectetur inventore nulla rerum officiis ipsa rem, fuga sed quia vero, voluptates voluptatum libero, corporis beatae cum! Voluptates dolores possimus accusantium quo recusandae.</p>
                <p>Amet corporis labore aliquam quae tempore natus officia corrupti voluptas necessitatibus ad ab placeat dicta repellendus ea voluptate, provident aliquid! Facilis officiis qui commodi inventore ratione quo dolore error soluta?</p>
              </div>
              <div className='flex flex-row w-[75%] self-center justify-between space-x-16'>
                <button className='create-account-link' onClick={() => {
                  setCheckboxChecked(false)
                  setShowModal(false)
                }}>Decline</button>
                <button className='create-account-link inverted-colors' onClick={() => {
                  setCheckboxChecked(true)
                  setShowModal(false)
                }}>Accept</button>
              </div>
            </div>
          </Modal>
          :
          null
      }
    </>
  )
}

export default CreateAccount
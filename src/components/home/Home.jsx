import React from 'react';
import './home.scss'
import Form from './Form'
import SignUpForm from './SignUpForm'

export default function Home() {

  return (
    <main className='container-fluid col-12'>
      <div className="row col-10 m-auto p-5">
        <Form />
        <SignUpForm />
      </div>
    </main>
  )
}

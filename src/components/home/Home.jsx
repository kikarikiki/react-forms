import React from 'react';
import './home.scss'
import Form from './Form'
import SignUpForm from './SignUpForm'

export default function Home() {

  return (
    <main className='row p-5'>
      <Form />
      <SignUpForm />
    </main>
  )
}

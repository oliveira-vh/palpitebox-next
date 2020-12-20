import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto  text-center font-bold text-white'>
            Projeto desenvolvido por Victor de Oliveira / {' '}
            <a className='hover:underline' href='https://github.com/oliveira-vh' target="_blank">Github</a> / {' '}
            <a className='hover:underline' href='https://www.linkedin.com/in/oliveira-vh/' target="_blank">Linkedin</a>
            </div>
        </div>
    )
}

export default Footer

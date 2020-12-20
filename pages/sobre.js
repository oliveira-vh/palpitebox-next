import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Sobre = () => {
    return (
        <div className='text-center'>
            <PageTitle title='Sobre' />
            <h1>Sobre</h1>
            <div>
                <p>Página para mais informações</p>
            </div>
        </div>
    )
}

export default Sobre

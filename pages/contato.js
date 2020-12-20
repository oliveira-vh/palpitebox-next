import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Contato = () => {
    return (
        <div className='text-center'>
            <PageTitle title='Contato' />
            <h1>Contato</h1>
            <div>
                <p>Página para informações de contato</p>
            </div>
        </div>
    )
}

export default Contato;
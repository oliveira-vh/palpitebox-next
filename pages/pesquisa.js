import React from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
    const [form, setForm] = React.useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    });
    const notas = [0, 1, 2, 3, 4, 5]
    const [success, setSuccess] = React.useState(false);
    const [ retorno, setRetorno] = React.useState({})
    const save = async () => {
        try{
            const response =  await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        });
        const data = await response.json();
        setSuccess(true);
        setRetorno(data);
        } catch (err){
        }
    }
    const onChange = event => {
        const value = event.target.value;
        const key = event.target.name;
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className='text-center font-bold my-4 text-3xl'>Críticas e sugestões</h1>
            <p className='w-10/12 text-center mb-6 mx-2 text-lg text-gray-900 font-medium mx-auto'>O restaurante X sempre busca por atender melhor seus clientes.
Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            { !success && <div className='flex flex-col items-start mx-auto my-6 w-4/5 lg:w-4/12 lg:justify-start'>
            <label className='font-bold mt-6'>Nome:</label>
            <input type='text' className='px-4 py-4 block bg-blue-300 placeholder-gray-500 opacity-70 rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 focus:bg-blue-500 focus:placeholder-gray-700 lg:w-full required' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
            <label className='font-bold'>E-mail:</label>
            <input type='text' className='px-4 py-4 block bg-blue-300 placeholder-gray-500 opacity-70 rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 focus:bg-blue-500 focus:placeholder-gray-700 lg:w-full' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
            <label className='font-bold'>Whatsapp:</label>
            <input type='text' className='px-4 py-4 block bg-blue-300 placeholder-gray-500 opacity-70 rounded-md w-full my-2 focus:outline-none focus:shadow-lg focus:opacity-100 focus:bg-blue-500 focus:placeholder-gray-700 lg:w-full' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
            <label className='font-bold'>Nota:</label>
            <div className='flex justify-center mx-auto flex-wrap opacity-70'>
            {notas.map(nota => {
                return (
                <label className='flex flex-col w-1/6 px-6 py-4 text-gray-900 font-bold text-center mx-auto md:px-8'>
                    {nota}<br />
                    <input type='radio' name='Nota' value={nota} onChange={onChange} />
                </label>
                )
            })
            }
            </div>
            <button className='flex flex-row justify-center items-center bg-blue-500  text-center font-bold text-white outline-none tracking-wide uppercase  w-4/5 py-3 mt-8 mx-auto rounded-md mb-4 hover:bg-blue-600 hover:shadow-lg focus:outline-none lg:w-3/5' onClick={save}>Salvar</button>
            </div>}
            { success && <div className='w-full mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 md:w-11/12 sm:w-full lg:w-11/12 mx-auto'>Obrigado por contribuir com a sua sugestão ou crítica</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu cupom: <br />
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                    </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br />
                        <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
                    </div>
                }
        </div>}
        </div>
    )
}

export default Pesquisa
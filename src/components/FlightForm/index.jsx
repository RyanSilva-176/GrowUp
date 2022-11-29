import React from 'react';
import { useForm } from 'react-hook-form';

import "./style.css"

function FlightForm() {
    const { register , handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <section className="bg-image flight-form" id='flight-form'>
            <form className='row g-3 needs-validation' onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4">
                    <label htmlFor="trecho" className="form-label">Trecho</label>
                    <select name="trecho" id="trecho" className="form-select form-select-lg" required
                    {...register('trecho', {required: "Este campo é obrigatório!"})}>
                        <option value="1">Ida e volta</option>
                        <option value="2">Só ida ou volta</option>
                        <option value="3">Vários trechos</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="origem" className="form-label">Origem</label>
                    <input type="text" className="form-control form-control-lg" id="origem" placeholder='REC - Recife' required 
                    {...register("origem", {required: "Este campo é obrigatório!"})}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="destino" className="form-label">Destino</label>
                    <input type="text" className="form-control form-control-lg" id="destino" placeholder='GRU - Guarulhos' required 
                    {...register("destino", {required: "Este campo é obrigatório!"})}/>
                </div>

                <div className="col-md-4">
                    <label htmlFor="passageiros" className="form-label">Passageiros</label>
                    <select name="passageiros" id="passageiros" className="form-select form-select-lg" required
                    {...register('passageiros', {required: "Este campo é obrigatório!"})}>
                        <option value="1" defaultChecked>1 Adulto(s) +12 anos</option>
                        <option value="2">1 Criança(s) 0-12 anos</option>
                        <option value="3">1 Bebê(s) 0-23 meses</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="data_ida" className="form-label">Data da Viagem de Ida</label>
                    <input type="date" id='data_ida' className="form-control form-control-lg" required
                    {...register('data_ida', {required: "Este campo é obrigatório!"})}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="data_volta" className="form-label">Data da Viagem de Volta</label>
                    <input type="date" id='data_volta' className="form-control form-control-lg" required
                    {...register('data_volta', {required: "Este campo é obrigatório!"})}/>
                </div>

                <div className="col-md-12">
                    <button type="submit" className='btn btn-primary'>Procurar Voos</button>
                </div>
            </form>
        </section>
    );
}

export default FlightForm;
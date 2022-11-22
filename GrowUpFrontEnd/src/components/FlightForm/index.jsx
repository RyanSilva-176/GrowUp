import React from 'react';
import { useForm } from 'react-hook-form';

import "./style.css"

function FlightForm() {
    const { register , handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <section className="bg-image">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Row">
                    <div className="Col">
                        <label htmlFor="trecho">Trecho</label>
                        <select name="trecho" id="trecho" {...register('trecho', {required: "Este campo é obrigatório!"})}>
                            <option value="1">Ida e volta</option>
                            <option value="2">Só ida ou volta</option>
                            <option value="3">Vários trechos</option>
                        </select>
                        <p className="error">{errors.trecho?.message}</p>
                    </div>
                    <div className="Col">
                        <label htmlFor="origem">Origem</label>
                        <input type="text" placeholder='REC - Recife' id='origem'
                        {...register("origem", {required: "Este campo é obrigatório!"})}/>
                        <p className="error">{errors.origem?.message}</p>
                    </div>
                    <div className="Col">
                    <label htmlFor="destino">Destino</label>
                        <input type="text" placeholder='GRU - Guarulhos' id='destino'
                        {...register("destino", {required: "Este campo é obrigatório!"})}/>
                        <p className="error">{errors.destino?.message}</p>
                    </div>
                </div>
                <div className="Row">
                    <div className="Col">
                        <label htmlFor="passageiros">Passageiros</label>
                        <select name="passageiros" id="passageiros" {...register('passageiros', {required: "Este campo é obrigatório!"})}>
                            <option value="1" defaultChecked>1 Adulto(s) +12 anos</option>
                            <option value="2">1 Criança(s) 0-12 anos</option>
                            <option value="3">1 Bebê(s) 0-23 meses</option>
                        </select>
                        <p className="error">{errors.passageiros?.message}</p>
                    </div>
                    <div className="Col">
                        <label htmlFor="data_ida">Data da viagem de ida</label>
                        <input id="data_ida" type="date" {...register('data_ida', {required: "Este campo é obrigatório!"})}/>
                        <p className="error">{errors.data_ida?.message}</p>
                    </div>
                    <div className="Col">
                        <label htmlFor="data_volta">Data da viagem de volta</label>
                        <input id="data_volta" type="date" {...register('data_volta', {required: "Este campo é obrigatório!"})}/>
                        <p className="error">{errors.data_volta?.message}</p>
                    </div>
                </div>
                <div className="Row">
                    <input className='BtnPrimary' type="submit" id='buscar_voos' value='buscar_voos' />
                </div>
            </form>
        </section>
    );
}

export default FlightForm;
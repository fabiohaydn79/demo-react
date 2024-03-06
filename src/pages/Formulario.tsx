import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { z } from 'zod';
import { useGlobalContext } from "../store/store";
import { obterId, regexFone } from '../utils/helpers';

const formSchema = z.object({
  id: z.coerce.number(),
  nome: z.string().regex(/^[a-z A-Z]+$/, {message: 'Campo Nome deve conter apenas letras'}).min(3, 'O nome deve ter pelo menos 3 caracteres'),
  idade: z.string().regex(/^\d+$/, {message: 'Campo idade deve conter um numero entre 1-99'}).min(1, 'Insira no minimo 1 ano').max(2, 'Insira no máximo até 99 anos'),
  telefone: z.string(),
  email: z.string().email('Insira um email válido')
});

type FormSchema = z.infer<typeof formSchema>

const Formulario: React.FC = () => {
  const [ mensagem, setMensagem ] = useState('');
  const { state, dispatch } = useGlobalContext();
  
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
  const foneValue = watch("telefone")

  useEffect(() => {
    if(foneValue){
      setValue("telefone", regexFone(foneValue))
    }
  },[foneValue, setValue])  

  const onSubmit = (data: any) => {    
    dispatch({ 
        type: 'ADD_PERSON', 
        person: {
          id: data.id,
          nome: data.nome,
          idade: data.idade,
          telefone: data.telefone,
          email: data.email
        }
    });
    reset();
    setMensagem("Informação da Pessoa enviada com sucesso!");
    setTimeout(() => { setMensagem('') }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')} autoComplete="off" defaultValue={ state.personEdit? state.personEdit.id : obterId() } />

      <div className="flex flex-col justify-start items-center h-screen mt-4">
        <span className="font-bold font-verdana text-xl">Dados Pessoais</span>
        <span className="text-sm">Insira os dados no campo para visualizar na listagem</span>
        <div className="flex flex-col mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">

            <div className="flex flex-col justify-center items-start">
              <label>Nome</label>            
              <input {...register('nome')} 
                type="string"
                className="inputStyle rounded"
                autoComplete="off"                 
                defaultValue={ state.personEdit?.nome } 
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label>Idade</label>
              <input {...register('idade')} 
                type="string"
                className="inputStyle rounded"
                autoComplete="off" 
                defaultValue={ state.personEdit?.idade } 
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label>Telefone</label>    
              <input {...register('telefone')}
                type="string"
                className="inputStyle rounded"
                autoComplete="off"                 
                defaultValue={ state.personEdit ? regexFone(state.personEdit.telefone) : '' } 
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label>E-mail</label>    
              <input {...register('email')} 
                type="string"
                className="inputStyle rounded"
                autoComplete="off"                 
                defaultValue={ state.personEdit?.email } 
              />
            </div>
            
          </div>

          <span className="w-full flex flex-row justify-end py-2">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-normal rounded w-[80px] h-[30px]">
              Enviar
            </button>
          </span>
          <span className="w-full flex flex-row justify-center py-2">
            <Link to="/lista" className="bg-yellow-500 hover:bg-yellow-700 text-white font-normal rounded w-[120px] h-[25px]">
              Ir para a Lista
            </Link>
          </span>

          <div className="flex flex-col w-full justify-center items-center content-center font-semibold font-verdana text-md">
            <span className=" text-blue-600"><p>{mensagem}</p></span>            
            <span className=" text-red-600">{errors.nome && <p>{errors.nome.message}</p>}</span>
            <span className=" text-red-600">{errors.idade && <p>{errors.idade.message}</p>}</span>
            <span className=" text-red-600">{errors.telefone && <p>{errors.telefone.message}</p>}</span>
            <span className=" text-red-600">{errors.email && <p>{errors.email.message}</p>}</span>
          </div>

        </div>
      </div>

    </form>
  );
};

export default Formulario;

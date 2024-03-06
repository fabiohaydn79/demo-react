import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../store/store';
import Header from '../layout/header';
import { Person } from '../model/Person.model';

export default function PersonList() {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const onEdit = (person: Person) => {    
    dispatch({ type: 'EDIT_PERSON', person });
    navigate("/formulario");
  };

  return (
    <div className='flex flex-col justify-center items-center align-top w-full'>
    
      <span className="font-bold font-verdana text-xl p-4">Pessoas cadastradas</span>
      
      <Header estilo={'hidden flex-row md:flex justify-evenly w-5/6 font-bold font-verdana text-md bgray'}></Header>
  
      {state.personList.map((person: Person) => (
        <div key={person.id} className='flex flex-row w-5/6'>
          <Header estilo={'flex flex-col md:hidden w-full font-bold font-verdana text-md bgray'}></Header>

          <div className='flex flex-col md:flex-row justify-evenly w-full font-normal font-verdana text-md bgray'>
            <div className='flex items-start md:items-center w-full md:w-1/5 overflow-hidden p-2'><p className='w-full text-left md:text-center'>{person.nome}</p></div>
            <div className='flex items-start md:items-center w-full md:w-1/5 overflow-hidden p-2'><p className='w-full text-left md:text-center'>{person.idade}</p></div>
            <div className='flex items-start md:items-center w-full md:w-1/5 overflow-hidden p-2'><p className='w-full text-left md:text-center'>{person.telefone}</p></div>
            <div className='flex items-start md:items-center w-full md:w-1/5 overflow-hidden p-2'><p className='w-full text-left md:text-center'>{person.email}</p></div>
            <div className='flex items-start md:items-center w-full md:w-1/5 overflow-hidden p-2'>
              <div className='w-full text-left md:text-center'>
                <button 
                  onClick={() => onEdit(person)} 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-normal rounded w-[70px] h-[26px] m-1">
                  Editar
                </button>

                <button 
                  onClick={() => dispatch({ type: 'REMOVE_PERSON', personId: person.id })} 
                  className="bg-red-500 hover:bg-red-700 text-white font-normal rounded w-[70px] h-[26px] m-1">
                  Remover
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}   

      <span className="w-full flex flex-row justify-center py-2">
        <Link to="/formulario" className="bg-yellow-500 hover:bg-yellow-700 text-white font-normal rounded w-[160px] h-[25px]">
          Ir para o Formulário
        </Link>
      </span>

    </div>    
  );
};



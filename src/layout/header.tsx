interface HeaderProps{
    estilo: string;    
}

function Header(props: HeaderProps) {
    
    return (
        <div className={`${props.estilo}`}>
            <div className='flex items-start md:items-center content-center w-full md:w-1/5'><p className='w-full text-left md:text-center p-2'>Nome</p></div>
            <div className='flex items-start md:items-center content-center w-full md:w-1/5'><p className='w-full text-left md:text-center p-2'>Idade</p></div>
            <div className='flex items-start md:items-center content-center w-full md:w-1/5'><p className='w-full text-left md:text-center p-2'>Telefone</p></div>
            <div className='flex items-start md:items-center content-center w-full md:w-1/5'><p className='w-full text-left md:text-center p-2'>Email</p></div>
            <div className='flex items-start md:items-center content-center w-full md:w-1/5'><p className='w-full text-left md:text-center p-2'>Ações</p></div>
        </div>
    )
  }
  
  export default Header
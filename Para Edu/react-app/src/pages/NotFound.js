import { useNavigate } from 'react-router-dom';

export const NotFound = () => { 
  const navegate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    
    navegate("/", {replace: true})
  }


  return (
    <div>
        <h1>404</h1>
        <h2>No encontrado</h2>
        <form onSubmit={handleSubmit}>
       
        <button type="submit">Ir al Inicio
    </button>
      </form>
    </div>
  )
}

export default NotFound
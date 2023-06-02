
import '../styles/botton.css'

function Botton({text, isBottonOfClick, handleClick}){
    return (
      <button 
      className={ isBottonOfClick ? 'botton-click' : 'botton-restart' }
      onClick={handleClick}>
        {text}
      </button>
    );
}

export default Botton;
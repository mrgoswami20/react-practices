
const Button =({onClick, text, type})=>{

    return (
        <button className={`
        px-14 
        text-xs
        font-semibold 
        p-3 
        rounded-md 
        border-black 
        border-2
        ${type==='primary' && 'bg-black text-white active:hover:bg-white active:hover:text-black'}
        ${type==='secondary' && 'bg-white text-black active:hover:bg-black active:hover:text-white'}
        
        `} onClick={onClick} >{text}</button>

    )
}

export default Button;

{/* <form>
  <legend> Choose a theme: </legend>
  <label>
    <input type="radio" class="forced-colors:appearance-auto appearance-none" />
    <p class="forced-colors:block hidden">
      Cyan
    </p>
    <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200 ..."></div>
    <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500 ..."></div>
  </label>
</form> */}
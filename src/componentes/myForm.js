import './myForm.css';
import{useState}from 'react';
const MyForm = ()=>{

    const[email,setEmail]= useState();

    const[name, setName] = useState();

    const[bio,setBio] = useState();

    const mudarNome = (e)=>{
        setName(e.target.value);
        console.log(email);
    }
    const mudarEmail = (event)=>{
        setEmail(event.target.value);
        console.log(name);
    }
const mandarnome = (event)=>{
    event.preventDefault();
    console.log(name,email);
}
//limpando formulario


    return(


        <div>
            <form onSubmit={mandarnome}>
                <label htmlFor="nome">nome:</label>
                <input type="text" name="nome" placeholder="nome" onChange={mudarNome} value={name}/>
                {/*forma mais eficaz*/}
                <label>
                    e-mail:
                    <input type="e-mail" name="e-mail" onChange={mudarEmail} value={email}/>
                </label>
                {/*textarea*/}
                <label>
                    Bio:
                    <textarea name="bio" onChange={(e)=>setBio(e.target.value)} value={bio} ></textarea>
                    <label>
                        selecao
                        <select name="sele">
                            <option value="user">pri</option>
                            <option value="edi">edi</option>
                        </select>
                    </label>
                </label>
                <input type="submit" value="enviar"/>
            </form>
        </div>
    )
}
export default MyForm;
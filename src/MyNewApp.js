import React,{ useState,useEffect } from 'react';

const MyNewApp = () => {
    const [valueA, setvalueA] = useState(0);
    const [valueB, setvalueB] = useState(0);
    const [operations, setOperations] = useState('+');
    const [result, setResult] = useState(0);

    const handleSubmit =()=>{
        if(operations==='+'){
            setResult(parseInt(valueA)+parseInt(valueB));
        }
        if(operations==='-'){
            setResult(parseInt(valueA)-parseInt(valueB));
        }
        if(operations==='*'){
            setResult(parseInt(valueA)*parseInt(valueB));
        }
        if(operations==='/'){
            setResult(parseInt(valueA)/parseInt(valueB));
        }

    }
    
    return (
     <div>
     <h3>  React Calculator App</h3>
     <h3>Result : { result }</h3>
     <div>
        <input type='text' value={valueA} onChange= {(e)=>setvalueA(e.target.value)}/><br/>
        <h2>{operations}</h2>
        <input type='text'value={valueB} onChange= {(e)=>setvalueB(e.target.value)}/><br/>
        
     </div>
     <div>
        <button onClick={()=>setOperations('+')}>+</button>
        <button onClick={()=>setOperations('-')}>-</button>
        <button onClick={()=>setOperations('*')}>*</button>
        <button onClick={()=>setOperations('/')}>/</button>
     </div>
     <button onClick={handleSubmit}>Result</button>
     </div>
    )
}

export default MyNewApp
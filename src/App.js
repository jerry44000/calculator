import {useState} from 'react';

function App() {

  const [calcul, setCalcul] = useState("")
  const [result, setResult] = useState("")

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = value =>{
    if(ops.includes(value) && calcul === '' || 
       ops.includes(value) && ops.includes(calcul.slice(-1))
       ){
      return;
    }
    setCalcul(calcul + value)

    if(!ops.includes(value)){
      setResult(eval(calcul + value).toString())
    }
    }

  

  const creationChiffres = () => {
    const chiffres = [];

    for(let i = 1; i < 10; i++){

      chiffres.push(
        <button onClick={()=> updateCalc(i.toString())} 
                key={i}>
                  {i}
                </button>
      )
    }
    return chiffres;
  }

  const calculer = () =>{
    setCalcul(eval(calcul).toString())
  }

  const supprimer = () =>{
    if(calcul == ''){
      return;
    }
    const value = calcul.slice(0,-1);

    setCalcul(value)
  }

  return (
    <div className="App">
     <div className="calculette">
      
       <div className="display">
      { result ? <span>{result}</span> : '' } {calcul || "0"}
       </div>

       <div className="operation">
         <button onClick={()=> updateCalc('/')}>/</button>
         <button onClick={()=> updateCalc('*')}>*</button>
         <button onClick={()=> updateCalc('+')}>+</button>
         <button onClick={()=> updateCalc('-')}>-</button>

         <button onClick={supprimer}>SUPP</button>
       </div>

     <div className="chiffres">
       {creationChiffres()}
        <button onClick={()=> updateCalc('0')}>0</button>
        <button onClick={()=> updateCalc('.')}>.</button>
       
        <button onClick={calculer} >=</button>
     </div>

    </div>
    </div>
  );
  }


export default App;

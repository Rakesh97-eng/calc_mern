import { useState } from "react";
import "./calc.css"
function Calculator (){
    const [numbers,setNumbers] = useState("")

    const arithmeticfunction = (value)=>{
        if(value ==="="){
           
            setNumbers( eval(numbers))
        }
        else if(value ==="ac"){
            setNumbers('')
        }
        else if(value ==="clear"){
            let value = numbers.split('');
            value.pop()
            
           setNumbers(value.join(''))
        }
        else{
            setNumbers(numbers+value)
        }
           
    }
    return(
        <>  
        <div style={{"margin":"5%"}}>

            <input className="input" value={numbers}></input>
            <div className="calc_container">
                 
                <div className="calc_btn" onClick={()=>arithmeticfunction("1")}>1</div>
                <div className="calc_btn"  onClick={()=>arithmeticfunction("2")}>2</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("3")}>3</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("4")}>4</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("5")}>5</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("6")}>6</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("7")}>7</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("8")}>8</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("9")}>9</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("0")}>0</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction('ac')}>AC</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction('clear')}>Clear</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("+")}>+</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("-")}>-</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("*")}>/</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("/")}>*</div>
                <div className="calc_btn" onClick={()=>arithmeticfunction("=")}>=</div>
            </div>
        </div>

        </>
    )
}

export default Calculator;
import { useState } from 'react'
import './style.css'
export default function Home () {
    let [number, setNumber] = useState('');
    let [value, setValue] = useState({
        prev: '',
        operator: '',
        next: ''
    })

     function handleValue(e){
        setNumber(`${number}${e.target.innerHTML}`);
        if(value.operator !== ''){
            setValue({
                ...value,
                next: Number(`${number}${e.target.innerHTML}`)
            })
        }
    }
    
     function handleEqual(e){
         
        let val = document.querySelector(`.input-place p`).innerHTML;

        if(value.operator === '+'){
            let a = Number(value.prev) + Number(value.next);
            setNumber(a)
        }
        else if(value.operator === '-'){
            console.log(Number(value.prev) - Number(value.next))
            let a = Number(value.prev) - Number(value.next);
            setNumber(a)
        }
        else if(value.operator === '/'){
            let a = Number(value.prev) / Number(value.next);
            setNumber(a)
        }

        else if(value.operator === '*'){
            let a = Number(value.prev) * Number(value.next);
            setNumber(a)
        }
        
    }
    function handleOperator(e){
        setValue({
            ...value,
            operator: e.target.innerHTML,
            prev: Number(number)
        });
        setNumber('')
    }

    return (
        <div className='wrap'>
            <div className='input-place'><p>{number}</p></div>
            <div className='wrap-box'>
                <div className="box" onClick={handleValue}>1</div>
                <div className="box" onClick={handleValue}>2</div>
                <div className="box" onClick={handleValue}>3</div>
                <div className="box equal" onClick={handleEqual}>=</div>
                <div className="box" onClick={handleValue}>4</div>
                <div className="box" onClick={handleValue}>5</div>
                <div className="box" onClick={handleValue}>6</div>
                <div className="box operator" onClick={handleOperator}>+</div>
                <div className="box" onClick={handleValue}>7</div>
                <div className="box" onClick={handleValue}>8</div>
                <div className="box" onClick={handleValue}>9</div>
                <div className="box operator" onClick={handleOperator}>-</div>
                <div className="box" onClick={handleValue}>0</div>
                <div className="box" onClick={handleValue}>.</div>
                <div className="box operator" onClick={handleOperator}>/</div>
                <div className="box operator" onClick={handleOperator}>*</div>
                
            </div>
        </div>
    )
}
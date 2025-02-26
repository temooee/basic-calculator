'use client'
import {Card, CardHeader, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import './styles.css'


export default function Home() {

    const [inputNumber, setInputNumber] = useState<string>('')

    // Submit function --- START
    const submit = () => {

       // Step 1: Use RegEx to identify Num/Ops match

        if (/[^0-9+\-*/.]/.test(inputNumber)) {
            setInputNumber('Error');
            return;
        }

        // Step 2: Extract Num/Ops

        const numbers = inputNumber.split(/[+\-*/]/).map(Number); // split by operators and convert to new array of numbers
        const operators = inputNumber.match(/[+\-*/]/g) || [] // match the operators and extract to new array

        if (!numbers.length) return;

        // Step 3: Apply multiplication & division first
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '*' || operators[i] === '/') {
                const result = operators[i] === '*' // declare result which equals to operators[i] if exists
                ? numbers[i] * numbers[i + 1] : numbers[i] / numbers[i + 1];// if * exists ? if / exists :

                numbers.splice(i, 2, result); // Replace two numbers in the array with result
                operators.splice(i, 1); // Remove operator
                i--; // To stay at the same index
            }
        }

        // Step 4: Apply addition & subtraction
        let result = numbers[0] //numbers[0] will be the same as inputNumber inserted by user
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '+') result += numbers[i + 1];
            if (operators[i] === '-') result -= numbers[i + 1];
        }

        // Step 5: Show the result

        setInputNumber(result.toString());
    }

    // Submit function --- END
  return (
      <div className={'flex justify-center items-center h-screen'}>
          <Card className="w-[350px]">
              <CardHeader>
                  <div>{inputNumber}</div>
              </CardHeader>
              <CardContent>
                  <div className={'flex justify-evenly gap-1 my-1'}>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-gray-600 text-3xl hover:bg-red-700'} onClick={() => {setInputNumber('')}}>C</Button>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-gray-600 text-3xl hover:bg-red-700'} onClick={() => {setInputNumber(inputNumber.slice(0, -1))}}>CE</Button>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-gray-600 text-3xl'} onClick={() => {setInputNumber('')}}>%</Button>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-green-900 text-3xl'} onClick={() => {setInputNumber(inputNumber + '/')}}>/</Button>
                  </div>
                  <div className={'flex justify-evenly gap-1 my-1'}>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '7')}}>7</Button>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '8')}}>8</Button>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '9')}}>9</Button>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-green-900 text-3xl'} onClick={() => {setInputNumber(inputNumber + '*')}}>X</Button>
                  </div>
                  <div className={'flex justify-evenly gap-1 my-1'}>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '4')}}>4</Button>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '5')}}>5</Button>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '6')}}>6</Button>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-green-900 text-3xl'} onClick={() => {setInputNumber(inputNumber + '-')}}>-</Button>
                  </div>
                  <div className={'flex justify-evenly gap-1 my-1'}>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '1')}}>1</Button>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '2')}}>2</Button>
                      <Button className={'w-[70px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '3')}}>3</Button>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-green-900 text-3xl'} onClick={() => {setInputNumber(inputNumber + '+')}}>+</Button>
                  </div>
                  <div className={'flex justify-evenly gap-1 my-1'}>
                      <Button className={'w-[147px] h-[70px] text-3xl'} onClick={() => {setInputNumber(inputNumber + '0')}}>0</Button>
                      <Button className={'w-[70px] h-[70px] text-3xl    '} onClick={() => {setInputNumber(inputNumber + '.')}}>.</Button>
                      <Button className={'w-[70px] h-[70px] rounded-full bg-green-900 text-3xl'} onClick={() => {submit()}}>=</Button>
                  </div>
              </CardContent>
          </Card>
      </div>
  )
}

// easy submit to learn ----------------------------------------
// const submit = () => {
//     try {
//         // Validate input to prevent unexpected characters
//         if (/[^0-9+\-*/.]/.test(inputNumber)) {
//             setInputNumber("Error");
//             return;
//         }
//
//         // Use Function() to safely evaluate the expression
//         const result = new Function(`return ${inputNumber}`)();
//
//         // Convert result to string and update state
//         setInputNumber(result.toString());
//     } catch {
//         setInputNumber("Error");
//     }
// };

// end of easy submit ------------------------------------------

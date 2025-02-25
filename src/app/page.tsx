'use client'
import {Card, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default function Home() {

    const [inputNumber, setInputNumber] = useState<string>('');
    // Submit function which calculates PLUS
    const submit = () => {
        const plus = inputNumber.split('+');
        const multiply = inputNumber.split('*');
        const minus = inputNumber.split('-');
        const division = inputNumber.split('/');
        // in case of Plus
        if (plus.length > 1) {
            // setInputNumber((Number(plus[0]) + Number(plus[1])).toString());
            setInputNumber(plus.reduce((partialSum, a) => Number(partialSum) + Number(a), 0).toString())
        }
        // In case of Multiplication
        if (multiply.length > 1) {
            setInputNumber((Number(multiply[0]) * Number(multiply[1])).toString())
        }
        // In case of subtraction
        if (minus.length > 1) {
            setInputNumber((Number(minus[0]) - Number(minus[1])).toString())
        }
        // In case of division
        if (division.length > 1) {
            setInputNumber((Number(division[0]) / Number(division[1])).toString())
        }
    }
    // End of Submit function
  return (
      <Card className="w-[350px]">
        <CardHeader>
            <div>{inputNumber}</div>
        </CardHeader>
          <CardContent>
              <Button onClick={() => {setInputNumber(inputNumber + '0')}}>0</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '1')}}>1</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '2')}}>2</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '3')}}>3</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '4')}}>4</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '5')}}>5</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '6')}}>6</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '7')}}>7</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '8')}}>8</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '9')}}>9</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '+')}}>+</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '-')}}>-</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '*')}}>*</Button>
              <Button onClick={() => {setInputNumber(inputNumber + '/')}}>/</Button>
              <Button onClick={() => {setInputNumber('')}}>C</Button>
              <Button onClick={() => {setInputNumber(inputNumber.slice(0, -1))}}>CE</Button>
              <Button onClick={() => {setInputNumber('-' + inputNumber)}}>+-</Button>
          </CardContent>
          <CardFooter>
              <Button onClick={() => {submit()}}>=</Button>
          </CardFooter>
      </Card>
  )
}

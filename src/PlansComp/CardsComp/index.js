import React from 'react'
import { CardComp } from './CardComp';
import './CardsComp.css'

export const CardsComp = () => {
    let freePlan = [
        {nombre: 'Unlimited Bandwitch'},
        {nombre: 'Encrypted Connection'},
        {nombre: 'No Traffic Logs'},
        {nombre: 'Works on All Devices'}
    ];

    let standardPlan = [
        {nombre: 'Unlimited Bandwitch'},
        {nombre: 'Encrypted Connection'},
        {nombre: 'No Traffic Logs'},
        {nombre: 'Works on All Devices'},
        {nombre: 'Connect Anyware'}
    ];

    let premiumPlan = [
        {nombre: 'Unlimited Bandwitch'},
        {nombre: 'Encrypted Connection'},
        {nombre: 'No Traffic Logs'},
        {nombre: 'Works on All Devices'},
        {nombre: 'Connect Anyware'},
        {nombre: 'Get New Features'}
    ];
  return (
    <div className='contenedorCardss'>
        <CardComp planName = 'Free Plan' ventajas = {freePlan} precio = 'Free' nombreClase='gratis'></CardComp>
        <CardComp planName = 'Standard Plan' ventajas = {standardPlan} precio = '$9' mes='/mo' nombreClase='normal'></CardComp>
        <CardComp planName = 'Premium Plan' ventajas = {premiumPlan} precio = '$12' mes='/mo' nombreClase='premium'></CardComp>
    </div>
  )
}

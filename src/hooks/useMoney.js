import { useEffect, useState } from "react";

export default function useMoney({price,compareAtPrice,currencyCode="USD",withZero=false}){
  const [moneyFormat,setMoneyFormat]= useState(null);
  useEffect(()=>{
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: withZero?2:0
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      setMoneyFormat({
        price:formatter.format(price),
        compareAtPrice:compareAtPrice?formatter.format(compareAtPrice):compareAtPrice
      })
      
  },[currencyCode,price,compareAtPrice,withZero])
  return moneyFormat
}
const Numberformat = (number) => {
    console.log(number)
   
    const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        currencyDisplay: "symbol", // Use the currency symbol (₹) instead of the currency code (INR)
        minimumFractionDigits: 2, // Ensure at least 2 decimal places are displayed
      });
    
      return formatter.format(number.number);
  };
  
  export default Numberformat;
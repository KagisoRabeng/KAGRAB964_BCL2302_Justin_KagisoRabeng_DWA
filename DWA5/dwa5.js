const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
  const wholeNumber = dividend / divider;

  try{
    if (dividend === "" || divider === "") { 
      throw result.innerHTML = "Division not performed. Both values are required in inputs. Try again";
    }
    else if (dividend > 0 && divider < 0) { 
      throw result.innerHTML = "Division not performed. Invalid number provided. Try again";
    }
     else if (isNaN(dividend) && isNaN(divider)) {
    //   document.body.innerHTML = "Something critical went wrong. Please reload the page";
    throw document.body.innerHTML = "Something critical went wrong. Please reload the page";
    }
    else result.innerText = Math.floor(wholeNumber)
  }
  catch (error) {
    console.log(error)
  }
});
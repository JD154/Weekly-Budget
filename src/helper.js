export const validateBudget = budget => {
  let finalBudget = parseInt(budget, 10)|| 0;

  if(finalBudget > 0 ) {
      return finalBudget;
  } else {
      return false;
  }
}

export const checkBudget = (budget, left) => {
  let clase;
  // Comprobar el 25% 
  if( (budget / 4) > left) {
       clase = 'budget left-danger';
  } else if( (budget / 2) > left) {
      clase = 'budget left-warning'
  } else {
      clase = 'budget left-primary';
  }
  return clase;
} 

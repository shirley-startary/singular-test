/**function that determine
 * @param n - number
 */

export const fib = (n: number): number => {
  if(n<= 1) return  n       
  return fib(n - 1) + fib (n - 2);
};

/**
 *
 * @param n
 * @returns
 */

export const triangular = (n: number): number => {
  return ( (( (n*n)+(n*1)) / 2))
};

/**
 *
 * @param n
 * @returns
 */

export const isPrimo = (n: number): boolean => {
  if (n <= 1) {
    return false; // los números menores o iguales a 1 no son primos
  }

  // comprobamos si n es divisible por algún número entre 2 y su raíz cuadrada
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // si es divisible, entonces no es primo
    }
  }

  return true; // si no es divisible por ningún número entre 2 y su raíz cuadrada, entonces es primo
};

/**
 * 
 * @param n 
 * @returns 
 */

export const enesimoPrimo = (n:number):number => {
  let contador = 0;
  let numero = 2;

  while (contador < n) {
    if (isPrimo(numero)) {
      contador++;
    }

    numero++;
  }

  return numero - 1;
}

/**
 * 
 * @param n 
 * @returns 
 */

export const serie = (n:number):number => ( ((3*enesimoPrimo(n)) + triangular(n-1)) / (2*fib(n+2)))

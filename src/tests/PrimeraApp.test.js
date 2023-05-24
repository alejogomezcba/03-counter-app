import React from 'react'
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp', () => {
  test('Mostrar el mensaje "Hola, Soy Goku" como título', () => {
    const saludo = "Hola, Soy Goku";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  });

  test('Mostrar el mensaje "Soy un subtitulo como prop"', () => {
    const subtitulo = "Soy un subtitulo como prop";
    const { getByText } = render(<PrimeraApp subtitulo={subtitulo} />);
    expect(getByText(subtitulo)).toBeInTheDocument();
  });
  
});

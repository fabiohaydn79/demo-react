export function obterId() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const dia = String(dataAtual.getDate()).padStart(2, "0");
    const hora = String(dataAtual.getHours()).padStart(2, "0");
    const minuto = String(dataAtual.getMinutes()).padStart(2, "0");
    const segundo = String(dataAtual.getSeconds()).padStart(2, "0");
    const milisegundo = String(dataAtual.getMilliseconds()).padStart(3, "0");
  
    return `${ano}${mes}${dia}${hora}${minuto}${segundo}${milisegundo}`;
}

export const regexFone = (value: String | undefined) => {
  
  if (!value) return ''
  
  return value.replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
}

export const removeSpChars = (input: string) => {
  const regex = /[^a-zA-Z0-9\s]/g;
  const _transform = input.replace(regex, '');
  const response = _transform.replace(/\s+/g, '')
  return response;
}

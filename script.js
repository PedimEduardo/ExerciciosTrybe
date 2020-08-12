// Variáveis // 
const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const select = document.getElementById('select-state');

// Funções e Eventos //
for (let i in estados) {
  const option = document.createElement('option');
  option.innerHTML = estados[i];
  select.appendChild(option); 
}

function formatDate() {
  
}
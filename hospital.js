// Classe Pilha
class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(item) {
    this.itens.push(item);
    console.log(`✔️ Elemento '${item}' empilhado.`);
  }

  desempilhar() {
    if (this.estaVazia()) {
      console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
      return null;
    }
    const removido = this.itens.pop();
    console.log(`❌ Elemento '${removido}' desempilhado.`);
    return removido;
  }

  topo() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  limpar() {
    this.itens = [];
    console.log('🧹 Pilha esvaziada.');
  }

  imprimir() {
    console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- topo'));
  }
}

// Classe Fila
class Fila {
  constructor() {
    this.itens = [];
  }

  // Adiciona um item ao final da fila
  enfileirar(item) {
    this.itens.push(item);
    console.log(`📥 '${item}' entrou na fila.`);
  }

  // Remove o item do início da fila
  desenfileirar() {
    if (this.estaVazia()) {
      console.log('⚠️ A fila está vazia. Nenhum item para remover.');
      return null;
    }
    const removido = this.itens.shift();
    console.log(`🚪 '${removido}' saiu da fila.`);
    return removido;
  }

  // Mostra o primeiro da fila
  frente() {
    return this.itens[0];
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.itens.length === 0;
  }

  // Tamanho da fila
  tamanho() {
    return this.itens.length;
  }

  // Limpa a fila
  limpar() {
    this.itens = [];
    console.log('🧹 Fila esvaziada.');
  }

  // Imprime a fila atual
  imprimir() {
    console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
  }
}

// Criando a pilha e a fila
const filaPacientes = new Fila();
const pilhaProntuarios = new Pilha();

// Utilizando o método "enfileirar" da classe "Fila" para adicionar pacientes 
filaPacientes.enfileirar('Maria Eduarda Barbosa');
filaPacientes.enfileirar('Stefanne Soares');
filaPacientes.enfileirar('Matheus Ferreira');
filaPacientes.enfileirar('Maria Vitória dos Santos');
filaPacientes.enfileirar('Isabela Cabral');

// Imprimindo o paciente seguinte utilizando o método "frente" da classe Fila
console.log(`Próximo paciente: ${filaPacientes.frente()}`);

// Loop que simula o atendimento de dois pacientes
for (let i = 0; i < 2; i++) { // Roda duas vezes 
  const atendido = filaPacientes.desenfileirar(); // Remove o primeiro paciente da fila
  if (atendido) {
    pilhaProntuarios.empilhar(atendido); // Adiciona na pilha
  }
}

// Utilizando os métodos das respectivas classes para imprimir
filaPacientes.imprimir();
pilhaProntuarios.imprimir();
import { useState } from "react";
import Titulo from "./components/Titulo";
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";
import Produto from "./components/Produto";
import "./App.css";

function App() {
  const [itens, setItens] = useState(0);
  const [total, setTotal] = useState(0);

  function comprar(preco) {
    setItens(itens + 1);
    setTotal(total + preco);
  }

  function limparCarrinho() {
    setItens(0);
    setTotal(0);
  }

  return (
    <div className="container">
      <Titulo />

      <div className="carrinho">
        <span>
          🛒 {itens} {itens === 1 ? "item" : "itens"} •{" "}
          {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </span>
        <button onClick={limparCarrinho} disabled={itens === 0}>
          Limpar
        </button>
      </div>

      <section>
        <h2>Alunos</h2>
        <div className="lista">
          <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Ana" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Pedro" turma="Desenvolvimento de Sistemas" />
        </div>
      </section>

      <section>
        <h2>Notas</h2>
        <div className="lista">
          <Nota disciplina="React" nota={8.5} />
          <Nota disciplina="JavaScript" nota={9} />
          <Nota disciplina="Banco de Dados" nota={5.5} />
        </div>
      </section>

      <section>
        <h2>Produtos</h2>
        <div className="lista">
          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
            onComprar={comprar}
          />
          <Produto
            nome="Mouse"
            descricao="Mouse sem fio"
            preco={120}
            disponivel={true}
            onComprar={comprar}
          />
          <Produto
            nome="Headset Gamer"
            descricao="Fone com microfone e som surround"
            preco={310.9}
            disponivel={false}
            onComprar={comprar}
          />
          <Produto
            nome="Monitor 24 polegadas"
            descricao="Monitor Full HD com 75Hz"
            preco={899.99}
            disponivel={true}
            onComprar={comprar}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
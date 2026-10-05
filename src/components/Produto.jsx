function Produto({ nome, descricao, preco, disponivel, onComprar }) {
  return (
    <div className="produto">
      <span className={disponivel ? "selo selo-ok" : "selo selo-off"}>
        {disponivel ? "Disponível" : "Indisponível"}
      </span>

      <h3>{nome}</h3>
      <p className="descricao">{descricao}</p>

      <p className="preco">
        {preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>

      <button disabled={!disponivel} onClick={() => onComprar(preco)}>
        {disponivel ? "Comprar" : "Esgotado"}
      </button>
    </div>
  );
}

export default Produto;
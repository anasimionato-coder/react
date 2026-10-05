function Nota({ disciplina, nota }) {
  const aprovado = nota >= 7;

  return (
    <div className="nota">
      <div className="nota-topo">
        <span>{disciplina}</span>
        <strong className={aprovado ? "aprovado" : "recuperacao"}>{nota}</strong>
      </div>

      <div className="barra">
        <div
          className={aprovado ? "barra-cheia aprovado-bg" : "barra-cheia recuperacao-bg"}
          style={{ width: nota * 10 + "%" }}
        ></div>
      </div>

      <small>{aprovado ? "Aprovado" : "Recuperação"}</small>
    </div>
  );
}

export default Nota;
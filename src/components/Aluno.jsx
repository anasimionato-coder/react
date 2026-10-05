function Aluno({ nome, turma }) {
  return (
    <div className="aluno">
      <div className="avatar">{nome.charAt(0)}</div>
      <div>
        <h3>{nome}</h3>
        <p>Turma: {turma}</p>
      </div>
    </div>
  );
}

export default Aluno;

// state lift é centralizar o state no componente pai e alterar o state no componente filho

export default function SeuNome({ setNome }) {
  return (
    <>
      <p>Digite seu nome</p>
      <input
        type="text"
        placeholder="Qual seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </>
  );
}

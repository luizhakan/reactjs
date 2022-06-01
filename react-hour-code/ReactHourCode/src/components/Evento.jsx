import Button from './evento/Button'

export default function Evento() {
  function meuEvento() {
    console.log(`Ativado`);
  }

  function segundoEvento(){
    console.log(`Ativado`);
  }

  return (
    <>
      <p>Clique em ATIVAR para disparar um evento</p>
      <Button evento={meuEvento} text="Primeiro evento" />
      <hr />
      <Button evento={segundoEvento} text="Segundo evento" />
    </>
  );
}

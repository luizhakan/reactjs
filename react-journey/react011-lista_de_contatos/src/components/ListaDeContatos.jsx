import {FaPhone, FaTrash, FaUser} from 'react-icons/fa';

export default function ListaDeContatos({ nome, telefone, id, remover }) {
  return (
    <div className='col p-2 text-start'>
      <FaUser className='me-3'/> {nome} | <FaPhone className='me-3' /> {telefone} <span onClick={() => {
        remover(id)
      }}><FaTrash /></span>
    </div>
  );
}

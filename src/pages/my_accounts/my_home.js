import React, {useState} from 'react'
import Navbar from '../../components/Navbar';

const MeusDados = () => {
  const [allData, setAllData] = useState('');
  const [idFamilia, setIdFamilia] = useState('');
  const [saldoCC, setSaldoCC] = useState(10);
  const [saldoPP, setSaldoPP] = useState(210);

  fetch('http://localhost:5000/centralizarcontas', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
  })
  .then(response => response.json())
  // .then(data => console.log(data));
  .then(data => {
    // setAllData(data.membros.contas)
    console.log(data.membros)
    // setIdFamilia(data.id_familia)
    // setSaldoCC(parseFloat(data.saldo_cc))
    // setSaldoPP(parseFloat(data.saldo_pp))
  });    

  return (
    <div>
        <Navbar />
        <h3>Meus dados - contas</h3>   
        
        
        <p>Saldo CC: R$ { saldoCC }</p>
        <p>Saldo PP: R$ { saldoPP }</p>
    </div>
  );
}
   
export default MeusDados;
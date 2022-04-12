import { Header } from "../../../styles/leadsPanel.style";
import logoImg from '../../assets/logo_elogroup.png'
import Modal from 'react-modal';
import { Rows } from "../Rows/row";

Modal.setAppElement('#root');
export interface LeadsPanelProps {
  onOpenNewLeadModal: () => void;
}

export function LeadsPanel({ onOpenNewLeadModal }: LeadsPanelProps) {

  return (
    <div className="container-sm table2">
      <Header className="form-group">
        <img src={logoImg} alt="EloGroup" />
        <h1>Painel de Leads</h1>
      </Header>

      <button
        type="button"
        onClick={onOpenNewLeadModal}
        className="btn btn-primary btn-block btntable"
      >
        Novo Lead (+)
      </button>
      <br />
      <br />
      <Rows />

    </div>
  );
}
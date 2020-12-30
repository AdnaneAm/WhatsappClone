import {React,useState} from 'react'
import {Tab,Nav,Button,Modal} from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewConvModal from './ConvModal'
import NewContModal from './ContModal'



const CONV_KEY='conversations'
const CONT_KEY='contacts'
export default function({id}) {
    // State
    const [activeKey,setActiveKey]=useState(CONV_KEY);
    const [modalOpen,setModalOpen]=useState(false);
    const convOpen=(activeKey===CONV_KEY);
    // Methods 
    const closeModal=()=>{
        setModalOpen(false);
    }
    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
           <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONV_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONT_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONV_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONT_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your id : <span className="text-muted">{id}</span>
                </div>
                <Button onClick={()=>setModalOpen(true)} className="rounded-0 p-3">
                    New {convOpen?"Conversation":"Contact"}
                </Button>
           </Tab.Container>
           <Modal show={modalOpen} onHide={closeModal}>
                {convOpen?<NewConvModal closeModal={closeModal}/>:<NewContModal closeModal={closeModal}/>}
           </Modal>
        </div>
    )
}

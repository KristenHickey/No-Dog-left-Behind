import React from 'react';
import { Modal, Button } from 'antd';


type ContactModal = {
  isModalVisible: boolean;
  handleOk: () => void;
}


const ContactModal: React.FC<ContactModal> = ({ isModalVisible, handleOk }) => {


  return (
    <>
      <Modal
        centered={true}
        closable={false}
        title="Contact Information"
        visible={isModalVisible}
        onCancel={handleOk}
        bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        footer={
        [<div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button key="back" onClick={handleOk} >
            Close
          </Button>
        </div>
        ]}>
        <p><strong>Organisation:</strong> RSPCA</p>
        <p><strong>Contact number:</strong> 020 7272 2264</p>
        <p><strong>Email: </strong>animals@rspcacentrallondon.org.uk</p>
        <p><strong>Address:</strong> RSPCA Central London, Box 145, 2 Lansdowne Row, London W1J 6HL</p>
      </Modal>
    </>
  );
}

export default ContactModal
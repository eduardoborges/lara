import React, { Component } from 'react';
import { Modal, ModalCard, ModalBackground, ModalCardHeader, ModalCardBody, ModalCardFooter, ModalCardTitle, Button, Delete } from "bloomer";

const ModalRemoveDashboard = ({ isActive, dashboard, handleRemoveDashboard, toggleModalRemove, ...rest}) => (
    <Modal isActive={isActive}>
        <ModalBackground  onClick={toggleModalRemove} />
        <ModalCard>
            <ModalCardHeader>
                <ModalCardTitle>Deseja remover a dashboard <i>{dashboard.nome}</i>?</ModalCardTitle>
                <Delete onClick={toggleModalRemove} />
            </ModalCardHeader>
            <ModalCardBody>
                <p>
                    <b>Tenha cuidado! Esta ação é irreversivel.</b>
                </p>
            </ModalCardBody>
            <ModalCardFooter>
                <Button isColor="danger" isSize="medium"  onClick={handleRemoveDashboard}>Remover</Button>
                <Button isColor="light" isSize="medium" onClick={toggleModalRemove}>Cancelar</Button>
            </ModalCardFooter>
        </ModalCard>
    </Modal>
);


export default ModalRemoveDashboard;
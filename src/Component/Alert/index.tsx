/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Toast } from 'react-bootstrap';

import './style.scss';
interface Props {
    show: boolean,
    noti: string,
    onClose : () => void
}
export default function Notification(props: Props) {
    const {  show, noti,onClose } = props;

    return (
        <React.Fragment>
            <Toast onClose={onClose} show={show} delay={3000} autohide className="noti">
                <Toast.Body>{noti}</Toast.Body>
            </Toast>
        </React.Fragment>
    );
}
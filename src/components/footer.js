import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="12">
                            <Button color="info" onClick={this.toggle}>&copy; Next Movie Stars</Button>
                        </Col>
                    </Row>
                </Container>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Next Movie Stars team</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="4" className="team-row">
                                <a 
                                href="https://ro.linkedin.com/in/marius-mihai-borda%C8%99-5502129b?trk=prof-samename-name" 
                                title="linkedin Marius"
                                className="team-link"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img
                                        src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAIA_wDGAAAAAQAAAAAAAAoPAAAAJDJiZDA3MWY5LTg1NmEtNDljYy04YmY0LTE1OTY1MGY0YTc2ZQ.jpg"
                                        width="50"
                                        alt="Marius" />
                                    <span className="team-name">Marius Bordas</span>
                                </a>
                            </Col>
                            <Col xs="4" className="team-row">
                                <a 
                                href="https://ro.linkedin.com/in/paula-ciocan" 
                                title="linkedin Paula"
                                className="team-link"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img
                                        src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-1/p160x160/18950963_798878063604209_1895513138360314534_n.jpg?oh=11dc9c331572e014977ee37942d1243a&oe=5B08EA17"
                                        width="50" 
                                        alt="Paula" />
                                    <span className="team-name">Paula Ciocan</span>
                                </a>                                
                            </Col>
                            <Col xs="4" className="team-row">
                                <a 
                                href="https://ro.linkedin.com/in/diana-agata-leonte-894450b7" 
                                title="linkedin Diana"
                                className="team-link"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img
                                        src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAshAAAAJDljMDA0MDMxLWJkY2QtNGVhNC1hZTYzLWJlMDE3ZGUwYWQ2Mg.jpg"
                                        width="50" 
                                        alt="Diana" />
                                    <span className="team-name">Diana Agata Leonte</span>
                                </a>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Footer;
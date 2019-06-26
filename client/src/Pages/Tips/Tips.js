import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";



class Tips extends Component {
    constructor() {
        super();
        this.state = {
            billAmt: "",
            tipPercent: "",
            splitTip: 0,
            totalTip: 0,
            splitTipAmt: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    //this function will saves the form input data to the correct variable

    handleInputChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(`${event.target.name} ${event.target.value}`);
    };


    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`event target ${event.target}`);
        // let billInfo = event.target;
        console.log(`bill amount`, this.state.billAmt);
        if (this.state.billAmt && this.state.tipPercent) {
            this.calcTip(this.state.billAmt, this.state.tipPercent);
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12">
                        <Jumbotron>
                            <h1>
                                Calculate Restaurant Tip
							</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        <form>
                            <h2>Bill Amount Before Tax</h2>
                            <Input
                                type="text"
                                onChange={this.handleInputChange}
                                name="billAmt"
                                placeholder="Bill Amount (required)"
                            />

                            <h2>Percent Tip to Calculate</h2>
                            <Input
                                type="text"
                                onChange={this.handleInputChange}
                                name="tipPercent"
                                placeholder="Percent Tip(required)"
                            />
                            <h2># of Ways to Split Tip</h2>
                            <Input
                                type="text"
                                onChange={this.handleInputChange}
                                name="splitTip"
                                placeholder="# of ways to split tip"
                            />
                            <FormBtn
                                disabled={!(this.state.billAmt)}
                                disabled={!(this.state.tipPercent)}
                                onClick={this.handleFormSubmit}
                            >
                                Calculate Tip
							</FormBtn>
                        </form>
                    </Col>
                </Row >
                <Row>
                    return (
                    <h2>Total Tip Amount</h2>
                    ${this.state.totalTip}
                    <h2>Tip is split ${this.state.splitTip} ways</h2>
                    <h2>Each person pays ${this.state.splitTipAmt}</h2>
                    );
                })}
                    ) : (<br></br>

                    )}
                </Row>

            </Container >
        );
    }
}

export default Tips;
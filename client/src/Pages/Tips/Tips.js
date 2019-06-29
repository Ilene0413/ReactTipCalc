import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Viewtip from "../../components/Viewtip";



class Tips extends Component {
    constructor() {
        super();
        this.state = {
            billAmt: "",
            tipPercent: "",
            splitTip: "",
            totalTip: 0,
            splitTipAmt: 0,
            message: "",
            isTipCalc: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);

        //save the initial input form values in order to clear form at end of calculation
        this.baseState = this.state;
    }
    //this function will saves the form input data 

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //function to validate input data

    validateInput = event => {
        let billEntered = this.state.billAmt;
        let tipEntered = this.state.tipPercent;
        let splitTip = this.state.splitTip;

        let billAmount = 0;
        let percentTip = 0;
        let message = "";

        //validate the form input
        //all entries must have a numeric value

        //validate bill amount - must be numeric and have a valid dollar amount

        if (isNaN(billEntered)) {
            message = "bill amount must be a dollar amount";
            this.setState({ message: message });
            return;
        }
        else {
            //check that bill amount is greater than zero
            if (parseFloat(billEntered) <= 0) {
                message = "bill amount must be greater than zero, tip = zero";
                this.setState({ message: message });
                return;
            }
            else {
                //have a number - check that it is a whole number or only 2 places after decimal;
                if (billEntered.includes(".") && billEntered.charAt(billEntered.length - 3) !== ".") {
                    message = "enter valid dollar amount";
                    this.setState({ message: message });
                    return;
                };
            };
        };
        //validate tip percentage - must be numeric - number of decimals does not matter
        //tip percentage amount must be greater than zero

        if (isNaN(tipEntered)) {
            message = "tip amount must be numeric";
            this.setState({ message: message });
            return;
        }
        else {
            if (parseFloat(tipEntered) <= 0) {
                message = "tip percentage must be greater than zero";
                this.setState({ message: message });
                return;
            }
        }

        //validate that split amount is an integer
        if (isNaN(splitTip)) {
            message = "# of ways to split tip must be an integer";
            this.setState({ message: message });
            return;
        }
        else {
            //split number must be an integer and greater than 0
            if (splitTip.includes(".")) {
                message = "number of ways to split tip must be an integer";
                this.setState({ message: message });
                return;
            }
            else {
                if (splitTip <= 0) {
                    message = "number of ways to split tip must be greater than 0";
                    this.setState({ message: message }); // creates a NEW state object
                    return;
                }
            }

            // convert bill amount and tip percentage to numeric values to calculate tip
            billAmount = parseFloat(billEntered);
            percentTip = parseFloat(tipEntered);
            this.calcTip(billAmount, percentTip, splitTip);
        };
    };

    //this function calculates the total tip and the amount of tip per person/group

    calcTip = (billAmount, percentTip, splitTip) => {
        //calculate tip amount based on dollar amount entered and percent tip

        let totalTip = (billAmount * (percentTip / 100));

        //split the tip amount then number of ways entered
        let splitTipAmt = totalTip / splitTip;

        //tip amounts should be rounded to 2 decimal places
        totalTip = totalTip.toFixed(2);
        splitTipAmt = splitTipAmt.toFixed(2);
        let isTipCalc = true;
        this.setState({ totalTip: totalTip, splitTip: splitTip, splitTipAmt: splitTipAmt, isTipCalc: isTipCalc });

    };


    // this function is called when the submit button is clicked

    handleFormSubmit = event => {
        event.preventDefault();
        // only able to submit if all items of the form are entered
        // call to calculate tip
        this.validateInput();

    };
    //this function sets the forms value back to the initial state

    resetForm = () => {
        console.log(this.baseState);
        this.setState(this.baseState);
    };
// render the form
// input bill amount before tax, percent tip want to leave, and the number of ways to split the tip
// the calculate tip button is disabled until all three values are entered
// the tip amounts will be displayed if the tip has been calculated
// use can press cancel button to reset the form and perform another calculation
// if any input is entered incorrectly, a message will be displayed

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
                    <Col size="sm-4" />
                    <Col size="sm-4">
                        <h4> {this.state.message}</h4>
                        <form>
                            <h2>Bill Amount Before Tax</h2>
                            <Input
                                type="text"
                                value={this.state.billAmt}
                                onChange={this.handleInputChange}
                                name="billAmt"
                                placeholder="Bill Amount (required)"
                            />

                            <h2>Percent Tip to Calculate</h2>
                            <Input
                                type="text"
                                value={this.state.tipPercent}
                                onChange={this.handleInputChange}
                                name="tipPercent"
                                placeholder="Percent Tip(required)"
                            />
                            <h2># of Ways to Split Tip</h2>

                            <Input
                                type="text"
                                value={this.state.splitTip}
                                onChange={this.handleInputChange}
                                name="splitTip"
                                placeholder="# of ways to split tip"
                            />
                            <FormBtn
                                onClick={this.resetForm}
                                type="button">Cancel
                            </FormBtn>

                            <FormBtn
                                disabled={!(this.state.billAmt) || !(this.state.tipPercent) || !(this.state.splitTip)}
                                onClick={this.handleFormSubmit}
                            >
                                Calculate Tip
							</FormBtn>

                        </form>
                    </Col>
                </Row >
                <Row>
                    <Col size="sm-4" />
                    <Col size="sm-4">
                        {this.state.isTipCalc ? (
                            <Viewtip
                                totalTip={this.state.totalTip}
                                splitTip={this.state.splitTip}
                                splitTipAmt={this.state.splitTipAmt}>
                            </Viewtip>
                        ) : null
                        }
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Tips;
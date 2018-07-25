import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Button, Form, Modal} from "semantic-ui-react";

interface MainState {
    modalOpen: boolean;
    inputContent: string;
}

export class Main extends React.Component<{}, MainState> {
    constructor(props: {}, context: any) {
        super(props, context);

        this.state = {
            modalOpen: false,
            inputContent: "",
        };
    }

    render() {
        return (
            <div>
                <Button content="Click Me"
                        onClick={() => this.setState({modalOpen: true})}/>
                <Modal open={this.state.modalOpen}>
                    <Modal.Header>Test Modal</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Input content={this.state.inputContent}
                                        onChange={(e, d) => this.setState({inputContent: d.value})}/>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button content="Close"
                                onClick={() => this.setState({modalOpen: false})}/>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

ReactDom.render(
    <Main/>,
    document.getElementById("content"),
);

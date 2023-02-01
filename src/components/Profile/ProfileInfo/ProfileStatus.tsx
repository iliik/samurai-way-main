import React from "react";


export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: any) => {
        this.setState({
                status:
                e.currentTarget.value
            }
        )
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }

    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '---'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true}
                               onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>


        )
    }
}

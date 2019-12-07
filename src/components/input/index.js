import React,{Component} from 'react'

class InputNumber extends Component {
    constructor(props){
        super(props)
        this.state = {
            innerValue:''
        }
    }

    get isControl(){
        return 'value' in this.props
    }

    get value(){
        return this.isControl?this.props.value:this.state.innerValue
    }

    render(){
        return(
            <input value={this.value} onChange={(e)=>{
                if(!this.isControl){
                    this.setState({
                        innerValue:e.target.value
                    })
                }
                this.props.onChange(e)
            }} type="text"/>
        )
    }
}
export default InputNumber
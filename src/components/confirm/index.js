import React ,{Component} from 'react'
import ReactDOM from 'react-dom';


const confirm = msg =>{
    let node = null
    class ConfirmCom extends Component {	
		render(){
            return <div>{msg}</div>
        }
        componentWillUnmount(){
            if(node){
                ReactDOM.unmountComponentAtNode(node)
                document.removeChild(node)
            }
        }
	}
	return new Promise((resolve,reject)=>{
        node = document.createElement('div')
        document.body.appendChild(node)
        ReactDOM.render(<ConfirmCom/>,node,()=>{
            console.log('renderCb')
            resolve(true)
        })
    })
}
export default confirm
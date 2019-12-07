import React,{Component} from "react";
import confirm from "./components/confirm"

class Demo extends Component{
	render() {
		return <div>demo</div>
	}

	async componentDidMount(){
        let res = await confirm("确定删除吗")
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
}

class App extends Component{
	render() {
		return <Demo/>
	}
}


export default App

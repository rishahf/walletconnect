import { Web3Button, Web3NetworkSwitch } from '@web3modal/react'
const HomePage = () => {
  // const [state, setState] = useState({
  //   state: {
  //     vikram: '',
  //     abhay: ''
  //   }
  // })

  // const handleChange = (value: any) => {
  //   setState({
  //     ...state,
  //     state: {
  //       abhay: value,
  //     }
  //   });
  // };
  // const [state, setState] = useState({
  //   abhay: "",
  // });
  // const handleAbhayChange = (event) => {
  //   setState({ ...state, abhay: event.target.value });
  // };
  // const handleAbhayChange = (event: string) => {
  //   setState({ ...state, abhay: event.target.value });
  // };


  // const updateValue = (value: any) => {
  //   setState(prevState => ({
  //     ...prevState,
  //     state: {
  //       ...prevState.state,
  //       abhay: value
  //     }
  //   }));
  // }


  // const handleChange1 = (e: any) => {
  //   setState({ ...state abhay: e.target.value });
  // };
  return (
    <>
      <div className="justify-content-center" style={{ textAlign: "center", paddingTop: "50px" }}>
        {/* <input
          type="text"
          value={state.abhay}
          onChange={(e: any) => handleChange(e.target.value)}
        /> */}
        {/* <div>
          <input type="text" value={state.state.abhay} onChange={handleChange1} />
          <p>Abhay value: {state.state.abhay}</p>
        </div> */}
        {/* <div>
          <input type="text" value={state?.state?.abhay} onChange={updateValue} />
          <p>Abhay value: {state?.state?.abhay}</p>
        </div> */}
        <Web3Button />
        {/* <Web3Modal projectId={'9fa5840d68d76d33bb2637b66c8f6eba'} /> */}
        <Web3NetworkSwitch />


        {/* <Connect />+ */}
      </div>
    </>
  )

}
export default HomePage
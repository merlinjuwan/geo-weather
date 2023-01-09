import logo from '../logo.png';

function LoadLogo() {

	const loadStyle = {
		backgroundColor: "rgb(68 112 201)",
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	}

	const logoStyle = {
		height: "40vmin",
		pointerEvents: "none"
	}

	return (
		<div className="App-header" style={loadStyle}>
        	<img src={logo} className="App-logo" alt="logo" style={logoStyle} />
      	</div>
      );	
}

export default LoadLogo;
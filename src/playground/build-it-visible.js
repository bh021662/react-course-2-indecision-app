class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey.  These are now some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*const appObject= {
    title: 'Visibility Toggle',
    buttonText: 'Show Details'
};

const onShowDetails = (e) => {
    if(appObject.buttonText === "Show Details"){
        appObject.buttonText = "Hide Details";
    } else {
        appObject.buttonText = "Show Details";
    }
    renderApp();
};

const renderApp= () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            <button onClick={onShowDetails}>{appObject.buttonText}</button>
            {appObject.buttonText === "Hide Details" && <p>'Hey.  These are some details you can now see!</p>}         
        </div>
    );

    ReactDOM.render(template, appRoot);

};

const appRoot = document.getElementById('app');

renderApp();*/
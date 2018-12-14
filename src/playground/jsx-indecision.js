console.log('App.js is running!');

//JSX - JavaScript XML
const appObject = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
    
};

const onRemoveAll = (e) => {
    appObject.options = [];

    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderApp= () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <p>{(appObject.options && appObject.options.length > 0) ? 'Here are your options' : 'No Options'}</p>
            <ol>
                {
                    appObject.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

renderApp();
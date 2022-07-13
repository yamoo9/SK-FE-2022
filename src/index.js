const {
  React: { StrictMode },
  ReactDOM: { createRoot },
} = globalThis;

const container = document.getElementById('root');

const state = Object.freeze({
  strong: {
    content: 'React',
  },
});

const paragraphStyles = {
  background: '#111',
  color: '#eee',
};

const reactApp = (
  <StrictMode>
    <h1 className="headline">
      <strong>{state.strong.content}</strong> Programming
    </h1>
    <p tabIndex="-1" style={paragraphStyles}>
      {state.strong.content} is <abbr title="User Interface">UI</abbr> Building
      Library
    </p>
  </StrictMode>
);

const reactRoot = createRoot(container);
reactRoot.render(reactApp);

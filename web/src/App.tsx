import packageJson from '../package.json';

function App() {
  return (
    <>
      <p>
        build {packageJson.version}-{packageJson.buildRef} &middot; {packageJson.buildDate}
      </p>
    </>
  );
}

export default App;

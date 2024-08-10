import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept.jsx';
import TabButton from './components/tabButton.jsx';
import { useState } from 'react';


//short with ... spread operator
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  return (
    <div>
    <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>  
            <CoreConcept title= {CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image = {CORE_CONCEPTS[1].image}/>
            <CoreConcept title= {CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image = {CORE_CONCEPTS[2].image}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          
          </menu>
            {!selectedTopic ? <p>Please select a topic.</p> : (
             <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre> 
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>   
            </div>
            )}
        </section>
        
      </main>
    </div>
  );
}

export default App;

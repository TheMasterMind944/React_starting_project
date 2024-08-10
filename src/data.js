import compotentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
    {
        image: compotentsImg,
        title: 'Components',
        description: 'The core UI building block - compose the user interface by combining multiple components'
    },
    {
        image: jsxImg,
        title: 'JSX',
        description: 'Return (potentially dynamic) HTML(ish) code to define the'
    },
    {
        image: propsImg,
        title: 'Props',
        description: 'Make components configurable (the therefore reusable) by'
    },
    {
        image: stateImg,
        title: 'State',
        description: 'React-managed data which, when changed, causes the component to re-render & the UI to update'
    }
]

export const EXAMPLES = {
    components: {
        title: 'Components',
        description: 'Components are the building blocks of React',
            code: `function Welcome() {
        return <h1>Hello, World"</h1>'; }`
    },
    jsx: {
    title: 'JSX',
    description: 'JSX is a syntax extension to JavaScript. it is similar to a template',
    code: `<div> 
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
    </div>`,
    },
    props: {
        title: 'Props',
        description: 'Components accept arbitrary inputs called props',
        code: `function Welcone(props) {
        return <h1>Hello, {props.name}</h1>; }`,
    },
    state: {
        title: 'State',
        description: 'State allows React components to change their output over time',
        code: `function Counter() {
         const [isVisible, setIsVisible] = useState(false);}`
    }
}

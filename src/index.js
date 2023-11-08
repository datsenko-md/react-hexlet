import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Components/Hello.jsx';
import HelloMessage from './Components/HelloMessage.jsx';
import List from './Components/List.jsx';
import Article from './Components/Article.jsx';
import Component from './Components/Component.jsx';
import Alert from './Components/Alert.jsx';
import Clock from './Components/Clock.jsx';
import Counter from './Components/Counter.jsx';
import Help from './Components/Help.jsx';
import TextInput from './Components/TextInput.jsx';
import List2 from './Components/List2.jsx';
import ListF from './Components/ListF.jsx';
import Card from './Components/Card.jsx';
import { App, UserContext} from './Components/App.jsx';
import { App2, CompanyContext} from './Components/App2.jsx';
import Clock2 from './Components/Clock2.jsx';
import CustomTextInput from './Components/CustomTextInput.jsx';
import Example, { Input, Counter2, App3 } from './Components/Example.jsx';

const items = [
  { name: 'first', id: 1 },
  { name: 'second', id: 2 },
];
const data = { header: 'Подзаголовок 1', body: 'Тело статьи' }

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Hello />);
// root.render(<HelloMessage name="Anna" />);
// root.render(<HelloMessage />);
// root.render(<List data={items} />);
// root.render(<Article {...data} />);
// root.render(<Component />);
// const vdom = <Alert>
//   <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
//   <hr />
//   <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
// </Alert>;
// root.render(vdom);
// root.render(<Clock />)
// root.render(<Counter />);
// const vdom = <div>
//   <Counter />
//   <Counter count={5}/>
// </div>;
// root.render(vdom);
// root.render(<Help />);
// root.render(<TextInput text="initial text" />);
// root.render(<List2 items={[1, 2, 3, 4, 5]} />)
// root.render(<ListF items={[1, 2, 3, 4, 5]} />)
// const vdom = (
//   <Card>
//     <Card.Body>
//       <Card.Title>
//         What is love?
//       </Card.Title>
//     </Card.Body>
//   </Card>
// );
// root.render(vdom);
// const currentUser = { name: 'Toto' };
// const vdom = (
//   <UserContext.Provider value={currentUser}>
//     <App />
//   </UserContext.Provider>
// );
// root.render(vdom);
// const company = {
//   name: 'Hexlet Ltd.',
//   address: {
//     street: 'Itälahdenkatu 22 A',
//     post: '00210',
//     city: 'Helsinki',
//     country: 'Finland',
//   },
// };
// const vdom = (
//   <CompanyContext.Provider value={company}>
//     <App2 />
//   </CompanyContext.Provider>
// );
// root.render(vdom);
// root.render(<Clock2 />);
// root.render(<CustomTextInput />);
// root.render(<Example />);
// root.render(<Input />);
// root.render(<Counter2 />);
root.render(<App3 />);

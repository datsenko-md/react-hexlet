import React, { useState, useEffect, useRef } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const [background, setBackground] = useState('white');

  useEffect(() => {
    console.log(`Кликов ${count}`);
    const newBackground = count % 2 === 0 ? 'white' : 'CornflowerBlue';
    setBackground(newBackground);
  }, [count]);

  return (
    <div>
      <p style={{ background }}>Вы нажали {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}

const Input = () => {
  const inputEl = React.useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Фокус</button>
    </>
  );
};

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <h1 onClick={() => setCount(count + 1)}>
      Click me
      <br />
      Now: {count}, before: {prevCount}
    </h1>
  );
};

const Greeting = React.memo(({ name }) => {
  console.log(`Компонент Greeting отрисован в ${new Date().toLocaleString()}`);
  return <h3>Hello, {name}</h3>;
});

const Button = React.memo(({ onClick }) => {
  console.log(`Компонент Button был отрисован в ${new Date().toLocaleString()}}`);
  return <button onClick={onClick}>Нажми меня</button>
})

const App3 = () => {
  const [name, setName] = useState('');
  // const buttonHandler = React.useMemo(() => () => setName('world'), []);
  const buttonHandler = React.useCallback(() => setName('world'), []);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Greeting name={name} />
      <Button onClick={buttonHandler} />
    </>
  );
};

export default Example;
export { Input, Counter2, App3 }
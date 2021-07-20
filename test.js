const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

const sayGoodbnye = (name) => {
  console.log(`Goodbnye ${name}`);
};


interface Props {
  whatever: (name: string) => void
}

const saySomething = (thingToSayFunc) => {
  const name = "bodon";

  thingToSayFunc(name);
};

saySomething(sayHello);

saySomething(sayGoodbnye);

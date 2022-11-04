import { useState } from "react";
import "./App.css";

interface IObjectKeys {
  [key: string]: string | number;
}
interface PersonInput extends IObjectKeys {
  name: string;
  age: number;
  weight: number;
  height: number;
}

const emptyPerson: PersonInput = {
  name: "",
  age: 0,
  weight: 0,
  height: 0,
};

function App() {
  const [personList, setPersonList] = useState([{ ...emptyPerson }]);

  function addNewPerson() {
    setPersonList([...personList, { ...emptyPerson }]);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const { name, value } = e.target;
    const list = [...personList];
    list[index][name] = value;
    setPersonList(list);
  }

  console.count("rendering...");

  return (
    <div className="App">
      {personList.map((person, index) => (
        <div className="box" key={index}>
          <label about="name">Nome: </label>
          <input
            value={person.name}
            name="name"
            onChange={(e) => {
              handleChange(e, index);
              if (
                personList[index + 1]?.name == undefined &&
                e.target.value !== ""
                // if the next person field is not created and user didn't clear text, create
              )
                addNewPerson();
            }}
            placeholder="Nome da Pessoa"
            maxLength={60}
          />
          <label about="age">Idade: </label>
          <input
            type="number"
            value={person.age}
            name="age"
            maxLength={4}
            // max={9999}
            onChange={(e) => handleChange(e, index)}
          />
          <label about="weight">Peso: </label>
          <input
            name="weight"
            value={person.weight}
            type="number"
            onChange={(e) => handleChange(e, index)}
            placeholder="1"
          />
          <label about="height">Altura (em cm): </label>
          <input
            name="height"
            value={person.height}
            type="number"
            onChange={(e) => handleChange(e, index)}
            placeholder="1"
          />
        </div>
      ))}
    </div>
  );
}

export default App;

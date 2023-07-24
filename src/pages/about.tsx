import Image from "next/image";
import { useState } from "react";

const AboutPage = () => {
  const [number, setNumber] = useState<number>(0);
  const [showCards, setShowCards] = useState<boolean>(true);

  return (
    <div style={{ padding: "50px" }}>
      <h1>This is About page</h1>
      <div>Number is {number}</div>
      <CustomButton
        onClick={() => {
          setNumber(number + 1);
        }}
        content='Increase by 1'
      />
      <CustomButton
        content='Decrease by 1'
        onClick={() => {
          setNumber(number - 1);
        }}
      />
      <CustomButton
        content='Toggle Cards'
        onClick={() => {
          setShowCards(!showCards);
        }}
      />
      {!showCards ? null : (
        <div>
          <InforCard
            name='Carl'
            age={75}
            url='https://www.dhm.de/fileadmin/medien/lemo/images/doenibio.jpg'
            job='admiral'
          />
          <InforCard
            name='Joachim'
            job='general'
            age={60}
            url='https://upload.wikimedia.org/wikipedia/commons/f/f9/Bundesarchiv_Bild_183-H04810%2C_Joachim_von_Ribbentrop.jpg'
          />
          <InforCard
            borderColor='red'
            name='adolf'
            job='fuhrer'
            age={56}
            url='https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg'
          />
        </div>
      )}
    </div>
  );
};
export default AboutPage;

interface Contract {
  name: string;
  age: number;
  job: string;
  url: string;
  borderColor?: "blue" | "red" | "yellow" | "white" | "purple";
}

function InforCard(props: Contract) {
  return (
    <div
      style={{
        border: `3px solid ${props.borderColor ? props.borderColor : "#fff"}`,
        borderRadius: 5,
        width: 300,
        height: 500,
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      <div>Hello my name is {props.name}</div>
      <div>I am {props.age} years old</div>
      <div>My job is {props.job}</div>
      <div>I look like this</div>
      <div>
        <img src={props.url} height={300} width='100%' alt='' />
      </div>
    </div>
  );
}

function CustomButton(props: { content: string; onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "3px 10px",
        borderRadius: 5,
        color: "#fff",
        fontSize: "15px",
        backgroundColor: "blue",
      }}
    >
      {props.content}
    </button>
  );
}

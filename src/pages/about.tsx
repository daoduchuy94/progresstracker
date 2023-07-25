import Image from "next/image";
import { useEffect, useState } from "react";
import { Userdocument } from "./api/users";

const AboutPage = () => {
  const [number, setNumber] = useState<number>(0);
  const [showCards, setShowCards] = useState<boolean>(true);
  const [userDocuments, setUserDocuments] = useState<Userdocument[]>([]);

  useEffect(() => {
    // Fetch user data from the API endpoint when the component mounts
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUserDocuments(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  return (
    <div style={{ padding: "50px" }}>
      <h1>This is About page</h1>
      <div>Number is {number}</div>
      <CustomButton
        onClick={() => {
          setNumber(number + 1);
        }}
        content="Increase by 1"
      />
      <CustomButton
        content="Decrease by 1"
        onClick={() => {
          setNumber(number - 1);
        }}
      />
      <CustomButton
        content="Toggle Cards"
        onClick={() => {
          setShowCards(!showCards);
        }}
      />
      {!showCards ? null : (
        <div>
          {/* Map over the userDocuments array and render an InforCard for each user */}
          {userDocuments.map((user) => (
            <InforCard
              key={user.email}
              age={user.age}
              date_created={user.date_created}
              email={user.email}
              name={user.name}
              password={user.password}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default AboutPage;

function InforCard(props: Userdocument) {
  return (
    <div
      style={{
        border: `3px solid #fff`,
        borderRadius: 5,
        width: 300,
        height: 200,
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      <div>Hello my name is {props.name}</div>
      <div>I am {props.age} years old</div>
      <div>My Password is {props.password}</div>
      <div>My Email is {props.email}</div>
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
//K7TTt3QfIxjfC6_w5uT8

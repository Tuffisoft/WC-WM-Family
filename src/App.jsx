import teams from "./assets/teams.json"
import Team from "./components/Team";

export default function App() {
  return (
      <div className={"container"}>
        <main className={"main"}>
          <h1>
            World Cup Family Draw
          </h1>

          <div className={"grid"}>
            {
              teams.map((team, i) => <Team {...team} key={i}/>)
            }
          </div>
        </main>
      </div>
  );
}



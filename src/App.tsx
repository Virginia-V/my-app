import "./App.css";
import { EventCard } from "./components";
import { events } from "./services";

function App() {
  return (
    <div style={{ margin: 20 }}>
      {events.map((event) => {
        return (
          <EventCard
            key={event._id}
            type={event.type}
            title={event.name}
            date={event.date}
            image={event.image}
            description={event.description}
            activities={event.activity}
            link={event.link}
          />
        );
      })}
    </div>
  );
}

export default App;

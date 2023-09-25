import Image from "next/image";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "./components/EventList";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main className="">
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </main>
  );
}

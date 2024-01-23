import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AwardIcon,
  ClockIcon,
  MapPinIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

type User = {
  id: string;
  name: string;
  username: string;
  profilePicture?: string;
};

const users: User[] = [
  {
    id: "1",
    name: "Anthony Cueva",
    username: "cuevantn",
    profilePicture: "https://avatars.githubusercontent.com/u/83598208?v=4",
  },
  {
    id: "2",
    name: "Guillermo Rauch",
    username: "rauchg",
    profilePicture: "https://avatars.githubusercontent.com/u/13041?v=4",
  },
  {
    id: "3",
    name: "Evan You",
    username: "youyuxi",
    profilePicture: "https://avatars.githubusercontent.com/u/499550?v=4",
  },
  {
    id: "4",
    name: "Tim Neutkens",
    username: "timneutkens",
    profilePicture: "https://avatars.githubusercontent.com/u/6324199?v=4",
  },
  {
    id: "5",
    name: "Rich Harris",
    username: "Rich-Harris",
    profilePicture: "https://avatars.githubusercontent.com/u/1162160?v=4",
  },
  {
    id: "6",
    name: "Sara Vieira",
    username: "SaraVieira",
    profilePicture: "https://avatars.githubusercontent.com/u/1051509?v=4",
  },
];

type Event = {
  id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  location: string;
  organizerId: string;
  assistantsCount: number;
  highlightedAssistantsIds: string[];
};
const events: Event[] = [
  {
    id: "1",
    title: "Voley Playuyos",
    description: "Voley Playa en Barranco",
    date: new Date("2024-01-28T15:00:00.000Z"),
    image:
      "https://images.pexels.com/photos/2444852/pexels-photo-2444852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Playa los Yuyos, Barranco",
    organizerId: "1",
    assistantsCount: 7,
    highlightedAssistantsIds: ["3", "2", "5"],
  },
  {
    id: "2",
    title: "Maratón Entel",
    description: "Maratón Entel 2021",
    date: new Date("2024-01-26T13:00:00.000Z"),
    image:
      "https://images.pexels.com/photos/2654902/pexels-photo-2654902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Playa Costa Azul, Ventanilla",
    organizerId: "2",
    assistantsCount: 37,
    highlightedAssistantsIds: ["3", "4", "1"],
  },
  {
    id: "3",
    title: "Partido de Fútbol Amistoso",
    description: "Encuentro amistoso entre equipos locales",
    date: new Date("2024-02-05T18:30:00.000Z"),
    image:
      "https://images.pexels.com/photos/685382/pexels-photo-685382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Estadio Municipal, Miraflores",
    organizerId: "5",
    assistantsCount: 15,
    highlightedAssistantsIds: ["2", "4", "6"],
  },
  {
    id: "4",
    title: "Torneo de Tenis Playa",
    description: "Competición de tenis en la playa",
    date: new Date("2024-02-12T14:00:00.000Z"),
    image:
     "https://images.pexels.com/photos/2694942/pexels-photo-2694942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Playa Punta Sal, Tumbes",
    organizerId: "6",
    assistantsCount: 20,
    highlightedAssistantsIds: ["1", "3", "5"],
  },
];

export default function Home() {
  return (
    <div className="container flex w-screen h-screen space-x-6 p-4">
      <aside className="flex-none w-72 bg-muted rounded p-4 space-y-4 flex flex-col rounded-xl">
        <div className="flex-none flex items-center space-x-2">
          <AwardIcon className="w-6 h-6" />
          <span className="font-bold text-lg">Dezport</span>
        </div>

        <div className="grow flex flex-col space-y-2">
          <Button variant="outline">
            <Link href="/">Inicio</Link>
          </Button>
          <Button variant="outline">
            <Link href="/search">Buscar</Link>
          </Button>
        </div>

        <div className="flex-none flex flex-col">
          <Button variant="outline" className="h-min space-x-2 justify-start">
            <Avatar className="flex-none">
              <AvatarImage src="https://avatars.githubusercontent.com/u/83598208?v=4" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grow flex flex-col -space-y-1 items-start">
              <span className="">Anthony Cueva</span>
              <span className="text-sm text-muted-foreground">@cuevantn</span>
            </div>
            <MoreHorizontalIcon className="flex-none w-6 h-6" />
          </Button>
        </div>
      </aside>

      <ScrollArea className="h-full px-4">
        <main className="mb-8">
          <h1 className="font-bold text-2xl mb-4">Eventos para ti</h1>
          <div className="space-y-4">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </main>
      </ScrollArea>

      <div className="flex-none w-96 border rounded-xl p-4">
        <h2>secondary</h2>
      </div>
    </div>
  );
}

const EventCard = (event: Event) => {
  let host = users.find((user) => user.id === event.organizerId);
  if (!host) return null;

  let highlightedAssistants = users.filter((user) =>
    event.highlightedAssistantsIds.includes(user.id)
  );

  return (
    <Card className="overflow-hidden flex grid grid-cols-2">
      <div className="">
        <AspectRatio ratio={1 / 1}>
          <Image
            alt={"Image of " + event.title}
            src={event.image}
            fill
            className="rounded-l-xl object-cover"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <div>
          <h2 className="font-bold text-xl">
            {event.title}
            <span className="ml-2 font-normal">by</span>
          </h2>
          <div className="flex items-center space-x-2">
            <Avatar className="flex-none">
              <AvatarImage src={host.profilePicture} />
              <AvatarFallback>{host.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-grow flex flex-col -space-y-1">
              <span className="text-sm">{host.name}</span>
              <span className="text-sm text-muted-foreground">
                @{host.username}
              </span>
            </div>
          </div>
        </div>
        <div className="grow space-y-2">
          <div className="flex space-x-2 items-center">
            <MapPinIcon className="w-4 h-4" />
            <p className=""> {event.location}</p>
          </div>

          <div className="flex space-x-2 items-center">
            <ClockIcon className="w-4 h-4" />
            <p className="tabular-nums">
              {new Intl.DateTimeFormat("es-PE", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }).format(event.date)}
            </p>
          </div>

          <div className="relative">
            <div className="absolute flex -space-x-4">
              {highlightedAssistants.map((user) => (
                <Avatar key={user.id} className="w-7 h-7">
                  <AvatarImage src={user.profilePicture} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm text-muted-foreground pt-[2px] leading-6">
              <span className="text-transparent">xxxxxxxxxx</span>
              {highlightedAssistants[highlightedAssistants.length - 1].name +
                " y " +
                (event.assistantsCount - 1) +
                " personas más asistirán"}
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button variant="outline" className="flex-grow">
            Asistir
          </Button>
          <Button variant="default" className="flex-grow">
            Ver más
          </Button>
        </div>
      </div>
    </Card>
  );
};

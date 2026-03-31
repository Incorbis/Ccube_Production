import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Camera, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

// SE Induction
import SeInduction1 from "../assets/Events/Events/SEInduction/1.png";
import SeInduction2 from "../assets/Events/Events/SEInduction/2.png";
import SeInduction3 from "../assets/Events/Events/SEInduction/3.png";
import SeInduction4 from "../assets/Events/Events/SEInduction/4.png";
import SeInduction5 from "../assets/Events/Events/SEInduction/5.png";

// SPOS Expert Session
import Spos1 from "../assets/Events/Events/SposExpertSession/1.jpg";
import Spos2 from "../assets/Events/Events/SposExpertSession/2.jpg";
import Spos3 from "../assets/Events/Events/SposExpertSession/3.jpg";
import Spos4 from "../assets/Events/Events/SposExpertSession/4.jpg";

// Teacher Day
import TeacherDay5 from "../assets/Events/Events/TeacherDay/5.jpg";
import TeacherDay7 from "../assets/Events/Events/TeacherDay/7.jpg";
import TeacherDay8 from "../assets/Events/Events/TeacherDay/8.jpg";
import TeacherDay9 from "../assets/Events/Events/TeacherDay/9.jpg";

// Engineer Day
import EngineerDay1 from "../assets/Events/Events/engineerDay/1.jpg";
import EngineerDay2 from "../assets/Events/Events/engineerDay/2.jpg";
import EngineerDay3 from "../assets/Events/Events/engineerDay/3.jpg";
import EngineerDay4 from "../assets/Events/Events/engineerDay/4.jpg";
import EngineerDay5 from "../assets/Events/Events/engineerDay/5.jpg";

// CDAC
import Cdac1 from "../assets/Events/Events/CDAC/1.jpg";
import Cdac2 from "../assets/Events/Events/CDAC/2.jpg";
import Cdac3 from "../assets/Events/Events/CDAC/3.jpg";
import Cdac4 from "../assets/Events/Events/CDAC/4.jpg";
import Cdac5 from "../assets/Events/Events/CDAC/5.jpg";

// Testing Tools
import TestingTools1 from "../assets/Events/Events/TestingTools/1.png";
import TestingTools2 from "../assets/Events/Events/TestingTools/2.png";
import TestingTools3 from "../assets/Events/Events/TestingTools/3.png";

// Cleaning Camp Lohagad
import CleaningCamp1 from "../assets/Events/Events/CleaningCampLohagad/1.jpg";
import CleaningCamp2 from "../assets/Events/Events/CleaningCampLohagad/2.jpg";
import CleaningCamp3 from "../assets/Events/Events/CleaningCampLohagad/3.jpg";
import CleaningCamp4 from "../assets/Events/Events/CleaningCampLohagad/4.jpg";

// Old Age Visit
import OldAge1 from "../assets/Events/Events/OldAgeVisit/1.jpg";
import OldAge2 from "../assets/Events/Events/OldAgeVisit/2.jpg";
import OldAge3 from "../assets/Events/Events/OldAgeVisit/3.jpg";
import OldAge4 from "../assets/Events/Events/OldAgeVisit/4.jpg";
import OldAge5 from "../assets/Events/Events/OldAgeVisit/5.jpg";

// Farewell
import Farewell1 from "../assets/Events/Events/Farewell/1.jpg";
import Farewell2 from "../assets/Events/Events/Farewell/2.jpg";
import Farewell3 from "../assets/Events/Events/Farewell/3.jpg";
import Farewell4 from "../assets/Events/Events/Farewell/4.jpg";
import Farewell5 from "../assets/Events/Events/Farewell/5.jpg";

// Trekking Cleaning
import TrekkingCleaning1 from "../assets/Events/Events/TrekkingCleaning/1.jpg";
import TrekkingCleaning3 from "../assets/Events/Events/TrekkingCleaning/3.jpg";
import TrekkingCleaning2 from "../assets/Events/Events/TrekkingCleaning/2.jpg";
import TrekkingCleaning4 from "../assets/Events/Events/TrekkingCleaning/4.jpg";
import TrekkingCleaning5 from "../assets/Events/Events/TrekkingCleaning/5.jpg";

//literacy
import Literacy1 from "../assets/Events/Events/Literacy/1.jpg";
import Literacy2 from "../assets/Events/Events/Literacy/2.jpg";
import Literacy3 from "../assets/Events/Events/Literacy/3.jpg";
import Literacy4 from "../assets/Events/Events/Literacy/4.jpg";
import Literacy5 from "../assets/Events/Events/Literacy/5.jpg";

// Type definitions
interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  color: string;
  photos: string[];
}

// Events data with all local images
const events: Event[] = [
  {
    id: 1,
    title: "SE Induction and Fresher's 2K25",
    date: "Jul 22, 2025",
    category: "Cultural",
    description:
      "A warm welcome event for newly joined SE students, featuring introductions to the department, club activities, and an exciting fresher's celebration.",
    color: "from-purple-500 to-pink-500",
    photos: [SeInduction1, SeInduction2, SeInduction3, SeInduction4, SeInduction5],
  },
  {
    id: 2,
    title: "SPOS Expert Session",
    date: "Aug 8, 2025",
    category: "Expert Session",
    description:
      "An expert session on System Programming and Operating Systems (SPOS) aimed at TE students to deepen their understanding of core CS concepts.",
    color: "from-blue-500 to-indigo-500",
    photos: [Spos1, Spos2, Spos3, Spos4],
  },
  {
    id: 3,
    title: "C Cube Activity (Teacher's Day)",
    date: "Sep 5, 2025",
    category: "Cultural",
    description:
      "A special event organised by C-Cube students to celebrate and honour the teaching staff on Teacher's Day.",
    color: "from-emerald-500 to-teal-500",
    photos: [TeacherDay5, TeacherDay7, TeacherDay8, TeacherDay9],
  },
  {
    id: 4,
    title: "C Cube Activity (Engineer's Day)",
    date: "Sep 12, 2025",
    category: "Technical",
    description:
      "A technical celebration event for Engineer's Day, encouraging students to showcase their innovative ideas and engineering spirit.",
    color: "from-orange-500 to-amber-500",
    photos: [EngineerDay1, EngineerDay2, EngineerDay3, EngineerDay4, EngineerDay5],
  },
  {
    id: 5,
    title: "CDAC Visit",
    date: "Dec 28, 2024",
    category: "Industrial Visit",
    description:
      "TE students visited CDAC gaining insights into high-performance computing, cybersecurity, AI, embedded systems, IoT, and real-world technology applications.",
    color: "from-cyan-500 to-blue-500",
    photos: [Cdac1, Cdac2, Cdac3, Cdac4, Cdac5],
  },
  {
    id: 6,
    title: "Expert Session on Recent Testing Tools",
    date: "Apr 15, 2024",
    category: "Expert Session",
    description:
      "An expert-led session for SE students covering current trends in software testing tools, automation, performance testing, and the role of AI in software development.",
    color: "from-indigo-500 to-violet-500",
    photos: [TestingTools1, TestingTools2, TestingTools3],
  },
  {
    id: 7,
    title: "Cleaning Camp at Lohagad",
    date: "Feb 26, 2025",
    category: "Social",
    description:
      "TE students organised a cleanliness drive at the historic Lohagad Fort to combat environmental degradation, promoting eco-friendly tourism and social responsibility.",
    color: "from-emerald-600 to-green-500",
    photos: [CleaningCamp1, CleaningCamp2, CleaningCamp3, CleaningCamp4],
  },
  {
    id: 8,
    title: "Old Age Home Visit",
    date: "Feb 26, 2025",
    category: "Social",
    description:
      "TE students visited a local old age home under C-Cube, spending time with elderly residents through singing, games, and storytelling — fostering empathy and compassion.",
    color: "from-rose-500 to-red-500",
    photos: [OldAge1, OldAge2, OldAge3, OldAge4, OldAge5],
  },
  {
    id: 9,
    title: "Farewell 2K25",
    date: "Apr 25, 2025",
    category: "Cultural",
    description:
      "A heartfelt farewell event organised for the graduating BE batch of 2025, celebrating their journey and wishing them success in their future endeavours.",
    color: "from-amber-600 to-rose-600",
    photos: [Farewell1, Farewell2, Farewell3, Farewell4, Farewell5],
  },
  {
    id: 10,
    title: "Remote Teaching",
    date: "2022",
    category: "Social",
    description:
      "C-Cube students volunteered to teach at a remote primary school, bridging the educational gap and giving back to the community.",
    color: "from-teal-500 to-cyan-500",
    // Add Literacy images here once you can confirm filenames
    photos: [Literacy1, Literacy2, Literacy3, Literacy4, Literacy5],
  },
  {
    id: 11,
    title: "Trekking & Cleanliness Drive",
    date: "Sep 15, 2023",
    category: "Social",
    description:
      "A combined trekking and cleanliness drive at Talegaon Dabhade, promoting fitness, teamwork, and environmental responsibility.",
    color: "from-orange-500 to-red-500",
    photos: [TrekkingCleaning1, TrekkingCleaning3,TrekkingCleaning2, TrekkingCleaning4, TrekkingCleaning5],
  },
];

const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeEventId, setActiveEventId] = useState<number>(events[0].id);

  const activeEvent = events.find((e) => e.id === activeEventId) || events[0];

  const openLightbox = (eventId: number, photoIndex: number): void => {
    const event = events.find((e) => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setLightbox(photoIndex);
    }
  };

  const closeLightbox = (): void => {
    setLightbox(null);
    setSelectedEvent(null);
  };

  const navigateLightbox = (direction: number): void => {
    if (!selectedEvent || lightbox === null) return;
    const newIndex = lightbox + direction;
    if (newIndex >= 0 && newIndex < selectedEvent.photos.length) {
      setLightbox(newIndex);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Gallery"
            title="Moments that shaped us"
            description="A visual journey through our events, workshops, and community gatherings"
          />
        </div>
      </section>

      {/* Events Gallery Selector */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-2">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEventId(event.id)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 whitespace-nowrap
                  ${
                    activeEventId === event.id
                      ? `bg-gradient-to-r ${event.color} text-white shadow-lg scale-105`
                      : "glass-card hover:bg-white/10 text-muted-foreground hover:text-foreground"
                  }`}
              >
                {event.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Event Photos */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal key={activeEvent.id} delay={0.1}>
            <div className="space-y-12">
              {/* Event Header */}
              <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
                {/* Decorative background glow */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${activeEvent.color} opacity-10 blur-3xl rounded-full transition-all duration-500 group-hover:scale-125`}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r ${activeEvent.color}`}
                      >
                        {activeEvent.category}
                      </span>
                      <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {activeEvent.date}
                      </span>
                    </div>
                    <h3
                      className={`text-4xl md:text-6xl font-black bg-gradient-to-r ${activeEvent.color} bg-clip-text text-transparent`}
                    >
                      {activeEvent.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                      {activeEvent.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-3xl glass-card min-w-[140px]">
                    <Camera className="w-8 h-8 mb-2 text-muted-foreground" />
                    <span className="text-2xl font-black">{activeEvent.photos.length}</span>
                    <span className="text-xs uppercase font-bold text-muted-foreground tracking-widest">
                      Photos
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeEvent.photos.map((photo, photoIndex) => (
                  <ScrollReveal key={`${activeEvent.id}-${photoIndex}`} delay={photoIndex * 0.05}>
                    <div
                      className="glass-card overflow-hidden group cursor-pointer relative aspect-[4/3] rounded-3xl"
                      onClick={() => openLightbox(activeEvent.id, photoIndex)}
                    >
                      {/* Photo */}
                      <img
                        src={photo}
                        alt={`${activeEvent.title} - Photo ${photoIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      {/* Hover content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${activeEvent.color} flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-500 shadow-xl`}
                        >
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Photo info on hover */}
                      <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white font-bold text-sm">View Full Resolution</p>
                        <p className="text-white/60 text-xs">Shot at {activeEvent.title}</p>
                      </div>

                      {/* Photo number badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black text-white uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500">
                        Image {photoIndex + 1}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  15
                </div>
                <p className="text-muted-foreground text-sm font-semibold">Events Hosted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  80+
                </div>
                <p className="text-muted-foreground text-sm font-semibold">Total Photos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-muted-foreground text-sm font-semibold">Participants</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <p className="text-muted-foreground text-sm font-semibold">Years of Memories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && selectedEvent && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold z-10">
            {lightbox + 1} / {selectedEvent.photos.length}
          </div>

          {/* Event title */}
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md z-10 max-w-md">
            <h4 className="text-white font-bold text-lg mb-1">{selectedEvent.title}</h4>
            <p className="text-white/70 text-sm">{selectedEvent.date}</p>
          </div>

          {/* Navigation buttons */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {lightbox < selectedEvent.photos.length - 1 && (
            <button
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Main image */}
          <img
            src={selectedEvent.photos[lightbox]}
            alt={`${selectedEvent.title} - Photo ${lightbox + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
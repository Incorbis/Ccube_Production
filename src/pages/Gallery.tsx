import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Camera, Calendar, Users, X, ChevronLeft, ChevronRight, Sparkles, LucideIcon } from "lucide-react";

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

// Sample events data - 15 events with 5-6 photos each
const events: Event[] = [
  {
    id: 1,
    title: "SE Induction and Fresher's 2K25",
    date: "Jul 22, 2025",
    category: "Cultural",
    description: "A warm welcome event for newly joined SE students, featuring introductions to the department, club activities, and an exciting fresher's celebration.",
    color: "from-purple-500 to-pink-500",
    photos: [
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 2,
    title: "SPOS Expert Session",
    date: "Aug 8, 2025",
    category: "Expert Session",
    description: "An expert session on System Programming and Operating Systems (SPOS) aimed at TE students to deepen their understanding of core CS concepts.",
    color: "from-blue-500 to-indigo-500",
    photos: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165833772-d99626a44bf7?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 3,
    title: "C Cube Activity (Teacher's Day)",
    date: "Sep 5, 2025",
    category: "Cultural",
    description: "A special event organised by C-Cube students to celebrate and honour the teaching staff on Teacher's Day.",
    color: "from-emerald-500 to-teal-500",
    photos: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 4,
    title: "C Cube Activity (Engineer's Day)",
    date: "Sep 12, 2025",
    category: "Technical",
    description: "A technical celebration event for Engineer's Day, encouraging students to showcase their innovative ideas and engineering spirit.",
    color: "from-orange-500 to-amber-500",
    photos: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 5,
    title: "CDAC Visit",
    date: "Dec 28, 2024",
    category: "Industrial Visit",
    description: "TE students visited CDAC gaining insights into high-performance computing, cybersecurity, AI, embedded systems, IoT, and real-world technology applications.",
    color: "from-cyan-500 to-blue-500",
    photos: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 6,
    title: "Expert Session on Recent Testing Tools",
    date: "Apr 15, 2024",
    category: "Expert Session",
    description: "An expert-led session for SE students covering current trends in software testing tools, automation, performance testing, and the role of AI in software development.",
    color: "from-indigo-500 to-violet-500",
    photos: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664720-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 7,
    title: "Cleaning Camp at Lohagad",
    date: "Feb 26, 2025",
    category: "Social",
    description: "TE students organised a cleanliness drive at the historic Lohagad Fort to combat environmental degradation, promoting eco-friendly tourism and social responsibility.",
    color: "from-emerald-600 to-green-500",
    photos: [
      "https://images.unsplash.com/photo-1582408907338-706509168284?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563245330-80126584f04c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594498257602-0175c0dc1188?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 8,
    title: "Old Age Home Visit",
    date: "Feb 26, 2025",
    category: "Social",
    description: "TE students visited a local old age home under C-Cube, spending time with elderly residents through singing, games, and storytelling — fostering empathy and compassion.",
    color: "from-rose-500 to-red-500",
    photos: [
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 9,
    title: "Farewell 2K25",
    date: "Apr 25, 2025",
    category: "Cultural",
    description: "A heartfelt farewell event organised for the graduating BE batch of 2025, celebrating their journey and wishing them success in their future endeavours.",
    color: "from-amber-600 to-rose-600",
    photos: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 10,
    title: "Engineer's Day Celebration",
    date: "Sep 2023",
    category: "Cultural",
    description: "C-Cube celebrated Engineer's Day with engaging activities and events, recognising the spirit of engineering among students.",
    color: "from-emerald-400 to-cyan-400",
    photos: [
      "https://images.unsplash.com/photo-1540575467063-178aa50ab817?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1528459584353-5297db1a9c01?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 11,
    title: "Industrial Visit – CognaTech",
    date: "Mar 2, 2024",
    category: "Industrial Visit",
    description: "Students visited CognaTech for an industrial exposure experience, gaining real-world insights into the tech industry.",
    color: "from-blue-600 to-indigo-600",
    photos: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 12,
    title: "Cleanliness Drive",
    date: "Sep 2023",
    category: "Social",
    description: "A campus cleanliness initiative organised by C-Cube to promote environmental awareness and a clean campus culture.",
    color: "from-green-500 to-emerald-500",
    photos: [
      "https://images.unsplash.com/photo-1563245330-80126584f04c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582408907338-706509168284?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594498257602-0175c0dc1188?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 13,
    title: "Remote Teaching",
    date: "2022",
    category: "Social",
    description: "C-Cube students volunteered to teach at a remote primary school, bridging the educational gap and giving back to the community.",
    color: "from-teal-500 to-cyan-500",
    photos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 14,
    title: "Remote Teaching",
    date: "2023",
    category: "Social",
    description: "Continuing the tradition of community outreach, C-Cube students conducted teaching sessions at an underprivileged school in 2023.",
    color: "from-sky-500 to-blue-500",
    photos: [
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    ]
  },
  {
    id: 15,
    title: "Trekking & Cleanliness Drive",
    date: "Sep 15, 2023",
    category: "Social",
    description: "A combined trekking and cleanliness drive at Talegaon Dabhade, promoting fitness, teamwork, and environmental responsibility.",
    color: "from-orange-500 to-red-500",
    photos: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
    ]
  },
];


const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeEventId, setActiveEventId] = useState<number>(events[0].id);

  const activeEvent = events.find(e => e.id === activeEventId) || events[0];

  const openLightbox = (eventId: number, photoIndex: number): void => {
    const event = events.find(e => e.id === eventId);
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
                  ${activeEventId === event.id 
                    ? `bg-gradient-to-r ${event.color} text-white shadow-lg scale-105 shadow-${event.color.split(' ')[0].replace('from-', '')}/20` 
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
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${activeEvent.color} opacity-10 blur-3xl rounded-full transition-all duration-500 group-hover:scale-125`} />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r ${activeEvent.color}`}>
                        {activeEvent.category}
                      </span>
                      <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {activeEvent.date}
                      </span>
                    </div>
                    <h3 className={`text-4xl md:text-6xl font-black bg-gradient-to-r ${activeEvent.color} bg-clip-text text-transparent`}>
                      {activeEvent.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                      {activeEvent.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-3xl glass-card min-w-[140px]">
                    <Camera className="w-8 h-8 mb-2 text-muted-foreground" />
                    <span className="text-2xl font-black">{activeEvent.photos.length}</span>
                    <span className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Photos</span>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Hover content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${activeEvent.color} flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-500 shadow-xl`}>
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
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
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
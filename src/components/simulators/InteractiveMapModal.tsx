import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../../types/portfolio';
import { X, MapPin, Layers, Code, Navigation } from 'lucide-react';
import L from 'leaflet';

interface InteractiveMapModalProps {
  lang: Language;
  onClose: () => void;
}

const CAMBODIA_LOCATIONS = [
  {
    nameKm: 'សាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ (NCHSUK Campus)',
    nameEn: 'National Chea Sim University of Kamchaymear',
    descKm: 'ទីតាំងកំចាយមារ ខេត្តព្រៃវែង - មជ្ឈមណ្ឌលសិក្សាស្រាវជ្រាវវិទ្យាសាស្ត្រកុំព្យូទ័រ',
    descEn: 'Kamchaymear District, Prey Veng - Center of Computer Science Excellence',
    lat: 11.5367,
    lng: 105.7483,
    type: 'university'
  },
  {
    nameKm: 'រាជធានីភ្នំពេញ (Phnom Penh Capital)',
    nameEn: 'Phnom Penh Capital Center',
    descKm: 'មជ្ឈមណ្ឌលពាណិជ្ជកម្ម និងបច្ចេកវិទ្យាកម្ពុជា',
    descEn: 'Cambodia Commercial & Tech Startup Ecosystem',
    lat: 11.5564,
    lng: 104.9282,
    type: 'city'
  },
  {
    nameKm: 'ទីរួមខេត្តព្រៃវែង (Prey Veng Provincial Hub)',
    nameEn: 'Prey Veng Provincial Hub',
    descKm: 'មជ្ឈមណ្ឌលរដ្ឋបាលខេត្តព្រៃវែង',
    descEn: 'Administrative center of Prey Veng Province',
    lat: 11.4851,
    lng: 105.3253,
    type: 'hub'
  }
];

export const InteractiveMapModal: React.FC<InteractiveMapModalProps> = ({ lang, onClose }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(CAMBODIA_LOCATIONS[0]);
  const [activeTab, setActiveTab] = useState<'map' | 'csharp'>('map');
  const [cursorCoords, setCursorCoords] = useState<{ lat: number; lng: number }>({
    lat: 11.5367,
    lng: 105.7483
  });

  useEffect(() => {
    if (activeTab !== 'map' || !mapContainerRef.current) return;

    // Clean up previous instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    try {
      const map = L.map(mapContainerRef.current, {
        center: [11.5367, 105.7483],
        zoom: 10,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

      // Add custom styled markers
      CAMBODIA_LOCATIONS.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(map);
        marker.bindPopup(`
          <div style="font-family: sans-serif; padding: 4px;">
            <b style="color: #0284c7; font-size: 13px;">${lang === 'km' ? loc.nameKm : loc.nameEn}</b>
            <p style="font-size: 11px; margin-top: 4px; color: #475569;">${lang === 'km' ? loc.descKm : loc.descEn}</p>
          </div>
        `);
      });

      map.on('mousemove', (e) => {
        setCursorCoords({
          lat: Number(e.latlng.lat.toFixed(4)),
          lng: Number(e.latlng.lng.toFixed(4))
        });
      });

      mapInstanceRef.current = map;
    } catch {
      // Fallback gracefully if leaflet DOM attaches smoothly
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [activeTab, lang]);

  const flyToLocation = (loc: typeof CAMBODIA_LOCATIONS[0]) => {
    setSelectedLocation(loc);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([loc.lat, loc.lng], 13, { duration: 1.2 });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0B101D] shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#080c14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                {lang === 'km' ? 'កម្មវិធី Desktop C# (OOP) & គេហទំព័រផែនទី Leaflet.js' : 'C# OOP Desktop & Leaflet.js Interactive GIS'}
              </h2>
              <p className="text-xs text-slate-400">
                Visual Studio C# · Object-Oriented Principles · OpenStreetMap & Leaflet.js
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-b border-white/5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'map'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'ផែនទីអន្តរកម្ម Leaflet.js' : 'Live Interactive Map'}</span>
            </button>

            <button
              onClick={() => setActiveTab('csharp')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'csharp'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'ស្ថាបត្យកម្ម C# OOP Code' : 'C# OOP Architecture'}</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>Lat: {cursorCoords.lat}</span>
            <span aria-hidden="true">·</span>
            <span>Lng: {cursorCoords.lng}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6">
          {activeTab === 'map' ? (
            <div className="space-y-4">
              {/* Quick Fly-To Locations */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 mr-1 flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-emerald-400" />
                  {lang === 'km' ? 'ទីតាំងរហ័ស:' : 'Quick Navigation:'}
                </span>
                {CAMBODIA_LOCATIONS.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => flyToLocation(loc)}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      selectedLocation.nameEn === loc.nameEn
                        ? 'bg-emerald-500 text-slate-950 font-semibold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {lang === 'km' ? loc.nameKm.split('(')[0] : loc.nameEn}
                  </button>
                ))}
              </div>

              {/* Map Canvas */}
              <div className="relative w-full h-[380px] rounded-xl overflow-hidden border border-white/10 shadow-inner bg-slate-900">
                <div ref={mapContainerRef} className="w-full h-full z-10" />
              </div>

              {/* Location Card Info */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-emerald-300 text-sm">
                    {lang === 'km' ? selectedLocation.nameKm : selectedLocation.nameEn}
                  </h4>
                  <p className="text-slate-400 mt-0.5">
                    {lang === 'km' ? selectedLocation.descKm : selectedLocation.descEn}
                  </p>
                </div>
                <div className="font-mono text-cyan-400 whitespace-nowrap">
                  GPS: [{selectedLocation.lat}, {selectedLocation.lng}]
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-200">
                <span className="font-semibold block text-emerald-300">
                  {lang === 'km' ? 'គោលការណ៍ OOP ក្នុងកម្មវិធី C# (Visual Studio)' : 'C# OOP Implementation Principles'}
                </span>
                <p className="mt-1 text-slate-300">
                  {lang === 'km'
                    ? 'កម្មវិធី Desktop នេះត្រូវបានសរសេរឡើងដោយប្រកាន់ខ្ជាប់នូវគោលការណ៍ OOP (Encapsulation, Inheritance, Polymorphism, និង Abstraction) ដើម្បីគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ និងភ្ជាប់ជាមួយ Web Leaflet Map។'
                    : 'The desktop software is engineered strictly adhering to OOP design patterns, encapsulating spatial data models and dispatching coordinate events.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#080c14] border border-white/10 text-xs font-mono text-slate-300 overflow-x-auto max-h-[360px] leading-relaxed">
{`// Sopha Panha - Computer Science Software Architecture
// National Chea Sim University of Kamchaymear
namespace KamchaymearGIS.Core
{
    public interface IGeoLocatable
    {
        double Latitude { get; }
        double Longitude { get; }
        string LocationName { get; }
        double CalculateDistance(IGeoLocatable target);
    }

    public class CampusLocation : IGeoLocatable
    {
        public double Latitude { get; private set; }
        public double Longitude { get; private set; }
        public string LocationName { get; private set; }
        public string Faculty { get; set; }

        public CampusLocation(string name, double lat, double lng, string faculty)
        {
            LocationName = name;
            Latitude = lat;
            Longitude = lng;
            Faculty = faculty;
        }

        public double CalculateDistance(IGeoLocatable target)
        {
            // Haversine formula implementation in C#
            var dLat = (target.Latitude - Latitude) * (Math.PI / 180.0);
            var dLon = (target.Longitude - Longitude) * (Math.PI / 180.0);
            var a = Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +
                    Math.Cos(Latitude * (Math.PI / 180.0)) * Math.Cos(target.Latitude * (Math.PI / 180.0)) *
                    Math.Sin(dLon / 2) * Math.Sin(dLon / 2);
            var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
            return 6371.0 * c; // Earth radius in kilometers
        }
    }
}`}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 bg-[#080c14] px-5 py-3 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">National Chea Sim University of Kamchaymear</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            {lang === 'km' ? 'បិទផ្ទាំង' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};

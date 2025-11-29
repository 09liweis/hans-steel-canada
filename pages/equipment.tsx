import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'
import { CONTACT_PHONE } from '../constants/text'

const Equipment: NextPage = () => {
  const equipmentData = {
    hero: {
      title: "Python-X Beam LI",
      subtitle: "World's Most Productive Structural Steel Fabrication",
      description: "Utilizing the latest technology in CNC beam processing, the Python-X dramatically reduces production time and increases output quality. This state-of-the-art system handles complex beam profiles with precision and efficiency.",
      image: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lfGVufDB8fHx8MTc2MTI1MTI2NHww&ixlib=rb-4.1.0&q=85"
    },
    categories: [
      {
        id: 1,
        name: "CNC 3-Dimensional High-Speed Drilling Line",
        subtitle: "Advanced Precision Drilling Technology",
        description: "Our CNC 3-Dimensional High-Speed Drilling Line represents the pinnacle of structural steel drilling technology. This advanced system delivers unmatched precision and speed, capable of drilling complex hole patterns in beams, plates, and angles with exceptional accuracy. The high-speed capabilities significantly reduce production time while maintaining the highest quality standards.",
        mainImage: "/images/equipment/cnc_3/equipment_3_0.png",
        images: [
          "/images/equipment/cnc_3/equipment_3_1.png",
          "/images/equipment/cnc_3/equipment_3_2.png",
        ]
      },
      {
        id: 2,
        name: "CNC Plasma Tubular Profiling Machine",
        subtitle: "Maximum Profiling Thickness 50mm or 2-inch",
        description: "The CNC Plasma Tubular Profiling Machine is designed for precise cutting and profiling of tubular structures. With the capability to handle materials up to 50mm (2-inch) thickness, this machine delivers clean, accurate cuts on pipes, tubes, and hollow sections. The advanced CNC control ensures repeatable precision across all production runs.",
        mainImage: "/images/equipment/cnc/cnc_plasma_01.png",
        images: [
          "/images/equipment/cnc/cnc_plasma_02.png",
          "/images/equipment/cnc/cnc_plasma_03.png"
        ]
      },
      {
        id: 3,
        name: "Gantry Plate Drilling Machine",
        subtitle: "High-Capacity Plate Processing",
        description: "Our Gantry Plate Drilling Machine offers exceptional versatility for drilling large steel plates with precision. The gantry design provides superior stability and access to the entire work surface, making it ideal for processing oversized plates commonly used in structural steel construction and heavy fabrication projects.",
        mainImage: "/images/equipment/gantry/gantry_01.png",
        images: [
          "/images/equipment/gantry/gantry_02.png",
          "/images/equipment/gantry/gantry_03.png"
        ]
      },
      {
        id: 4,
        name: "Rotating Saw",
        subtitle: "Precision Cutting for Structural Steel",
        description: "The Rotating Saw system provides accurate angular cuts on structural steel members. With its ability to rotate and position the cutting blade at precise angles, this equipment ensures perfect miters and bevels for complex structural connections. The high-powered cutting capacity handles even the heaviest sections with ease.",
        mainImage: "/images/equipment/rotating_saw/rotating_saw_01.png",
        images: [
          "/images/equipment/rotating_saw/rotating_saw_02.png",
          "/images/equipment/rotating_saw/rotating_saw_03.png"
        ]
      },
      {
        id: 5,
        name: "Submerged Arc Welding Saw",
        subtitle: "High-Quality Automated Welding",
        description: "Our Submerged Arc Welding (SAW) system delivers superior weld quality through automated processes. This technology produces strong, clean welds with deep penetration, ideal for heavy structural fabrication. The submerged arc process minimizes spatter and produces consistent, high-integrity welds on thick materials.",
        mainImage: "/images/equipment/submerged_arc_welding_saw/submerged_arc_welding_saw.png",
        images:[]
      },
      {
        id: 6,
        name: "Sandblasting Machine",
        subtitle: "Surface Preparation Excellence",
        description: "The Sandblasting Machine provides thorough surface preparation for steel components before coating or painting. This equipment removes mill scale, rust, and contaminants, creating an ideal surface profile for optimal coating adhesion. Our sandblasting capability ensures superior finish quality and long-lasting corrosion protection.",
        mainImage: "/images/equipment/sandblasting/sandblasting.png",
        images: []
      },
      {
        id: 7,
        name: "Shear",
        subtitle: "Powerful Cutting Capability",
        description: "Our industrial Shear delivers clean, straight cuts on steel plates and sheets. With high tonnage capacity, this equipment can process thick materials efficiently, making it essential for preparing stock material for fabrication. The precision cutting action ensures minimal material waste and square edges for subsequent processing.",
        mainImage: "/images/equipment/shear/shear.png",
        images: []
      },
      {
        id: 8,
        name: "Press Brake Machine",
        subtitle: "Precision Bending Technology",
        description: "The Press Brake Machine offers precise bending and forming of steel plates and sheets. With advanced CNC controls, this equipment produces accurate bends at specified angles, essential for creating brackets, connections, and formed components. The high tonnage capacity handles thick materials while maintaining tight tolerances.",
        mainImage: "/images/equipment/press_brake/press_brake_01.png",
        images: [
          "/images/equipment/press_brake/press_brake_02.png",
          "/images/equipment/press_brake/press_brake_03.png",
          "/images/equipment/press_brake/press_brake_04.png"
        ]
      },
      {
        id: 9,
        name: "Plasma Cutting Machine",
        subtitle: "High-Speed Thermal Cutting",
        description: "Our Plasma Cutting Machine provides fast, precise cutting of steel plates using high-temperature plasma arc technology. This equipment excels at cutting intricate shapes and patterns with minimal heat-affected zones. The CNC-controlled system ensures consistent quality and can process multiple parts simultaneously for maximum efficiency.",
        mainImage: "/images/equipment/plasma_cutting_machine/plasma_cutting_machine_01.png",
        images: [
          "/images/equipment/plasma_cutting_machine/plasma_cutting_machine_02.png",
          "/images/equipment/plasma_cutting_machine/plasma_cutting_machine_03.png",
        ]
      },
      {
        id: 10,
        name: "Steel Tower Pre-fit Up Station",
        subtitle: "Efficient Tower Assembly",
        description: "The Steel Tower Pre-fit Up Station is designed for the efficient assembly of steel tower components. This station allows for the precise alignment and fitting of tower sections before final welding and erection. The pre-fit process ensures that all components fit together seamlessly, reducing on-site assembly time and improving overall project efficiency.",
        mainImage: "/images/equipment/steel_tower_pre_fit_up_station/steel_tower_pre_fit_up_station_01.png",
        images: [
          "/images/equipment/steel_tower_pre_fit_up_station/steel_tower_pre_fit_up_station_02.png",
          "/images/equipment/steel_tower_pre_fit_up_station/steel_tower_pre_fit_up_station_03.png",
        ]
      },
      {
        id: 11,
        name: "Sub-Merged Arc Line for Tubular Structures",
        subtitle: "Specialized Tubular Welding",
        description: "The Sub-Merged Arc Line for Tubular Structures is specifically designed for welding monopole towers, transmission poles, and other large tubular assemblies. This specialized equipment produces high-quality longitudinal and circumferential welds on tubular members, ensuring structural integrity for critical infrastructure projects.",
        mainImage: "/images/equipment/sub_merged_arc_line/sub_merged_arc_line_01.png",
        images: [
          "/images/equipment/sub_merged_arc_line/sub_merged_arc_line_02.png",
          "/images/equipment/sub_merged_arc_line/sub_merged_arc_line_03.png",
        ]
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Equipment — Hans Steel Canada</title>
        <meta name="description" content="State-of-the-art steel fabrication equipment including CNC machines, plasma cutting, welding systems, and more at Hans Steel Canada." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <div className="relative h-full">
          <Image
            src={equipmentData.hero.image}
            alt={equipmentData.hero.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="equipment-hero-title">
                  {equipmentData.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-4">
                  {equipmentData.hero.subtitle}
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {equipmentData.hero.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <div className="bg-gray-50">
        {equipmentData.categories.map((equipment, index) => (
          <section 
            key={equipment.id} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            data-testid={`equipment-section-${equipment.id}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" data-testid={`equipment-name-${equipment.id}`}>
                    {equipment.name}
                  </h2>
                  <p className="text-lg md:text-xl text-[#c41e3a] font-semibold mb-6">
                    {equipment.subtitle}
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {equipment.description}
                  </p>
                </div>

                {/* Images */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Main Image */}
                  <div className="relative h-64 md:h-80 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={equipment.mainImage}
                      alt={equipment.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Image Gallery */}
                  {equipment.images.length > 0 && (
                  <div className={`grid ${equipment.images.length > 2 ? 'grid-cols-3':'grid-cols-2'} gap-4`}>
                    {equipment.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="relative h-32 md:h-40 rounded overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${equipment.name} ${imgIndex + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Steel Tower Feature Section */}
      <section className="relative h-[70vh] min-h-[600px] bg-gray-900">
        <div className="relative h-full">
          <Image
            src="/images/equipment/steel_tower/steel_tower.png"
            alt="Steel Tower"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="steel-tower-title">
                  Steel Tower
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-6">
                  Utility Transmission, Distribution & Tele-Communication Tower Manufacturing
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
                  Hans Steel Canada specializes in the fabrication of monopole steel towers and lattice structures for utility transmission, distribution networks, and telecommunications infrastructure. Our advanced equipment and experienced team deliver precision-engineered towers that meet the highest standards for strength, durability, and reliability.
                </p>
                <button className="bg-[#c41e3a] text-white px-8 py-3 font-semibold hover:bg-[#a01829] transition-colors rounded" data-testid="steel-tower-cta">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Statement Section */}
      <section className="py-16 bg-[#0b7ed4] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl leading-relaxed">
            "Hans Steel Canada's 160,000 square foot, fully automated fabrication plant in Uxbridge, Ontario houses all of this world-class equipment under one roof. Our integrated facility includes cutting, drilling, welding, sandblasting, and painting capabilities, all managed by a state-of-the-art ERP system. This comprehensive equipment lineup enables us to deliver superior quality, competitive costs, and on-time delivery for every project."
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about how our advanced equipment and capabilities can support your structural steel fabrication needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${CONTACT_PHONE}`} 
              className="bg-[#c41e3a] text-white px-8 py-3 font-semibold hover:bg-[#a01829] transition-colors rounded inline-flex items-center gap-2"
              data-testid="contact-phone-cta"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 (905) 640-1000
            </a>
            <a 
              href="/projects" 
              className="bg-white text-gray-900 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors rounded"
              data-testid="view-projects-cta"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Equipment

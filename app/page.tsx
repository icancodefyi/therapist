import Image from "next/image";
import "../app/globals.css";
export default function Home() {
  return (
    <div className="min-h-[100vh] bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 z-10 p-6">
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5L5 20M20 5L35 20M5 20L20 35M35 20L20 35"
                stroke="#3A3A3A"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="text-[#3A3A3A]">
            <h1 className="text-lg font-light">Jennifer Hahm, Ph.D.</h1>
            <p className="text-sm">Psychological Services</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full px-20 py-40 bg-[#f3f0e8]">
        <div className="relative w-full h-[80vh]">
          {/* Background image */}
          <Image
            src="/bg-below.png"
            alt="Ocean waves background"
            fill
            className="object-cover"
            priority
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 font-bold leading-snug">
              Psychological Care for
              <br />
              Change, Insight, and Well-Being
            </h1>
            <p className="text-lg md:text-2xl max-w-6xl mb-12 leading-relaxed font-serif">
              Offering individual psychotherapy for adults via telehealth in
              Michigan and
              <span className="underline"> most U.S. states</span> through
              PSYPACT participation.
            </p>
            <button className="custom-ellipse-btn">
              SCHEDULE A CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 mt-14 px-6 md:px-8 bg-[#fefefe] h-screen">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="text-[#7e7e6b]">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#7e7e6b] mb-6">
              About Dr. Serena Blake
            </h2>
            <div className="space-y-6 text-lg font-2xl leading-relaxed font-light text-[#7e7e6b]">
              <p>
                Finding time and opportunities to care for ourselves can be
                incredibly challenging in today’s busy and demanding world. I
                believe therapy offers a dedicated space for self-care,
                providing the support and tools needed to improve this essential
                practice. Therapy can help individuals identify and clarify
                their goals, values, and the various elements that contribute to
                their well-being, recognizing that these aspects vary from
                person to person.
              </p>
              <p>
                I am dedicated to supporting this journey by offering active
                listening, psychological knowledge, empathy, compassion, and
                insights into behavioral patterns and tendencies. I hold a
                master’s degree in Clinical Psychology from the Michigan School
                of Psychology (2012) and a Ph.D. in Counseling Psychology from
                Western Michigan University (2018). My experience spans therapy
                and psychological assessment in psychiatric inpatient units,
                academic medical centers, universities, and outpatient practice
                settings.
              </p>
              <p>
                My therapeutic approach is primarily psychodynamic and
                humanistic, enriched by influences from positive psychology,
                existentialism, family systems theory, acceptance and commitment
                concepts, and mindfulness practices.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[400px] h-[680px] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/serena.png"
                alt="Dr. Serena Blake"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[#f9f6ef] flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 leading-none mb-10">
            Therapy can be a space where you invest in yourself
            <br />
            one of the highest forms of self-care.
          </h2>

          <div className="flex justify-center">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-6xl text-center">
              You may be led to therapy by anxiety, depression, relationship
              stress, past or recent trauma, grief and loss, self-esteem issues,
              or challenges with family, parenting, or parental relationships.
              Whatever the source of your stress, you don’t have to face it
              alone. Therapy offers you the time and space to work toward
              wellness and peace.
            </p>
          </div>

          {/* Keep 80vw separator as is */}
        </div>
      </section>
      <div className="flex justify-center">
        <div className="w-[80vw] border-t border-gray-400" />
      </div>

      {/* Areas of Focus */}
      <section className="py-24 px-4 bg-[#f9f6ef]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center text-gray-800 mb-20">
            Areas of Focus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Card 1 */}
            <div className="text-center max-w-md mx-auto">
              <div className="w-80 h-80 mx-auto mb-8 relative rounded-full overflow-hidden shadow-md">
                <Image
                  src="/providers.png"
                  alt="Healthcare provider therapy"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-800 mb-4">
                Therapy for Healthcare Providers and Students
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                The care you provide for others may be driving you to seek
                therapy, whether due to burnout, compassion fatigue, imposter
                syndrome, or perfectionism. Whether you're in pre-professional
                school, undergoing training, or reflecting on a long career in
                healthcare, we can address the unique stressors of your
                professional environment along with any challenges you may be
                facing in other areas of your life.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center max-w-md mx-auto">
              <div className="w-80 h-80 mx-auto mb-8 relative rounded-full overflow-hidden shadow-md">
                <Image
                  src="/grief.png"
                  alt="Trauma and grief therapy"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-800 mb-4">
                Therapy for Trauma and Grief
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Life’s challenges, whether a difficult childhood, a traumatic
                event or series of events, or the loss of someone or something
                deeply meaningful, can lead to profound experiences of trauma
                and grief. Therapy offers a supportive space to process these
                experiences, care for yourself amidst painful thoughts and
                emotions, and work toward a sense of grounding and meaning.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center max-w-md mx-auto">
              <div className="w-80 h-80 mx-auto mb-8 relative rounded-full overflow-hidden shadow-md">
                <Image
                  src="/immigrant.png"
                  alt="Second-generation therapy"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-800 mb-4">
                Therapy for Second Generation Individuals In Immigrant Families
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Second-generation individuals in immigrant families, born in the
                U.S. to at least one parent born abroad, often navigate the
                complexities of multiple cultures and diverse expectations. This
                experience can bring challenges such as feeling like a foreigner
                in your own country and navigating strained family
                relationships. Therapy offers a supportive space to explore and
                process this unique aspect of your identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates and Insurance */}
      <section className="py-24 bg-[#94b0b0]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif  text-gray-800 mb-8">
            Rates and Insurance
          </h2>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              <strong>Session Fee:</strong> $200
            </p>
            <p className="text-lg">
              <strong>Insurance:</strong> Out-of-network provider
            </p>
          </div>

          <div className="mt-8 max-w-auto mx-auto">
            <p className="text-gray-600 leading-relaxed">
              I accept both private pay and insurance. I am in-network with BCBS
              and Aetna.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              For out-of-network plans, I’ve partnered with Mentaya using
              <span className="underline decoration-2 underline-offset-2">
                this tool
              </span>
              to help you check your eligibility for reimbursement for my
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-[#f3f0e8]">
        <div className="max-w-6xl mx-auto text-center px-8">
          <p className="text-3xl text-gray-700 font-serif font-bold leading-relaxed">
            Unable to accept new clients at this time.
          </p>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="relative py-72">
        <div className="absolute inset-0">
          <Image
            src="/bg-below.png"
            alt="Ocean background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-6 font-serif">
          <blockquote className="text-3xl md:text-3xl font-medium ">
            "I have come to believe that caring for myself is not
            self-indulgent.
            <br />
            Caring for myself is an act of survival."
          </blockquote>
          <p className="text-xl md:text-2xl font-light mt-4">- Audre Lorde</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f3f0e8] py-12 font-serif">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl font-medium text-gray-800 mb-4">
            Jennifer Halim, Ph.D., Licensed Psychologist
          </h3>

          <div className="space-y-2 text-gray-600 mb-6 text-xl ">
            <p>jennifer@example.com</p>
            <p>123 Main Street, Suite 100</p>
            <p>City, State 12345</p>
            <p>(555) 123-4567</p>
          </div>

          <div className="text-sm text-gray-500 space-y-1">
            <p>PSY 12345</p>
            <p>License expires: 12/31/2025</p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-xl text-gray-500">
              © 2025 Jennifer Halim, Ph.D. Psychological Services, PLLC. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

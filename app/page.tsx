import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 z-10 p-6">
        <div className="text-white">
          <h1 className="text-lg font-light">Dr. Serena Blake</h1>
          <p className="text-sm opacity-90">Psychological Services</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="Ocean waves background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            I provide individual psychotherapy to adults who seek to heal from trauma, anxiety, depression, and other
            mental health concerns. My approach is integrative, drawing from evidence-based practices.
          </p>
          <Button
            size="lg"
            className="bg-teal-600/80 hover:bg-teal-700/80 text-white px-8 py-3 rounded-full text-lg backdrop-blur-sm border border-white/20"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-6 font-serif ">Dr. Serena Blake</h2>
              <div className="space-y-4 text-brown-200 leading-relaxed font-light text-xl ">
                <p>
                  I believe that each person has the inner wisdom and the strength to heal and grow. My role as a
                  therapist is to provide a safe, non-judgmental space for you to explore your thoughts and feelings.
                </p>
                <p>
                  My approach is integrative, drawing from evidence-based practices such as Cognitive Behavioral Therapy
                  (CBT), Dialectical Behavior Therapy (DBT), and mindfulness-based interventions. I work collaboratively
                  with my clients to develop personalized treatment plans that address their unique needs and goals.
                </p>
                <p>
                  I have extensive training and experience in treating trauma, anxiety, depression, and relationship
                  issues. I am passionate about helping individuals develop the skills and insights needed to create
                  meaningful change in their lives.
                </p>
                <p>
                  My goal is to provide a supportive environment where you can explore your concerns, gain new
                  perspectives, and develop effective coping strategies.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 relative">
                <Image
                  src="/serena.png"
                  alt="Dr. Serena Blake"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f3f0e8]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed ">
            "Therapy can be a space where you invest in yourself —<br />
            one of the highest forms of self-care."
          </blockquote>
          <p className="mt-6 text-gray-600">
            Taking the step to seek therapy can feel overwhelming, but it's also an act of courage and self-compassion.
            In our work together, you'll have the opportunity to explore your inner world, gain new insights, and
            develop the tools you need to create positive change in your life.
          </p>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-20 px-6 bg-[#f3f0e8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-16">Areas of Focus</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Therapy for Healthcare Providers */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Healthcare provider therapy"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Therapy for Healthcare Providers and Students</h3>
              <p className="text-gray-600 leading-relaxed">
                We are surrounded by others who are living in a very trying situation. Healthcare providers experience
                unique stressors and often struggle with burnout, compassion fatigue, and the emotional toll of caring
                for others. I offer specialized support to help healthcare professionals and students develop resilience
                and maintain their well-being while continuing to provide excellent care.
              </p>
            </div>

            {/* Therapy for Trauma and Grief */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Trauma and grief therapy"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Therapy for Trauma and Grief</h3>
              <p className="text-gray-600 leading-relaxed">
                Life experiences including difficult childhood experiences, loss of loved ones, and other traumatic
                events can significantly impact our mental health and well-being. I provide compassionate,
                evidence-based treatment to help individuals process their experiences, work through grief and trauma
                responses, and develop healthy coping strategies to move forward with hope and resilience.
              </p>
            </div>

            {/* Therapy for Second-Generation Individuals */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Second-generation therapy"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Therapy for Second-Generation Individuals in Immigrant Families
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Growing up as a second-generation individual in an immigrant family can present unique challenges
                including navigating between cultures, managing family expectations, and developing a sense of identity.
                I understand these experiences and provide culturally sensitive therapy to help individuals explore
                their identity, improve family relationships, and develop a strong sense of self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates and Insurance */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light text-gray-800 mb-8">Rates and Insurance</h2>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              <strong>Session Fee:</strong> $200
            </p>
            <p className="text-lg">
              <strong>Insurance:</strong> Out-of-network provider
            </p>
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              I provide detailed receipts that you can submit to your insurance for out-of-network reimbursement. Many
              insurance plans provide partial reimbursement for out-of-network providers.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              I also offer a limited number of sliding scale spots for those who need financial assistance. Please don't
              hesitate to discuss this option if cost is a barrier to receiving care.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#f3f0e8]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-xl text-gray-700 font-light">Unable to accept new clients at this time.</p>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="Ocean background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 font-serif ">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
            "I have come to believe that caring for myself is not self-indulgent.
            <br />
            Caring for myself is an act of survival."
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f3f0e8] py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Jennifer Halim, Ph.D., Licensed Psychologist</h3>

          <div className="space-y-2 text-gray-600 mb-6">
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
            <p className="text-xs text-gray-500">
              © 2024 Jennifer Halim, Ph.D. Psychological Services, PLLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

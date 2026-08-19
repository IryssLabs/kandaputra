import { Experience as ExpType } from '@/lib/types';

const experiences: ExpType[] = [
  {
    role: "Founder & Lead Developer",
    company: "Kyuverse (kyuverse.my.id)",
    period: "2025 - Present",
    points: [
      "Building a SaaS platform for financial planning, budgeting, and operational tools for artists, cosplayers, and photographers.",
      "Architecting and developing the full-stack platform using Next.js, React, TypeScript, Drizzle ORM, and PostgreSQL.",
      "Managing production deployment, performance optimization, SEO, and continuous development through Vercel and Git-based CI/CD."
    ],
    color: "bg-neo-yellow"
  },
  {
    role: "Fullstack Software Engineer (Freelance)",
    company: "ParongpongrawLab x Anambas Foundation (anambas.my.id)",
    period: "Oct 2025 - Present",
    points: [
      "Developed and deployed a digital waste management platform supporting 800+ customers across 11 waste banks.",
      "Architected the platform using Next.js, TypeScript, React, Prisma, and Supabase (PostgreSQL), including real-time data synchronization.",
      "Built centralized dashboards for waste collection, inventory, customer balances, transactions, and financial operations.",
      "Engineered waste inventory and circular financial tracking covering 15,000+ kg of recorded waste."
    ],
    color: "bg-neo-green"
  },
  {
    role: "Fullstack Software Engineer Intern",
    company: "RS St. Carolus Jakarta",
    period: "Sep 2025 - Dec 2025",
    points: [
      "Architected and developed a nursing re-credentialing platform supporting 400+ nursing staff.",
      "Built role-based dashboards and workflows for nurses, unit heads, and assessors.",
      "Developed backend services using Node.js, Express, PostgreSQL, and Sequelize for authentication, data management, and assessment workflows.",
      "Implemented SSO, JWT authorization, PDF report generation, and Excel/CSV data processing.",
      "Deployed the production system on the hospital's internal Windows Server."
    ],
    color: "bg-neo-purple"
  },
  {
    role: "Fullstack Software Engineer (Freelance)",
    company: "Rantai Biru (rantaibiru.com)",
    period: "Oct 2025 - Jan 2026",
    points: [
      "Developed a real-time waste tracking and supply chain platform using Next.js, React, Node.js, Express, MySQL, and Sequelize.",
      "Built an interactive questionnaire system with client-side scoring and automated WhatsApp result delivery.",
      "Developed real-time inventory dashboards with Zustand and API/webhook integrations.",
      "Implemented JWT-based authentication and backend API infrastructure with Docker deployment."
    ],
    color: "bg-neo-blue"
  },
  {
    role: "Frontend Software Engineer (Freelance)",
    company: "Selected Client Projects",
    period: "2025 - 2026",
    points: [
      "Delivered production-ready frontend applications for Smartlansia, Stimuno, and Sirindu.",
      "Developed responsive interfaces and interactive features using Next.js, React, and JavaScript.",
      "Implemented application logic, data visualization, document viewing, and interactive assessment workflows.",
      "Collaborated directly with clients to iterate requirements and deliver production-ready interfaces."
    ],
    color: "bg-neo-red"
  },
  {
    role: "Google Cloud Facilitator",
    company: "Google Cloud",
    period: "Aug 2025 - Sep 2025; Jul 2026 - Present",
    points: [
      "Facilitated Google Skills Arcade and guided 20+ participants through cloud computing, AI, and machine learning modules.",
      "Provided technical mentorship and hands-on guidance throughout the program."
    ],
    color: "bg-neo-yellow"
  },
  {
    role: "Software Engineering Student",
    company: "Bina Sarana Informatika University",
    period: "Undergraduate",
    points: [
      "Focusing on full-stack development, system architecture, and software engineering.",
      "Actively involved in software lifecycle management and system analysis."
    ],
    color: "bg-neo-green"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <header>
        <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center">
          Experience<span className="text-neo-red">_Log</span>
          <span className="sr-only">
            . Professional Journey of Kanda Putra, Software Engineer.
          </span>
        </h2>
      </header>

      <ol className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12 list-none p-0">
        {experiences.map((exp, idx) => (
          <li key={idx} className="relative pl-8 md:pl-16">
            <article>
              <div
                className={`absolute -left-[14px] top-2 w-6 h-6 border-4 border-black ${exp.color}`}
              />

              <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-lg transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                  <h3 className="text-3xl font-black uppercase">
                    {exp.role}
                    <span className="sr-only"> at {exp.company}</span>
                  </h3>

                  <span className="font-mono font-bold bg-neo-black text-white px-2 py-1">
                    {exp.period}
                  </span>
                </div>

                <p className="font-mono text-xl mb-2 font-bold uppercase">
                  @ {exp.company}
                </p>

                <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};
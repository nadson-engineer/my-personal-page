import { Icons } from "@/components/icons";
import type { ReactNode } from "react";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { MongoDB } from "@/components/ui/svgs/mongodb";

type HackathonLink = { title: string; icon: ReactNode; href: string };
type ProjectLink = { type: string; icon: ReactNode; href: string };

export const DATA = {
  name: "Nadson Oliveira Coelho",
  initials: "NOC",
  // TODO: troque pela URL real do seu portfólio publicado (ex: Vercel)
  url: "https://nadson-oliveira-coelho.vercel.app",
  location: "Feira de Santana, BA",
  locationLink:
    "https://www.google.com/maps/place/Feira+de+Santana,+BA",
  description: "Desenvolvedor Full Stack",
  summary:
    "Desenvolvedor Full Stack com experiência na entrega de mais de 10 projetos web, incluindo loja virtual, integração com a API do YouTube e sistemas de autenticação com validação de e-mail e banco de dados. Atuo no desenvolvimento de aplicações utilizando React.js, Node.js, JavaScript e TypeScript, criando soluções escaláveis, intuitivas e voltadas para resolver problemas reais. Também tenho experiência com integrações, automação de processos e aplicação de IA. Participei de dois hackathons - pela Unifacs em 2024 e pela Órbita/Unifan/Unef em 2026, onde [conquistei o 1º lugar](/#hackathons).",
  avatarUrl: "/profile.jpg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "Node.js", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "MongoDB", icon: MongoDB },
    { name: "Python", icon: Python },
    { name: "Git / GitHub", icon: Icons.github },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Início" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nadsoncoelhofsa@gmail.com",
    tel: "+55 75 99153-4447",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nadson-engineer",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nadson-oliveira",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/5575991534447",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Enviar e-mail",
        url: "mailto:nadsoncoelhofsa@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Castelo Branco Contabilidade A.",
      href: "#",
      badges: [],
      location: "Feira de Santana, BA",
      title: "Desenvolvedor de Sistemas Jr",
      logoUrl: "/logos/castelo-branco.jpg",
      start: "Julho 2026",
      end: "Atual",
      description:
        "Desenvolvimento e manutenção de sites institucionais e lojas virtuais para um grupo empresarial. Atuação como desenvolvedor Full Stack utilizando React.js, Node.js, TypeScript, JavaScript, HTML, CSS e MySQL. Correção de bugs, evolução de funcionalidades e melhoria de desempenho das aplicações. Configuração de domínios, hospedagens e publicação de aplicações web. Versionamento de código com Git e GitHub.",
    },
    {
      company: "Castelo Branco Contabilidade A.",
      href: "#",
      badges: [],
      location: "Feira de Santana, BA",
      title: "Assistente de TI",
      logoUrl: "/logos/castelo-branco.jpg",
      start: "18 de Fevereiro de 2026",
      end: "30 de Junho de 2026",
      description:
        "Manutenção e evolução de sistemas corporativos utilizando Node.js e MySQL. Desenvolvimento de interfaces web com React.js e JavaScript, focando em usabilidade e responsividade. Correção de bugs, implementação de melhorias contínuas e versionamento com Git/GitHub. Análise e ajuste de regras de negócio, contribuindo para a estabilidade e qualidade do sistema.",
    },
  ],
  education: [
    {
      school: "Centro Universitário Nobre - UNIFAN",
      href: "https://www.unifan.edu.br",
      degree: "Bacharelado em Engenharia de Software",
      logoUrl: "/logos/unifan.jpg",
      start: "",
      end: "Cursando",
    },
    {
      school: "SENAI",
      href: "#",
      degree: "Desenvolvimento Front-end",
      logoUrl: "/logos/senai.jpg",
      start: "",
      end: "Concluído",
    },
  ],
  projects: [
    {
      title: "Fit Level",
      href: "https://fitlevel-six.vercel.app",
      dates: "2026",
      active: true,
      description:
        "MVP de um app de emagrecimento e ganho de massa com IA integrada, criado durante hackathon. Cria um avatar do usuário a partir de uma foto real através de IA, monta um cardápio personalizado de acordo com a meta de cada um, conta com um chat com IA que analisa a foto do prato e mostra as calorias na hora, e um sistema de competição entre amigos para tornar o processo mais leve e motivador.",
      technologies: [
        "React.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "IA / Visão Computacional",
      ],
      links: [] as ProjectLink[],
      image: "/projects/fit-level.svg",
      video: "",
    },
    {
      title: "Chatbot IA para WhatsApp",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Chatbot com inteligência artificial integrado ao WhatsApp, focado em automação de atendimento e criação de uma experiência conversacional mais inteligente, fluida e escalável. Utiliza modelo de IA local (Ollama), permitindo maior controle sobre respostas, performance e personalização do comportamento do agente. Conta com integração via API do WhatsApp, arquitetura baseada em agente para tomada de decisão, automação de fluxos de conversa e estrutura pronta para evolução com novas integrações.",
      technologies: ["Node.js", "TypeScript", "WhatsApp API", "Ollama (IA local)"],
      links: [] as ProjectLink[],
      image: "/projects/whatsapp-ai-chatbot.svg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hackathon Unifacs",
      dates: "2024",
      location: "Feira de Santana, BA",
      description:
        "Participação em equipe no hackathon promovido pela Unifacs, desenvolvendo uma solução digital sob prazo reduzido.",
      image: "/logos/unifacs.jpg",
      links: [] as HackathonLink[],
    },
    {
      title: "Hackathon Órbita, Unifan & Unef",
      dates: "2026",
      location: "Feira de Santana, BA",
      description:
        "Hackathon organizado em parceria entre Órbita, Unifan e Unef, onde desenvolvi o Fit Level, um MVP de app de emagrecimento e ganho de massa com IA integrada.",
      image: "/logos/orbita.jpg",
      win: "1º Lugar",
      links: [] as HackathonLink[],
    },
  ],
} as const;

import { Icons } from "@/components/icons";
import type { ReactNode } from "react";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Postman } from "@/components/ui/svgs/postman";
import { NestJS } from "@/components/ui/svgs/nestjs";
import { VectorDatabase } from "@/components/ui/svgs/vectorDatabase";
import { LangChain } from "@/components/ui/svgs/langchain";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Docker } from "@/components/ui/svgs/docker";

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
    "Desenvolvedor Full Stack com experiência em sistemas contábeis e tributários, nos quais contribuí para reduzir retrabalho, tempo de carregamento e tempo de análise de dados. Campeão de hackathon com um aplicativo de saúde com IA integrada. Atualmente, aprofundo meus conhecimentos em IA aplicada (LLMs, RAG, agentes e LangChain) para resolver problemas reais de negócio.",
  avatarUrl: "/profile.jpg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: NestJS },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "MongoDB", icon: MongoDB },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "Banco vetorial", icon: VectorDatabase },
    { name: "LangChain", icon: LangChain },
    { name: "Postman", icon: Postman },
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
        url: "https://www.linkedin.com/in/nadson-coelho",
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
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Curso de Desenvolvimento Full Stack",
      logoUrl: "/logos/udemy.svg",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Buscador de Dívida PGFN",
      href: "https://inteligencia-contabil-git-main-tecnologiacbca01-3482s-projects.vercel.app/",
      dates: "",
      active: true,
      description:
        "Plataforma de inteligência comercial voltada à prospecção de clientes a partir de dados de dívidas tributárias de empresas. Integra consultas à PGFN via Serpro/Sida e utiliza inteligência artificial para apoiar a análise dos dados e a identificação de oportunidades de atendimento contábil e tributário. O projeto conecta integração de dados, IA e estratégia comercial, transformando informações fiscais em insumos para uma prospecção mais direcionada e decisões de negócio fundamentadas.",
      technologies: [
        "IA",
        "NestJS",
        "Next.js",
        "PostgreSQL",
        "SOLID / POO",
        "Prisma",
      ],
      links: [] as ProjectLink[],
      image: "/projects/pgfn-protegido.png",
      video: "",
    },
    {
      title: "Fisconta Online",
      href: "",
      dates: "Em desenvolvimento",
      active: false,
      description:
        "Plataforma de atendimento contábil em desenvolvimento, voltada a centralizar os serviços prestados aos clientes e facilitar o acompanhamento das rotinas empresariais. Contempla módulos de folha de pagamento e emissão de notas fiscais, reunindo demandas trabalhistas e fiscais em uma única experiência digital. O projeto combina front-end em Next.js, back-end em NestJS, PostgreSQL com Prisma e recursos de inteligência artificial, aplicando orientação a objetos e princípios SOLID para organizar as regras de negócio e facilitar a evolução dos módulos. O foco é aproximar cliente e escritório contábil, com mais clareza no atendimento e organização dos processos.",
      technologies: [
        "IA",
        "NestJS",
        "Next.js",
        "PostgreSQL",
        "SOLID / POO",
        "Prisma",
      ],
      links: [] as ProjectLink[],
      image: "/projects/fisconta.png",
      video: "",
    },
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
    {
      title: "Castelo Branco Contabilidade Avançada",
      href: "https://www.castelobrancocontabilidade.com.br/",
      dates: "",
      active: true,
      description:
        "Site institucional de contabilidade estratégica para importadoras, indústrias, distribuidoras e transportadoras, com foco em transformar serviços complexos em uma jornada clara para o cliente. Apresenta soluções fiscais e tributárias, conteúdos sobre a Reforma Tributária e um simulador interativo de risco e margem com entradas de regime tributário, faturamento e setor. Conecta a exploração dos serviços à solicitação de diagnóstico pelo WhatsApp, aproximando a experiência digital da captação de oportunidades comerciais.",
      technologies: ["Site institucional", "Contabilidade"],
      links: [] as ProjectLink[],
      image: "/projects/castelo-branco.png",
      video: "",
    },
    {
      title: "Metamind Treinamentos",
      href: "https://www.metamind.com.br/",
      dates: "",
      active: true,
      description:
        "Site institucional para uma consultoria de desenvolvimento de lideranças e gestão de pessoas, com foco em apresentar soluções e facilitar o contato com potenciais clientes. Reúne serviços, metodologia própria, cases e depoimentos, além de uma calculadora interativa que estima o custo real de uma equipe a partir de salários, encargos e regime tributário. Conta com integração com o YouTube para exibir automaticamente os episódios de Anna Clara, proprietária da Metamind, mantendo o conteúdo atualizado e reduzindo a necessidade de manutenção manual. O projeto traduz uma oferta consultiva em uma experiência digital clara, conectando conteúdo, interação e objetivos de negócio.",
      technologies: ["Site institucional", "Treinamentos"],
      links: [] as ProjectLink[],
      image: "/projects/metamind.png",
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

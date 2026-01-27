import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any; // Using any for flexibility in this nested structure
}

const translations = {
  pt: {
    seo: {
      home: {
        title: "Joaquim & Fernandes | Empresa de Eletricidade Algarve e Alentejo",
        description: "Eletricistas especializados em Instalações Elétricas, Ligação à Rede, Baixadas e PLR's, Postos de Transformação e Smart Cities. Atuamos em Faro, Portimão, Tavira, Beja e todo o Algarve."
      },
      about: {
        title: "Sobre Nós | Eletricistas Certificados no Algarve | Joaquim & Fernandes",
        description: "Conheça a Joaquim & Fernandes, empresa líder em eletricidade e telecomunicações no Sul. Servimos o Algarve (Faro, Albufeira) e Alentejo com rigor."
      },
      services: {
        title: "Instalações Elétricas e Serviços de Engenharia | Algarve e Alentejo",
        description: "Serviços completos no Sul do país: Projetos de Eletricidade, Baixadas e PLR's, Postos de Transformação, Instalações Elétricas Industriais e Carregamento de Veículos Elétricos."
      },
      lighting: {
        title: "Iluminação Profissional | Festiva, Pública e Decorativa | J&F",
        description: "Soluções completas de iluminação no Algarve. Iluminação de Natal, Iluminação Pública Inteligente (Smart Cities) e Iluminação Arquitetural."
      },
      partners: {
        title: "Parceiros e Marcas | Schneider, E-Redes, Siemens",
        description: "Trabalhamos com marcas de topo e cumprimos todas as normas da E-Redes. Parceiros de confiança para construção civil e obras públicas no Sul."
      },
      careers: {
        title: "Recrutamento Eletricista e Engenharia | Emprego Algarve",
        description: "Junte-se à nossa equipa. Vagas para Eletricistas, Engenheiros Eletrotécnicos e Técnicos de Manutenção no Algarve e Alentejo."
      },
      contact: {
        title: "Contactos | Peça Orçamento Eletricista Algarve e Alentejo",
        description: "Contacte a Joaquim & Fernandes para orçamentos de instalações elétricas, Baixadas e PLR's ou manutenção. Atendemos Faro, Olhão, Tavira, Portimão e Beja."
      }
    },
    nav: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      lighting: 'Iluminação',
      partners: 'Parceiros',
      careers: 'Recrutamento',
      contact: 'Contactos',
      quote: 'Peça Orçamento',
      toggle: 'EN'
    },
    footer: {
      desc: 'Soluções integradas de eletricidade, construção e mobilidade elétrica. Impulsionamos o seu projeto no Algarve e Alentejo com qualidade e segurança desde 1986.',
      navTitle: 'Navegação',
      contactTitle: 'Contactos',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Receba as últimas novidades e atualizações.',
      placeholder: 'O seu email',
      subscribe: 'Subscrever',
      rights: 'Todos os direitos reservados.',
      designedBy: 'Website desenhado por',
      privacy: 'Política de Privacidade',
      terms: 'Termos e Condições',
      quality: 'Política de Qualidade'
    },
    common: {
      learnMore: 'Saber Mais',
      seeMore: 'Ver Mais',
      address: 'Estrada Nacional 125, Bias Norte, Moncarapacho',
      city: '8700-066 Olhão'
    },
    home: {
      hero: {
        title: "Soluções de Eletricidade, Construção e Mobilidade Elétrica",
        subtitle: "A sua empresa de eletricidade de referência no Algarve e Alentejo. Excelência técnica em Baixadas, PLR's e Instalações.",
        ctaPrimary: "Peça um orçamento",
        ctaSecondary: "Contacte-nos"
      },
      servicesTitle: "As Nossas Áreas de Atuação",
      whyUsTitle: "Porquê escolher a Joaquim & Fernandes?",
      whyUsDesc: "Somos a escolha certa para quem procura eletricistas certificados no Algarve e Alentejo. Combinamos décadas de experiência em Postos de Transformação e Telecomunicações com as tecnologias mais recentes.",
      ctaButton: "Conheça os nossos serviços",
      benefits: [
        { id: 1, text: "Experiência desde 1986" },
        { id: 2, text: "Eletricistas Certificados" },
        { id: 3, text: "Soluções Chave-na-mão" },
        { id: 4, text: "Foco no Sul do País" }
      ],
      lightUp: {
        title: "Tem um projeto em Faro, Portimão ou Beja?",
        desc: "A nossa luz está pronta para guiar a sua visão. Especialistas em instalações complexas e ligação à rede pública.",
        cta: "Peça um Orçamento Gratuito"
      },
      testimonialsTitle: "O que dizem os nossos clientes",
      testimonials: [
        {
          id: 1,
          name: "Narciso Barradas",
          text: "A receção ao cliente, o atendimento e da resolução ao problema reportado, manifesta todo o profissionalismo desta equipa. Muito obrigado pela atenção e dedicação."
        },
        {
          id: 2,
          name: "Carolina Morais",
          text: "Gostei muito do atendimento de Segunda-feira dia 13/05/2025, muito simpatico o senhor da receção"
        },
        {
          id: 3,
          name: "Ana Clara",
          text: "Os funcionários Lucas Penido e Maikel Denny são os melhores."
        }
      ],
      leaveReview: "Deixe a sua avaliação",
      partnersTitle: "Parceiros e Marcas de Confiança",
      serviceCards: {
         projects: { title: "Projetos de Eletricidade", desc: "Projetos de engenharia elétrica de Baixa e Média Tensão, licenciamentos, medidas de autoproteção e consultoria energética." },
         plrs: { title: "Pedidos de Ligação à Rede", desc: "Execução de Pedidos de Ligação à Rede (PLR), baixadas subterrâneas ou aéreas e construção de ramais de distribuição de energia." },
         installations: { title: "Infraestruturas Elétricas", desc: "Instalações elétricas industriais e habitacionais, remodelações, aumentos de potência, certificação e manutenção técnica." },
         substations: { title: "Postos de Transformação", desc: "Montagem de Postos de Transformação (PTs), instalação de celas de média tensão, transformadores e manutenção preventiva." },
         ev_charging: { title: "Postos de Carregamento", desc: "Soluções chave-na-mão para carregamento de veículos elétricos (PCVE) em espaços públicos e privados." },
         lighting: { title: "Iluminação Profissional", desc: "Iluminação Festiva, Iluminação Pública Inteligente e Soluções Arquiteturais." },
         telecommunications: { title: "Telecomunicações", desc: "Projetos e instalação ITED/ITUR, fusão de fibra ótica, redes estruturadas de dados e certificação de infraestruturas." },
         others: { title: "Outros Serviços", desc: "Soluções de mobilidade elétrica (carregadores), construção civil complementar, fiscalização de obra e auditorias energéticas." }
      }
    },
    lighting: {
      heroTitle: "Iluminação que Transforma",
      heroDesc: "Da magia das luzes de Natal à eficiência da iluminação pública inteligente. Criamos atmosferas e garantimos segurança através da luz.",
      introTitle: "Soluções de Luz 360º",
      introDesc: "Na Joaquim & Fernandes, a luz é mais do que visibilidade — é experiência, segurança e identidade. Oferecemos um portfólio completo que abrange desde a iluminação decorativa para épocas festivas até sistemas técnicos avançados para cidades e indústrias.",
      types: [
        {
          title: "Iluminação Festiva",
          desc: "A Iluminação Festiva é a arte de criar emoções através da luz. Desenvolvemos projetos chave-na-mão para épocas especiais, transformando o ambiente urbano e comercial. Desde a conceção criativa dos motivos (2D e 3D) até à instalação segura e desmontagem, garantimos um espetáculo visual que atrai visitantes, dinamiza o comércio local e celebra a tradição com tecnologia LED de baixo consumo.",
          applicationsTitle: "Onde se aplica:",
          applications: ["Centros Históricos e Cidades", "Centros Comerciais", "Praças e Jardins Públicos", "Fachadas de Edifícios"]
        },
        {
          title: "Iluminação Pública & Smart Cities",
          desc: "Mais do que iluminar estradas, criamos cidades inteligentes. A nossa abordagem à Iluminação Pública foca-se na eficiência energética e na segurança. Substituímos luminárias convencionais por tecnologia LED de alta performance, integrada com sistemas de telegestão que permitem controlar a intensidade da luz remotamente, detetar avarias em tempo real e reduzir a fatura energética dos municípios em até 60%.",
          applicationsTitle: "Onde se aplica:",
          applications: ["Vias Públicas e Autoestradas", "Parques Urbanos e Ciclovias", "Zonas Residenciais", "Parques de Estacionamento"]
        },
        {
          title: "Iluminação Arquitetural",
          desc: "A Iluminação Arquitetural visa valorizar o património edificado durante a noite, respeitando a sua história e traça original. Utilizamos projetores de precisão, fitas LED e sistemas RGBW para criar cenários dinâmicos ou estáticos que destacam texturas e volumes. É a solução ideal para dar uma nova vida a edifícios icónicos, hotéis ou monumentos, reforçando a identidade visual do local.",
          applicationsTitle: "Onde se aplica:",
          applications: ["Monumentos e Igrejas", "Hotéis e Resorts", "Edifícios Corporativos", "Pontes e Estruturas"]
        },
        {
          title: "Iluminação Desportiva",
          desc: "No desporto, a luz é fundamental para a performance dos atletas e a experiência dos espectadores. Projetamos e instalamos sistemas de iluminação que cumprem rigorosamente os níveis de lux exigidos pelas federações e normas de transmissão televisiva. Garantimos uniformidade no campo, controlo do encandeamento e sistemas de acendimento instantâneo para pavilhões e estádios.",
          applicationsTitle: "Onde se aplica:",
          applications: ["Campos de Futebol e Estádios", "Pavilhões Gimnodesportivos", "Campos de Ténis e Padel", "Piscinas Municipais"]
        }
      ],
      innovationTitle: "Tecnologia & Design",
      innovationDesc: "Combinamos a arte do design de luz com a engenharia mais avançada.",
      stat1: "Projetos Festivos",
      stat2: "Pontos de Luz LED",
      stat3: "Poupança Média",
      ctaTitle: "Vamos iluminar o seu projeto?",
      ctaDesc: "Seja para decorar a sua cidade no Natal ou renovar a iluminação pública.",
      ctaButton: "Pedir Proposta de Iluminação"
    },
    partners: {
      heroTitle: "Parceiros de Confiança",
      heroDesc: "A excelência da Joaquim & Fernandes é construída sobre relações sólidas com os líderes mundiais da indústria e parcerias estratégicas exclusivas.",
      suppliersTitle: "Fornecedores e Marcas Certificadas",
      suppliersDesc: "Trabalhamos apenas com materiais homologados e equipamentos de topo para garantir a máxima segurança e durabilidade das nossas instalações elétricas.",
      eredesHighlight: {
        title: "Interligação com a Rede de Distribuição",
        desc: "Como empresa especializada, garantimos o cumprimento rigoroso de todas as normas técnicas exigidas pela E-Redes (antiga EDP Distribuição) para baixadas, ramais e postos de transformação.",
        badge: "Normas Técnicas Cumpridas"
      },
      brandsList: [
        { name: "Schneider Electric", desc: "Líder global em gestão de energia e automação." },
        { name: "Siemens", desc: "Tecnologia de ponta para infraestruturas inteligentes." },
        { name: "EFACEC", desc: "Soluções portuguesas de engenharia e mobilidade." },
        { name: "Legrand", desc: "Especialistas em infraestruturas elétricas e digitais." },
        { name: "Hager", desc: "Sistemas de instalação e distribuição de energia." }
      ],
      exclusiveTitle: "Parcerias Estratégicas Exclusivas",
      exclusiveDesc: "Empresas e entidades que confiam exclusivamente na Joaquim & Fernandes para a execução e manutenção dos seus projetos.",
      exclusivePartners: [
        { name: "Grupo Construção Vanguarda", type: "Construção Civil", desc: "Parceiro exclusivo para todas as instalações elétricas em empreendimentos de luxo no Triângulo Dourado." },
        { name: "Gestão Hoteleira Premium", type: "Hotelaria", desc: "Contrato de manutenção exclusiva para cadeia de hotéis de 5 estrelas no Algarve." },
        { name: "Condomínios do Sul", type: "Gestão de Imóveis", desc: "Parceria para instalação de postos de carregamento e manutenção predial." }
      ],
      ctaTitle: "Torne-se um Parceiro",
      ctaDesc: "Procuramos constantemente expandir a nossa rede com empresas que partilhem os nossos valores de rigor e qualidade.",
      ctaButton: "Propor Parceria"
    },
    about: {
      heroTitle: "A Nossa História",
      heroDesc: "Quase quatro décadas de engenharia, construção e inovação. Conheça o percurso que nos trouxe até aqui.",
      timeline: [
        { year: "1986", title: "A Fundação", description: "Joaquim & Fernandes inicia a sua atividade como uma pequena empresa familiar focada em instalações elétricas residenciais na zona de Faro." },
        { year: "1998", title: "Expansão para Indústria", description: "Com o crescimento da equipa, a empresa expande os serviços para o setor industrial em todo o Algarve." },
        { year: "2005", title: "Departamento de Construção", description: "Respondendo às necessidades dos clientes, abrimos o departamento de construção civil para oferecer soluções chave-na-mão." },
        { year: "2015", title: "Expansão para o Alentejo", description: "Início das operações no Alentejo, focando em projetos agrícolas e industriais." },
        { year: "2020", title: "Mobilidade Elétrica", description: "Lançamento da divisão dedicada à mobilidade elétrica, instalando postos de carregamento em todo o Sul." },
        { year: "Hoje", title: "Líderes de Mercado no Sul", description: "Continuamos a inovar, mantendo os valores de confiança que nos definem há quase 40 anos." }
      ],
      awards: {
        title: "Reconhecimento e Prémios",
        subtitle: "A distinção pública da nossa robustez financeira e desempenho superior no setor.",
        list: [
          { name: "PME Líder", desc: "Estatuto de referência que distingue o mérito e o perfil de risco das PME nacionais. Distinguida 3 vezes (última em 2024)." },
          { name: "PME Excelência", desc: "Selo de reputação que premeia os melhores desempenhos económico-financeiros. Distinguida 3 vezes (última em 2024)." }
        ]
      },
      teamSection: {
        title: "Quem Somos Nós",
        subtitle: "A Força da Nossa Equipa",
        description: "Mais do que uma empresa, somos um coletivo de profissionais apaixonados pelo que fazem. Com uma estrutura sólida e multidisciplinar, a nossa equipa combina a experiência de engenheiros seniores com a energia de técnicos especializados.",
        stat1: "+50 Colaboradores",
        stat2: "Engenharia & Civil",
        stat3: "Técnicos Certificados",
        highlight: "Investimos continuamente na formação e segurança dos nossos quadros, garantindo que cada projeto é executado com o máximo rigor."
      },
      closingTitle: "Pronto para fazer parte do futuro?",
      closingDesc: "A nossa história continua a ser escrita todos os dias, em cada projeto que entregamos.",
      closingCta: "Trabalhe Connosco"
    },
    services: {
      heroTitle: "Os Nossos Serviços",
      heroDesc: "Soluções técnicas especializadas para responder aos desafios mais exigentes em Eletricidade e Telecomunicações.",
      categories: [
        {
          id: "plrs",
          title: "Pedidos de Ligação à Rede (PLR)",
          description: "Execução especializada de Postos de Ligação à Rede e infraestruturas elétricas de ligação à rede pública de distribuição.",
          details: ["Pedidos de Ligação à Rede (PLR)", "Baixadas Subterrâneas ou Aéreas", "Execução de Ramais"]
        },
        {
          id: "installations",
          title: "Infraestruturas Elétricas",
          description: "Serviços de instalação elétrica abrangentes para setores industriais, comerciais e residenciais, com foco na segurança e eficiência.",
          details: ["Instalações Elétricas", "Certificação", "Ramais Elétricos e Aumentos de Potência", "Correção do Fator de Potência", "Estudos de Iluminação", "Manutenções Técnicas", "Projetos ITED e ITUR", "Projetos Eletricos de Baixa e Média Tensão", "Consultoria Energética"]
        },
        {
          id: "telecommunications",
          title: "Telecomunicações",
          description: "Infraestruturas de redes de nova geração, fibra ótica e certificação ITED/ITUR para edifícios residenciais e comerciais.",
          details: ["Redes de Fibra Ótica", "Projetos ITED/ITUR", "Certificação de Redes", "Bastidores e Racks", "Manutenção de Redes"]
        },
        {
          id: "substations",
          title: "Postos de Transformação",
          description: "Montagem, comissionamento e manutenção de Postos de Transformação (PTs) para clientes de Média Tensão.",
          details: ["Instalação de Celas", "Transformadores de Potencia", "Inspeções técnicas", "Manutenções Corretivas"]
        },
        {
          id: "projects",
          title: "Projetos de Eletricidade",
          description: "Desenvolvimento integral de projetos de especialidades de engenharia, garantindo o cumprimento de todas as normas legais e requisitos técnicos.",
          details: ["Projetos Elétricos", "Licenciamentos", "Estudos Luminotécnicos", "Consultoria Energética"]
        },
        {
          id: "others",
          title: "Outros Serviços",
          description: "Soluções complementares e serviços especializados desenhados para responder a necessidades específicas de engenharia, construção e manutenção.",
          details: ["Mobilidade Elétrica", "Apoio a Eventos", "Construção Civil"]
        }
      ],
      notFoundTitle: "Não encontrou o que procura?",
      notFoundDesc: "Temos soluções personalizadas para cada caso.",
      notFoundCta: "Fale Connosco"
    },
    serviceDetails: {
      projects: {
        title: "Projetos de Engenharia Elétrica",
        seoTitle: "Projetos Elétricos e Licenciamento",
        seoDescription: "Empresa especialista em Projetos de Eletricidade e Licenciamento. Consultoria no Algarve e Alentejo.",
        description: "Engenharia de precisão para edifícios inteligentes e seguros.",
        fullText: "A nossa equipa de engenharia desenvolve projetos técnicos detalhados que garantem a viabilidade, segurança e eficiência das suas instalações. Desde o estudo inicial até ao licenciamento final junto das entidades competentes (DGEG, E-Redes), asseguramos que cada traço cumpre rigorosamente a legislação em vigor. Utilizamos software de última geração para modelação e cálculo, permitindo antecipar desafios e otimizar custos de obra antes mesmo de esta começar.",
        features: ["Projetos Elétricos de Baixa e Média Tensão", "Medidas de Autoproteção (MAP)", "Estudos de Iluminação (Dialux)", "Consultoria para Certificação Energética"],
        keywords: ["Projetos Eletricidade", "Projeto Elétrico", "Engenharia", "Licenciamento"],
        benefits: [
           { title: "Conformidade Total", desc: "Garantimos aprovação junto da E-Redes e Certiel sem complicações." },
           { title: "Redução de Custos", desc: "Otimizamos o dimensionamento dos cabos e proteções para poupar na obra." },
           { title: "Tecnologia BIM", desc: "Visualização 3D das infraestruturas para evitar conflitos em obra." },
           { title: "Licenciamento Rápido", desc: "Tratamos de toda a burocracia para que a sua obra não pare." }
        ],
        process: [
           { title: "Levantamento", desc: "Análise das necessidades e características do edifício." },
           { title: "Dimensionamento", desc: "Cálculos técnicos de cargas, potências e iluminação." },
           { title: "Desenho Técnico", desc: "Elaboração das peças desenhadas e memórias descritivas." },
           { title: "Licenciamento", desc: "Submissão e acompanhamento junto das entidades oficiais." }
        ]
      },
      plrs: {
        title: "Pedidos de Ligação à Rede (PLR)",
        seoTitle: "Baixadas, PLR's e E-Redes no Algarve",
        seoDescription: "Execução de PLR's, baixadas e ramais elétricos conforme normas da E-Redes. Especialistas em ligação à rede elétrica em Faro, Portimão e Évora.",
        description: "A ponte segura entre a rede pública e a sua instalação.",
        fullText: "A execução de Postos de Ligação à Rede (PLR), baixadas e ramais exige um conhecimento profundo das normas técnicas da E-Redes. Somos especialistas na construção destas infraestruturas críticas, garantindo uma interligação perfeita e segura. Tratamos de todo o processo técnico, desde a abertura de valas e passagem de cabos até à montagem das portinholas e caixas de contagem, assegurando que a sua instalação recebe energia sem contratempos ou reprovações nas vistorias.",
        features: ["Pedidos de Ligação à Rede (PLR)", "Baixadas Subterrâneas ou Aéreas", "Execução de Ramais"],
        keywords: ["E-Redes", "PLR", "Ramais Elétricos", "Baixadas", "Contagem de Luz"],
        benefits: [
           { title: "Empresa Certificada", desc: "Profissionais qualificados, com vasta experiência no setor e em constante aprendizagem." },
           { title: "Solução Chave na Mão", desc: "Cuidamos de todo o processo, desde de a documentação à conclusão da obra." },
           { title: "Rapidez e Fiabilidade", desc: "Equipas especializadas para garantir um serviço eficiente." },
           { title: "Conformidade Garantida", desc: "Cumprimos todas as exigências técnicas e normativas da E-REDES." }
        ],
        process: [
           { title: "Pedido de Ligação", desc: "Análise da viabilidade e pedido à E-Redes." },
           { title: "Execução Civil", desc: "Abertura de vala e construção das infraestruturas." },
           { title: "Cablagem", desc: "Passagem de cabos e montagem de armários." },
           { title: "Vistoria e Ligação", desc: "Certificação e pedido de contador." }
        ]
      },
      installations: {
        title: "Infraestruturas Elétricas",
        seoTitle: "Instalações Elétricas Industriais e Prediais | Eletricista",
        seoDescription: "Empresa de instalações elétricas industriais e prediais. Eletricistas qualificados para obras no Algarve e Alentejo.",
        description: "Energia segura e eficiente para qualquer tipo de edifício.",
        fullText: "Realizamos instalações elétricas completas, adaptadas às necessidades específicas de indústrias, escritórios, espaços comerciais e habitações. O nosso foco está na segurança, durabilidade e facilidade de manutenção futura. Trabalhamos com os melhores materiais do mercado (Schneider, Hager, Legrand) para montar quadros elétricos e sistemas de iluminação que não só funcionam na perfeição, como também valorizam o seu imóvel e reduzem o risco de falhas.",
        features: [
            "Instalações Elétricas",
            "Certificação",
            "Ramais Elétricos e Aumentos de Potência",
            "Correção do Fator de Potência",
            "Estudos de Iluminação",
            "Manutenções Técnicas",
            "Projetos ITED e ITUR",
            "Projetos Eletricos de Baixa e Média Tensão",
            "Consultoria Energética"
        ],
        keywords: ["Eletricista Algarve", "Empresa Eletricidade", "Instalações Elétricas", "Quadros Elétricos", "Manutenção Industrial"],
        benefits: [
           { title: "Segurança Máxima", desc: "Cumprimento rigoroso das RTIEBT para proteção de pessoas e bens." },
           { title: "Materiais Premium", desc: "Utilizamos apenas marcas de referência (Schneider, Hager)." },
           { title: "Estética", desc: "Acabamentos cuidados e quadros elétricos organizados." },
           { title: "Garantia", desc: "Assistência pós-obra e garantia de execução." }
        ],
        process: [
           { title: "Planeamento", desc: "Marcação e definição de caminhos de cabos." },
           { title: "Tubagem", desc: "Instalação de tubos e caixas antes do reboco." },
           { title: "Wiring", desc: "Passagem de condutores e cabos." },
           { title: "Aparelhagem", desc: "Montagem de tomadas, interruptores e quadros." }
        ]
      },
      substations: {
        title: "Postos de Transformação",
        seoTitle: "Postos de Transformação e Média Tensão",
        seoDescription: "Instalação e manutenção de Postos de Transformação (PTs) e Celas de Média Tensão. Serviço especializado para indústrias e grandes edifícios.",
        description: "Alta potência exige alta responsabilidade e competência técnica.",
        fullText: "Os Postos de Transformação (PTs) são o coração energético de grandes indústrias e edifícios. A Joaquim & Fernandes possui uma equipa altamente qualificada para intervir em Média Tensão. Realizamos a montagem chave-na-mão de PTs (cabine ou aéreos), bem como a sua manutenção preventiva obrigatória. Garantimos a limpeza, aperto de conexões, análise de óleo dielétrico e ensaios aos equipamentos de proteção, assegurando a continuidade de serviço e a segurança de pessoas e bens.",
        features: ["Instalação de Celas", "Transformadores de Potencia", "Inspeções técnicas", "Manutenções Corretivas"],
        keywords: ["Postos de Transformação", "Média Tensão", "Transformadores", "PT", "Alta Tensão"],
        benefits: [
           { title: "Técnicos Credenciados", desc: "Equipa com formação específica em Alta/Média Tensão." },
           { title: "Manutenção Preditiva", desc: "Análise de óleo e termografia para prever falhas." },
           { title: "Resposta Rápida", desc: "Stock de equipamentos críticos para substituição." },
           { title: "Segurança", desc: "Equipamentos de proteção individual e coletiva rigorosos." }
        ],
        process: [
           { title: "Projeto", desc: "Dimensionamento do transformador e celas." },
           { title: "Obra Civil", desc: "Preparação da cabine ou poste de suporte." },
           { title: "Montagem", desc: "Instalação do transformador e quadros MT/BT." },
           { title: "Ensaios", desc: "Testes de isolamento e rigidez dielétrica." }
        ]
      },
      ev_charging: {
        title: "Mobilidade Elétrica",
        seoTitle: "Postos de Carregamento de Carros Elétricos",
        seoDescription: "Instalação de Postos de Carregamento de Elétricos e Wallboxes. Soluções para condomínios, empresas e particulares. Rede Mobi.E.",
        description: "O futuro move-se a eletricidade. Nós instalamos a infraestrutura.",
        fullText: "Como entidade instaladora certificada, oferecemos soluções completas para o carregamento de veículos elétricos. Seja para uma garagem privada, um condomínio ou um parque de estacionamento empresarial, dimensionamos a solução ideal para carregar o seu veículo com rapidez e segurança, sem disparar o quadro elétrico. Integramos os postos com a rede Mobi.E quando necessário e configuramos sistemas de gestão de carga (Load Balancing) para otimizar o consumo energético do edifício.",
        features: ["Wallboxes Domésticas", "Postos de Carregamento Rápido (DC)", "Integração Rede Mobi.E", "Sistemas de Balanceamento de Carga", "Soluções para Condomínios"],
        keywords: ["EV Charging", "Wallbox", "Mobi.E", "Electric Mobility", "Tesla"],
        benefits: [
           { title: "Carregamento Rápido", desc: "Soluções trifásicas para reduzir o tempo de carga." },
           { title: "Gestão Inteligente", desc: "Balanceamento de carga para não ir abaixo o quadro." },
           { title: "Mobi.E Certificação", desc: "Integração na rede pública para rentabilização." },
           { title: "Universalidade", desc: "Compatível com todas as marcas de veículos." }
        ],
        process: [
           { title: "Visita Técnica", desc: "Avaliação da potência disponível no local." },
           { title: "Proposta", desc: "Seleção do carregador ideal para o seu carro." },
           { title: "Instalação", desc: "Montagem do posto e proteções elétricas." },
           { title: "Configuração", desc: "Ligação à App e testes de funcionamento." }
        ]
      },
      telecommunications: {
        title: "Telecomunicações e Redes",
        seoTitle: "ITED, ITUR e Instalação de Fibra Ótica",
        seoDescription: "Empresa certificada para projetos de telecomunicações (ITED/ITUR) e fibra ótica no Algarve.",
        description: "Conectividade de alta velocidade para o seu negócio ou habitação.",
        fullText: "A Joaquim & Fernandes oferece serviços especializados de infraestruturas de telecomunicações, garantindo que o seu edifício está preparado para as exigências digitais do futuro. Realizamos projetos e instalações ITED (Infraestruturas de Telecomunicações em Edifícios) e ITUR, cumprindo todas as normas da ANACOM. A nossa equipa está equipada para realizar fusões de fibra ótica, certificação de redes estruturadas e montagem de bastidores, assegurando conectividade fiável e de alto desempenho.",
        features: ["ITED / ITUR Projects and Installation", "Fiber Optic Splicing and Certification", "Structured Voice and Data Networks", "Rack and Cabinet Assembly", "Telecommunications Infrastructure Maintenance"],
        keywords: ["Telecomunicações", "Fibra Ótica", "ITED", "ITUR", "Redes Estruturadas"],
        benefits: [
           { title: "Alta Velocidade", desc: "Redes certificadas (Cat6, Cat6A, Fibra) para velocidade gigabit." },
           { title: "Certificação", desc: "Ensaios com equipamentos calibrados e relatório técnico." },
           { title: "Organização", desc: "Bastidores organizados e identificados." },
           { title: "Convergência", desc: "Integração de voz, dados e vídeo na mesma rede." }
        ],
        process: [
           { title: "ITED Design", desc: "Conceção da rede de tubagem e cablagem." },
           { title: "Cablagem", desc: "Instalação cuidada de cobre e fibra ótica." },
           { title: "Fusão e Terminação", desc: "Ligação de tomadas e fusão de fibra." },
           { title: "Certificação", desc: "Ensaios de certificação e entrega de relatório." }
        ]
      },
      others: {
        title: "Serviços Complementares",
        seoTitle: "Consultoria Energética e Segurança",
        seoDescription: "Auditorias energéticas, fiscalização de obra e sistemas de segurança. Serviços complementares de engenharia e construção.",
        description: "Uma abordagem 360º às necessidades do seu edifício.",
        fullText: "Para além da eletricidade pura, a nossa competência estende-se a áreas vitais para o funcionamento de qualquer infraestrutura. Oferecemos serviços de fiscalização de obra para garantir que o seu projeto é cumprido pelo empreiteiro. Implementamos sistemas de segurança eletrónica (CCTV, Intrusão) e realizamos auditorias energéticas para identificar onde pode poupar. Dispomos ainda de equipas de construção civil para pequenas reparações e acabamentos, facilitando a gestão da sua obra com um único fornecedor.",
        features: ["Construction Supervision and Management", "Video Surveillance Systems (CCTV)", "Fire Detection (SADI)", "Energy Efficiency Audits", "Small Civil Construction and Repairs"],
        keywords: ["Consulting", "Supervision", "CCTV", "Security", "Energy Audit"],
        benefits: [
           { title: "Interlocutor Único", desc: "Centralize eletricidade, segurança e civil num fornecedor." },
           { title: "Poupança", desc: "Auditorias que reduzem a fatura energética." },
           { title: "Controlo", desc: "Fiscalização que garante o cumprimento do projeto." },
           { title: "Segurança", desc: "Sistemas integrados de proteção do edifício." }
        ],
        process: [
           { title: "Diagnóstico", desc: "Identificação das necessidades ou patologias." },
           { title: "Solução", desc: "Apresentação de medidas corretivas ou projeto." },
           { title: "Implementação", desc: "Execução dos trabalhos com equipas próprias." },
           { title: "Monitorização", desc: "Acompanhamento dos resultados obtidos." }
        ]
      }
    },
    careers: {
      heroTitle: "Carreiras",
      heroDesc: "Junte-se a uma equipa com quase 40 anos de história. Construímos o futuro no Algarve e Alentejo com rigor e inovação.",
      introTitle: "Porquê trabalhar connosco?",
      introDesc: "Na Joaquim & Fernandes, acreditamos queas pessoas são a nossa maior energia. Oferecemos estabilidade, formação contínua e a oportunidade de trabalhar em projetos desafiantes nas áreas de eletricidade, construção e mobilidade sustentável.",
      benefits: [
        "Formação e Certificação Contínua",
        "Seguro de Saúde",
        "Progressão na Carreira",
        "Equipa Unida e Dinâmica"
      ],
      openingsTitle: "Oportunidades em Aberto",
      reqTitle: "Requisitos:",
      otherReq: "+ outros requisitos",
      applyBtn: "Candidatar-se",
      jobs: [
        {
          id: 1,
          title: "Eletricista Credenciado (M/F)",
          location: "Algarve / Alentejo",
          type: "Full-time",
          description: "Procuramos eletricista com carteira profissional para integrar equipa de manutenção industrial e instalações prediais.",
          requirements: ["Carteira Profissional DGEG", "Experiência mínima de 3 anos", "Carta de condução", "Disponibilidade imediata"],
          emailSubject: "Candidatura: Eletricista Credenciado"
        },
        {
          id: 2,
          title: "Engenheiro Eletrotécnico Sénior",
          location: "Sede (Faro)",
          type: "Full-time",
          description: "Responsável pela gestão de projetos de mobilidade elétrica e coordenação de equipas em obra.",
          requirements: ["Mestrado em Engenharia Eletrotécnica", "Inscrição na Ordem", "Experiência em gestão de projetos", "Domínio de AutoCAD"],
          emailSubject: "Candidatura: Engenheiro Eletrotécnico"
        },
        {
          id: 3,
          title: "Técnico de Manutenção Civil",
          location: "Portimão / Lagos",
          type: "Full-time",
          description: "Execução de tarefas de manutenção preventiva e corretiva em edifícios (pintura, pequenas reparações, pladur).",
          requirements: ["Polivalência", "Experiência em manutenção hoteleira ou similar", "Espírito de equipa"],
          emailSubject: "Candidatura: Técnico Manutenção"
        }
      ],
      spontaneousTitle: "Não encontrou a vaga ideal?",
      spontaneousDesc: "Estamos sempre à procura de novos talentos no Algarve. Envie-nos o seu currículo (CV) para a nossa base de dados.",
      spontaneousBtn: "Envie o seu Currículo",
      spontaneousDisclaimer: "Ao enviar o seu CV, aceita a nossa política de tratamento de dados para fins de recrutamento."
    },
    contact: {
      heroTitle: "Contacte-nos",
      heroDesc: "Estamos disponíveis para esclarecer dúvidas e apresentar propostas.",
      infoTitle: "Informações",
      labels: {
        address: "Morada",
        phone: "Telefone",
        callCost: "(Chamada para rede fixa nacional)",
        callCostMobile: "(Chamada para rede móvel nacional)",
        email: "Email",
        schedule: "Horário",
        weekdays: "Segunda a Sexta: 09:00 - 18:00",
        weekend: "Sábado e Domingo: Fechado",
        whatsappBox: {
           title: "Peça um orçamento via WhatsApp",
           button: "Enviar Mensagem"
        }
      },
      formTitle: "Envie-nos uma mensagem",
      form: {
        name: "Nome Completo",
        email: "Email",
        phone: "Telefone",
        subject: "Assunto",
        subjectPlaceholder: "Selecione um assunto...",
        optQuote: "Pedido de Orçamento",
        optInfo: "Informação Geral",
        optRecruitment: "Recrutamento",
        optOther: "Outros",
        interest: "Área de Interesse",
        interestPlaceholder: "Selecione a área...",
        jobPosition: "Vaga a Candidatar",
        cv: "Currículo (CV)",
        uploadFile: "Anexar PDF",
        filePlaceholder: "Nenhum ficheiro selecionado",
        optsInterest: {
          projects: "Projetos",
          plrs: "PLR's",
          installations: "Infraestruturas Elétricas",
          substations: "Postos de Transformação",
          ev_charging: "Mobilidade Elétrica / Carregamento",
          others: "Outros Serviços"
        },
        message: "Mensagem",
        submit: "Enviar Pedido"
      },
      locationTitle: "Localização"
    },
    qualityPage: {
      title: "Política de Qualidade",
      visionTitle: "Visão",
      visionDesc: "A Joaquim & Fernandes Lda idealiza ser uma empresa líder e um parceiro estratégico na construção de infraestruturas na região do Algarve, acompanhando a inovação e sendo um exemplo na sua área de negócio.",
      missionTitle: "Missão",
      missionDesc: "Prestar serviços eficazes e rápidos na área de construção e manutenção de infraestruturas no Sul de Portugal.",
      valuesTitle: "Valores",
      values: [
        { title: "Integridade", desc: "Predomina a seriedade e honestidade nas decisões e no dia-a-dia." },
        { title: "Responsabilidade", desc: "Compromisso em assumir os deveres e funções atribuídos, bem como garantir o cumprimento do contrato/serviço acordado." },
        { title: "Eficácia de Serviço", desc: "Fazer bem à primeira." },
        { title: "Orientação para o Cliente", desc: "Trabalhar de acordo com as expectativas e requisitos do cliente." }
      ],
      strategyTitle: "Orientações Estratégicas",
      strategies: [
        "Melhorar continuamente a eficácia do SGQ e dos nossos serviços para satisfação dos clientes e colaboradores, contribuindo para o desenvolvimento da região do Algarve.",
        "Formar, informar e desenvolver todos os nossos recursos humanos, contribuindo para o desenvolvimento das suas competências.",
        "Promover condições de segurança e saúde para harmonizar o trabalho e proporcionar bem-estar a todos os colaboradores.",
        "Garantir o cumprimento de todas as normas, legislação e regulamentos em vigor e especificações técnicas exigidas pelos nossos clientes."
      ]
    },
    privacyPage: {
      title: "Privacy Policy",
      intro: "Joaquim & Fernandes, Lda respects your privacy and is committed to protecting your personal data. This policy describes how we collect, use, and protect your information, in compliance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679).",
      sections: [
        {
          title: "1. Data Controller",
          content: "The entity responsible for processing your personal data is Joaquim & Fernandes, Lda, headquartered at Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. For any questions related to data protection, you can contact us via email at mail@joaquimfernandes.pt."
        },
        {
          title: "2. Data Collected",
          content: "We collect data that you provide voluntarily through our contact forms, quote requests, and job applications. These may include: Name, Email, Phone, Address, and Curriculum Vitae (in case of recruitment). We also collect technical navigation data (Cookies) anonymously to improve site performance."
        },
        {
          title: "3. Purpose of Processing",
          content: "Your data is processed for the following purposes: \n- Management of quote requests and commercial contact;\n- Execution of service provision contracts;\n- Recruitment and selection processes;\n- Compliance with legal obligations (invoicing)."
        },
        {
          title: "4. Data Sharing",
          content: "We do not sell your data to third parties. Your data may be shared only with subcontractors strictly necessary for service provision (e.g., accounting, IT), ensuring they also comply with GDPR, or with public authorities when required by law."
        },
        {
          title: "5. Data Subject Rights",
          content: "Under GDPR, you have the right to access, rectify, limit, object to processing, and request the deletion of your personal data (right to be forgotten). To exercise these rights, simply send a written request to our general email."
        },
        {
          title: "6. Security and Retention",
          content: "We implement technical and organizational security measures to protect your data. Data is kept only for the period necessary for the purpose for which it was collected, or as required by law (e.g., 10 years for invoicing data)."
        }
      ],
      lastUpdated: "Last updated: October 2024"
    },
    termsPage: {
      title: "Terms and Conditions",
      intro: "Welcome to the Joaquim & Fernandes website. By accessing and using this site, you agree to the following terms and conditions of use.",
      sections: [
        {
          title: "1. Intellectual Property",
          content: "All content present on this site (texts, images, logótipos, vídeos) is the exclusive property of Joaquim & Fernandes, Lda or its partners, being protected by Copyright and Industrial Property legislation. Copying, reproduction, or distribution without prior authorization is prohibited."
        },
        {
          title: "2. Site Usage",
          content: "The user agrees to use the site for legal purposes and not to perform acts that may damage, disable, or overburden the site, or prevent its normal use by other users."
        },
        {
          title: "3. Limitation of Liability",
          content: "Joaquim & Fernandes strives to keep the site information updated and accurate. However, we do not guarantee the absence of errors or omissions and are not responsible for damages resulting from the use of the information contained herein. Commercial proposals and quotes always require official confirmation by the company."
        },
        {
          title: "4. External Links",
          content: "This site may contain links to third-party sites (e.g., partners, social networks). Joaquim & Fernandes does not control nor is responsible for the content or privacy policies of these external sites."
        },
        {
          title: "5. Alternative Dispute Resolution (ADR)",
          content: "In case of consumer dispute, the consumer may resort to a competent Alternative Consumer Dispute Resolution Entity. Joaquim & Fernandes adheres to arbitration centers in the Algarve region. More information at the Consumer Portal (www.consumidor.pt)."
        },
        {
          title: "6. Applicable Law and Jurisdiction",
          content: "These terms are governed by Portuguese law. For any dispute arising from the interpretation or application of these terms, the Court of Faro shall be competent, with express waiver of any other."
        }
      ]
    }
  },
  en: {
    seo: {
      home: {
        title: "Joaquim & Fernandes | Electrical Company in Algarve & Alentejo",
        description: "Expert Electricians in Electrical Installations, Grid Connection, PLR's, Transformers and Smart Cities. Serving Faro, Portimão, Tavira, and Beja."
      },
      about: {
        title: "About Us | Certified Electricians in Algarve | Joaquim & Fernandes",
        description: "Learn about Joaquim & Fernandes, a leading electricity and telecommunications company in the South. Serving the Algarve (Faro, Albufeira) and Alentejo with quality."
      },
      services: {
        title: "Electrical Installations and Engineering Services | Algarve & Alentejo",
        description: "Complete services in the South: Electrical Projects, PLR's, Transformation Stations, Industrial Electrical Installations, and EV Charging."
      },
      lighting: {
        title: "Professional Lighting | Festive, Public & Decorative | J&F",
        description: "Complete lighting solutions in Algarve. Christmas Lighting, Smart Public Lighting, and Architectural Lighting."
      },
      partners: {
        title: "Partners & Brands | Schneider, E-Redes, Siemens",
        description: "We work with top brands and comply with E-Redes standards. Trusted partners for civil construction and public works in the South."
      },
      careers: {
        title: "Recruitment Electrician & Engineering | Jobs Algarve",
        description: "Join our team. Job openings for Electricians, Electrical Engineers, and Maintenance Technicians in Algarve and Alentejo."
      },
      contact: {
        title: "Contacts | Request Quote Electrician Algarve & Alentejo",
        description: "Contact Joaquim & Fernandes for quotes on electrical installations, PLR's, or maintenance. Serving Faro, Olhão, Tavira, Portimão, and Beja."
      }
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      lighting: 'Lighting',
      partners: 'Partners',
      careers: 'Careers',
      contact: 'Contacts',
      quote: 'Get a Quote',
      toggle: 'PT'
    },
    footer: {
      desc: 'Integrated solutions for electricity, construction, and electric mobility. Driving your project in Algarve and Alentejo with quality and safety since 1986.',
      navTitle: 'Navigation',
      contactTitle: 'Contacts',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Receive the latest news and updates.',
      placeholder: 'Your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
      designedBy: 'Website designed by',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      quality: 'Quality Policy'
    },
    common: {
      learnMore: 'Learn More',
      seeMore: 'See More',
      address: 'Estrada Nacional 125, Bias Norte, Moncarapacho',
      city: '8700-066 Olhão'
    },
    home: {
      hero: {
        title: "Electricity, Construction and Electric Mobility Solutions",
        subtitle: "Your reference electrical company in Algarve and Alentejo. Technical excellence in PLR's and Installations.",
        ctaPrimary: "Get a Quote",
        ctaSecondary: "Contact Us"
      },
      servicesTitle: "Our Areas of Expertise",
      whyUsTitle: "Why choose Joaquim & Fernandes?",
      whyUsDesc: "We are the right choice for those looking for certified electricians in Algarve and Alentejo. We combine decades of experience in Transformation Stations and Telecommunications with the latest technologies.",
      ctaButton: "Discover our services",
      benefits: [
        { id: 1, text: "Experience since 1986" },
        { id: 2, text: "Certified Technical Team" },
        { id: 3, text: "Turnkey Solutions" },
        { id: 4, text: "Southern Country Coverage" }
      ],
      lightUp: {
        title: "Have a project in Faro, Portimão, or Beja?",
        desc: "Our light is ready to guide your vision. Experts in complex installations and public grid connection.",
        cta: "Request your free assessment"
      },
      testimonialsTitle: "What our clients say",
      testimonials: [
        {
          id: 1,
          name: "Narciso Barradas",
          text: "The customer reception, service, and resolution of the reported problem manifest all the professionalism of this team. Thank you very much for the attention and dedication."
        },
        {
          id: 2,
          name: "Carolina Morais",
          text: "I really liked the service on Monday 05/13/2025, the gentleman at the reception was very friendly."
        },
        {
          id: 3,
          name: "Ana Clara",
          text: "Employees Lucas Penido and Maikel Denny are the best."
        }
      ],
      leaveReview: "Leave your review",
      partnersTitle: "Trusted Partners and Brands",
      serviceCards: {
         projects: { title: "Electrical Projects", desc: "Low and Medium Voltage electrical engineering projects, licensing, self-protection measures, and energy consulting." },
         plrs: { title: "Network Connection Points (PLR)", desc: "Execution of Network Connection Requests (PLR), underground or aerial service drops, and construction of distribution branches." },
         installations: { title: "Electrical Installations", desc: "Industrial and residential electrical installations, remodeling, power increases, certification, and technical maintenance." },
         substations: { title: "Transformation Stations", desc: "Assembly of Transformation Stations (PTs), installation of medium voltage cells, transformers, and preventive maintenance." },
         ev_charging: { title: "EV Charging Stations", desc: "Turnkey solutions for electric vehicle charging (EVCS) in public and private spaces." },
         lighting: { title: "Professional Lighting", desc: "Festive Lighting, Smart Public Lighting, and Architectural Solutions." },
         telecommunications: { title: "Telecommunications", desc: "ITED/ITUR projects and installation, fiber optic splicing, structured data networks, and infrastructure certification." },
         others: { title: "Other Services", desc: "Electric mobility solutions (chargers), complementary civil construction, construction supervision, and energy audits." }
      }
    },
    lighting: {
      heroTitle: "Lighting that Transforms",
      heroDesc: "From the magic of Christmas lights to the efficiency of smart public lighting. We create atmospheres and ensure safety through light.",
      introTitle: "360º Lighting Solutions",
      introDesc: "At Joaquim & Fernandes, light is more than visibility — it's experience, safety, and identity. We offer a complete portfolio covering decorative lighting for festive seasons to advanced technical systems for cities and industries.",
      types: [
        {
          title: "Festive Lighting",
          desc: "Festive Lighting is the art of creating emotions through light. We develop turnkey projects for special seasons, transforming urban and commercial environments. From the creative conception of motifs (2D and 3D) to safe installation and dismantling, we guarantee a visual spectacle that attracts visitors, boosts local commerce, and celebrates tradition with low-consumption LED technology.",
          applicationsTitle: "Applications:",
          applications: ["Historic Centers and Cities", "Shopping Centers", "Public Squares and Gardens", "Building Facades"]
        },
        {
          title: "Public Lighting & Smart Cities",
          desc: "More than lighting roads, we create smart cities. Our approach to Public Lighting focuses on energy efficiency and safety. We replace conventional luminaires with high-performance LED technology, integrated with telemanagement systems that allow remote light intensity control, real-time fault detection, and energy bill reduction for municipalities by up to 60%.",
          applicationsTitle: "Applications:",
          applications: ["Public Roads and Highways", "Urban Parks and Cycle Paths", "Residential Areas", "Parking Lots"]
        },
        {
          title: "Architectural Lighting",
          desc: "Architectural Lighting aims to enhance built heritage at night, respecting its history and original design. We use precision projectors, LED strips, and RGBW systems to create dynamic or static scenarios that highlight textures and volumes. It is the ideal solution to give new life to iconic buildings, hotels, or monuments, reinforcing the visual identity of the place.",
          applicationsTitle: "Applications:",
          applications: ["Monuments and Churches", "Hotels and Resorts", "Corporate Buildings", "Bridges and Structures"]
        },
        {
          title: "Sports Lighting",
          desc: "In sports, light is fundamental for athlete performance and spectator experience. We design and install lighting systems that strictly comply with lux levels required by federations and TV broadcasting standards. We ensure uniformity on the field, glare control, and instant lighting systems for pavilions and stadiums.",
          applicationsTitle: "Applications:",
          applications: ["Football Fields and Stadiums", "Sports Pavilions", "Tennis and Padel Courts", "Municipal Pools"]
        }
      ],
      innovationTitle: "Technology & Design",
      innovationDesc: "We combine the art of lighting design with advanced engineering.",
      stat1: "Festive Projects",
      stat2: "LED Light Points",
      stat3: "Average Savings",
      ctaTitle: "Ready to light up your project?",
      ctaDesc: "Whether decorating your city for Christmas or renewing public lighting.",
      ctaButton: "Request Lighting Proposal"
    },
    partners: {
      heroTitle: "Trusted Partners",
      heroDesc: "Joaquim & Fernandes' excellence is built on solid relationships with world industry leaders and exclusive strategic partnerships.",
      suppliersTitle: "Certified Suppliers and Brands",
      suppliersDesc: "We only work with homologated materials and top-tier equipment to ensure maximum safety and durability of our electrical installations.",
      eredesHighlight: {
        title: "Distribution Network Interconnection",
        desc: "As a specialized company, we guarantee strict compliance with all technical standards required by E-Redes (formerly EDP Distribution) for service drops, branches, and transformation stations.",
        badge: "Technical Standards Compliant"
      },
      brandsList: [
        { name: "Schneider Electric", desc: "Global leader in energy management and automation." },
        { name: "Siemens", desc: "Cutting-edge technology for intelligent infrastructures." },
        { name: "EFACEC", desc: "Portuguese engineering and mobility solutions." },
        { name: "Legrand", desc: "Specialists in electrical and digital building infrastructures." },
        { name: "Hager", desc: "Energy distribution and installation systems." }
      ],
      exclusiveTitle: "Exclusive Strategic Partnerships",
      exclusiveDesc: "Companies and entities that exclusively trust Joaquim & Fernandes for the execution and maintenance of their projects.",
      exclusivePartners: [
        { name: "Vanguarda Construction Group", type: "Civil Construction", desc: "Exclusive partner for all electrical installations in luxury developments in the Golden Triangle." },
        { name: "Premium Hotel Management", type: "Hospitality", desc: "Exclusive maintenance contract for a 5-star hotel chain in Algarve." },
        { name: "Southern Condominiums", type: "Property Management", desc: "Partnership for installation of charging stations and building maintenance." }
      ],
      ctaTitle: "Become a Partner",
      ctaDesc: "We are constantly looking to expand our network with companies that share our values of rigor and quality.",
      ctaButton: "Propor Partnership"
    },
    about: {
      heroTitle: "Our History",
      heroDesc: "Almost four decades of engineering, construction, and innovation. Discover the journey that brought us here.",
      timeline: [
        { year: "1986", title: "The Foundation", description: "Joaquim & Fernandes begins its activity as a small family business focused on residential electrical installations in Faro area." },
        { year: "1998", title: "Expansion to Industry", description: "With team growth, the company expands services to the industrial sector in Algarve." },
        { year: "2005", title: "Construction Department", description: "Responding to client needs, we opened the civil construction department to offer turnkey solutions." },
        { year: "2015", title: "Expansion to Alentejo", description: "Beginning of operations in Alentejo, focusing on agricultural and industrial projects." },
        { year: "2020", title: "Electric Mobility", description: "Launch of the division dedicated to electric mobility, installing charging stations nationwide." },
        { year: "Today", title: "Market Leaders in the South", description: "We continue to innovate, maintaining the values of trust that have defined us for almost 40 years." }
      ],
      awards: {
        title: "Recognition and Awards",
        subtitle: "Public distinction of our financial robustness and superior performance in the sector.",
        list: [
          { name: "SME Leader", desc: "Reference status distinguishing the merit and risk profile of national SMEs. Awarded 3 times (latest in 2024)." },
          { name: "SME Excellence", desc: "Reputation seal awarding best economic-financial performances. Awarded 3 times (latest in 2024)." }
        ]
      },
      teamSection: {
        title: "Who We Are",
        subtitle: "The Strength of Our Team",
        description: "More than a company, we are a collective of professionals passionate about what we do. With a solid and multidisciplinary structure, our team combines the experience of senior engineers with the energy of specialized technicians.",
        stat1: "+50 Employees",
        stat2: "Engineering & Civil",
        stat3: "Certified Technicians",
        highlight: "We continuously invest in training and safety for our staff, ensuring that every project is executed with maximum rigor."
      },
      closingTitle: "Ready to be part of the future?",
      closingDesc: "Our story continues to be written every day, in every project we deliver.",
      closingCta: "Work With Us"
    },
    services: {
      heroTitle: "Our Services",
      heroDesc: "Specialized technical solutions to answer the most demanding challenges in Electricity and Telecommunications.",
      categories: [
        {
          id: "plrs",
          title: "Network Connection Points (PLR)",
          description: "Specialized execution of Network Connection Points and electrical infrastructure for connection to the public distribution network.",
          details: ["Network Connection Requests (PLR)", "Private Service Drops", "Full Process Management"]
        },
        {
          id: "installations",
          title: "Electrical Infrastructures",
          description: "Comprehensive electrical installation services for industrial, commercial, and residential sectors, focusing on safety and efficiency.",
          details: ["Electrical Installations", "Electrical Infrastructures", "Electrical Branches and Power Increases", "Power Factor Correction", "Public and Technical Lighting", "Electrical Maintenance", "Energy Efficiency", "24/7 Technical Assistance"]
        },
        {
          id: "telecommunications",
          title: "Telecommunications",
          description: "Next-generation network infrastructures, fiber optics, and ITED/ITUR certification for residential and commercial buildings.",
          details: ["Fiber Optic Networks", "ITED/ITUR Projects", "Network Certification", "Racks & Cabinets", "Network Maintenance"]
        },
        {
          id: "substations",
          title: "Transformation Stations",
          description: "Assembly, commissioning, and maintenance of Transformation Stations (PTs) for Medium Voltage clients.",
          details: ["Cabin PTs", "Aerial PTs", "Medium Voltage Cells", "Power Transformers", "Testing and Measurements"]
        },
        {
          id: "projects",
          title: "Electrical Projects",
          description: "Full development of engineering specialty projects, ensuring compliance with all legal standards and technical requirements.",
          details: ["Electrical Projects", "ITED/ITUR Projects", "Licensing", "Lighting Studies", "Energy Consulting"]
        },
        {
          id: "others",
          title: "Other Services",
          description: "Complementary solutions and specialized services tailored to specific engineering and construction needs.",
          details: ["Technical Consulting", "Energy Audits", "Construction Supervision", "Security Systems", "General Maintenance"]
        }
      ],
      notFoundTitle: "Didn't find what you're looking for?",
      notFoundDesc: "We have personalized solutions for every case.",
      notFoundCta: "Fale Connosco"
    },
    serviceDetails: {
      projects: {
        title: "Engineering and Electrical Projects",
        seoTitle: "Electrical Projects and Licensing",
        seoDescription: "Specialist company in Electrical Projects and Licensing. Consulting in Algarve and Alentejo.",
        description: "Precision engineering for smart and safe buildings.",
        fullText: "Our engineering team develops detailed technical projects ensuring the feasibility, safety, and efficiency of your installations. From the initial study to final licensing with competent authorities (DGEG, E-Redes), we ensure every line strictly complies with current legislation. We use state-of-the-art software for modeling and calculation, allowing us to anticipate challenges and optimize construction costs before work even begins.",
        features: ["Low and Medium Voltage Electrical Projects", "Self-Protection Measures (MAP)", "Lighting Studies (Dialux)", "Energy Certification Consulting"],
        keywords: ["Electrical Projects", "Electrical Design", "Engineering", "Licensing"],
        benefits: [
           { title: "Full Compliance", desc: "We ensure approval from authorities like E-Redes and ANACOM without hassle." },
           { title: "Cost Reduction", desc: "Optimized sizing of cables and protection to save on construction costs." },
           { title: "BIM Technology", desc: "3D visualization of infrastructures to avoid conflicts on-site." },
           { title: "Fast Licensing", desc: "We handle all bureaucracy so your project doesn't stop." }
        ],
        process: [
           { title: "Survey", desc: "Analysis of building needs and characteristics." },
           { title: "Sizing", desc: "Technical calculations of loads, power, and lighting." },
           { title: "Technical Design", desc: "Drafting of drawings and descriptive memories." },
           { title: "Licensing", desc: "Submission and follow-up with official entities." }
        ]
      },
      plrs: {
        title: "Network Connection Points (PLR)",
        seoTitle: "PLR's, Service Drops and E-Redes in Algarve",
        seoDescription: "Execution of PLR's, service drops, and electrical branches according to E-Redes standards. Specialists in grid connection in Faro, Portimão, and Évora.",
        description: "The secure bridge between the public grid and your installation.",
        fullText: "Executing Network Connection Points (PLR), service drops, and branches requires deep knowledge of E-Redes technical standards. We specialize in building these critical infrastructures, ensuring seamless and safe interconnection. We handle the entire technical process, from trenching and cabling to mounting connection boxes and metering cabinets, ensuring your installation receives power without setbacks or inspection failures.",
        features: ["Network Connection Requests (PLR)", "Private Service Drops", "Full Process Management"],
        keywords: ["E-Redes", "PLR", "Electrical Branches", "Service Drops", "Power Metering"],
        benefits: [
           { title: "Certified Company", desc: "Qualified professionals with vast sector experience and constant learning." },
           { title: "Turnkey Solution", desc: "We handle the entire process, from documentation to work completion." },
           { title: "Speed and Reliability", desc: "Specialized teams to ensure efficient service." },
           { title: "Guaranteed Compliance", desc: "We comply with all E-REDES technical and normative requirements." }
        ],
        process: [
           { title: "Connection Request", desc: "Feasibility analysis and request to E-Redes." },
           { title: "Civil Works", desc: "Trenching and infrastructure construction." },
           { title: "Cabling", desc: "Cable pulling and cabinet assembly." },
           { title: "Inspection & Connection", desc: "Certification and meter request." }
        ]
      },
      installations: {
        title: "Electrical Installations",
        seoTitle: "Industrial and Residential Electrical Installations | Electrician",
        seoDescription: "Electrical installation company for industrial and residential sectors. Qualified electricians for works in Algarve and Alentejo.",
        description: "Safe and efficient energy for any type of building.",
        fullText: "We perform complete electrical installations adapted to the specific needs of industries, offices, commercial spaces, and homes. Our focus is on safety, durability, and ease of future maintenance. We work with the best materials on the market (Schneider, Hager, Legrand) to assemble electrical panels, structured cabling networks, and lighting systems that not only function perfectly but also add value to your property and reduce failure risks.",
        features: [
            "Electrical Installations",
            "Electrical Infrastructures",
            "Electrical Branches and Power Increases",
            "Power Factor Correction",
            "Public and Technical Lighting",
            "Electrical Maintenance",
            "Energy Efficiency",
            "24/7 Technical Assistance"
        ],
        keywords: ["Electrician Algarve", "Electrical Company", "Electrical Installations", "Electrical Panels", "Industrial Maintenance"],
        benefits: [
           { title: "Maximum Safety", desc: "Strict compliance with regulations for protection of people and assets." },
           { title: "Premium Materials", desc: "We use only reference brands (Schneider, Hager)." },
           { title: "Aesthetics", desc: "Careful finishes and organized electrical panels." },
           { title: "Warranty", desc: "Post-work assistance and execution warranty." }
        ],
        process: [
           { title: "Planning", desc: "Marking and defining cable paths." },
           { title: "Tubing", desc: "Installation of tubes and boxes before plastering." },
           { title: "Wiring", desc: "Pulling of conductors and cables." },
           { title: "Equipment", desc: "Assembly of sockets, switches, and panels." }
        ]
      },
      substations: {
        title: "Transformation Stations",
        seoTitle: "Transformation Stations and Medium Voltage",
        seoDescription: "Installation and maintenance of Transformation Stations (PTs) and Medium Voltage Cells. Specialized service for industries and large buildings.",
        description: "High power requires high responsibility and technical competence.",
        fullText: "Transformation Stations (PTs) are the energy heart of large industries and buildings. Joaquim & Fernandes has a highly qualified team to intervene in Medium Voltage. We perform turnkey assembly of PTs (cabin or aerial) as well as mandatory preventive maintenance. We guarantee cleaning, connection tightening, dielectric oil analysis, and equipment testing, ensuring service continuity and safety of people and assets.",
        features: ["Medium Voltage Cell Installation", "Power Transformers (Oil/Dry)", "Low Voltage General Panels (QGBT)", "Preventive and Corrective Maintenance", "Oil Analysis and Thermography"],
        keywords: ["Postos de Transformação", "Média Tensão", "Transformadores", "PT", "Alta Tensão"],
        benefits: [
           { title: "Certified Technicians", desc: "Team with specific training in High/Medium Voltage." },
           { title: "Predictive Maintenance", desc: "Oil analysis and thermography to predict failures." },
           { title: "Fast Response", desc: "Stock of critical equipment for replacement." },
           { title: "Safety", desc: "Rigorous individual and collective protection equipment." }
        ],
        process: [
           { title: "Design", desc: "Sizing of transformer and cells." },
           { title: "Civil Works", desc: "Preparation of cabin or support pole." },
           { title: "Assembly", desc: "Installation of transformer and MV/LV panels." },
           { title: "Testing", desc: "Insulation and dielectric rigidity tests." }
        ]
      },
      ev_charging: {
        title: "Electric Mobility",
        seoTitle: "Electric Car Charging Stations",
        seoDescription: "Installation of Electric Charging Stations and Wallboxes. Solutions for condominiums, companies, and individuals. Mobi.E Network.",
        description: "The future moves on electricity. We install the infrastructure.",
        fullText: "As a certified installation entity, we offer complete solutions for electric vehicle charging. Whether for a private garage, a condominium, or a corporate parking lot, we size the ideal solution to charge your vehicle quickly and safely without tripping the circuit breaker. We integrate stations with the Mobi.E network when necessary and configure Load Balancing systems to optimize the building's energy consumption.",
        features: ["Home Wallboxes", "Fast Charging Stations (DC)", "Mobi.E Network Integration", "Load Balancing Systems", "Condominium Solutions"],
        keywords: ["EV Charging", "Wallbox", "Mobi.E", "Electric Mobility", "Tesla"],
        benefits: [
           { title: "Fast Charging", desc: "Three-phase solutions to reduce charging time." },
           { title: "Smart Management", desc: "Load balancing to prevent circuit breaker trips." },
           { title: "Mobi.E Certification", desc: "Public network integration for monetization." },
           { title: "Universality", desc: "Compatible with all vehicle brands." }
        ],
        process: [
           { title: "Technical Visit", desc: "Assessment of available power on site." },
           { title: "Proposal", desc: "Selection of the ideal charger for your car." },
           { title: "Installation", desc: "Mounting of station and electrical protections." },
           { title: "Configuration", desc: "App connection and function tests." }
        ]
      },
      telecommunications: {
        title: "Telecommunications & Networks",
        seoTitle: "ITED, ITUR and Fiber Optic Installation",
        seoDescription: "Certified company for telecommunications projects (ITED/ITUR) and fiber optics in Algarve.",
        description: "High-speed connectivity for your business or home.",
        fullText: "A Joaquim & Fernandes offers specialized telecommunications infrastructure services, ensuring your building is ready for future digital demands. We perform ITED (Telecommunications Infrastructure in Buildings) and ITUR projects and installations, complying with all ANACOM standards. Our team is equipped to perform fiber optic splicing, structured network certification, and rack assembly, ensuring reliable and high-performance connectivity.",
        features: ["ITED / ITUR Projects and Installation", "Fiber Optic Splicing and Certification", "Structured Voice and Data Networks", "Rack and Cabinet Assembly", "Telecommunications Infrastructure Maintenance"],
        keywords: ["Telecommunications", "Fiber Optics", "ITED", "ITUR", "Structured Networks"],
        benefits: [
           { title: "High Speed", desc: "Certified networks (Cat6, Cat6A, Fiber) for gigabit speed." },
           { title: "Certification", desc: "Tests with calibrated equipment and technical report." },
           { title: "Organization", desc: "Organized and identified racks." },
           { title: "Convergence", desc: "Integration of voice, data, and video on the same network." }
        ],
        process: [
           { title: "ITED Design", desc: "Design of piping and cabling network." },
           { title: "Cabling", desc: "Careful installation of copper and fiber optics." },
           { title: "Splicing & Termination", desc: "Socket connection and fiber splicing." },
           { title: "Certification", desc: "Certification tests and report delivery." }
        ]
      },
      others: {
        title: "Complementary Services",
        seoTitle: "Energy Consulting and Security",
        seoDescription: "Energy audits, construction supervision, and security systems. Complementary engineering and construction services.",
        description: "A 360º approach to your building's needs.",
        fullText: "Beyond pure electricity, our competence extends to vital areas for any infrastructure's operation. We offer construction supervision services to ensure your project is fulfilled by the contractor. We implement electronic security systems (CCTV, Intrusion) and conduct energy audits to identify where you can save money. We also have civil construction teams for small repairs and finishes, facilitating your work management with a single supplier.",
        features: ["Construction Supervision and Management", "Video Surveillance Systems (CCTV)", "Fire Detection (SADI)", "Energy Efficiency Audits", "Small Civil Construction and Repairs"],
        keywords: ["Consulting", "Supervision", "CCTV", "Security", "Energy Audit"],
        benefits: [
           { title: "Single Point of Contact", desc: "Centralize electricity, security, and civil works." },
           { title: "Savings", desc: "Audits that reduce energy bills." },
           { title: "Control", desc: "Supervision ensuring project compliance." },
           { title: "Security", desc: "Integrated building protection systems." }
        ],
        process: [
           { title: "Diagnosis", desc: "Identification of needs or pathologies." },
           { title: "Solution", desc: "Presentation of corrective measures or design." },
           { title: "Implementation", desc: "Execution of works with in-house teams." },
           { title: "Monitoring", desc: "Follow-up of achieved results." }
        ]
      }
    },
    careers: {
      heroTitle: "Careers",
      heroDesc: "Join a team with almost 40 years of history. We build the future in Algarve and Alentejo with rigor and innovation.",
      introTitle: "Why work with us?",
      introDesc: "At Joaquim & Fernandes, we believe people are our greatest energy. We offer stability, continuous training, and the opportunity to work on challenging projects in electricity, construction, and sustainable mobility.",
      benefits: [
        "Continuous Training and Certification",
        "Health Insurance",
        "Career Progression",
        "United and Dynamic Team"
      ],
      openingsTitle: "Open Opportunities",
      reqTitle: "Requirements:",
      otherReq: "+ other requirements",
      applyBtn: "Apply Now",
      jobs: [
        {
          id: 1,
          title: "Certified Electrician (M/F)",
          location: "Algarve / Alentejo",
          type: "Full-time",
          description: "We are looking for an electrician with a professional license to join our industrial maintenance and building installation team.",
          requirements: ["DGEG Professional License", "Minimum 3 years experience", "Driving license", "Immediate availability"],
          emailSubject: "Application: Certified Electrician"
        },
        {
          id: 2,
          title: "Senior Electrical Engineer",
          location: "Headquarters (Faro)",
          type: "Full-time",
          description: "Responsible for managing electric mobility projects and coordinating on-site teams.",
          requirements: ["Master's in Electrical Engineering", "Order Registration", "Project management experience", "AutoCAD proficiency"],
          emailSubject: "Application: Electrical Engineer"
        },
        {
          id: 3,
          title: "Civil Maintenance Technician",
          location: "Portimão / Lagos",
          type: "Full-time",
          description: "Execution of preventive and corrective maintenance tasks in buildings (painting, small repairs, drywall).",
          requirements: ["Versatility", "Experience in hotel maintenance or similar", "Team spirit"],
          emailSubject: "Application: Maintenance Technician"
        }
      ],
      spontaneousTitle: "Didn't find the ideal vacancy?",
      spontaneousDesc: "We are always looking for new talent in the Algarve. Send us your CV for our database.",
      spontaneousBtn: "Send your CV",
      spontaneousDisclaimer: "By sending your CV, you accept our data processing policy for recruitment purposes."
    },
    contact: {
      heroTitle: "Contact Us",
      heroDesc: "We are available to clarify doubts and present proposals.",
      infoTitle: "Information",
      labels: {
        address: "Address",
        phone: "Phone",
        callCost: "(Call to national fixed network)",
        callCostMobile: "(Call to national mobile network)",
        email: "Email",
        schedule: "Schedule",
        weekdays: "Monday to Friday: 09:00 - 18:00",
        weekend: "Saturday and Sunday: Closed",
        whatsappBox: {
           title: "Request a quote via WhatsApp",
           button: "Send Message"
        }
      },
      formTitle: "Send us a message",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        subjectPlaceholder: "Select a subject...",
        optQuote: "Request a Quote",
        optInfo: "General Information",
        optRecruitment: "Recruitment",
        optOther: "Others",
        interest: "Area of Interest",
        interestPlaceholder: "Select area...",
        jobPosition: "Position to Apply",
        cv: "Curriculum Vitae (CV)",
        uploadFile: "Attach PDF",
        filePlaceholder: "No file selected",
        optsInterest: {
          projects: "Projects",
          plrs: "PLR's",
          installations: "Installations",
          substations: "Transformation Stations",
          ev_charging: "Electric Mobility / Charging",
          others: "Other Services"
        },
        message: "Message",
        submit: "Send Request"
      },
      locationTitle: "Location"
    },
    qualityPage: {
      title: "Quality Policy",
      visionTitle: "Vision",
      visionDesc: "Joaquim & Fernandes Lda envisions being a leading company and a strategic partner in infrastructure construction in the Algarve region, keeping up with innovation and setting an example in its business area.",
      missionTitle: "Mission",
      missionDesc: "To provide effective and rapid services in the area of infrastructure construction and maintenance in Southern Portugal.",
      valuesTitle: "Values",
      values: [
        { title: "Integrity", desc: "Seriousness and honesty predominate in decisions and day-to-day life." },
        { title: "Responsibility", desc: "Commitment to assume the duties and functions assigned, as well as guaranteeing compliance with the agreed contract/service." },
        { title: "Service Efficacy", desc: "Do it right the first time." },
        { title: "Customer Orientation", desc: "Work according to the customer's expectations and requirements." }
      ],
      strategyTitle: "Strategic Guidelines",
      strategies: [
        "Continually improve the effectiveness of the QMS and our services for the satisfaction of customers and employees, as well as contributing to the development of the Algarve region we serve.",
        "Train, inform, and develop all our human resources, contributing to the development of their skills.",
        "Promote safety and health conditions to harmonize work and provide well-being for all employees.",
        "Ensure compliance with all standards, legislation, and regulations in force and technical specifications required by our customers."
      ]
    },
    privacyPage: {
      title: "Privacy Policy",
      intro: "Joaquim & Fernandes, Lda respects your privacy and is committed to protecting your personal data. This policy describes how we collect, use, and protect your information, in compliance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679).",
      sections: [
        {
          title: "1. Data Controller",
          content: "The entity responsible for processing your personal data is Joaquim & Fernandes, Lda, headquartered at Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. For any questions related to data protection, you can contact us via email at mail@joaquimfernandes.pt."
        },
        {
          title: "2. Data Collected",
          content: "We collect data that you provide voluntarily through our contact forms, quote requests, and job applications. These may include: Name, Email, Phone, Address, and Curriculum Vitae (in case of recruitment). We also collect technical navigation data (Cookies) anonymously to improve site performance."
        },
        {
          title: "3. Purpose of Processing",
          content: "Your data is processed for the following purposes: \n- Management of quote requests and commercial contact;\n- Execution of service provision contracts;\n- Recruitment and selection processes;\n- Compliance with legal obligations (invoicing)."
        },
        {
          title: "4. Data Sharing",
          content: "We do not sell your data to third parties. Your data may be shared only with subcontractors strictly necessary for service provision (e.g., accounting, IT), ensuring they also comply with GDPR, or with public authorities when required by law."
        },
        {
          title: "5. Data Subject Rights",
          content: "Under GDPR, you have the right to access, rectify, limit, object to processing, and request the deletion of your personal data (right to be forgotten). To exercise these rights, simply send a written request to our general email."
        },
        {
          title: "6. Security and Retention",
          content: "We implement technical and organizational security measures to protect your data. Data is kept only for the period necessary for the purpose for which it was collected, or as required by law (e.g., 10 years for invoicing data)."
        }
      ],
      lastUpdated: "Last updated: October 2024"
    },
    termsPage: {
      title: "Terms and Conditions",
      intro: "Welcome to the Joaquim & Fernandes website. By accessing and using this site, you agree to the following terms and conditions of use.",
      sections: [
        {
          title: "1. Intellectual Property",
          content: "All content present on this site (texts, images, logótipos, vídeos) is the exclusive property of Joaquim & Fernandes, Lda or its partners, being protected by Copyright and Industrial Property legislation. Copying, reproduction, or distribution without prior authorization is prohibited."
        },
        {
          title: "2. Site Usage",
          content: "The user agrees to use the site for legal purposes and not to perform acts that may damage, disable, or overburden the site, or prevent its normal use by other users."
        },
        {
          title: "3. Limitation of Liability",
          content: "Joaquim & Fernandes strives to keep the site information updated and accurate. However, we do not guarantee the absence of errors or omissions and are not responsible for damages resulting from the use of the information contained herein. Commercial proposals and quotes always require official confirmation by the company."
        },
        {
          title: "4. External Links",
          content: "This site may contain links to third-party sites (e.g., partners, social networks). Joaquim & Fernandes does not control nor is responsible for the content or privacy policies of these external sites."
        },
        {
          title: "5. Alternative Dispute Resolution (ADR)",
          content: "In case of consumer dispute, the consumer may resort to a competent Alternative Consumer Dispute Resolution Entity. Joaquim & Fernandes adheres to arbitration centers in the Algarve region. More information at the Consumer Portal (www.consumidor.pt)."
        },
        {
          title: "6. Applicable Law and Jurisdiction",
          content: "These terms are governed by Portuguese law. For any dispute arising from the interpretation or application of these terms, the Court of Faro shall be competent, with express waiver of any other."
        }
      ]
    }
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
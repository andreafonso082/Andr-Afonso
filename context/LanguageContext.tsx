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
        title: "Joaquim & Fernandes | Empresa de Eletricidade Algarve e Baixo Alentejo",
        description: "Eletricistas especializados em Instalações Elétricas, Ligação à Rede, PLR's, Postos de Transformação e Smart Cities. Atuamos em Faro, Portimão, Tavira, Beja e todo o Algarve."
      },
      about: {
        title: "Sobre Nós | Eletricistas Certificados no Algarve | Joaquim & Fernandes",
        description: "Conheça a Joaquim & Fernandes, empresa líder em eletricidade e telecomunicações no Sul. Servimos o Algarve (Faro, Albufeira) e Baixo Alentejo com rigor."
      },
      services: {
        title: "Serviços de Eletricidade e Telecomunicações | Algarve e Alentejo",
        description: "Serviços completos no Sul do país: Projetos de Eletricidade, PLR's, Postos de Transformação, Instalações Elétricas Industriais e Carregamento de Veículos Elétricos."
      },
      smartCities: {
        title: "Smart Cities & IoT | Soluções Urbanas Inteligentes | J&F Algarve",
        description: "Desenvolvimento de Smart Cities, iluminação pública inteligente e eficiência energética para municípios no Algarve e Baixo Alentejo."
      },
      partners: {
        title: "Parceiros e Marcas | Schneider, E-Redes, Siemens",
        description: "Trabalhamos com marcas de topo e cumprimos todas as normas da E-Redes. Parceiros de confiança para construção civil e obras públicas no Sul."
      },
      careers: {
        title: "Recrutamento Eletricista e Engenharia | Emprego Algarve",
        description: "Junte-se à nossa equipa. Vagas para Eletricistas, Engenheiros Eletrotécnicos e Técnicos de Manutenção no Algarve e Baixo Alentejo."
      },
      contact: {
        title: "Contactos | Peça Orçamento Eletricista Algarve e Baixo Alentejo",
        description: "Contacte a Joaquim & Fernandes para orçamentos de instalações elétricas, PLR's ou manutenção. Atendemos Faro, Olhão, Tavira, Portimão e Beja."
      }
    },
    nav: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      smartCities: 'Smart Cities',
      partners: 'Parceiros',
      careers: 'Recrutamento',
      contact: 'Contactos',
      quote: 'Peça Orçamento',
      toggle: 'EN'
    },
    footer: {
      desc: 'Soluções integradas de eletricidade, construção e mobilidade elétrica. Impulsionamos o seu projeto no Algarve e Baixo Alentejo com qualidade e segurança desde 1986.',
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
        subtitle: "A sua empresa de eletricidade de referência no Algarve e Baixo Alentejo. Excelência técnica em PLR's e Instalações.",
        ctaPrimary: "Peça um orçamento",
        ctaSecondary: "Contacte-nos"
      },
      servicesTitle: "As Nossas Áreas de Atuação",
      whyUsTitle: "Porquê escolher a Joaquim & Fernandes?",
      whyUsDesc: "Somos a escolha certa para quem procura eletricistas certificados no Algarve e Baixo Alentejo. Combinamos décadas de experiência em Postos de Transformação e Telecomunicações com as tecnologias mais recentes.",
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
        cta: "Peça a sua avaliação gratuita"
      },
      testimonialsTitle: "O que dizem os nossos clientes",
      testimonials: [
        {
          id: 1,
          name: "Carlos Mendes",
          role: "Diretor de Operações",
          company: "Logística Algarve SA",
          text: "A instalação dos carregadores elétricos na nossa frota em Loulé foi impecável. Profissionalismo e rapidez."
        },
        {
          id: 2,
          name: "Ana Pereira",
          role: "Proprietária",
          company: "Resort Solar Alentejano",
          text: "A renovação elétrica e a iluminação festiva transformaram o nosso espaço turístico em Mértola. Recomendo vivamente."
        },
        {
          id: 3,
          name: "Miguel Santos",
          role: "Gestor de Condomínio",
          company: "GestCondo Tavira",
          text: "Manutenção de edifícios exemplar. Resolvemos problemas antigos de infiltração e eletricidade."
        }
      ],
      partnersTitle: "Parceiros e Marcas de Confiança",
      serviceCards: {
         projects: { title: "Projetos de Eletricidade", desc: "Desenvolvimento de projetos de engenharia elétrica e telecomunicações, licenciamento e consultoria técnica especializada." },
         plrs: { title: "PLR's e Ligação à Rede", desc: "Execução de Postos de Ligação à Rede (PLR) e infraestruturas para ligação à rede pública de distribuição." },
         installations: { title: "Instalações Elétricas", desc: "Instalações elétricas de Baixa e Média Tensão para indústria, comércio e habitação no Algarve e Baixo Alentejo." },
         substations: { title: "Postos de Transformação", desc: "Montagem, manutenção e ensaios de Postos de Transformação (PTs) aéreos e em cabine." },
         ev_charging: { title: "Postos de Carregamento", desc: "Soluções chave-na-mão para carregamento de veículos elétricos (PCVE) em espaços públicos e privados." },
         smart_cities: { title: "Smart Cities", desc: "Soluções integradas de IoT, iluminação inteligente e gestão urbana para cidades do futuro." }
      }
    },
    smartCities: {
      heroTitle: "Smart Cities & Inovação",
      heroDesc: "Conectamos o ambiente urbano do Sul ao futuro através da tecnologia IoT, eficiência energética e gestão inteligente de recursos.",
      introTitle: "A Cidade do Futuro é Agora",
      introDesc: "Desenvolvemos soluções integradas que tornam as cidades algarvias e alentejanas mais eficientes, sustentáveis e habitáveis. Da iluminação pública inteligente à gestão centralizada de edifícios.",
      features: [
        {
          title: "Iluminação Pública Inteligente",
          desc: "Sistemas LED com telegestão ponto-a-ponto, sensores de movimento e adaptação automática de luminosidade para máxima poupança energética."
        },
        {
          title: "Mobilidade Urbana Conectada",
          desc: "Hubs de carregamento integrados na infraestrutura urbana, monitorização de tráfego e soluções de estacionamento inteligente."
        },
        {
          title: "Edifícios Cognitivos",
          desc: "Integração de sensores IoT para monitorização da qualidade do ar, gestão de consumos e automação predial avançada (BMS)."
        },
        {
          title: "Redes Energéticas Digitais",
          desc: "Implementação de Smart Grids e comunidades de energia renovável para descentralização e otimização da produção energética."
        }
      ],
      innovationTitle: "Centro de Inovação",
      innovationDesc: "Utilizamos as mais recentes tecnologias de monitorização remota e Inteligência Artificial para antecipar falhas e otimizar recursos em tempo real.",
      stat1: "Poupança Energética",
      stat2: "Redução de CO2",
      stat3: "Eficiência Operacional",
      ctaTitle: "Transforme a sua infraestrutura",
      ctaDesc: "As nossas soluções Smart City são modulares e escaláveis.",
      ctaButton: "Agendar Consultoria Técnica"
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
        { year: "2015", title: "Expansão para o Alentejo", description: "Início das operações no Baixo Alentejo, focando em projetos agrícolas e industriais." },
        { year: "2020", title: "Mobilidade Elétrica", description: "Lançamento da divisão dedicada à mobilidade elétrica, instalando postos de carregamento em todo o Sul." },
        { year: "Hoje", title: "Líderes de Mercado no Sul", description: "Continuamos a inovar, mantendo os valores de confiança que nos definem há quase 40 anos." }
      ],
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
          id: "projects",
          title: "Projetos de Eletricidade",
          description: "Desenvolvimento integral de projetos de especialidades de engenharia, garantindo o cumprimento de todas as normas legais e requisitos técnicos.",
          details: ["Projetos Elétricos", "Projetos ITED/ITUR", "Licenciamentos", "Estudos Luminotécnicos", "Consultoria Energética"]
        },
        {
          id: "plrs",
          title: "PLR's",
          description: "Execução especializada de Postos de Ligação à Rede e infraestruturas elétricas de ligação à rede pública de distribuição.",
          details: ["Baixadas e Ramais", "Caixas de Transição", "Contagens", "Infraestruturas de Loteamentos", "Coordenação com E-Redes"]
        },
        {
          id: "installations",
          title: "Instalações Elétricas",
          description: "Serviços de instalação elétrica abrangentes para setores industriais, comerciais e residenciais, com foco na segurança e eficiência.",
          details: ["Instalações Industriais", "Quadros Elétricos", "Domótica e Automação", "Remodelações Elétricas", "Manutenção Preventiva"]
        },
        {
          id: "substations",
          title: "Postos de Transformação",
          description: "Montagem, comissionamento e manutenção de Postos de Transformação (PTs) para clientes de Média Tensão.",
          details: ["PTs em Cabine", "PTs Aéreos", "Celas de Média Tensão", "Transformadores de Potência", "Ensaios e Medidas"]
        },
        {
          id: "ev_charging",
          title: "Postos de Carregamento",
          description: "Soluções chave-na-mão para a mobilidade elétrica, desde a instalação doméstica até grandes hubs de carregamento.",
          details: ["Wallboxes Domésticas", "Postos de Carregamento Rápido", "Rede Mobi.E", "Gestão de Frotas", "Condomínios"]
        },
        {
          id: "others",
          title: "Outros Serviços",
          description: "Soluções complementares e serviços especializados desenhados para responder a necessidades específicas de engenharia, construção e manutenção.",
          details: ["Consultoria Técnica", "Auditorias Energéticas", "Fiscalização de Obra", "Sistemas de Segurança", "Manutenção Geral"]
        }
      ],
      notFoundTitle: "Não encontrou o que procura?",
      notFoundDesc: "Temos soluções personalizadas para cada caso.",
      notFoundCta: "Fale Connosco"
    },
    serviceDetails: {
      projects: {
        title: "Projetos de Engenharia e Eletricidade",
        seoTitle: "Projetos Elétricos, ITED e Telecomunicações",
        seoDescription: "Empresa especialista em Projetos de Eletricidade, ITED e Telecomunicações. Licenciamento e Consultoria no Algarve e Baixo Alentejo.",
        description: "Engenharia de precisão para edifícios inteligentes e seguros.",
        fullText: "A nossa equipa de engenharia desenvolve projetos técnicos detalhados que garantem a viabilidade, segurança e eficiência das suas instalações. Desde o estudo inicial até ao licenciamento final junto das entidades competentes (DGEG, E-Redes, ANACOM), asseguramos que cada traço cumpre rigorosamente a legislação em vigor. Utilizamos software de última geração para modelação e cálculo, permitindo antecipar desafios e otimizar custos de obra antes mesmo de esta começar.",
        features: ["Projetos Elétricos de Baixa e Média Tensão", "Projetos ITED (Telecomunicações) e ITUR", "Medidas de Autoproteção (MAP)", "Estudos de Iluminação (Dialux)", "Consultoria para Certificação Energética"],
        keywords: ["Projetos Eletricidade", "ITED", "Telecomunicações", "Projeto Elétrico", "Engenharia"]
      },
      plrs: {
        title: "Postos de Ligação à Rede (PLR)",
        seoTitle: "PLR's, Baixadas e E-Redes no Algarve",
        seoDescription: "Execução de PLR's, baixadas e ramais elétricos conforme normas da E-Redes. Especialistas em ligação à rede elétrica em Faro, Portimão e Évora.",
        description: "A ponte segura entre a rede pública e a sua instalação.",
        fullText: "A execução de Postos de Ligação à Rede (PLR), baixadas e ramais exige um conhecimento profundo das normas técnicas da E-Redes. Somos especialistas na construção destas infraestruturas críticas, garantindo uma interligação perfeita e segura. Tratamos de todo o processo técnico, desde a abertura de valas e passagem de cabos até à montagem das portinholas e caixas de contagem, assegurando que a sua instalação recebe energia sem contratempos ou reprovações nas vistorias.",
        features: ["Execução de Ramais Subterrâneos e Aéreos", "Montagem de Portinholas e Caixas de Transição", "Infraestruturas para Loteamentos", "Coordenação Técnica com a E-Redes", "Ensaios de Isolamento e Continuidade"],
        keywords: ["E-Redes", "PLR", "Ramais Elétricos", "Baixadas", "Contagem de Luz"]
      },
      installations: {
        title: "Instalações Elétricas",
        seoTitle: "Instalações Elétricas Industriais e Prediais | Eletricista",
        seoDescription: "Empresa de instalações elétricas industriais e prediais. Eletricistas qualificados para obras no Algarve e Baixo Alentejo.",
        description: "Energia segura e eficiente para qualquer tipo de edifício.",
        fullText: "Realizamos instalações elétricas completas, adaptadas às necessidades específicas de indústrias, escritórios, espaços comerciais e habitações. O nosso foco está na segurança, durabilidade e facilidade de manutenção futura. Trabalhamos com os melhores materiais do mercado (Schneider, Hager, Legrand) para montar quadros elétricos, redes de cablagem estruturada e sistemas de iluminação que não só funcionam na perfeição, como também valorizam o seu imóvel e reduzem o risco de falhas.",
        features: ["Quadros Elétricos Gerais e Parciais", "Remodelação de Instalações Antigas", "Iluminação LED Industrial e Decorativa", "Sistemas de Domótica e Gestão Técnica", "Redes de Terras e Para-raios"],
        keywords: ["Eletricista Algarve", "Empresa Eletricidade", "Instalações Elétricas", "Quadros Elétricos", "Manutenção Industrial"]
      },
      substations: {
        title: "Postos de Transformação",
        seoTitle: "Postos de Transformação e Média Tensão",
        seoDescription: "Instalação e manutenção de Postos de Transformação (PTs) e Celas de Média Tensão. Serviço especializado para indústrias e grandes edifícios.",
        description: "Alta potência exige alta responsabilidade e competência técnica.",
        fullText: "Os Postos de Transformação (PTs) são o coração energético de grandes indústrias e edifícios. A Joaquim & Fernandes possui uma equipa altamente qualificada para intervir em Média Tensão. Realizamos a montagem chave-na-mão de PTs (cabine ou aéreos), bem como a sua manutenção preventiva obrigatória. Garantimos a limpeza, aperto de conexões, análise de óleo dielétrico e ensaios aos equipamentos de proteção, assegurando a continuidade de serviço e a segurança de pessoas e bens.",
        features: ["Instalação de Celas de Média Tensão", "Transformadores de Potência (Óleo/Secos)", "Quadros Gerais de Baixa Tensão (QGBT)", "Manutenção Preventiva e Corretiva", "Análise de Óleo e Termografia"],
        keywords: ["Postos de Transformação", "Média Tensão", "Transformadores", "PT", "Alta Tensão"]
      },
      ev_charging: {
        title: "Mobilidade Elétrica",
        seoTitle: "Postos de Carregamento de Carros Elétricos",
        seoDescription: "Instalação de Postos de Carregamento de Elétricos e Wallboxes. Soluções para condomínios, empresas e particulares. Rede Mobi.E.",
        description: "O futuro move-se a eletricidade. Nós instalamos a infraestrutura.",
        fullText: "Como entidade instaladora certificada, oferecemos soluções completas para o carregamento de veículos elétricos. Seja para uma garagem privada, um condomínio ou um parque de estacionamento empresarial, dimensionamos a solução ideal para carregar o seu veículo com rapidez e segurança, sem disparar o quadro elétrico. Integramos os postos com a rede Mobi.E quando necessário e configuramos sistemas de gestão de carga (Load Balancing) para otimizar o consumo energético do edifício.",
        features: ["Wallboxes Domésticas", "Postos de Carregamento Rápido (DC)", "Integração na Rede Mobi.E", "Sistemas de Load Balancing", "Soluções para Condomínios"],
        keywords: ["Carregamento Elétricos", "Wallbox", "Mobi.E", "Mobilidade Elétrica", "Tesla"]
      },
      others: {
        title: "Serviços Complementares",
        seoTitle: "Consultoria Energética e Segurança",
        seoDescription: "Auditorias energéticas, fiscalização de obra e sistemas de segurança. Serviços complementares de engenharia e construção.",
        description: "Uma abordagem 360º às necessidades do seu edifício.",
        fullText: "Para além da eletricidade pura, a nossa competência estende-se a áreas vitais para o funcionamento de qualquer infraestrutura. Oferecemos serviços de fiscalização de obra para garantir que o seu projeto é cumprido pelo empreiteiro. Implementamos sistemas de segurança eletrónica (CCTV, Intrusão) e realizamos auditorias energéticas para identificar onde pode poupar dinheiro. Também dispomos de equipas de construção civil para pequenos arranjos e acabamentos, facilitando a gestão da sua obra num único fornecedor.",
        features: ["Fiscalização e Gestão de Obra", "Sistemas de Videovigilância (CCTV)", "Deteção de Incêndio (SADI)", "Auditorias de Eficiência Energética", "Pequena Construção Civil e Reparações"],
        keywords: ["Consultoria", "Fiscalização", "CCTV", "Segurança", "Auditoria Energética"]
      }
    },
    contact: {
      heroTitle: "Contacte-nos",
      heroDesc: "Estamos disponíveis para esclarecer dúvidas e apresentar propostas.",
      infoTitle: "Informações",
      labels: {
        address: "Morada",
        phone: "Telefone",
        callCost: "(Chamada para rede fixa nacional)",
        email: "Email",
        schedule: "Horário",
        weekdays: "Segunda a Sexta: 09:00 - 18:00",
        weekend: "Sábado e Domingo: Encerrado",
        emergency: "Emergências?",
        emergencyDesc: "For active maintenance contracts, use the 24h support line."
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
          installations: "Installations",
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
      visionDesc: "A Joaquim & Fernandes Lda tem como visão ser uma empresa líder e um parceiro estratégico na construção de infra-estruturas na região do Algarve, acompanhando a inovação e sendo um exemplo na sua área de negócio.",
      missionTitle: "Missão",
      missionDesc: "Prestar serviços com eficácia e rapidez na área da construção e manutenção de infra-estruturas no Sul de Portugal.",
      valuesTitle: "Valores",
      values: [
        { title: "Integridade", desc: "Seriousness and honesty predominate in decisions and day-to-day life." },
        { title: "Responsabilidade", desc: "Commitment to assume the duties and functions assigned, as well as guaranteeing compliance with the agreed contract/service." },
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
          content: "The entity responsible for processing your personal data is Joaquim & Fernandes, Lda, headquartered at Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. For any questions related to data protection, you can contact us via email at geral@joaquimefernandes.pt."
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
        title: "Joaquim & Fernandes | Electrical Company in Algarve & Lower Alentejo",
        description: "Expert Electricians in Electrical Installations, Grid Connection, PLR's, Transformers and Smart Cities. Serving Faro, Portimão, Tavira, and Beja."
      },
      about: {
        title: "About Us | Certified Electricians in Algarve | Joaquim & Fernandes",
        description: "Learn about Joaquim & Fernandes, a leading electricity and telecommunications company in the South. Serving the Algarve (Faro, Albufeira) and Lower Alentejo with quality."
      },
      services: {
        title: "Electrical Services & Telecommunications | Algarve & Alentejo",
        description: "Complete services in the South: Electrical Projects, PLR's, Transformation Stations, Industrial Electrical Installations, and EV Charging."
      },
      smartCities: {
        title: "Smart Cities & IoT | Intelligent Urban Solutions | J&F Algarve",
        description: "Developing Smart Cities, smart public lighting, and energy efficiency for municipalities in Algarve and Lower Alentejo."
      },
      partners: {
        title: "Partners & Brands | Schneider, E-Redes, Siemens",
        description: "We work with top brands and comply with E-Redes standards. Trusted partners for civil construction and public works in the South."
      },
      careers: {
        title: "Recruitment Electrician & Engineering | Jobs Algarve",
        description: "Join our team. Job openings for Electricians, Electrical Engineers, and Maintenance Technicians in Algarve and Lower Alentejo."
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
      smartCities: 'Smart Cities',
      partners: 'Partners',
      careers: 'Careers',
      contact: 'Contacts',
      quote: 'Get a Quote',
      toggle: 'PT'
    },
    footer: {
      desc: 'Integrated solutions for electricity, construction, and electric mobility. Driving your project in Algarve and Lower Alentejo with quality and safety since 1986.',
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
        subtitle: "Your reference electrical company in Algarve and Lower Alentejo. Technical excellence in PLR's and Installations.",
        ctaPrimary: "Get a Quote",
        ctaSecondary: "Contact Us"
      },
      servicesTitle: "Our Areas of Expertise",
      whyUsTitle: "Why choose Joaquim & Fernandes?",
      whyUsDesc: "We are the right choice for those looking for certified electricians in Algarve and Lower Alentejo. We combine decades of experience in Transformation Stations and Telecommunications with the latest technologies.",
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
          name: "Carlos Mendes",
          role: "Operations Director",
          company: "Logística Algarve SA",
          text: "The installation of electric chargers in our fleet in Loulé was impeccable. Professionalism and speed."
        },
        {
          id: 2,
          name: "Ana Pereira",
          role: "Owner",
          company: "Resort Solar Alentejano",
          text: "The electrical renovation and festive lighting transformed our tourist space in Mértola. Highly recommend."
        },
        {
          id: 3,
          name: "Miguel Santos",
          role: "Condominium Manager",
          company: "GestCondo Tavira",
          text: "Exemplary building maintenance. We solved old infiltration and electrical problems."
        }
      ],
      partnersTitle: "Trusted Partners and Brands",
      serviceCards: {
         projects: { title: "Electrical Projects", desc: "Development of electrical engineering and telecommunications projects, licensing, and specialized technical consulting." },
         plrs: { title: "PLR's & Grid Connection", desc: "Execution of Network Connection Points (PLR) and infrastructure for public distribution network connection." },
         installations: { title: "Electrical Installations", desc: "Low and Medium Voltage electrical installations for industry, commerce, and housing in Algarve and Lower Alentejo." },
         substations: { title: "Transformation Stations", desc: "Assembly, maintenance, and testing of Transformation Stations (PTs), aerial and cabin." },
         ev_charging: { title: "EV Charging Stations", desc: "Turnkey solutions for electric vehicle charging (EVCS) in public and private spaces." },
         smart_cities: { title: "Smart Cities", desc: "Integrated IoT solutions, smart lighting, and urban management for future cities." }
      }
    },
    smartCities: {
      heroTitle: "Smart Cities & Innovation",
      heroDesc: "We connect the urban environment of the South to the future through IoT technology, energy efficiency, and intelligent resource management.",
      introTitle: "The Future City is Now",
      introDesc: "We develop integrated solutions that make Algarve and Alentejo cities more efficient, sustainable, and livable. From smart public lighting to centralized building management.",
      features: [
        {
          title: "Smart Public Lighting",
          desc: "LED systems with point-to-point telemanagement, motion sensors, and automatic brightness adaptation for maximum energy savings."
        },
        {
          title: "Connected Urban Mobility",
          desc: "Charging hubs integrated into urban infrastructure, traffic monitoring, and smart parking solutions."
        },
        {
          title: "Cognitive Buildings",
          desc: "IoT sensor integration for air quality monitoring, consumption management, and advanced building automation (BMS)."
        },
        {
          title: "Digital Energy Networks",
          desc: "Implementation of Smart Grids and renewable energy communities for decentralization and optimization of energy production."
        }
      ],
      innovationTitle: "Innovation Hub",
      innovationDesc: "We use the latest remote monitoring and Artificial Intelligence technologies to anticipate failures and optimize resources in real time.",
      stat1: "Energy Savings",
      stat2: "CO2 Reduction",
      stat3: "Operational Efficiency",
      ctaTitle: "Transform your infrastructure",
      ctaDesc: "Our Smart City solutions are modular and scalable.",
      ctaButton: "Schedule Technical Consult"
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
        { year: "2015", title: "Expansion to Alentejo", description: "Beginning of operations in Lower Alentejo, focusing on agricultural and industrial projects." },
        { year: "2020", title: "Electric Mobility", description: "Launch of the division dedicated to electric mobility, installing charging stations nationwide." },
        { year: "Today", title: "Market Leaders in the South", description: "We continue to innovate, maintaining the values of trust that have defined us for almost 40 years." }
      ],
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
          id: "projects",
          title: "Electrical Projects",
          description: "Full development of engineering specialty projects, ensuring compliance with all legal standards and technical requirements.",
          details: ["Electrical Projects", "ITED/ITUR Projects", "Licensing", "Lighting Studies", "Energy Consulting"]
        },
        {
          id: "plrs",
          title: "PLR's",
          description: "Specialized execution of Network Connection Points and electrical infrastructure for connection to the public distribution network.",
          details: ["Service Drops", "Transition Boxes", "Metering", "Subdivision Infrastructure", "Coordination with E-Redes"]
        },
        {
          id: "installations",
          title: "Electrical Installations",
          description: "Comprehensive electrical installation services for industrial, commercial, and residential sectors, focusing on safety and efficiency.",
          details: ["Instalações Industriais", "Quadros Elétricos", "Domótica e Automação", "Remodelações Elétricas", "Manutenção Preventiva"]
        },
        {
          id: "substations",
          title: "Transformation Stations",
          description: "Assembly, commissioning, and maintenance of Transformation Stations (PTs) for Medium Voltage clients.",
          details: ["Cabin PTs", "Aerial PTs", "Medium Voltage Cells", "Power Transformers", "Testing and Measurements"]
        },
        {
          id: "ev_charging",
          title: "EV Charging Stations",
          description: "Turnkey solutions for electric mobility, from home installation to large charging hubs.",
          details: ["Home Wallboxes", "Fast Charging Stations", "Mobi.E Network", "Fleet Management", "Condominiums"]
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
        seoTitle: "Electrical Projects, ITED and Telecommunications",
        seoDescription: "Specialist company in Electrical Projects, ITED, and Telecommunications. Licensing and Consulting in Algarve and Lower Alentejo.",
        description: "Precision engineering for smart and safe buildings.",
        fullText: "Our engineering team develops detailed technical projects ensuring the feasibility, safety, and efficiency of your installations. From the initial study to final licensing with competent authorities (DGEG, E-Redes, ANACOM), we ensure every line strictly complies with current legislation. We use state-of-the-art software for modeling and calculation, allowing us to anticipate challenges and optimize construction costs before work even begins.",
        features: ["Low and Medium Voltage Electrical Projects", "ITED (Telecom) and ITUR Projects", "Self-Protection Measures (MAP)", "Lighting Studies (Dialux)", "Energy Certification Consulting"],
        keywords: ["Electrical Projects", "ITED", "Telecommunications", "Electrical Design", "Engineering"]
      },
      plrs: {
        title: "Network Connection Points (PLR)",
        seoTitle: "PLR's, Service Drops and E-Redes in Algarve",
        seoDescription: "Execution of PLR's, service drops, and electrical branches according to E-Redes standards. Specialists in grid connection in Faro, Portimão, and Évora.",
        description: "The secure bridge between the public grid and your installation.",
        fullText: "Executing Network Connection Points (PLR), service drops, and branches requires deep knowledge of E-Redes technical standards. We specialize in building these critical infrastructures, ensuring seamless and safe interconnection. We handle the entire technical process, from trenching and cabling to mounting connection boxes and metering cabinets, ensuring your installation receives power without setbacks or inspection failures.",
        features: ["Underground and Aerial Service Drops", "Metering Cabinets and Transition Boxes", "Subdivision Infrastructure", "Technical Coordination with E-Redes", "Insulation and Continuity Testing"],
        keywords: ["E-Redes", "PLR", "Electrical Branches", "Service Drops", "Power Metering"]
      },
      installations: {
        title: "Electrical Installations",
        seoTitle: "Industrial and Residential Electrical Installations | Electrician",
        seoDescription: "Electrical installation company for industrial and residential sectors. Qualified electricians for works in Algarve and Lower Alentejo.",
        description: "Safe and efficient energy for any type of building.",
        fullText: "We perform complete electrical installations adapted to the specific needs of industries, offices, commercial spaces, and homes. Our focus is on safety, durability, and ease of future maintenance. We work with the best materials on the market (Schneider, Hager, Legrand) to assemble electrical panels, structured cabling networks, and lighting systems that not only function perfectly but also add value to your property and reduce failure risks.",
        features: ["General and Partial Electrical Panels", "Renovation of Old Installations", "Industrial and Decorative LED Lighting", "Home Automation and Technical Management", "Earthing Systems and Lightning Rods"],
        keywords: ["Electrician Algarve", "Electrical Company", "Electrical Installations", "Electrical Panels", "Industrial Maintenance"]
      },
      substations: {
        title: "Transformation Stations",
        seoTitle: "Transformation Stations and Medium Voltage",
        seoDescription: "Installation and maintenance of Transformation Stations (PTs) and Medium Voltage Cells. Specialized service for industries and large buildings.",
        description: "High power requires high responsibility and technical competence.",
        fullText: "Transformation Stations (PTs) are the energy heart of large industries and buildings. Joaquim & Fernandes has a highly qualified team to intervene in Medium Voltage. We perform turnkey assembly of PTs (cabin or aerial) as well as mandatory preventive maintenance. We guarantee cleaning, connection tightening, dielectric oil analysis, and equipment testing, ensuring service continuity and safety of people and assets.",
        features: ["Medium Voltage Cell Installation", "Power Transformers (Oil/Dry)", "Low Voltage General Panels (QGBT)", "Preventive and Corrective Maintenance", "Oil Analysis and Thermography"],
        keywords: ["Postos de Transformação", "Média Tensão", "Transformadores", "PT", "Alta Tensão"]
      },
      ev_charging: {
        title: "Electric Mobility",
        seoTitle: "Electric Car Charging Stations",
        seoDescription: "Installation of Electric Charging Stations and Wallboxes. Solutions for condominiums, companies, and individuals. Mobi.E Network.",
        description: "The future moves on electricity. We install the infrastructure.",
        fullText: "As a certified installation entity, we offer complete solutions for electric vehicle charging. Whether for a private garage, a condominium, or a corporate parking lot, we size the ideal solution to charge your vehicle quickly and safely without tripping the circuit breaker. We integrate stations with the Mobi.E network when necessary and configure Load Balancing systems to optimize the building's energy consumption.",
        features: ["Home Wallboxes", "Fast Charging Stations (DC)", "Mobi.E Network Integration", "Load Balancing Systems", "Condominium Solutions"],
        keywords: ["EV Charging", "Wallbox", "Mobi.E", "Electric Mobility", "Tesla"]
      },
      others: {
        title: "Complementary Services",
        seoTitle: "Energy Consulting and Security",
        seoDescription: "Energy audits, construction supervision, and security systems. Complementary engineering and construction services.",
        description: "A 360º approach to your building's needs.",
        fullText: "Beyond pure electricity, our competence extends to vital areas for any infrastructure's operation. We offer construction supervision services to ensure your project is fulfilled by the contractor. We implement electronic security systems (CCTV, Intrusion) and conduct energy audits to identify where you can save money. We also have civil construction teams for small repairs and finishes, facilitating your work management with a single supplier.",
        features: ["Construction Supervision and Management", "Video Surveillance Systems (CCTV)", "Fire Detection (SADI)", "Energy Efficiency Audits", "Small Civil Construction and Repairs"],
        keywords: ["Consulting", "Supervision", "CCTV", "Security", "Energy Audit"]
      }
    },
    careers: {
      heroTitle: "Carreiras",
      heroDesc: "Junte-se a uma equipa com quase 40 anos de história. Construímos o futuro no Algarve e Alentejo com rigor e inovação.",
      introTitle: "Porquê trabalhar connosco?",
      introDesc: "Na Joaquim & Fernandes, acreditamos que as pessoas são a nossa maior energia. Oferecemos estabilidade, formação contínua e a oportunidade de trabalhar em projetos desafiantes nas áreas de eletricidade, construção e mobilidade sustentável.",
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
          location: "Algarve / Baixo Alentejo",
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
          requirements: ["Versatility", "Experiência em manutenção hoteleira ou similar", "Espírito de equipa"],
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
        email: "Email",
        schedule: "Schedule",
        weekdays: "Monday to Friday: 09:00 - 18:00",
        weekend: "Saturday and Sunday: Closed",
        emergency: "Emergências?",
        emergencyDesc: "For active maintenance contracts, use the 24h support line."
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
          installations: "Installations",
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
          content: "The entity responsible for processing your personal data is Joaquim & Fernandes, Lda, headquartered at Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. For any questions related to data protection, you can contact us via email at geral@joaquimefernandes.pt."
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
  }
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
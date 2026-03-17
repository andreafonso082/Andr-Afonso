import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
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
        description: "Soluções completas de iluminação no Algarve. Iluminação de Natal, Iluminação Inteligente (Smart Cities) e Iluminação Técnica."
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
      },
      smartCities: {
        title: "Smart Cities & IoT | Iluminação Pública Inteligente | J&F",
        description: "Transformamos cidades no Algarve em Smart Cities. Soluções de IoT, telegestão de iluminação pública e eficiência energética."
      },
      faqs: {
        title: "Perguntas Frequentes | Joaquim & Fernandes",
        description: "Respostas às dúvidas mais comuns sobre pedidos de ligação à rede (PLR), baixadas, contadores e instalações elétricas."
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
      quality: 'Política de Qualidade',
      complaintsBook: 'Livro de Reclamações',
      faqTitle: 'Dúvidas Frequentes',
      faqDesc: 'Consulte a nossa área de apoio para esclarecer questões técnicas.',
      faqButton: 'Ver FAQs'
    },
    common: {
      learnMore: 'Saber Mais',
      seeMore: 'Ver Mais',
      address: 'Estrada Nacional 125, Bias Norte, Moncarapacho',
      city: '8700-066 Olhão'
    },
    home: {
      hero: {
        title: "Soluções de Eletricidade,|Iluminação, Baixadas|e Ligações à Rede",
        subtitle: "A sua empresa de eletricidade de referência no Algarve e Alentejo. Excelência técnica em Baixadas, PLR's e Infraestruturas.",
        ctaPrimary: "Peça um orçamento",
        ctaSecondary: "Conheça os Serviços"
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
         lighting: { title: "Iluminação Profissional", desc: "Iluminação Festiva, Iluminação Inteligente e Soluções Técnicas." },
         telecommunications: { title: "Telecomunicações", desc: "Projetos e instalação ITED/ITUR, fusão de fibra ótica, redes estruturadas de dados e certificação de infraestruturas." },
         others: { title: "Outros Serviços", desc: "Soluções de mobilidade elétrica (carregadores), construção civil complementar, fiscalização de obra e auditorias energéticas." }
      }
    },
    services: {
      heroTitle: "Os Nossos Serviços",
      heroDesc: "Soluções integradas de engenharia e eletricidade para projetos de qualquer dimensão. Do projeto à execução, garantimos qualidade e cumprimento de prazos.",
      notFoundTitle: "Não encontra o que procura?",
      notFoundDesc: "Realizamos serviços à medida das suas necessidades. Entre em contacto para discutir o seu projeto.",
      notFoundCta: "Contactar Equipa",
      categories: [
        {
          id: 'plrs',
          title: "Pedidos de Ligação à Rede (PLR)",
          description: "Gestão completa de processos de ligação à rede elétrica junto da E-Redes. Executamos baixadas, ramais e aumentos de potência com chave-na-mão.",
          details: ["Baixadas Aéreas e Subterrâneas", "Instalação de Contadores de Obras", "Gestão Processual E-Redes", "Execução de Ramais"]
        },
        {
          id: 'installations',
          title: "Instalações Elétricas",
          description: "Instalações elétricas de baixa tensão para habitação, comércio e indústria. Garantimos segurança, eficiência e conformidade com as normas técnicas.",
          details: ["Quadros Elétricos", "Remodelações", "Iluminação LED", "Manutenção Preventiva"]
        },
        {
          id: 'telecommunications',
          title: "Telecomunicações (ITED/ITUR)",
          description: "Infraestruturas de telecomunicações em edifícios e loteamentos. Instalação de redes de fibra ótica, cobre e coaxial certificadas.",
          details: ["Projetos ITED/ITUR", "Fusão de Fibra Ótica", "Redes Estruturadas", "Certificação"]
        },
        {
          id: 'substations',
          title: "Postos de Transformação",
          description: "Instalação, manutenção e exploração de Postos de Transformação (PTs) privados e públicos. Soluções de Média Tensão.",
          details: ["Montagem de PTs", "Celas de Média Tensão", "Transformadores", "Limpeza e Manutenção"]
        },
        {
          id: 'projects',
          title: "Projetos de Engenharia",
          description: "Elaboração de projetos elétricos, fichas eletrotécnicas e consultoria energética para licenciamento e execução de obra.",
          details: ["Projetos Elétricos", "Medidas de Autoproteção", "Licenciamentos", "Consultoria"]
        },
        {
          id: 'others',
          title: "Outros Serviços",
          description: "Serviços complementares de construção civil, mobilidade elétrica e infraestruturas urbanas.",
          details: ["Carregadores Veículos Elétricos", "Abertura de Valas", "Reconstrução de Pavimentos", "Fiscalização de Obra"]
        }
      ]
    },
    serviceDetails: {
      plrs: {
        seoTitle: "Pedidos de Ligação à Rede (PLR)",
        title: "Execução de PLR e Baixadas",
        description: "Tratamos do seu pedido de ligação à rede elétrica do início ao fim.",
        fullText: "A Joaquim & Fernandes é especialista na execução de Pedidos de Ligação à Rede (PLR) em todo o Algarve e Alentejo. Tratamos de todo o processo burocrático junto da E-Redes e executamos a obra física necessária (baixadas aéreas ou subterrâneas, muretes técnicos, portinholas) para que tenha eletricidade no seu imóvel o mais rapidamente possível.",
        features: ["Levantamento técnico no local", "Abertura do processo na E-Redes", "Execução de valas e infraestruturas", "Instalação de portinholas e quadros", "Certificação final"],
        keywords: ["PLR", "Baixadas", "E-Redes", "Ramais", "Eletricidade"],
        benefits: [
          { title: "Chave-na-mão", desc: "Tratamos da burocracia e da obra." },
          { title: "Rapidez", desc: "Conhecemos os procedimentos para acelerar o processo." }
        ]
      },
      installations: {
        seoTitle: "Instalações Elétricas",
        title: "Instalações Habitacionais e Industriais",
        description: "Soluções elétricas seguras e certificadas para qualquer tipo de edifício.",
        fullText: "Realizamos todo o tipo de instalações elétricas de baixa tensão. Desde pequenas remodelações domésticas a grandes instalações industriais, a nossa equipa de eletricistas certificados garante o cumprimento rigoroso das normas de segurança e eficiência energética.",
        features: ["Quadros elétricos", "Cablagem estruturada", "Iluminação interior e exterior", "Domótica", "Sistemas de segurança"],
        keywords: ["Eletricista", "Instalação", "Manutenção", "Certificação", "Segurança"],
        benefits: [
          { title: "Segurança", desc: "Materiais homologados e técnicos certificados." },
          { title: "Eficiência", desc: "Soluções que reduzem o consumo energético." }
        ]
      },
      telecommunications: {
        seoTitle: "Telecomunicações ITED e ITUR",
        title: "Redes de Fibra Ótica e Telecomunicações",
        description: "Infraestruturas de comunicação certificadas para edifícios e loteamentos.",
        fullText: "Vivemos numa era digital onde a conetividade é fundamental. A Joaquim & Fernandes projeta e instala infraestruturas de telecomunicações (ITED para edifícios e ITUR para loteamentos) preparadas para o futuro. Desde a fusão de fibra ótica à instalação de bastidores e redes estruturadas, garantimos que o seu empreendimento cumpre todas as normas da ANACOM e oferece a melhor velocidade aos utilizadores finais.",
        features: ["Projetos ITED/ITUR", "Fusão de Fibra Ótica", "Redes Coaxiais e Par de Cobre", "Instalação de Racks e Bastidores", "Ensaios e Certificação"],
        keywords: ["ITED", "ITUR", "Fibra Ótica", "Redes", "Telecomunicações"],
        benefits: [
          { title: "Certificação ANACOM", desc: "Garantia de conformidade legal." },
          { title: "Alta Velocidade", desc: "Infraestruturas preparadas para Gigabit." }
        ]
      },
      substations: {
        seoTitle: "Postos de Transformação e Média Tensão",
        title: "Instalação e Manutenção de PTs",
        description: "Soluções de energia de Média Tensão para indústrias e grandes edifícios.",
        fullText: "Para indústrias, hotéis ou grandes superfícies comerciais, a ligação em Baixa Tensão pode não ser suficiente. A J&F especializa-se na montagem de Postos de Transformação (PTs) privados, assegurando a transição segura da Média para a Baixa Tensão. Oferecemos contratos de manutenção preventiva obrigatórios por lei, garantindo a longevidade dos equipamentos e a segurança das instalações.",
        features: ["Montagem de Celas de Média Tensão", "Instalação de Transformadores", "Quadros Gerais de Baixa Tensão (QGBT)", "Manutenção Preventiva e Corretiva", "Análise de Óleo Dielétrico"],
        keywords: ["Posto de Transformação", "Média Tensão", "Transformador", "Indústria", "Energia"],
        benefits: [
          { title: "Fiabilidade", desc: "Equipamentos de marcas líderes como Efacec e Siemens." },
          { title: "Conformidade", desc: "Manutenção de acordo com a legislação em vigor." }
        ]
      },
      projects: {
        seoTitle: "Projetos de Engenharia Elétrica",
        title: "Consultoria e Projetos de Especialidade",
        description: "Engenharia de detalhe para licenciamento e execução de obra.",
        fullText: "Qualquer grande obra começa com um bom projeto. O nosso departamento de engenharia elabora projetos elétricos detalhados, garantindo o equilíbrio entre custo, eficiência e segurança. Tratamos de todo o licenciamento junto das entidades competentes (DGEG, E-Redes, Câmaras Municipais) e desenvolvemos Medidas de Autoproteção para a segurança contra incêndios.",
        features: ["Projetos de Execução Elétrica", "Fichas Eletrotécnicas", "Medidas de Autoproteção (SCIE)", "Consultoria Energética", "Dimensionamento de Redes"],
        keywords: ["Projeto Elétrico", "Engenharia", "Licenciamento", "DGEG", "SCIE"],
        benefits: [
          { title: "Otimização", desc: "Soluções técnicas que reduzem custos de obra." },
          { title: "Aprovação", desc: "Elevada taxa de aprovação nas entidades oficiais." }
        ]
      },
      others: {
        seoTitle: "Serviços Complementares de Construção",
        title: "Construção Civil e Mobilidade",
        description: "Soluções integradas de construção e mobilidade elétrica.",
        fullText: "Para oferecer um serviço chave-na-mão, integramos competências de construção civil necessárias à execução das infraestruturas elétricas. Abrimos e fechamos valas, repomos pavimentos e construímos maciços para equipamentos. Além disso, estamos na vanguarda da mobilidade elétrica, instalando postos de carregamento para frotas e particulares.",
        features: ["Abertura e Fecho de Valas", "Reposição de Calçada e Betuminoso", "Maciços para Iluminação/PTs", "Carregadores de Veículos Elétricos", "Fiscalização de Obra"],
        keywords: ["Construção Civil", "Valas", "Mobilidade Elétrica", "Carregadores", "Obra"],
        benefits: [
          { title: "Integrado", desc: "Um único interlocutor para toda a obra." },
          { title: "Sustentável", desc: "Apoio à transição para a mobilidade elétrica." }
        ]
      }
    },
    lighting: {
      heroTitle: "Iluminação que Transforma",
      heroDesc: "Da magia das luzes de Natal à eficiência da iluminação pública inteligente. Criamos ambientes e garantimos segurança através da luz.",
      introTitle: "Soluções de Luz 360º",
      introDesc: "Na Joaquim & Fernandes, a luz é mais do que visibilidade — é experiência, segurança e identidade. Oferecemos um portfólio completo que vai desde a iluminação decorativa para épocas festivas até sistemas técnicos avançados para cidades e indústrias.",
      stat1: "Projetos Festivos",
      stat2: "Pontos de Luz LED",
      types: [
        {
          title: "Iluminação Festiva",
          desc: "A Iluminação Festiva é a arte de criar emoções através da luz. Desenvolvemos projetos chave-na-mão para ocasiões especiais, transformando o ambiente urbano e comercial. Desde o design criativo dos motivos (2D e 3D) até à instalação e desmontagem segura, garantimos um espetáculo visual que atrai visitantes, dinamiza o comércio local e celebra a tradição com tecnologia LED de baixo consumo.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Centros Históricos e Cidades", "Centros Comerciais", "Praças e Jardins Públicos", "Fachadas de Edifícios"]
        },
        {
          title: "Iluminação Inteligente",
          desc: "Mais do que iluminar estradas, criamos smart cities. A nossa abordagem à Iluminação Pública foca-se na eficiência energética e segurança. Substituímos luminárias convencionais por tecnologia LED de alto rendimento, integrada com sistemas de telegestão que permitem o controlo remoto da intensidade da luz, deteção de avarias em tempo real e redução da fatura energética municipal até 60%. Destacamos a instalação de passadeiras inteligentes em Portimão, que aumentam a segurança dos peões através de sinalização luminosa ativa.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Vias Públicas e Estradas", "Parques Urbanos e Ciclovias", "Zonas Residenciais", "Parques de Estacionamento"]
        },
        {
          title: "Iluminação Técnica",
          desc: "A Iluminação Técnica visa valorizar o património edificado à noite, respeitando a sua história e traça original. Utilizamos projetores de precisão, fitas LED e sistemas RGBW para criar cenários dinâmicos ou estáticos que realçam texturas e volumes. É a solução ideal para dar nova vida a edifícios icónicos, hotéis ou monumentos, reforçando a identidade visual do local.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Monumentos e Igrejas", "Hotéis e Resorts", "Edifícios Corporativos", "Pontes e Estruturas"]
        },
        {
          title: "Iluminação Desportiva",
          desc: "No desporto, a luz é fundamental para o desempenho dos atletas e experiência dos espectadores. Projetamos e instalamos sistemas de iluminação que cumprem rigorosamente os níveis de lux exigidos pelas federações e normas de transmissão televisiva. Garantimos uniformidade no campo, controlo de encadeamento e sistemas de acendimento instantâneo para pavilhões e estádios.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Campos de Futebol e Estádios", "Pavilhões Desportivos", "Campos de Ténis e Padel", "Piscinas Municipais"]
        },
        {
          title: "Iluminação Pública",
          desc: "Garantimos a segurança e o bem-estar das populações através de redes de iluminação pública eficientes e fiáveis. Realizamos a instalação e manutenção de armaduras viárias, projetores e colunas, assegurando a correta luminosidade em estradas, ruas e espaços públicos, sempre com foco na redução da pegada ecológica e custos energéticos.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Estradas Nacionais e Municipais", "Arruamentos Urbanos", "Parques e Jardins", "Zonas Ribeirinhas"]
        }
      ],
      ctaTitle: "Vamos iluminar o seu projeto?",
      ctaDesc: "Seja para decorar a sua cidade no Natal ou renovar a iluminação pública.",
      ctaButton: "Pedir Proposta de Iluminação"
    },
    partners: {
      heroTitle: "Parceiros de Confiança",
      heroDesc: "A excelência da Joaquim & Fernandes constrói-se com relações sólidas com líderes globais da indústria e parcerias estratégicas exclusivas.",
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
        { name: "EFACEC", desc: "Engenharia portuguesa e soluções de mobilidade." },
        { name: "Legrand", desc: "Especialistas em infraestruturas elétricas e digitais." },
        { name: "Hager", desc: "Sistemas de instalação e distribuição de energia." }
      ],
      exclusiveTitle: "Entidades Públicas Parceiras",
      exclusiveDesc: "Municípios e organizações estatais que confiam na Joaquim & Fernandes para iluminação pública e infraestruturas críticas.",
      exclusivePartners: [
        { name: "Município de Olhão", type: "Autarquia", desc: "Execução de infraestruturas elétricas em novos loteamentos e zonas industriais." },
        { name: "Município de Faro", type: "Autarquia", desc: "Manutenção de Iluminação Pública e edifícios municipais no concelho." },
        { name: "Município de Loulé", type: "Autarquia", desc: "Desenvolvimento e manutenção de redes elétricas e iluminação pública." }
      ],
      ctaTitle: "Torne-se um Parceiro",
      ctaDesc: "Procuramos constantemente expandir a nossa rede com empresas que partilhem os nossos valores de rigor e qualidade.",
      ctaButton: "Propor Parceria"
    },
    contact: {
      heroTitle: "Contacte-nos",
      heroDesc: "Estamos disponíveis para esclarecer dúvidas e apresentar propostas.",
      infoTitle: "Informações",
      labels: {
        address: "Morada",
        phone: "Telefone",
        callCost: "(Chamada para a rede fixa nacional)",
        callCostMobile: "(Chamada para a rede móvel nacional)",
        email: "Email",
        schedule: "Horário",
        weekdays: "Segunda a Sexta: 09:00 - 12:30 | 14:00 - 18:00",
        weekend: "Sábado, Domingo e Feriados: Encerrado",
        whatsappBox: {
           title: "Peça orçamento via WhatsApp",
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
        optQuote: "Pedir Orçamento",
        optInfo: "Informações Gerais",
        optRecruitment: "Recrutamento",
        optPartnership: "Propor Parceria",
        optOther: "Outros",
        interest: "Área de Interesse",
        interestPlaceholder: "Selecione a área...",
        jobPosition: "Posição a candidatar",
        cv: "Curriculum Vitae (CV)",
        presentation: "Apresentação da Empresa (PDF)",
        companyName: "Nome da Empresa",
        companyAddress: "Morada da Empresa",
        companyType: "Tipo de Empresa",
        companyContact: "Contacto da Empresa",
        proposalMessage: "Descreva a sua ideia/proposta",
        uploadFile: "Anexar PDF",
        filePlaceholder: "Nenhum ficheiro selecionado",
        fileLabel: "Anexar Projeto/Planta (PDF)",
        fileHint: "PDF (Máx. 5MB)",
        interestHint: "(Selecione múltiplas opções)",
        successMsg: "Obrigado pelo seu contacto! Entraremos em contacto brevemente.",
        fileError: "Por favor, selecione apenas ficheiros PDF.",
        optsInterest: {
          plrs: "Pedidos de Ligação à Rede (PLR)",
          installations: "Infraestruturas Elétricas",
          telecommunications: "Telecomunicações",
          substations: "Postos de Transformação",
          projects: "Projetos de Eletricidade",
          lighting: "Iluminação",
          others: "Outros Serviços"
        },
        message: "Mensagem",
        submit: "Enviar Pedido"
      },
      locationTitle: "Localização"
    },
    faqs: {
      heroTitle: "FAQS",
      heroDesc: "Esclareça as suas dúvidas sobre os nossos serviços e procedimentos.",
      sectionTitle: "PERGUNTAS FREQUENTES",
      list: [
        {
          q: "PRECISO DE COLOCAR ELETRICIDADE NUM LOCAL. QUAIS OS PASSOS A SEGUIR?",
          a: "Para colocar eletricidade numa casa, loja ou terreno é necessário seguir alguns passos de forma organizada e segura. Na JF tratamos de todo o processo, apenas necessitamos de alguns dados/documentos tais como:\n\n- Cartão de cidadão, para pessoa singular ou Certidão permanente, no caso de empresa;\n- Morada da instalação, com indicação das coordenadas geográficas;\n- Caderneta Predial;\n- Contactos telefónicos e de e-mail."
        },
        {
          q: "O QUE PRECISO PARA FAZER UM PEDIDO DE LIGAÇÃO À REDE (PLR) ELÉTRICA?",
          a: "Na JF tratamos de todo o processo, e realizamos um orçamento totalmente gratuito, apenas é necessário que:\n\n- Forneça toda a documentação solicitada;\n- Indique qual o tipo de ligação à rede pretendido;\n- Indique qual a potência pretendida;\n\nApós adjudicação do nosso orçamento, será ainda necessário:\n- Pagamento de Taxas à E-Redes (Valores variáveis)."
        },
        {
          q: "QUAIS OS TIPOS DE LIGAÇÃO À REDE EXISTENTES?",
          a: "- Ligação à rede de uma moradia unifamiliar.\n\n- Ligação à rede para uma empresa/negócio.\n\n- Ligação à rede de uma instalação coletiva (por exemplo: prédios).\n\n- Desvio de rede: Para alterar o local de elementos de rede existente (postes, linhas, etc.).\n\n- Obras: Para fornecer energia elétrica temporariamente a um local, com ou sem a necessidade de ter uma ligação definitiva posteriormente.\n\n- Eventos: Para fornecer energia elétrica a um evento específico e apenas durante o período estritamente necessário para a realização do mesmo. Estas ligações destinam-se tipicamente a circos, feiras, festas, espetáculos de rua, entre outros."
        },
        {
          q: "PRECISO DE ELETRICIDADE NUM LOCAL ONDE JÁ EXISTE CONTADOR. COMO PROCEDER?",
          a: "Se o local já tiver um contador instalado, ou se já teve um contrato de eletricidade, apenas precisa de contactar um comercializador para efetuar um contrato de fornecimento de eletricidade."
        },
        {
          q: "O QUE É O CPE?",
          a: "O CPE – Código de Ponto de Entrega – é o número que identifica a sua instalação elétrica."
        },
        {
          q: "O QUE É NIP?",
          a: "O NIP – Número de Identificação de Prédio – é o número que identifica a instalação coletiva e com o qual é possível consultar todos os CPEs."
        },
        {
          q: "PRETENDO AUMENTAR A POTÊNCIA DA MINHA INSTALAÇÃO. O QUE DEVO FAZER?",
          a: "Se a potência que pretende contratar é inferior à potência máxima admissível da instalação, o Cliente deverá solicitar um aumento de potência contratada junto do seu Comercializador.\n\nNas situações em que a potência que pretende contratar é superior à potência máxima admissível da instalação, o Cliente poderá solicitar-nos um orçamento para um aumento de potência.\n\nO Cliente deverá garantir que a instalação está certificada para o novo valor de potência.\n\nCaso seja necessário certificar a instalação, o Cliente deverá recorrer a uma entidade inspetora de instalações elétricas reconhecida pela Direção Geral de Energia e Geologia (DGEG)."
        },
        {
          q: "É POSSÍVEL MUDAR O LOCAL DO MEU CONTADOR?",
          a: "Sim, através de um pedido de mudança do local do contador, ou alteração do ponto de entrega."
        },
        {
          q: "ESTOU SEM LUZ, QUEM DEVO CONTACTAR?",
          a: "Deverá contactar a E-Redes, através dos meios disponíveis:\n\nTelefone: 800 506 506\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "RECEBI UMA COMUNICAÇÃO SOBRE A SUBSTITUIÇÃO DO MEU CONTADOR. O QUE DEVO FAZER?",
          a: "Deve marcar o dia e hora que lhe forem mais convenientes, contactando a E-Redes:\n\nTelefone: 218 100 100\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "O QUE É NECESSÁRIO PARA TER UM CARREGADOR DE VEÍCULOS ELÉTRICOS?",
          a: "Inicialmente deve verificar a Potência Elétrica Disponível no local, escolher o Tipo de Carregador pretendido e entrar em contacto com o nosso departamento de orçamentação."
        }
      ]
    },
    careers: {
      heroTitle: "Recrutamento",
      heroDesc: "Junte-se a uma equipa com quase 40 anos de história. Construímos o futuro no Algarve e Alentejo com rigor e inovação.",
      introTitle: "Porquê trabalhar connosco?",
      introDesc: "Na Joaquim & Fernandes, acreditamos que as pessoas são a nossa maior energia. Oferecemos estabilidade, formação contínua e a oportunidade de trabalhar em projetos desafiantes de eletricidade, construção e mobilidade sustentável.",
      benefits: [
        "Formação Contínua e Certificação",
        "Seguro de Saúde",
        "Progressão na Carreira",
        "Equipa Unida e Dinâmica"
      ],
      openingsTitle: "Oportunidades em Aberto",
      reqTitle: "Requisitos:",
      otherReq: "+ outros requisitos",
      applyBtn: "Candidatar Agora",
      jobs: [
        {
          id: 1,
          title: "Calceteiro (M/F)",
          location: "Algarve / Alentejo",
          type: "Tempo Inteiro",
          description: "Responsável pela execução e reparação de pavimentos em calçada portuguesa, assentamento de lancis e outros trabalhos de acabamento urbano em via pública.",
          requirements: ["Experiência comprovada na função", "Carta de Condução (preferencial)", "Disponibilidade imediata", "Sentido de responsabilidade"],
          emailSubject: "Candidatura: Calceteiro"
        },
        {
          id: 2,
          title: "Operador de Armazém (M/F)",
          location: "Sede (Faro/Olhão)",
          type: "Part-time",
          description: "Responsável pela receção, conferência e organização de materiais elétricos e de construção no estaleiro, garantindo a eficiência do stock.",
          requirements: ["Experiência em armazém (preferencial)", "Conhecimentos de informática", "Carta de Condução", "Capacidade de organização"],
          emailSubject: "Candidatura: Operador de Armazém"
        },
        {
          id: 3,
          title: "Motorista de Pesados com Grua (M/F)",
          location: "Olhão",
          type: "Tempo Inteiro",
          description: "Principais funções: Condução de camião com grua, transporte de materiais, levantamento de postes e movimentação de bobinas e cargas suspensas. Oferecemos: Salário atrativo e compatível com a experiência, prémios anuais e formação contínua.",
          requirements: ["Carta categoria C (obrigatório)", "Experiência em camião com grua", "Perfil responsável e polivalente", "Experiência com máquinas (valorizado)", "CAM de Pesados de mercadorias (valorizado)", "Preferência por pessoas da região com bom conhecimento da zona"],
          emailSubject: "Candidatura: Motorista de Pesados com Grua"
        }
      ],
      spontaneousTitle: "Não encontrou a vaga ideal?",
      spontaneousDesc: "Estamos sempre à procura de novos talentos no Algarve. Envie-nos o seu CV para a nossa base de dados.",
      spontaneousBtn: "Enviar Candidatura",
      spontaneousDisclaimer: "Ao enviar o seu CV, aceita a nossa política de tratamento de dados para fins de recrutamento."
    },
    qualityPage: {
      title: "Política de Qualidade",
      visionTitle: "Visão",
      visionDesc: "A Joaquim & Fernandes Lda idealiza ser uma empresa de referência e um parceiro estratégico na construção de infraestruturas na região do Algarve, acompanhando a inovação e sendo um exemplo na sua área de negócio.",
      missionTitle: "Missão",
      missionDesc: "Prestar serviços eficazes e rápidos na área da construção e manutenção de infraestruturas no Sul de Portugal.",
      valuesTitle: "Valores",
      values: [
        { title: "Integridade", desc: "A seriedade e honestidade predominam nas decisões e no dia-a-dia." },
        { title: "Responsabilidade", desc: "Compromisso em assumir os deveres e funções incumbidos, bem como garantir o cumprimento do contrato/serviço acordado." },
        { title: "Eficácia no Serviço", desc: "Fazer bem à primeira." },
        { title: "Orientação para o Cliente", desc: "Trabalhar de acordo com as expetativas e requisitos do cliente." }
      ],
      strategyTitle: "Orientações Estratégicas",
      strategies: [
        "Melhorar continuamente a eficácia do SGQ e dos nossos serviços para satisfação dos clientes e colaboradores, bem como contribuir para o desenvolvimento da região algarvia que servimos.",
        "Formar, informar e desenvolver todos os recursos humanos, contribuindo para o desenvolvimento das suas competências.",
        "Promover as condições de segurança e saúde de forma a harmonizar o trabalho e proporcionar bem-estar a todos os colaboradores.",
        "Garantir o cumprimento de todas as normas, legislação e regulamentos em vigor e especificações técnicas exigidas pelos nossos clientes."
      ],
      contactInfo: "Qualquer questão adicional estamos disponíveis para esclarecer. (qualidade@joaquimfernandes.pt)",
      legalInfo: {
        title: "Lei 144/2015 de 8 de Setembro",
        intro: "Em caso de litígio o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo:",
        entityName: "Centro de Arbitragem de Consumo do Algarve Tribunal Arbitral",
        address: "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3º andar, sala 26 8000 Faro, Portugal",
        phone: "Telefone: 289 823 135",
        email: "E-mail: apoio@consumidoronline.pt",
        portal: "Mais informações em Portal do Consumidor www.consumidoronline.pt"
      }
    },
    privacyPage: {
      title: "Política de Privacidade",
      intro: "A Joaquim & Fernandes, Lda respeita a sua privacidade e compromete-se a proteger os seus dados pessoais. Esta política descreve como recolhemos, utilizamos e protegemos a sua informação, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD).",
      sections: [
        {
          title: "1. Responsável pelo Tratamento",
          content: "A entidade responsável pelo tratamento dos seus dados pessoais é a Joaquim & Fernandes, Lda, com sede na Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. Para qualquer questão relacionada com a proteção de dados, pode contactar-nos através do email mail@joaquimfernandes.pt."
        },
        {
          title: "2. Dados Recolhidos",
          content: "Recolhemos dados que nos fornece voluntariamente através dos nossos formulários de contacto, pedidos de orçamento e candidaturas de emprego. Estes podem incluir: Nome, Email, Telefone, Morada e Curriculum Vitae (no caso de recrutamento). Recolhemos também dados técnicos de navegação (Cookies) de forma anónima para melhorar o desempenho do site."
        },
        {
          title: "3. Finalidade do Tratamento",
          content: "Os seus dados são tratados para as seguintes finalidades: \n- Gestão de pedidos de orçamento e contacto comercial;\n- Execução de contratos de prestação de serviços;\n- Processos de recrutamento e seleção;\n- Cumprimento de obrigações legais (faturação)."
        },
        {
          title: "4. Partilha de Dados",
          content: "Não vendemos os seus dados a terceiros. Os seus dados podem ser partilhados apenas com subcontratantes estritamente necessários para a prestação do serviço (ex: contabilidade, informática), garantindo que estes cumprem também o RGPD, ou com autoridades públicas quando exigido por lei."
        },
        {
          title: "5. Direitos do Titular",
          content: "Ao abrigo do RGPD, tem o direito de aceder, retificar, limitar, opor-se ao tratamento e solicitar o apagamento dos seus dados pessoais (direito ao esquecimento). Para exercer estes direitos, basta enviar um pedido por escrito para o nosso email geral."
        },
        {
          title: "6. Segurança e Retenção",
          content: "Implementamos medidas de segurança técnicas e organizativas para proteger os seus dados. Os dados são conservados apenas pelo período necessário para a finalidade para a qual foram recolhidos, ou conforme exigido por lei (ex: 10 anos para dados de faturação)."
        }
      ],
      lastUpdated: "Última atualização: Outubro 2024"
    },
    termsPage: {
      title: "Termos e Condições",
      intro: "Bem-vindo ao website da Joaquim & Fernandes. Ao aceder e utilizar este site, concorda com os seguintes termos e condições de utilização.",
      sections: [
        {
          title: "1. Propriedade Intelectual",
          content: "Todo o conteúdo presente neste site (textos, imagens, logótipos, vídeos) é propriedade exclusiva da Joaquim & Fernandes, Lda ou dos seus parceiros, estando protegido pela legislação de Direitos de Autor e Propriedade Industrial. É proibida a cópia, reprodução ou distribuição sem autorização prévia."
        },
        {
          title: "2. Utilização do Site",
          content: "O utilizador compromete-se a utilizar o site para fins legais e a não praticar atos que possam danificar, inutilizar ou sobrecarregar o site, ou impedir a sua utilização normal por outros utilizadores."
        },
        {
          title: "3. Limitação de Responsabilidade",
          content: "A Joaquim & Fernandes esforça-se por manter a informação do site atualizada e precisa. No entanto, não garantimos a ausência de erros ou omissões e não nos responsabilizamos por danos resultantes da utilização da informação aqui contida. As propostas comerciais e orçamentos requerem sempre confirmação oficial por parte da empresa."
        },
        {
          title: "4. Ligações Externas",
          content: "Este site pode conter ligações para sites de terceiros (ex: parceiros, redes sociais). A Joaquim & Fernandes não controla nem é responsável pelo conteúdo ou políticas de privacidade desses sites externos."
        },
        {
          title: "5. Resolução Alternativa de Litígios (RAL)",
          content: "Em caso de litígio de consumo, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo competente. A Joaquim & Fernandes é aderente aos centros de arbitragem da região do Algarve. Mais informações no Portal do Consumidor (www.consumidor.pt)."
        },
        {
          title: "6. Lei Aplicável e Foro",
          content: "Estes termos regem-se pela lei portuguesa. Para qualquer litígio emergente da interpretação ou aplicação destes termos, será competente o Tribunal de Faro, com expressa renúncia a qualquer outro."
        }
      ]
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
        title: "Reconhecimento, Certificações e Prémios",
        subtitle: "A distinção pública da nossa robustez financeira e competência técnica no setor.",
        list: [
          { name: "PME Líder", desc: "Estatuto de referência que distingue o mérito e o perfil de risco das PME nacionais. Distinguida 3 vezes (last in 2025)." },
          { name: "PME Excelência", desc: "Selo de reputação que premeia os melhores desempenhos económico-financeiros. Distinguida 3 vezes (last in 2025)." },
          { name: "Empreiteiro Qualificado EDP", desc: "Reconhecimento técnico pela distribuidora para execução de obras na rede elétrica." },
          { name: "Alvará de Construção Nº 8887", desc: "Habilitação oficial IMPIC para execução de obras públicas e privadas de classe elevada." },
          { name: "Certificado conformidade, norma ISO 9001:2015", desc: "Sistema de Gestão da Qualidade certificado, garantindo rigor em todos os processos." },
          { name: "Certificado REPRO", desc: "Sistema de qualificação de fornecedores para o setor energético e utilities na Península Ibérica." }
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
  },
  en: {
    seo: {
      home: {
        title: "Joaquim & Fernandes | Electricity Company Algarve and Alentejo",
        description: "Electricians specialized in Electrical Installations, Grid Connections, PLRs, Transformer Substations and Smart Cities. Operating in Faro, Portimão, Tavira, Beja and all Algarve."
      },
      about: {
        title: "About Us | Certified Electricians in Algarve | Joaquim & Fernandes",
        description: "Meet Joaquim & Fernandes, a leading company in electricity and telecommunications in the South. Serving Algarve (Faro, Albufeira) and Alentejo with rigor."
      },
      services: {
        title: "Electrical Installations and Engineering Services | Algarve and Alentejo",
        description: "Complete services in the South: Electricity Projects, Grid Connections (PLRs), Transformer Substations, Industrial Electrical Installations, and EV Charging."
      },
      lighting: {
        title: "Professional Lighting | Festive, Public and Decorative | J&F",
        description: "Complete lighting solutions in Algarve. Christmas Lighting, Smart Lighting (Smart Cities) and Technical Lighting."
      },
      partners: {
        title: "Partners and Brands | Schneider, E-Redes, Siemens",
        description: "We work with top brands and comply with all E-Redes standards. Trusted partners for civil construction and public works in the South."
      },
      careers: {
        title: "Electrician and Engineering Recruitment | Jobs Algarve",
        description: "Join our team. Vacancies for Electricians, Electrical Engineers and Maintenance Technicians in Algarve and Alentejo."
      },
      contact: {
        title: "Contacts | Request Electrician Quote Algarve and Alentejo",
        description: "Contact Joaquim & Fernandes for quotes on electrical installations, Grid Connections (PLRs) or maintenance. Serving Faro, Olhão, Tavira, Portimão and Beja."
      },
      smartCities: {
        title: "Smart Cities & IoT | Smart Public Lighting | J&F",
        description: "Transforming cities in Algarve into Smart Cities. IoT solutions, public lighting telemanagement, and energy efficiency."
      },
      faqs: {
        title: "Frequently Asked Questions | Joaquim & Fernandes",
        description: "Answers to common questions about grid connection requests (PLR), drops, meters, and electrical installations."
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
      quote: 'Get Quote',
      toggle: 'PT'
    },
    footer: {
      desc: 'Integrated solutions for electricity, construction, and electric mobility. Powering your project in Algarve and Alentejo with quality and safety since 1986.',
      navTitle: 'Navigation',
      contactTitle: 'Contacts',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Receive the latest news and updates.',
      placeholder: 'Your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
      designedBy: 'Website designed by',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      quality: 'Quality Policy',
      complaintsBook: 'Complaints Book',
      faqTitle: 'Frequently Asked Questions',
      faqDesc: 'Consult our support area to clarify technical questions.',
      faqButton: 'View FAQs'
    },
    common: {
      learnMore: 'Learn More',
      seeMore: 'See More',
      address: 'Estrada Nacional 125, Bias Norte, Moncarapacho',
      city: '8700-066 Olhão, Portugal'
    },
    home: {
      hero: {
        title: "Electricity Solutions,|Lighting, Connections|and Grid Access",
        subtitle: "Your reference electricity company in Algarve and Alentejo. Technical excellence in Grid Connections, PLRs and Infrastructures.",
        ctaPrimary: "Request a Quote",
        ctaSecondary: "Explore Services"
      },
      servicesTitle: "Our Areas of Expertise",
      whyUsTitle: "Why choose Joaquim & Fernandes?",
      whyUsDesc: "We are the right choice for anyone looking for certified electricians in Algarve and Alentejo. We combine decades of experience in Transformer Substations and Telecommunications with the latest technologies.",
      ctaButton: "Explore our services",
      benefits: [
        { id: 1, text: "Experience since 1986" },
        { id: 2, text: "Certified Electricians" },
        { id: 3, text: "Turnkey Solutions" },
        { id: 4, text: "Focus on the South" }
      ],
      lightUp: {
        title: "Have a project in Faro, Portimão or Beja?",
        desc: "Our light is ready to guide your vision. Specialists in complex installations and public grid connections.",
        cta: "Request Free Quote"
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
          text: "I really liked the service on Monday, 05/13/2025, the gentleman at the reception was very friendly."
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
         projects: { title: "Electricity Projects", desc: "Low and Medium Voltage electrical engineering projects, licensing, self-protection measures, and energy consulting." },
         plrs: { title: "Grid Connection Requests", desc: "Execution of Grid Connection Requests (PLR), underground or aerial drops, and construction of energy distribution branches." },
         installations: { title: "Electrical Infrastructures", desc: "Industrial and residential electrical installations, refurbishments, power increases, certification, and technical maintenance." },
         substations: { title: "Transformer Substations", desc: "Assembly of Transformer Substations (PTs), installation of medium voltage cells, transformers, and preventive maintenance." },
         ev_charging: { title: "Charging Stations", desc: "Turnkey solutions for electric vehicle charging (EVCS) in public and private spaces." },
         lighting: { title: "Professional Lighting", desc: "Festive Lighting, Smart Lighting, and Technical Solutions." },
         telecommunications: { title: "Telecommunications", desc: "ITED/ITUR projects and installation, fiber optic splicing, structured data networks, and infrastructure certification." },
         others: { title: "Other Services", desc: "Electric mobility solutions (chargers), complementary civil construction, works supervision, and energy audits." }
      }
    },
    contact: {
      heroTitle: "Contact Us",
      heroDesc: "We are available to clarify doubts and present proposals.",
      infoTitle: "Information",
      labels: {
        address: "Address",
        phone: "Phone",
        callCost: "(Call to national landline network)",
        callCostMobile: "(Call to national mobile network)",
        email: "Email",
        schedule: "Schedule",
        weekdays: "Monday to Friday: 09:00 - 12:30 | 14:00 - 18:00",
        weekend: "Saturday, Sunday and Holidays: Closed",
        whatsappBox: {
           title: "Request quote via WhatsApp",
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
        optQuote: "Request Quote",
        optInfo: "General Information",
        optRecruitment: "Recruitment",
        optPartnership: "Propose Partnership",
        optOther: "Others",
        interest: "Area of Interest",
        interestPlaceholder: "Select area...",
        jobPosition: "Position to apply for",
        cv: "Curriculum Vitae (CV)",
        presentation: "Company Presentation (PDF)",
        companyName: "Company Name",
        companyAddress: "Company Address",
        companyType: "Company Type",
        companyContact: "Company Contact",
        proposalMessage: "Describe your idea/proposal",
        uploadFile: "Attach PDF",
        filePlaceholder: "No file selected",
        fileLabel: "Attach Project/Plan (PDF)",
        fileHint: "PDF (Max 5MB)",
        interestHint: "(Select multiple options)",
        successMsg: "Thank you for contacting us! We will get back to you shortly.",
        fileError: "Please select only PDF files.",
        optsInterest: {
          plrs: "Grid Connection Requests (PLR)",
          installations: "Electrical Infrastructures",
          telecommunications: "Telecommunications",
          substations: "Transformer Substations",
          projects: "Electricity Projects",
          lighting: "Lighting",
          others: "Other Services"
        },
        message: "Message",
        submit: "Send Request"
      },
      locationTitle: "Location"
    },
    faqs: {
      heroTitle: "FAQS",
      heroDesc: "Clarify your doubts about our services and procedures.",
      sectionTitle: "FREQUENTLY ASKED QUESTIONS",
      list: [
        {
          q: "I NEED TO CONNECT ELECTRICITY TO A LOCATION. WHAT ARE THE STEPS?",
          a: "To connect electricity to a house, shop, or land, you need to follow some steps in an organized and safe manner. At JF we handle the entire process; we just need some data/documents such as:\n\n- Citizen Card, for individuals, or Permanent Certificate, for companies;\n- Installation address, with indication of geographic coordinates;\n- Property Booklet;\n- Phone and email contacts."
        },
        {
          q: "WHAT DO I NEED TO MAKE A GRID CONNECTION REQUEST (PLR)?",
          a: "At JF we handle the entire process and provide a totally free quote. It is only necessary that you:\n\n- Provide all requested documentation;\n- Indicate the type of grid connection intended;\n- Indicate the power intended;\n\nAfter adjudication of our quote, it will also be necessary to:\n- Pay Fees to E-Redes (Variable values)."
        },
        {
          q: "WHAT ARE THE EXISTING TYPES OF GRID CONNECTION?",
          a: "- Grid connection for a single-family home.\n\n- Grid connection for a company/business.\n\n- Grid connection for a collective installation (e.g., buildings).\n\n- Grid deviation: To change the location of existing grid elements (poles, lines, etc.).\n\n- Works: To temporarily supply electricity to a site, with or without the need for a definitive connection later.\n\n- Events: To supply electricity to a specific event and only for the period strictly necessary for its realization. These connections are typically for circuses, fairs, parties, street shows, among others."
        },
        {
          q: "I NEED ELECTRICITY IN A PLACE WHERE THERE IS ALREADY A METER. HOW TO PROCEED?",
          a: "If the place already has a meter installed, or if it has had an electricity contract, you just need to contact a supplier to make an electricity supply contract."
        },
        {
          q: "WHAT IS THE CPE?",
          a: "The CPE – Delivery Point Code – is the number that identifies your electrical installation."
        },
        {
          q: "WHAT IS NIP?",
          a: "The NIP – Building Identification Number – is the number that identifies the collective installation and with which it is possible to consult all CPEs."
        },
        {
          q: "I WANT TO INCREASE THE POWER OF MY INSTALLATION. WHAT SHOULD I DO?",
          a: "If the power you want to contract is lower than the maximum admissible power of the installation, the Customer should request an increase in contracted power from their Supplier.\n\nIn situations where the power you want to contract is higher than the maximum admissible power of the installation, the Customer may request a quote from us for a power increase.\n\nThe Customer must ensure that the installation is certified for the new power value.\n\nIf it is necessary to certify the installation, the Customer must resort to an electrical installation inspection entity recognized by the Directorate General for Energy and Geology (DGEG)."
        },
        {
          q: "IS IT POSSIBLE TO MOVE THE LOCATION OF MY METER?",
          a: "Yes, through a request to change the meter location, or alteration of the delivery point."
        },
        {
          q: "I HAVE NO POWER, WHO SHOULD I CONTACT?",
          a: "You should contact E-Redes, through available means:\n\nPhone: 800 506 506\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "I RECEIVED A COMMUNICATION ABOUT REPLACING MY METER. WHAT SHOULD I DO?",
          a: "You should schedule the day and time that is most convenient for you by contacting E-Redes:\n\nPhone: 218 100 100\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "WHAT IS NEEDED TO HAVE AN ELECTRIC VEHICLE CHARGER?",
          a: "Initially, you must check the Available Electrical Power at the site, choose the Type of Charger intended, and contact our budgeting department."
        }
      ]
    },
    careers: {
      heroTitle: "Recruitment",
      heroDesc: "Join a team with almost 40 years of history. We build the future in Algarve and Alentejo with rigor and innovation.",
      introTitle: "Why work with us?",
      introDesc: "At Joaquim & Fernandes, we believe that people are our greatest energy. We offer stability, continuous training, and the opportunity to work on challenging electricity, construction, and sustainable mobility projects.",
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
          title: "Paver (M/F)",
          location: "Algarve / Alentejo",
          type: "Full-time",
          description: "Responsible for execution and repair of Portuguese cobblestone pavements, curb setting, and other urban finishing works on public roads.",
          requirements: ["Proven experience in the role", "Driving License (preferred)", "Immediate availability", "Sense of responsibility"],
          emailSubject: "Application: Paver"
        },
        {
          id: 2,
          title: "Warehouse Operator (M/F)",
          location: "Headquarters (Faro/Olhão)",
          type: "Part-time",
          description: "Responsible for receiving, checking, and organizing electrical and construction materials in the yard, ensuring stock efficiency.",
          requirements: ["Warehouse experience (preferred)", "Computer skills", "Driving License", "Organizational skills"],
          emailSubject: "Application: Warehouse Operator"
        },
        {
          id: 3,
          title: "Heavy Vehicle Driver with Crane (M/F)",
          location: "Olhão",
          type: "Full-time",
          description: "Main functions: Driving a truck with a crane, transporting materials, lifting poles, and handling coils and suspended loads. We offer: Attractive salary compatible with experience, annual bonuses, and continuous training.",
          requirements: ["Category C License (mandatory)", "Experience with crane trucks", "Responsible and versatile profile", "Experience with machinery (valued)", "Goods Heavy Vehicle CAM (valued)", "Preference for locals with good knowledge of the area"],
          emailSubject: "Application: Heavy Vehicle Driver with Crane"
        }
      ],
      spontaneousTitle: "Didn't find the ideal vacancy?",
      spontaneousDesc: "We are always looking for new talent in Algarve. Send us your CV for our database.",
      spontaneousBtn: "Send Application",
      spontaneousDisclaimer: "By sending your CV, you accept our data processing policy for recruitment purposes."
    },
    qualityPage: {
      title: "Quality Policy",
      visionTitle: "Vision",
      visionDesc: "Joaquim & Fernandes Lda envisions being a reference company and a strategic partner in infrastructure construction in the Algarve region, keeping up with innovation and being an example in its business area.",
      missionTitle: "Mission",
      missionDesc: "Provide effective and fast services in the area of infrastructure construction and maintenance in Southern Portugal.",
      valuesTitle: "Values",
      values: [
        { title: "Integrity", desc: "Seriousness and honesty predominate in decisions and day-to-day life." },
        { title: "Responsibility", desc: "Commitment to assume duties and functions, as well as ensure compliance with the agreed contract/service." },
        { title: "Service Effectiveness", desc: "Doing it right the first time." },
        { title: "Customer Orientation", desc: "Working according to customer expectations and requirements." }
      ],
      strategyTitle: "Strategic Guidelines",
      strategies: [
        "Continuously improve the effectiveness of the QMS and our services for customer and employee satisfaction, as well as contributing to the development of the Algarve region we serve.",
        "Train, inform, and develop all human resources, contributing to the development of their skills.",
        "Promote safety and health conditions to harmonize work and provide well-being to all employees.",
        "Ensure compliance with all current standards, legislation, and regulations and technical specifications required by our clients."
      ],
      contactInfo: "We are available to clarify any additional questions. (qualidade@joaquimfernandes.pt)",
      legalInfo: {
        title: "Law 144/2015 of September 8",
        intro: "In case of dispute, the consumer may resort to an Alternative Consumer Dispute Resolution Entity:",
        entityName: "Algarve Consumer Arbitration Center Arbitral Tribunal",
        address: "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3rd floor, room 26 8000 Faro, Portugal",
        phone: "Phone: 289 823 135",
        email: "E-mail: apoio@consumidoronline.pt",
        portal: "More information at Consumer Portal www.consumidoronline.pt"
      }
    },
    about: {
      heroTitle: "Our History",
      heroDesc: "Almost four decades of engineering, construction, and innovation. Discover the journey that brought us here.",
      timeline: [
        { year: "1986", title: "The Foundation", description: "Joaquim & Fernandes begins its activity as a small family business focused on residential electrical installations in the Faro area." },
        { year: "1998", title: "Expansion to Industry", description: "With team growth, the company expands services to the industrial sector throughout the Algarve." },
        { year: "2005", title: "Construction Department", description: "Responding to customer needs, we opened the civil construction department to offer turnkey solutions." },
        { year: "2015", title: "Expansion to Alentejo", description: "Start of operations in Alentejo, focusing on agricultural and industrial projects." },
        { year: "2020", title: "Electric Mobility", description: "Launch of the division dedicated to electric mobility, installing charging stations throughout the South." },
        { year: "Today", title: "Market Leaders in the South", description: "We continue to innovate, maintaining the values of trust that define us for almost 40 years." }
      ],
      awards: {
        title: "Recognition, Certifications and Awards",
        subtitle: "Public distinction of our financial robustness and technical competence in the sector.",
        list: [
          { name: "PME Leader", desc: "Reference status distinguishing the merit and risk profile of national SMEs. Distinguished 3 times (last in 2025)." },
          { name: "PME Excellence", desc: "Reputation seal awarding best economic-financial performances. Distinguished 3 times (last in 2025)." },
          { name: "EDP Qualified Contractor", desc: "Technical recognition by the distributor for execution of works on the electrical grid." },
          { name: "Construction Permit No. 8887", desc: "Official IMPIC license for execution of high-class public and private works." },
          { name: "ISO 9001:2015 Compliance Certificate", desc: "Certified Quality Management System, ensuring rigor in all processes." },
          { name: "REPRO Certificate", desc: "Supplier qualification system for the energy and utilities sector in the Iberian Peninsula." }
        ]
      },
      teamSection: {
        title: "Who We Are",
        subtitle: "The Strength of Our Team",
        description: "More than a company, we are a collective of professionals passionate about what they do. With a solid and multidisciplinary structure, our team combines the experience of senior engineers with the energy of specialized technicians.",
        stat1: "+50 Employees",
        stat2: "Engineering & Civil",
        stat3: "Certified Technicians",
        highlight: "We continuously invest in training and safety of our staff, ensuring each project is executed with maximum rigor."
      },
      closingTitle: "Ready to be part of the future?",
      closingDesc: "Our story continues to be written every day, in every project we deliver.",
      closingCta: "Work With Us"
    },
    privacyPage: {
      title: "Privacy Policy",
      intro: "Joaquim & Fernandes, Lda respects your privacy and is committed to protecting your personal data. This policy describes how we collect, use, and protect your information, in compliance with the General Data Protection Regulation (GDPR).",
      sections: [
        {
          title: "1. Data Controller",
          content: "The entity responsible for processing your personal data is Joaquim & Fernandes, Lda, headquartered at Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. For any questions related to data protection, you can contact us via email mail@joaquimfernandes.pt."
        },
        {
          title: "2. Collected Data",
          content: "We collect data that you provide voluntarily through our contact forms, quote requests, and job applications. These may include: Name, Email, Phone, Address, and Curriculum Vitae (in case of recruitment). We also collect anonymous technical navigation data (Cookies) to improve site performance."
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
          title: "5. Rights of the Data Subject",
          content: "Under the GDPR, you have the right to access, rectify, limit, object to processing, and request erasure of your personal data (right to be forgotten). To exercise these rights, simply send a written request to our general email."
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
          content: "All content on this site (texts, images, logos, videos) is the exclusive property of Joaquim & Fernandes, Lda or its partners, protected by Copyright and Industrial Property legislation. Copying, reproduction, or distribution without prior authorization is prohibited."
        },
        {
          title: "2. Use of the Site",
          content: "The user agrees to use the site for lawful purposes and not to practice acts that may damage, disable, or overburden the site, or prevent its normal use by other users."
        },
        {
          title: "3. Limitation of Liability",
          content: "Joaquim & Fernandes strives to keep the site information updated and accurate. However, we do not guarantee the absence of errors or omissions and are not responsible for damages resulting from the use of information contained herein. Commercial proposals and quotes always require official confirmation by the company."
        },
        {
          title: "4. External Links",
          content: "This site may contain links to third-party sites (e.g., partners, social networks). Joaquim & Fernandes does not control and is not responsible for the content or privacy policies of these external sites."
        },
        {
          title: "5. Alternative Dispute Resolution (ADR)",
          content: "In case of consumer dispute, the consumer may resort to a competent Alternative Consumer Dispute Resolution Entity. Joaquim & Fernandes adheres to arbitration centers in the Algarve region. More information on the Consumer Portal (www.consumidor.pt)."
        },
        {
          title: "6. Applicable Law and Forum",
          content: "These terms are governed by Portuguese law. For any dispute arising from the interpretation or application of these terms, the Court of Faro shall be competent, with express waiver of any other."
        }
      ]
    },
    lighting: {
      heroTitle: "Lighting that Transforms",
      heroDesc: "From the magic of Christmas lights to the efficiency of smart public lighting. We create atmospheres and ensure safety through light.",
      introTitle: "360º Light Solutions",
      introDesc: "At Joaquim & Fernandes, light is more than visibility — it's experience, safety, and identity. We offer a complete portfolio ranging from decorative lighting for festive seasons to advanced technical systems for cities and industries.",
      stat1: "Festive Projects",
      stat2: "LED Light Points",
      types: [
        {
          title: "Festive Lighting",
          desc: "Festive Lighting is the art of creating emotions through light. We develop turnkey projects for special occasions, transforming the urban and commercial environment. From creative design of motifs (2D and 3D) to safe installation and dismantling, we guarantee a visual spectacle that attracts visitors, boosts local commerce, and celebrates tradition with low-consumption LED technology.",
          applicationsTitle: "Where applied:",
          applications: ["Historic Centers and Cities", "Shopping Centers", "Squares and Public Gardens", "Building Facades"]
        },
        {
          title: "Smart Lighting",
          desc: "More than lighting roads, we create smart cities. Our approach to Public Lighting focuses on energy efficiency and safety. We replace conventional luminaires with high-performance LED technology, integrated with telemanagement systems that allow remote control of light intensity, real-time fault detection, and reduction of municipal energy bills by up to 60%. We highlight the installation of smart crosswalks in Portimão, which increase pedestrian safety through active light signaling.",
          applicationsTitle: "Where applied:",
          applications: ["Public Roads and Highways", "Urban Parks and Cycle Paths", "Residential Zones", "Parking Lots"]
        },
        {
          title: "Technical Lighting",
          desc: "Technical Lighting aims to value built heritage at night, respecting its history and original trace. We use precision projectors, LED strips, and RGBW systems to create dynamic or static scenarios that highlight textures and volumes. It is the ideal solution to give new life to iconic buildings, hotels, or monuments, reinforcing the location's visual identity.",
          applicationsTitle: "Where applied:",
          applications: ["Monuments and Churches", "Hotels and Resorts", "Corporate Buildings", "Bridges and Structures"]
        },
        {
          title: "Sports Lighting",
          desc: "In sports, light is fundamental for athlete performance and spectator experience. We design and install lighting systems that strictly comply with lux levels required by federations and TV transmission standards. We guarantee uniformity on the field, glare control, and instant strike systems for pavilions and stadiums.",
          applicationsTitle: "Where applied:",
          applications: ["Football Fields and Stadiums", "Sports Pavilions", "Tennis and Padel Courts", "Municipal Pools"]
        },
        {
          title: "Public Lighting",
          desc: "We ensure the safety and well-being of populations through efficient and reliable public lighting networks. We install and maintain street luminaires, floodlights, and columns, ensuring correct luminosity on roads, streets, and public spaces, always focusing on reducing the ecological footprint and energy costs.",
          applicationsTitle: "Where applied:",
          applications: ["National and Municipal Roads", "Urban Streets", "Parks and Gardens", "Riverside Areas"]
        }
      ],
      ctaTitle: "Let's light up your project?",
      ctaDesc: "Whether decorating your city for Christmas or renewing public lighting.",
      ctaButton: "Request Lighting Proposal"
    },
    partners: {
      heroTitle: "Trusted Partners",
      heroDesc: "Joaquim & Fernandes excellence is built on solid relationships with global industry leaders and exclusive strategic partnerships.",
      suppliersTitle: "Suppliers and Certified Brands",
      suppliersDesc: "We work only with approved materials and top equipment to ensure maximum safety and durability of our electrical installations.",
      eredesHighlight: {
        title: "Interconnection with Distribution Grid",
        desc: "As a specialized company, we guarantee strict compliance with all technical standards required by E-Redes (formerly EDP Distribuição) for drops, branches, and transformer substations.",
        badge: "Technical Standards Complied"
      },
      brandsList: [
        { name: "Schneider Electric", desc: "Global leader in energy management and automation." },
        { name: "Siemens", desc: "Cutting-edge technology for smart infrastructures." },
        { name: "EFACEC", desc: "Portuguese engineering and mobility solutions." },
        { name: "Legrand", desc: "Specialists in electrical and digital infrastructures." },
        { name: "Hager", desc: "Energy installation and distribution systems." }
      ],
      exclusiveTitle: "Partner Public Entities",
      exclusiveDesc: "Municipalities and state organizations that trust Joaquim & Fernandes for public lighting and critical infrastructures.",
      exclusivePartners: [
        { name: "Olhão Municipality", type: "Municipality", desc: "Execution of electrical infrastructures in new allotments and industrial zones." },
        { name: "Faro Municipality", type: "Municipality", desc: "Maintenance of Public Lighting and municipal buildings in the municipality." },
        { name: "Loulé Municipality", type: "Municipality", desc: "Development and maintenance of electrical networks and public lighting." }
      ],
      ctaTitle: "Become a Partner",
      ctaDesc: "We are constantly looking to expand our network with companies that share our values of rigor and quality.",
      ctaButton: "Propose Partnership"
    },
    services: {
      heroTitle: "Our Services",
      heroDesc: "Integrated engineering and electricity solutions for projects of any size. From design to execution, we guarantee quality and compliance with deadlines.",
      notFoundTitle: "Didn't find what you're looking for?",
      notFoundDesc: "We perform tailored services for your needs. Contact us to discuss your project.",
      notFoundCta: "Contact Team",
      categories: [
        {
          id: 'plrs',
          title: "Grid Connection Requests (PLR)",
          description: "Complete management of electrical grid connection processes with E-Redes. We execute drops, branches, and power increases with turnkey solutions.",
          details: ["Aerial and Underground Drops", "Works Meter Installation", "E-Redes Process Management", "Branch Execution"]
        },
        {
          id: 'installations',
          title: "Electrical Installations",
          description: "Low voltage electrical installations for housing, commerce, and industry. We guarantee safety, efficiency, and compliance with technical standards.",
          details: ["Electrical Boards", "Refurbishments", "LED Lighting", "Preventive Maintenance"]
        },
        {
          id: 'telecommunications',
          title: "Telecommunications (ITED/ITUR)",
          description: "Telecommunications infrastructures in buildings and allotments. Installation of certified fiber optic, copper, and coaxial networks.",
          details: ["ITED/ITUR Projects", "Fiber Optic Splicing", "Structured Networks", "Certification"]
        },
        {
          id: 'substations',
          title: "Transformer Substations",
          description: "Installation, maintenance, and exploration of private and public Transformer Substations (PTs). Medium Voltage Solutions.",
          details: ["PT Assembly", "Medium Voltage Cells", "Transformers", "Cleaning and Maintenance"]
        },
        {
          id: 'projects',
          title: "Engineering Projects",
          description: "Elaboration of electrical projects, technical data sheets, and energy consulting for licensing and work execution.",
          details: ["Electrical Projects", "Self-Protection Measures", "Licensing", "Consulting"]
        },
        {
          id: 'others',
          title: "Other Services",
          description: "Complementary services of civil construction, electric mobility, and urban infrastructures.",
          details: ["EV Chargers", "Trench Opening", "Pavement Reconstruction", "Works Supervision"]
        }
      ]
    },
    serviceDetails: {
      plrs: {
        seoTitle: "Grid Connection Requests (PLR)",
        title: "PLR Execution and Drops",
        description: "We handle your electrical grid connection request from start to finish.",
        fullText: "Joaquim & Fernandes specializes in executing Grid Connection Requests (PLR) throughout Algarve and Alentejo. We handle the entire bureaucratic process with E-Redes and execute the necessary physical work (aerial or underground drops, technical walls, cabinets) so you have electricity in your property as quickly as possible.",
        features: ["Technical survey on site", "Opening process at E-Redes", "Execution of trenches and infrastructures", "Installation of cabinets and boards", "Final certification"],
        keywords: ["PLR", "Drops", "E-Redes", "Branches", "Electricity"],
        benefits: [
          { title: "Turnkey", desc: "We handle bureaucracy and work." },
          { title: "Speed", desc: "We know the procedures to speed up the process." }
        ]
      },
      installations: {
        seoTitle: "Electrical Installations",
        title: "Residential and Industrial Installations",
        description: "Safe and certified electrical solutions for any type of building.",
        fullText: "We perform all types of low voltage electrical installations. From small domestic refurbishments to large industrial installations, our team of certified electricians guarantees rigorous compliance with safety and energy efficiency standards.",
        features: ["Electrical boards", "Structured cabling", "Interior and exterior lighting", "Home automation", "Security systems"],
        keywords: ["Electrician", "Installation", "Maintenance", "Certification", "Safety"],
        benefits: [
          { title: "Safety", desc: "Approved materials and certified technicians." },
          { title: "Efficiency", desc: "Solutions that reduce energy consumption." }
        ]
      },
      telecommunications: {
        seoTitle: "Telecommunications ITED and ITUR",
        title: "Fiber Optic and Telecommunications Networks",
        description: "Certified communication infrastructures for buildings and allotments.",
        fullText: "We live in a digital age where connectivity is fundamental. Joaquim & Fernandes designs and installs future-proof telecommunications infrastructures (ITED for buildings and ITUR for allotments). From fiber optic splicing to the installation of racks and structured networks, we ensure your development complies with all ANACOM standards and offers the best speed to end-users.",
        features: ["ITED/ITUR Projects", "Fiber Optic Splicing", "Coaxial and Copper Pair Networks", "Rack and Cabinet Installation", "Testing and Certification"],
        keywords: ["ITED", "ITUR", "Fiber Optic", "Networks", "Telecommunications"],
        benefits: [
          { title: "ANACOM Certification", desc: "Guarantee of legal compliance." },
          { title: "High Speed", desc: "Gigabit-ready infrastructures." }
        ]
      },
      substations: {
        seoTitle: "Transformer Substations and Medium Voltage",
        title: "Installation and Maintenance of Substations",
        description: "Medium Voltage energy solutions for industries and large buildings.",
        fullText: "For industries, hotels, or large commercial surfaces, Low Voltage connection may not be enough. J&F specializes in assembling private Transformer Substations (PTs), ensuring the safe transition from Medium to Low Voltage. We offer preventive maintenance contracts required by law, guaranteeing equipment longevity and installation safety.",
        features: ["Medium Voltage Cell Assembly", "Transformer Installation", "Low Voltage General Boards (QGBT)", "Preventive and Corrective Maintenance", "Dielectric Oil Analysis"],
        keywords: ["Transformer Substation", "Medium Voltage", "Transformer", "Industry", "Energy"],
        benefits: [
          { title: "Reliability", desc: "Equipment from leading brands like Efacec and Siemens." },
          { title: "Compliance", desc: "Maintenance in accordance with current legislation." }
        ]
      },
      projects: {
        seoTitle: "Electrical Engineering Projects",
        title: "Consulting and Specialty Projects",
        description: "Detailed engineering for licensing and work execution.",
        fullText: "Any great work starts with a good project. Our engineering department develops detailed electrical projects, ensuring the balance between cost, efficiency, and safety. We handle all licensing with competent authorities (DGEG, E-Redes, City Councils) and develop Self-Protection Measures for fire safety.",
        features: ["Electrical Execution Projects", "Technical Data Sheets", "Self-Protection Measures (SCIE)", "Energy Consulting", "Network Sizing"],
        keywords: ["Electrical Project", "Engineering", "Licensing", "DGEG", "SCIE"],
        benefits: [
          { title: "Optimization", desc: "Technical solutions that reduce construction costs." },
          { title: "Approval", desc: "High approval rate with official entities." }
        ]
      },
      others: {
        seoTitle: "Complementary Construction Services",
        title: "Civil Construction and Mobility",
        description: "Integrated construction and electric mobility solutions.",
        fullText: "To offer a turnkey service, we integrate civil construction skills necessary for the execution of electrical infrastructures. We open and close trenches, restore pavements, and build bases for equipment. In addition, we are at the forefront of electric mobility, installing charging stations for fleets and individuals.",
        features: ["Trench Opening and Closing", "Pavement and Bituminous Restoration", "Bases for Lighting/Substations", "Electric Vehicle Chargers", "Works Supervision"],
        keywords: ["Civil Construction", "Trenches", "Electric Mobility", "Chargers", "Work"],
        benefits: [
          { title: "Integrated", desc: "A single interlocutor for the entire work." },
          { title: "Sustainable", desc: "Support for transition to electric mobility." }
        ]
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Fix: Fallback to 'pt' if selected language translations (e.g. 'en') are missing
  const t = translations[language] || translations['pt'];

  const value = {
    language,
    setLanguage,
    t,
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
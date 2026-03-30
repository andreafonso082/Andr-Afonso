import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr';

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
      slogan: "Eletricidade é Connosco!",
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
      slogan: "Electricity is Our Business!",
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
  },
  es: {
  "seo": {
    "home": {
      "title": "Joaquim y Fernández | Compañía Eléctrica del Algarve y Alentejo",
      "description": "Electricistas especializados en Instalaciones Eléctricas, Conexión de Red, Descargas y PLR's, Estaciones Transformadoras y Ciudades Inteligentes. Operamos en Faro, Portimão, Tavira, Beja y todo el Algarve."
    },
    "about": {
      "title": "Acerca de nosotros | Electricistas certificados en el Algarve | Joaquim y Fernández",
      "description": "Descubra Joaquim & Fernandes, empresa líder en electricidad y telecomunicaciones del Sur. Atendemos con rigor el Algarve (Faro, Albufeira) y el Alentejo."
    },
    "services": {
      "title": "Instalaciones Eléctricas y Servicios de Ingeniería | Algarve y Alentejo",
      "description": "Servicios completos en el sur del país: Proyectos Eléctricos, Descargas y PLR's, Estaciones Transformadoras, Instalaciones Eléctricas Industriales y Carga de Vehículos Eléctricos."
    },
    "lighting": {
      "title": "Iluminación profesional | Festivo, Público y Decorativo | J&F",
      "description": "Soluciones completas de iluminación en el Algarve. Iluminación Navideña, Iluminación Inteligente (Smart Cities) e Iluminación Técnica."
    },
    "partners": {
      "title": "Socios y Marcas | Schneider, E-Redes, Siemens",
      "description": "Trabajamos con primeras marcas y cumplimos con todos los estándares de E-Redes. Socios confiables para la construcción civil y obras públicas en el Sur."
    },
    "careers": {
      "title": "Reclutamiento eléctrico y de ingeniería | Empleo en Algarve",
      "description": "Únase a nuestro equipo. Vacantes para electricistas, ingenieros eléctricos y técnicos de mantenimiento en el Algarve y Alentejo."
    },
    "contact": {
      "title": "Contactos | Solicite un presupuesto a un electricista en Algarve y Alentejo",
      "description": "Contacte con Joaquim & Fernandes para cotizaciones de instalaciones eléctricas, descargas y PLR's o mantenimiento. Servimos a Faro, Olhão, Tavira, Portimão y Beja."
    },
    "smartCities": {
      "title": "Ciudades inteligentes e IoT | Alumbrado público inteligente | J&F",
      "description": "Transformamos ciudades del Algarve en Smart Cities. Soluciones IoT, telegestión del alumbrado público y eficiencia energética."
    },
    "faqs": {
      "title": "Preguntas frecuentes | Joaquim y Fernández",
      "description": "Respuestas a las preguntas más habituales sobre solicitudes de conexión a red (PLR), descargas, contadores e instalaciones eléctricas."
    }
  },
  "nav": {
    "home": "Comenzar",
    "about": "Sobre nosotros",
    "services": "Servicios",
    "lighting": "Iluminación",
    "partners": "Fogonadura",
    "careers": "Reclutamiento",
    "contact": "Contactos",
    "quote": "Solicitar una cotización",
    "toggle": "EN"
  },
  "footer": {
    "desc": "Soluciones integradas de electricidad, construcción y movilidad eléctrica. Promovemos su proyecto en el Algarve y Alentejo con calidad y seguridad desde 1986.",
    "navTitle": "Navegación",
    "contactTitle": "Contactos",
    "newsletterTitle": "Hoja informativa",
    "newsletterDesc": "Reciba las últimas noticias y actualizaciones.",
    "placeholder": "Tu correo electrónico",
    "subscribe": "Suscribir",
    "rights": "Reservados todos los derechos.",
    "designedBy": "Sitio web diseñado por",
    "privacy": "política de privacidad",
    "terms": "Términos y condiciones",
    "quality": "Política de Calidad",
    "complaintsBook": "Libro de reclamaciones",
    "faqTitle": "Preguntas frecuentes",
    "faqDesc": "Consulta nuestra área de soporte para aclarar dudas técnicas.",
    "faqButton": "Ver preguntas frecuentes"
  },
  "common": {
    "learnMore": "Descubra más",
    "seeMore": "Ver más",
    "address": "Ruta Nacional 125, Bias Norte, Moncarapacho",
    "city": "8700-066 Olhao"
  },
  "home": {
    "hero": {
      "title": "Soluciones de Electricidad,|Iluminación, Descargas|y Conexiones a Red",
      "subtitle": "Su compañía eléctrica de referencia en el Algarve y Alentejo. Excelencia técnica en Baixadas, PLR's e Infraestructura.",
      "ctaPrimary": "Solicitar una cotización",
      "ctaSecondary": "Descubra los servicios"
    },
    "slogan": "¡La electricidad está con nosotros!",
    "servicesTitle": "Nuestras Áreas de Actividad",
    "whyUsTitle": "¿Por qué elegir Joaquim & Fernandes?",
    "whyUsDesc": "Somos la elección correcta para cualquiera que busque electricistas certificados en el Algarve y Alentejo. Combinamos décadas de experiencia en Centros Transformadores y Telecomunicaciones con las últimas tecnologías.",
    "ctaButton": "Descubra nuestros servicios",
    "benefits": [
      {
        "id": 1,
        "text": "Experiencia desde 1986"
      },
      {
        "id": 2,
        "text": "Electricistas certificados"
      },
      {
        "id": 3,
        "text": "Soluciones llave en mano"
      },
      {
        "id": 4,
        "text": "Enfoque en el Sur del País"
      }
    ],
    "lightUp": {
      "title": "¿Tienes un proyecto en Faro, Portimão o Beja?",
      "desc": "Nuestra luz está lista para guiar tu visión. Especialistas en instalaciones complejas y conexión a la red pública.",
      "cta": "Solicite una cotización gratuita"
    },
    "testimonialsTitle": "Lo que dicen nuestros clientes",
    "testimonials": [
      {
        "id": 1,
        "name": "Narciso Barradas",
        "text": "La recepción del cliente, el servicio y la resolución del problema reportado demuestra la profesionalidad de este equipo. Muchas gracias por su atención y dedicación."
      },
      {
        "id": 2,
        "name": "carolina morais",
        "text": "Realmente disfruté el servicio el lunes 13/05/2025, el caballero de recepción fue muy amable."
      },
      {
        "id": 3,
        "name": "Anaclara",
        "text": "Los empleados Lucas Penido y Maikel Denny son los mejores."
      }
    ],
    "leaveReview": "Deja tu reseña",
    "partnersTitle": "Socios y marcas de confianza",
    "serviceCards": {
      "projects": {
        "title": "Proyectos de Electricidad",
        "desc": "Proyectos de ingeniería eléctrica de Baja y Media Tensión, licencias, medidas de autoprotección y asesoramiento energético."
      },
      "plrs": {
        "title": "Solicitudes de conexión de red",
        "desc": "Ejecución de Solicitudes de Conexión a Red (PLR), descargas subterráneas o aéreas y construcción de ramales de distribución de energía."
      },
      "installations": {
        "title": "Infraestructuras Eléctricas",
        "desc": "Instalaciones eléctricas industriales y residenciales, reformas, aumentos de potencia, certificaciones y mantenimientos técnicos."
      },
      "substations": {
        "title": "Estaciones de Transformación",
        "desc": "Montaje de Estaciones Transformadoras (PT), instalación de celdas de media tensión, transformadores y mantenimiento preventivo."
      },
      "ev_charging": {
        "title": "Estaciones de carga",
        "desc": "Soluciones llave en mano para la carga de vehículos eléctricos (PCVE) en espacios públicos y privados."
      },
      "lighting": {
        "title": "Iluminación profesional",
        "desc": "Iluminación Festiva, Iluminación Inteligente y Soluciones Técnicas."
      },
      "telecommunications": {
        "title": "Telecomunicaciones",
        "desc": "Proyectos e instalación ITED/ITUR, fusión de fibra óptica, redes de datos estructurados y certificación de infraestructura."
      },
      "others": {
        "title": "Otros servicios",
        "desc": "Soluciones de movilidad eléctrica (cargadores), construcción civil complementaria, inspección de obras y auditorías energéticas."
      }
    }
  },
  "services": {
    "heroTitle": "Nuestros Servicios",
    "heroDesc": "Soluciones integradas de ingeniería y electricidad para proyectos de cualquier tamaño. Desde el diseño hasta la ejecución garantizamos calidad y cumplimiento de plazos.",
    "notFoundTitle": "¿No encuentras lo que estás buscando?",
    "notFoundDesc": "Brindamos servicios adaptados a sus necesidades. Ponte en contacto para discutir tu proyecto.",
    "notFoundCta": "Equipo de contacto",
    "categories": [
      {
        "id": "por favor",
        "title": "Solicitudes de conexión de red (PLR)",
        "description": "Gestión completa de los procesos de conexión a red eléctrica con E-Redes. Realizamos descargas, ampliaciones y ampliaciones de potencia llave en mano.",
        "details": [
          "Descensos aéreos y subterráneos",
          "Instalación de mostradores de construcción.",
          "Gestión de Procesos E-Redes",
          "Ejecución de Sucursales"
        ]
      },
      {
        "id": "instalaciones",
        "title": "Instalaciones Eléctricas",
        "description": "Instalaciones eléctricas de baja tensión para vivienda, comercio e industria. Garantizamos seguridad, eficiencia y cumplimiento de las normas técnicas.",
        "details": [
          "Paneles Eléctricos",
          "Renovaciones",
          "Iluminación LED",
          "Mantenimiento preventivo"
        ]
      },
      {
        "id": "telecomunicaciones",
        "title": "Telecomunicaciones (ITED/ITUR)",
        "description": "Infraestructuras de telecomunicaciones en edificios y urbanizaciones. Instalación de redes certificadas de fibra óptica, cobre y coaxial.",
        "details": [
          "Proyectos ITED/ITUR",
          "Fusión de Fibra Óptica",
          "Redes estructuradas",
          "Proceso de dar un título"
        ]
      },
      {
        "id": "subestaciones",
        "title": "Estaciones de Transformación",
        "description": "Instalación, mantenimiento y operación de Estaciones Transformadoras (PTs) públicas y privadas. Soluciones de Media Tensión.",
        "details": [
          "montaje PT",
          "Celdas de Media Tensión",
          "Transformadores",
          "Limpieza y mantenimiento"
        ]
      },
      {
        "id": "proyectos",
        "title": "Proyectos de Ingeniería",
        "description": "Elaboración de proyectos eléctricos, fichas electrotécnicas y asesoría energética para licenciamiento y ejecución de obra.",
        "details": [
          "Proyectos Eléctricos",
          "Medidas de autoprotección",
          "Licencias",
          "Consultoría"
        ]
      },
      {
        "id": "otras",
        "title": "Otros servicios",
        "description": "Servicios complementarios de construcción civil, movilidad eléctrica e infraestructura urbana.",
        "details": [
          "Cargadores de vehículos eléctricos",
          "Apertura de zanja",
          "Reconstrucción de Pisos",
          "Supervisión de Construcción"
        ]
      }
    ]
  },
  "serviceDetails": {
    "plrs": {
      "seoTitle": "Solicitudes de conexión de red (PLR)",
      "title": "Ejecución de PLR ​​y Descargas",
      "description": "Atendemos tu solicitud de conexión a la red eléctrica de principio a fin.",
      "fullText": "Joaquim & Fernandes se especializa en la ejecución de Solicitudes de Conexión a Red (PLR) en todo el Algarve y Alentejo. Nos encargamos de todo el trámite burocrático con E-Redes y realizamos los trabajos físicos necesarios (bajas aéreas o subterráneas, muros técnicos, portones) para que tengas electricidad en tu inmueble lo más rápido posible.",
      "features": [
        "Estudio técnico in situ",
        "Apertura del proceso en E-Redes",
        "Ejecución de zanjas e infraestructuras",
        "Instalación de puertas y marcos.",
        "Certificación final"
      ],
      "keywords": [
        "PLR",
        "descargas",
        "E-Redes",
        "Extensiones",
        "Electricidad"
      ],
      "benefits": [
        {
          "title": "Llavero",
          "desc": "Nos ocupamos de la burocracia y el trabajo."
        },
        {
          "title": "Rapidez",
          "desc": "Conocemos los procedimientos para agilizar el proceso."
        }
      ]
    },
    "installations": {
      "seoTitle": "Instalaciones Eléctricas",
      "title": "Instalaciones habitacionales e industriales",
      "description": "Soluciones eléctricas seguras y certificadas para cualquier tipo de edificación.",
      "fullText": "Realizamos todo tipo de instalaciones eléctricas de baja tensión. Desde pequeñas reformas en el hogar hasta grandes instalaciones industriales, nuestro equipo de electricistas certificados garantiza el estricto cumplimiento de los estándares de seguridad y eficiencia energética.",
      "features": [
        "Cuadros electricos",
        "Cableado estructurado",
        "Iluminación interior y exterior",
        "Domótica",
        "Sistemas de seguridad"
      ],
      "keywords": [
        "Electricista",
        "Instalación",
        "Mantenimiento",
        "Proceso de dar un título",
        "Seguridad"
      ],
      "benefits": [
        {
          "title": "Seguridad",
          "desc": "Materiales homologados y técnicos certificados."
        },
        {
          "title": "Eficiencia",
          "desc": "Soluciones que reducen el consumo energético."
        }
      ]
    },
    "telecommunications": {
      "seoTitle": "Telecomunicaciones ITED e ITUR",
      "title": "Redes de Fibra Óptica y Telecomunicaciones",
      "description": "Infraestructuras de comunicaciones certificadas para edificios y urbanizaciones.",
      "fullText": "Vivimos en una era digital donde la conectividad es fundamental. Joaquim & Fernandes diseña e instala infraestructuras de telecomunicaciones (ITED para edificios e ITUR para urbanizaciones) preparadas para el futuro. Desde la fusión de fibra óptica hasta la instalación de racks y redes estructuradas, garantizamos que su empresa cumpla con todos los estándares ANACOM y ofrezca la mejor velocidad a los usuarios finales.",
      "features": [
        "Proyectos ITED/ITUR",
        "Fusión de Fibra Óptica",
        "Redes Coaxiales y Par de Cobre",
        "Instalación de Racks y Racks",
        "Pruebas y Certificación"
      ],
      "keywords": [
        "ITED",
        "el va",
        "Fibra Óptica",
        "Redes",
        "Telecomunicaciones"
      ],
      "benefits": [
        {
          "title": "Certificación ANACOM",
          "desc": "Garantía de cumplimiento legal."
        },
        {
          "title": "Alta velocidad",
          "desc": "Infraestructuras preparadas para Gigabit."
        }
      ]
    },
    "substations": {
      "seoTitle": "Estaciones de Transformación y Media Tensión",
      "title": "Instalación y mantenimiento de PT",
      "description": "Soluciones eléctricas de Media Tensión para industrias y grandes edificios.",
      "fullText": "Para industrias, hoteles o grandes superficies comerciales la conexión de Baja Tensión puede no ser suficiente. J&F se especializa en el montaje de Estaciones Transformadoras (PT) privadas, garantizando la transición segura de Media a Baja Tensión. Ofrecemos contratos de mantenimiento preventivo obligatorios por ley, garantizando la longevidad de los equipos y la seguridad de las instalaciones.",
      "features": [
        "Montaje de Celdas de Media Tensión",
        "Instalación de transformador",
        "Cuadros Generales de Baja Tensión (QGBT)",
        "Mantenimiento Preventivo y Correctivo",
        "Análisis de aceite dieléctrico"
      ],
      "keywords": [
        "Estación de Transformación",
        "Media tensión",
        "Transformador",
        "Industria",
        "Energía"
      ],
      "benefits": [
        {
          "title": "Fiabilidad",
          "desc": "Equipos de primeras marcas como Efacec y Siemens."
        },
        {
          "title": "Conformidad",
          "desc": "Mantenimiento conforme a la legislación vigente."
        }
      ]
    },
    "projects": {
      "seoTitle": "Proyectos de Ingeniería Eléctrica",
      "title": "Consultoría y Proyectos Especializados",
      "description": "Ingeniería de detalle para licenciamiento y ejecución de obra.",
      "fullText": "Cualquier gran proyecto comienza con un buen proyecto. Nuestro departamento de ingeniería elabora proyectos eléctricos detallados, garantizando el equilibrio entre coste, eficiencia y seguridad. Gestionamos todos los trámites ante las entidades competentes (DGEG, E-Redes, Concejos Municipales) y desarrollamos Medidas de Autoprotección para la seguridad contra incendios.",
      "features": [
        "Proyectos de Ejecución Eléctrica",
        "Fichas Electrotécnicas",
        "Medidas de Autoprotección (SCIE)",
        "Consultoría Energética",
        "Dimensionamiento de la red"
      ],
      "keywords": [
        "Proyecto Eléctrico",
        "Ingeniería",
        "Licencias",
        "DGEG",
        "SIERRA"
      ],
      "benefits": [
        {
          "title": "Mejoramiento",
          "desc": "Soluciones técnicas que reducen los costes de construcción."
        },
        {
          "title": "Aprobación",
          "desc": "Alto índice de aprobación en entidades oficiales."
        }
      ]
    },
    "others": {
      "seoTitle": "Servicios Complementarios de Construcción",
      "title": "Construcción Civil y Movilidad",
      "description": "Soluciones integradas de construcción y movilidad eléctrica.",
      "fullText": "Para ofrecer un servicio llave en mano, integramos las competencias de construcción civil necesarias para la ejecución de infraestructuras eléctricas. Abrimos y cerramos zanjas, reemplazamos pavimentos y construimos estructuras para equipos. Además, estamos a la vanguardia de la movilidad eléctrica, instalando estaciones de carga para flotas y particulares.",
      "features": [
        "Apertura y cierre de zanjas",
        "Reemplazo de Aceras y Bituminosos",
        "Macizos para iluminación/PT",
        "Cargadores de vehículos eléctricos",
        "Supervisión de Construcción"
      ],
      "keywords": [
        "Construcción Civil",
        "Forex",
        "Movilidad eléctrica",
        "Cargadores",
        "Trabajar"
      ],
      "benefits": [
        {
          "title": "Integrado",
          "desc": "Un único interlocutor para todo el proyecto."
        },
        {
          "title": "Sostenible",
          "desc": "Apoyando la transición a la movilidad eléctrica."
        }
      ]
    }
  },
  "lighting": {
    "heroTitle": "Iluminación que transforma",
    "heroDesc": "De la magia de las luces navideñas a la eficiencia del alumbrado público inteligente. Creamos ambientes y garantizamos seguridad a través de la luz.",
    "introTitle": "Soluciones de iluminación 360º",
    "introDesc": "En Joaquim & Fernandes la luz es más que visibilidad: es experiencia, seguridad e identidad. Ofrecemos una cartera completa que va desde iluminación decorativa para temporadas festivas hasta sistemas técnicos avanzados para ciudades e industrias.",
    "stat1": "Proyectos festivos",
    "stat2": "Puntos de luz LED",
    "types": [
      {
        "title": "Iluminación festiva",
        "desc": "La Iluminación Festiva es el arte de crear emociones a través de la luz. Desarrollamos proyectos llave en mano para ocasiones especiales, transformando el entorno urbano y comercial. Desde el diseño creativo de los motivos (2D y 3D) hasta la instalación y desmontaje seguro, garantizamos un espectáculo visual que atrae visitantes, impulsa el comercio local y celebra la tradición con tecnología LED de bajo consumo.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Centros y Ciudades Históricas",
          "Centros Comerciales",
          "Plazas Públicas y Jardines",
          "Fachadas de edificios"
        ]
      },
      {
        "title": "Iluminación inteligente",
        "desc": "Más que iluminar carreteras, creamos ciudades inteligentes. Nuestro enfoque en materia de alumbrado público se centra en la eficiencia energética y la seguridad. Sustituimos las luminarias convencionales por tecnología LED de altas prestaciones, integradas con sistemas de gestión remota que permiten el control remoto de la intensidad lumínica, la detección de averías en tiempo real y la reducción de la factura energética municipal hasta en un 60%. Destacamos la instalación de carriles inteligentes en Portimão, que aumentan la seguridad de los peatones a través de la señalización luminosa activa.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Vías Públicas y Caminos",
          "Parques urbanos y carriles bici",
          "Zonas Residenciales",
          "Aparcamientos"
        ]
      },
      {
        "title": "Iluminación Técnica",
        "desc": "Technical Lighting pretende realzar el patrimonio construido por la noche, respetando su historia y diseño original. Utilizamos proyectores de precisión, tiras LED y sistemas RGBW para crear escenas dinámicas o estáticas que realzan texturas y volúmenes. Es la solución ideal para dar nueva vida a edificios, hoteles o monumentos emblemáticos, reforzando la identidad visual del lugar.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Monumentos e Iglesias",
          "Hoteles y Resorts",
          "Edificios corporativos",
          "Puentes y Estructuras"
        ]
      },
      {
        "title": "Iluminación deportiva",
        "desc": "En el deporte, la luz es fundamental para el rendimiento de los atletas y la experiencia de los espectadores. Diseñamos e instalamos sistemas de iluminación que cumplen estrictamente con los niveles de lux exigidos por las federaciones y estándares de radiodifusión televisiva. Garantizamos uniformidad en el campo, control de deslumbramiento y sistemas de iluminación instantánea para pabellones y estadios.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Campos y estadios de fútbol",
          "Pabellones deportivos",
          "Pistas de Tenis y Padel",
          "Piscinas Municipales"
        ]
      },
      {
        "title": "Alumbrado Público",
        "desc": "Garantizamos la seguridad y el bienestar de las poblaciones a través de redes de alumbrado público eficientes y confiables. Instalamos y mantenemos refuerzos viarios, proyectores y columnas, asegurando una correcta iluminación en vías, calles y espacios públicos, siempre enfocados en reducir la huella ecológica y los costos energéticos.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Carreteras Nacionales y Municipales",
          "Calles urbanas",
          "Parques y Jardines",
          "Áreas ribereñas"
        ]
      }
    ],
    "ctaTitle": "¿Iluminamos tu proyecto?",
    "ctaDesc": "Ya sea decorando tu ciudad para Navidad o renovando el alumbrado público.",
    "ctaButton": "Solicite una propuesta de iluminación"
  },
  "partners": {
    "heroTitle": "Socios de confianza",
    "heroDesc": "La excelencia de Joaquim & Fernandes se basa en relaciones sólidas con líderes globales de la industria y asociaciones estratégicas exclusivas.",
    "suppliersTitle": "Proveedores y marcas certificados",
    "suppliersDesc": "Sólo trabajamos con materiales homologados y equipos de primera línea para garantizar la máxima seguridad y durabilidad de nuestras instalaciones eléctricas.",
    "eredesHighlight": {
      "title": "Interconexión con la Red de Distribución",
      "desc": "Como empresa especializada, garantizamos el estricto cumplimiento de todos los estándares técnicos exigidos por E-Redes (antes EDP Distribuição) para descargas, ampliaciones y estaciones de transformación.",
      "badge": "Normas técnicas cumplidas"
    },
    "brandsList": [
      {
        "name": "Electricidad Schneider",
        "desc": "Líder mundial en gestión energética y automatización."
      },
      {
        "name": "siemens",
        "desc": "Tecnología de vanguardia para infraestructuras inteligentes."
      },
      {
        "name": "EFACEC",
        "desc": "Soluciones portuguesas de ingeniería y movilidad."
      },
      {
        "name": "Legrand",
        "desc": "Especialistas en infraestructuras eléctricas y digitales."
      },
      {
        "name": "Hager",
        "desc": "Sistemas de instalación y distribución de energía."
      }
    ],
    "exclusiveTitle": "Entidades Públicas Socias",
    "exclusiveDesc": "Municipios y organismos estatales que confían en Joaquim & Fernandes para alumbrado público e infraestructura crítica.",
    "exclusivePartners": [
      {
        "name": "Municipio de Olhao",
        "type": "autoridad local",
        "desc": "Ejecución de infraestructuras eléctricas en nuevos fraccionamientos y zonas industriales."
      },
      {
        "name": "Municipio de Faro",
        "type": "autoridad local",
        "desc": "Mantenimiento del alumbrado público y edificios municipales del municipio."
      },
      {
        "name": "Municipio de Loulé",
        "type": "autoridad local",
        "desc": "Desarrollo y mantenimiento de redes eléctricas y alumbrado público."
      }
    ],
    "ctaTitle": "Conviértete en socio",
    "ctaDesc": "Buscamos constantemente ampliar nuestra red con empresas que compartan nuestros valores de rigor y calidad.",
    "ctaButton": "Proponer asociación"
  },
  "contact": {
    "heroTitle": "Contáctenos",
    "heroDesc": "Estamos disponibles para resolver dudas y presentar propuestas.",
    "infoTitle": "Información",
    "labels": {
      "address": "Familiar",
      "phone": "Teléfono",
      "callCost": "(Llamada a red fija nacional)",
      "callCostMobile": "(Llamada a red móvil nacional)",
      "email": "Correo electrónico",
      "schedule": "Tiempo",
      "weekdays": "Lunes a viernes: 09:00 - 12:30 | 14:00 - 18:00",
      "weekend": "Sábados, domingos y festivos: cerrado",
      "whatsappBox": {
        "title": "Solicite una cotización vía WhatsApp",
        "button": "Enviar mensaje"
      }
    },
    "formTitle": "Envíanos un mensaje",
    "form": {
      "name": "Nombre completo",
      "email": "Correo electrónico",
      "phone": "Teléfono",
      "subject": "Sujeto",
      "subjectPlaceholder": "Seleccione un tema...",
      "optQuote": "Solicitar una cotización",
      "optInfo": "Información general",
      "optRecruitment": "Reclutamiento",
      "optPartnership": "Proponer asociación",
      "optOther": "Otros",
      "interest": "Área de interés",
      "interestPlaceholder": "Selecciona la zona...",
      "jobPosition": "Posición para postular",
      "cv": "Currículum Vitae (CV)",
      "presentation": "Presentación de la empresa (PDF)",
      "companyName": "nombre de empresa",
      "companyAddress": "Dirección de la empresa",
      "companyType": "Tipo de empresa",
      "companyContact": "Contacto de la empresa",
      "proposalMessage": "Describe tu idea/propuesta",
      "uploadFile": "Adjuntar PDF",
      "filePlaceholder": "No hay archivos seleccionados",
      "fileLabel": "Adjuntar proyecto/plan (PDF)",
      "fileHint": "PDF (Máx. 5MB)",
      "interestHint": "(Seleccione varias opciones)",
      "successMsg": "¡Gracias por tu contacto! Estaremos en contacto pronto.",
      "fileError": "Seleccione solo archivos PDF.",
      "optsInterest": {
        "plrs": "Solicitudes de conexión de red (PLR)",
        "installations": "Infraestructuras Eléctricas",
        "telecommunications": "Telecomunicaciones",
        "substations": "Estaciones de Transformación",
        "projects": "Proyectos de Electricidad",
        "lighting": "Iluminación",
        "others": "Otros servicios"
      },
      "message": "Mensaje",
      "submit": "Enviar solicitud"
    },
    "locationTitle": "Ubicación"
  },
  "faqs": {
    "heroTitle": "Preguntas frecuentes",
    "heroDesc": "Aclare sus dudas sobre nuestros servicios y procedimientos.",
    "sectionTitle": "PREGUNTAS FRECUENTES",
    "list": [
      {
        "q": "NECESITO PONER ELECTRICIDAD EN UN LUGAR. ¿CUÁLES SON LOS PASOS A SEGUIR?",
        "a": "Para poner electricidad en una casa, almacén o terreno es necesario seguir algunos pasos de forma organizada y segura. En JF nos encargamos de todo el proceso, solo necesitamos algunos datos/documentos como:\n\n- CPF, para personas físicas o certificado permanente, en el caso de empresa; \n- Dirección de la instalación, indicando las coordenadas geográficas; \n- Folleto de construcción; \n- Contactos telefónicos y de correo electrónico."
      },
      {
        "q": "¿QUÉ NECESITO PARA REALIZAR UNA SOLICITUD DE CONEXIÓN A RED ELÉCTRICA (PLR)?",
        "a": "En JF nos encargamos de todo el proceso, y te ofrecemos un presupuesto totalmente gratuito, sólo necesitas:\n\n- Proporcionar toda la documentación solicitada; \n- Indicar el tipo deseado de conexión de red; \n- Indicar la potencia deseada; \n\nDespués de adjudicar nuestro presupuesto, también necesitarás:\n- Pago de Tasas a E-Redes (Montos variables)."
      },
      {
        "q": "¿QUÉ TIPOS DE CONEXIÓN DE RED HAY?",
        "a": "- Conexión a la red de una vivienda unifamiliar. \n\n- Conexión de red para una empresa/negocio. \n\n- Conexión a la red de una instalación colectiva (por ejemplo: edificios). \n\n- Desplazamiento de red: Para cambiar la ubicación de elementos de red existentes (postes, líneas, etc.). \n\n- Obras: Suministro temporal de energía eléctrica a un local, con o sin necesidad de una conexión permanente posterior. \n\n- Eventos: Para suministrar energía eléctrica a un evento específico y sólo durante el periodo estrictamente necesario para que se lleve a cabo el evento. Estas conexiones suelen estar destinadas a circos, ferias, fiestas, espectáculos callejeros, entre otros."
      },
      {
        "q": "NECESITO ELECTRICIDAD EN UN LUGAR DONDE YA HAY UN CONTADOR. ¿CÓMO PROCEDER?",
        "a": "Si el local ya cuenta con un contador instalado, o si ya tenías un contrato de luz, sólo necesitas contactar con una empresa de servicios públicos para firmar un contrato de suministro de luz."
      },
      {
        "q": "¿QUÉ ES EL CPE?",
        "a": "El CPE – Código de Punto de Entrega – es el número que identifica tu instalación eléctrica."
      },
      {
        "q": "¿QUÉ ES EL PIN?",
        "a": "El NIP – Building Identification Number – es el número que identifica la instalación colectiva y con el que es posible consultar todos los CPE."
      },
      {
        "q": "QUIERO AUMENTAR LA POTENCIA DE MI INSTALACIÓN. ¿QUÉ TENGO QUE HACER?",
        "a": "Si la potencia que desea contratar es inferior a la potencia máxima permitida de la instalación, el Cliente deberá solicitar a su Proveedor un aumento de la potencia contratada. \n\nEn situaciones en las que la potencia que se desee contratar sea superior a la potencia máxima permitida de la instalación, el Cliente podrá solicitar presupuesto de aumento de potencia. \n\nEl Cliente deberá asegurarse de que la instalación esté certificada para el nuevo valor de potencia. \n\nSi es necesario certificar la instalación, el Cliente deberá contactar con una entidad de inspección de instalaciones eléctricas reconocida por la Dirección General de Energía y Geología (DGEG)."
      },
      {
        "q": "¿ES POSIBLE CAMBIAR LA UBICACIÓN DE MI CONTADOR?",
        "a": "Sí, mediante solicitud de cambio de ubicación del medidor, o cambio de punto de entrega."
      },
      {
        "q": "ESTOY SIN ENERGÍA, ¿A QUIÉN DEBO CONTACTAR?",
        "a": "Deberá contactar con E-Redes, a través de los medios disponibles:\n\nTeléfono: 800 506 506\nWhatsApp: 913 846 398\nSitio web: https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "RECIBÍ UNA COMUNICACIÓN SOBRE EL REEMPLAZO DE MI MEDIDOR. ¿QUÉ TENGO QUE HACER?",
        "a": "Deberás programar el día y horario que más te convenga contactando con E-Redes:\n\nTeléfono: 218 100 100\nWhatsApp: 913 846 398\nSitio web: https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "¿QUÉ ES NECESARIO PARA TENER UN CARGADOR DE VEHÍCULO ELÉCTRICO?",
        "a": "Inicialmente deberá verificar la Potencia Eléctrica Disponible en el lugar, elegir el Tipo de Cargador deseado y comunicarse con nuestro departamento de presupuestos."
      }
    ]
  },
  "careers": {
    "heroTitle": "Reclutamiento",
    "heroDesc": "Únete a un equipo con casi 40 años de historia. Construimos el futuro en el Algarve y el Alentejo con rigor e innovación.",
    "introTitle": "¿Por qué trabajar con nosotros?",
    "introDesc": "En Joaquim & Fernandes creemos que las personas son nuestra mayor energía. Ofrecemos estabilidad, educación continua y la oportunidad de trabajar en proyectos desafiantes de electricidad, construcción y movilidad sostenible.",
    "benefits": [
      "Formación Continua y Certificación",
      "Seguro médico",
      "Progresión profesional",
      "Equipo unido y dinámico"
    ],
    "openingsTitle": "Oportunidades abiertas",
    "reqTitle": "Requisitos:",
    "otherReq": "+ otros requisitos",
    "applyBtn": "Aplicar ahora",
    "jobs": [
      {
        "id": 1,
        "title": "Calceteiro (H/F)",
        "location": "Algarve / Alentejo",
        "type": "Tiempo completo",
        "description": "Responsable de la ejecución y reparación de pavimentos de aceras portuguesas, colocación de bordillos y otras obras de acabado urbano en la vía pública.",
        "requirements": [
          "Experiencia comprobada en el puesto.",
          "Licencia de conducir (preferible)",
          "Disponibilidad inmediata",
          "Sentido de responsabilidad"
        ],
        "emailSubject": "Aplicación: Calceteiro"
      },
      {
        "id": 2,
        "title": "Operador de almacén (H/M)",
        "location": "Sede (Faro/Olhão)",
        "type": "Tiempo parcial",
        "description": "Responsable de recibir, verificar y organizar materiales eléctricos y de construcción en obra, asegurando la eficiencia del stock.",
        "requirements": [
          "Experiencia en almacén (preferiblemente)",
          "Conocimientos de informática",
          "Carnet de conducir",
          "Capacidad organizativa"
        ],
        "emailSubject": "Aplicación: Operador de almacén"
      },
      {
        "id": 3,
        "title": "Conductor de grúa de servicio pesado (M/F)",
        "location": "Olhao",
        "type": "Tiempo completo",
        "description": "Funciones principales: Conducir camión con grúa, transportar materiales, levantar postes y mover bobinas y cargas suspendidas. Ofrecemos: Salario atractivo compatible con experiencia, bonificación anual y formación continua.",
        "requirements": [
          "Letra de categoría C (obligatoria)",
          "Experiencia en un camión con grúa.",
          "Perfil responsable y polivalente",
          "Experiencia con máquinas (valorable)",
          "CAM de Mercancías Pesadas (valorado)",
          "Preferencia por personas de la región con buen conocimiento del área."
        ],
        "emailSubject": "Aplicación: Conductor de grúa de servicio pesado"
      }
    ],
    "spontaneousTitle": "¿No encontraste la vacante ideal?",
    "spontaneousDesc": "Siempre estamos buscando nuevos talentos en el Algarve. Envíanos tu CV a nuestra base de datos.",
    "spontaneousBtn": "Enviar Candidatura",
    "spontaneousDisclaimer": "Al enviar tu CV aceptas nuestra política de tratamiento de datos con fines de selección."
  },
  "qualityPage": {
    "title": "Política de Calidad",
    "visionTitle": "Visión",
    "visionDesc": "Joaquim & Fernandes Lda pretende ser una empresa de referencia y un socio estratégico en la construcción de infraestructuras en la región del Algarve, siguiendo la innovación y siendo un ejemplo en su área de negocio.",
    "missionTitle": "Misión",
    "missionDesc": "Proporcionar servicios eficaces y rápidos en el área de construcción y mantenimiento de infraestructuras en el sur de Portugal.",
    "valuesTitle": "Valores",
    "values": [
      {
        "title": "Integridad",
        "desc": "La seriedad y la honestidad predominan en las decisiones y en la vida cotidiana."
      },
      {
        "title": "Responsabilidad",
        "desc": "Compromiso de asumir los deberes y funciones asignadas, así como velar por el cumplimiento del contrato/servicio acordado."
      },
      {
        "title": "Efectividad del servicio",
        "desc": "Hazlo bien la primera vez."
      },
      {
        "title": "Orientación al cliente",
        "desc": "Trabajar de acuerdo con las expectativas y requisitos del cliente."
      }
    ],
    "strategyTitle": "Lineamientos Estratégicos",
    "strategies": [
      "Mejorar continuamente la eficacia del SGC y de nuestros servicios para satisfacer a los clientes y empleados, además de contribuir al desarrollo de la región del Algarve a la que servimos.",
      "Formar, informar y desarrollar todos los recursos humanos, contribuyendo al desarrollo de sus capacidades.",
      "Promover las condiciones de seguridad y salud con el fin de armonizar el trabajo y proporcionar bienestar a todos los empleados.",
      "Velar por el cumplimiento de todas las normas, leyes y reglamentos vigentes y especificaciones técnicas requeridas por nuestros clientes."
    ],
    "contactInfo": "Estamos disponibles para aclarar cualquier duda adicional. (qualidade@joaquimfernandes.pt)",
    "legalInfo": {
      "title": "Ley 144/2015 de 8 de septiembre",
      "intro": "En caso de controversia, el consumidor puede recurrir a una Entidad Alternativa de Resolución de Controversias del Consumidor:",
      "entityName": "Tribunal de Arbitraje del Centro de Arbitraje del Consumidor del Algarve",
      "address": "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3er piso, habitación 26 8000 Faro, Portugal",
      "phone": "Teléfono: 289 823 135",
      "email": "Correo electrónico: apoio@consumidoronline.pt",
      "portal": "Más información en el Portal del Consumidor www.consumidoronline.pt"
    }
  },
  "privacyPage": {
    "title": "política de privacidad",
    "intro": "Joaquim & Fernandes, Lda respeta su privacidad y se compromete a proteger sus datos personales. Esta política describe cómo recopilamos, usamos y protegemos su información de acuerdo con el Reglamento General de Protección de Datos (GDPR).",
    "sections": [
      {
        "title": "1. Responsable del Tratamiento",
        "content": "La entidad responsable del tratamiento de sus datos personales es Joaquim & Fernandes, Lda, con sede en Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. Para cualquier consulta relacionada con la protección de datos, puede contactarnos por correo electrónico a mail@joaquimfernandes.pt."
      },
      {
        "title": "2. Datos recopilados",
        "content": "Recopilamos datos que usted nos proporciona voluntariamente a través de nuestros formularios de contacto, solicitudes de cotización y solicitudes de empleo. Estos podrán incluir: Nombre, Correo Electrónico, Teléfono, Dirección y Curriculum Vitae (en el caso de contratación). También recopilamos datos técnicos de navegación (Cookies) de forma anónima para mejorar el rendimiento del sitio."
      },
      {
        "title": "3. Finalidad del Tratamiento",
        "content": "Sus datos son tratados con las siguientes finalidades:\n- Gestión de solicitudes de cotización y contacto comercial; \n- Ejecución de contratos de prestación de servicios; \n- Procesos de reclutamiento y selección; \n- Cumplimiento de obligaciones legales (facturación)."
      },
      {
        "title": "4. Intercambio de datos",
        "content": "No vendemos sus datos a terceros. Sus datos solo podrán compartirse con subcontratistas estrictamente necesarios para proporcionar el servicio (por ejemplo, contabilidad, TI), garantizando que también cumplan con el RGPD, o con autoridades públicas cuando así lo exija la ley."
      },
      {
        "title": "5. Derechos del Titular",
        "content": "Según el RGPD, tienes derecho a acceder, rectificar, limitar, oponerte al tratamiento y solicitar la supresión de tus datos personales (derecho al olvido). Para ejercer estos derechos, simplemente envíe una solicitud por escrito a nuestra dirección de correo electrónico general."
      },
      {
        "title": "6. Seguridad y retención",
        "content": "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos. Los datos solo se conservan durante el período necesario para el fin para el que fueron recopilados o según lo exija la ley (por ejemplo, 10 años para los datos de facturación)."
      }
    ],
    "lastUpdated": "Última actualización: octubre de 2024"
  },
  "termsPage": {
    "title": "Términos y condiciones",
    "intro": "Bienvenido al sitio web de Joaquim & Fernandes. Al acceder y utilizar este sitio web, usted acepta los siguientes términos y condiciones de uso.",
    "sections": [
      {
        "title": "1. Propiedad intelectual",
        "content": "Todo el contenido de este sitio web (textos, imágenes, logotipos, vídeos) es propiedad exclusiva de Joaquim & Fernandes, Lda o sus socios, y está protegido por la legislación de Copyright y Propiedad Industrial. Queda prohibida la copia, reproducción o distribución sin autorización previa."
      },
      {
        "title": "2. Uso del Sitio",
        "content": "El usuario se compromete a utilizar el sitio web con fines lícitos y a no realizar actos que puedan dañar, inutilizar o sobrecargar el sitio web, o impedir su normal utilización por otros usuarios."
      },
      {
        "title": "3. Limitación de responsabilidad",
        "content": "Joaquim & Fernandes se esfuerza por mantener la información del sitio web actualizada y precisa. Sin embargo, no garantizamos la ausencia de errores u omisiones y no somos responsables de los daños resultantes del uso de la información aquí contenida. Las propuestas comerciales y presupuestos siempre requieren de la confirmación oficial por parte de la empresa."
      },
      {
        "title": "4. Enlaces externos",
        "content": "Este sitio web puede contener enlaces a sitios web de terceros (por ejemplo, socios, redes sociales). Joaquim & Fernandes no controla ni es responsable del contenido o las políticas de privacidad de estos sitios web externos."
      },
      {
        "title": "5. Resolución alternativa de disputas (ADR)",
        "content": "En caso de controversia en materia de consumo, el consumidor podrá recurrir a una Entidad de Resolución Alternativa de Controversias competente. Joaquim & Fernandes es miembro de centros de arbitraje de la región del Algarve. Más información en el Portal del Consumidor (www.consumidor.com.br)."
      },
      {
        "title": "6. Ley aplicable y lugar de celebración",
        "content": "Estos términos se rigen por la ley portuguesa. Para cualquier controversia que surja de la interpretación o aplicación de los presentes términos, será competente el Tribunal de Faro, con renuncia expresa a cualquier otro."
      }
    ]
  },
  "about": {
    "heroTitle": "Nuestra Historia",
    "heroDesc": "Casi cuatro décadas de ingeniería, construcción e innovación. Descubra el viaje que nos trajo hasta aquí.",
    "timeline": [
      {
        "year": "1986",
        "title": "La Fundación",
        "description": "Joaquim & Fernandes inicia su actividad como una pequeña empresa familiar centrada en las instalaciones eléctricas residenciales en la zona de Faro."
      },
      {
        "year": "1998",
        "title": "Expansión a la industria",
        "description": "A medida que el equipo crece, la empresa amplía sus servicios al sector industrial en todo el Algarve."
      },
      {
        "year": "2005",
        "title": "Departamento de Construcción",
        "description": "Respondiendo a las necesidades del cliente, abrimos el departamento de construcción civil para ofrecer soluciones llave en mano."
      },
      {
        "year": "2015",
        "title": "Expansión al Alentejo",
        "description": "Inicio de operaciones en Alentejo, centrándose en proyectos agrícolas e industriales."
      },
      {
        "year": "2020",
        "title": "Movilidad eléctrica",
        "description": "Lanzamiento de la división dedicada a la movilidad eléctrica, instalando estaciones de carga en todo el Sur."
      },
      {
        "year": "Hoy",
        "title": "Líderes del mercado en el sur",
        "description": "Seguimos innovando, manteniendo los valores de confianza que nos definen desde hace casi 40 años."
      }
    ],
    "awards": {
      "title": "Reconocimientos, Certificaciones y Premios",
      "subtitle": "La distinción pública de nuestra solidez financiera y competencia técnica en el sector.",
      "list": [
        {
          "name": "PME Líder",
          "desc": "Situación de referencia que distingue el perfil de mérito y riesgo de las Pymes nacionales. Distinguido 3 veces (la última en 2025)."
        },
        {
          "name": "Excelencia PME",
          "desc": "Sello de reputación que premia el mejor desempeño económico y financiero. Distinguido 3 veces (la última en 2025)."
        },
        {
          "name": "Contratista calificado EDP",
          "desc": "Reconocimiento técnico por parte de la distribuidora por la realización de trabajos en la red eléctrica."
        },
        {
          "name": "Permiso de Construcción No. 8887",
          "desc": "Titulación oficial IMPIC para realizar obras públicas y privadas de alto nivel."
        },
        {
          "name": "Certificado de conformidad, ISO 9001:2015",
          "desc": "Sistema de Gestión de Calidad Certificado, asegurando el rigor en todos los procesos."
        },
        {
          "name": "Certificado REPRO",
          "desc": "Sistema de calificación de proveedores del sector energético y de servicios públicos en la Península Ibérica."
        }
      ]
    },
    "teamSection": {
      "title": "¿Quiénes somos?",
      "subtitle": "La fuerza de nuestro equipo",
      "description": "Más que una empresa, somos un colectivo de profesionales apasionados por lo que hacen. Con una estructura sólida y multidisciplinar, nuestro equipo combina la experiencia de ingenieros senior con la energía de técnicos especializados.",
      "stat1": "+50 Colaboradores",
      "stat2": "Ingeniería y Civil",
      "stat3": "Técnicos Certificados",
      "highlight": "Invertimos continuamente en la formación y seguridad de nuestro personal, asegurando que cada proyecto se ejecute con el máximo rigor."
    },
    "closingTitle": "¿Listo para ser parte del futuro?",
    "closingDesc": "Nuestra historia continúa escribiéndose todos los días, en cada proyecto que entregamos.",
    "closingCta": "Trabaja con nosotros"
  }
},
  fr: {
  "seo": {
    "home": {
      "title": "Joaquim & Fernandes | Compagnie d'électricité de l'Algarve et de l'Alentejo",
      "description": "Électriciens spécialisés dans les installations électriques, la connexion réseau, les téléchargements et PLR, les postes de transformation et les villes intelligentes. Nous opérons à Faro, Portimão, Tavira, Beja et dans tout l’Algarve."
    },
    "about": {
      "title": "À propos de nous | Électriciens certifiés en Algarve | Joaquim et Fernandes",
      "description": "Découvrez Joaquim & Fernandes, entreprise leader de l'électricité et des télécommunications dans le Sud. Nous servons l'Algarve (Faro, Albufeira) et l'Alentejo avec rigueur."
    },
    "services": {
      "title": "Installations électriques et services d'ingénierie | Algarve et Alentejo",
      "description": "Services complets dans le sud du pays : Projets électriques, téléchargements et PLR, postes de transformation, installations électriques industrielles et recharge de véhicules électriques."
    },
    "lighting": {
      "title": "Éclairage professionnel | Festif, Public et Décoratif | J&F",
      "description": "Solutions d'éclairage complètes en Algarve. Éclairage de Noël, éclairage intelligent (Smart Cities) et éclairage technique."
    },
    "partners": {
      "title": "Partenaires et marques | Schneider, E-Redes, Siemens",
      "description": "Nous travaillons avec les plus grandes marques et respectons toutes les normes E-Redes. Des partenaires fiables pour le génie civil et les travaux publics dans le Sud."
    },
    "careers": {
      "title": "Recrutement en électricité et en ingénierie | Emploi Algarve",
      "description": "Rejoignez notre équipe. Postes vacants pour électriciens, ingénieurs électriciens et techniciens de maintenance en Algarve et Alentejo."
    },
    "contact": {
      "title": "Contacts | Demander un devis à un électricien en Algarve et Alentejo",
      "description": "Contactez Joaquim & Fernandes pour des devis d'installations électriques, de téléchargements et de PLR ​​ou de maintenance. Nous servons Faro, Olhão, Tavira, Portimão et Beja."
    },
    "smartCities": {
      "title": "Villes intelligentes et IoT | Éclairage public intelligent | J&F",
      "description": "Nous transformons les villes de l’Algarve en Smart Cities. Solutions IoT, gestion à distance de l’éclairage public et efficacité énergétique."
    },
    "faqs": {
      "title": "Foire aux questions | Joaquim et Fernandes",
      "description": "Réponses aux questions les plus courantes concernant les demandes de connexion réseau (PLR), les téléchargements, les compteurs et les installations électriques."
    }
  },
  "nav": {
    "home": "Commencer",
    "about": "À propos de nous",
    "services": "Services",
    "lighting": "Éclairage",
    "partners": "Partenaires",
    "careers": "Recrutement",
    "contact": "Contacts",
    "quote": "Demander un devis",
    "toggle": "DANS"
  },
  "footer": {
    "desc": "Solutions intégrées d’électricité, de construction et de mobilité électrique. Nous promouvons votre projet en Algarve et en Alentejo avec qualité et sécurité depuis 1986.",
    "navTitle": "Navigation",
    "contactTitle": "Contacts",
    "newsletterTitle": "Bulletin",
    "newsletterDesc": "Recevez les dernières nouvelles et mises à jour.",
    "placeholder": "Votre email",
    "subscribe": "S'abonner",
    "rights": "Tous droits réservés.",
    "designedBy": "Site conçu par",
    "privacy": "politique de confidentialité",
    "terms": "Termes et conditions",
    "quality": "Politique Qualité",
    "complaintsBook": "Livre des plaintes",
    "faqTitle": "Foire aux questions",
    "faqDesc": "Consultez notre espace support pour clarifier les questions techniques.",
    "faqButton": "Voir FAQ"
  },
  "common": {
    "learnMore": "En savoir plus",
    "seeMore": "Voir plus",
    "address": "Route nationale 125, Bias Norte, Moncarapacho",
    "city": "8700-066 Olhao"
  },
  "home": {
    "hero": {
      "title": "Solutions d'électricité, d'éclairage, de téléchargement et de connexion au réseau",
      "subtitle": "Votre compagnie d'électricité de référence en Algarve et en Alentejo. Excellence technique dans les Baixadas, les PLR et les infrastructures.",
      "ctaPrimary": "Demander un devis",
      "ctaSecondary": "Découvrez les prestations"
    },
    "slogan": "L'électricité est avec nous !",
    "servicesTitle": "Nos domaines d'activité",
    "whyUsTitle": "Pourquoi choisir Joaquim & Fernandes ?",
    "whyUsDesc": "Nous sommes le bon choix pour tous ceux qui recherchent des électriciens certifiés en Algarve et en Alentejo. Nous combinons des décennies d’expérience dans les postes de transformation et les télécommunications avec les dernières technologies.",
    "ctaButton": "Découvrez nos prestations",
    "benefits": [
      {
        "id": 1,
        "text": "Expérience depuis 1986"
      },
      {
        "id": 2,
        "text": "Électriciens certifiés"
      },
      {
        "id": 3,
        "text": "Solutions clé en main"
      },
      {
        "id": 4,
        "text": "Focus sur le sud du pays"
      }
    ],
    "lightUp": {
      "title": "Vous avez un projet à Faro, Portimão ou Beja ?",
      "desc": "Notre lumière est prête à guider votre vision. Spécialistes des installations complexes et du raccordement au réseau public.",
      "cta": "Demander un devis gratuit"
    },
    "testimonialsTitle": "Ce que disent nos clients",
    "testimonials": [
      {
        "id": 1,
        "name": "Narciso Barradas",
        "text": "L'accueil client, le service et la résolution du problème signalé démontre le professionnalisme de cette équipe. Merci beaucoup pour votre attention et votre dévouement."
      },
      {
        "id": 2,
        "name": "Caroline Morais",
        "text": "J'ai beaucoup apprécié le service du lundi 13/05/2025, le monsieur à la réception était très sympathique"
      },
      {
        "id": 3,
        "name": "Ana Clara",
        "text": "Les employés Lucas Penido et Maikel Denny sont les meilleurs."
      }
    ],
    "leaveReview": "Laissez votre avis",
    "partnersTitle": "Partenaires et marques de confiance",
    "serviceCards": {
      "projects": {
        "title": "Projets d'électricité",
        "desc": "Projets d'ingénierie électrique basse et moyenne tension, autorisations, mesures d'autoprotection et conseil en énergie."
      },
      "plrs": {
        "title": "Demandes de connexion réseau",
        "desc": "Exécution de demandes de connexion au réseau (PLR), de téléchargements souterrains ou aériens et de construction de branches de distribution d'énergie."
      },
      "installations": {
        "title": "Infrastructures électriques",
        "desc": "Installations électriques industrielles et résidentielles, rénovations, augmentations de puissance, certification et maintenance technique."
      },
      "substations": {
        "title": "Postes de transformation",
        "desc": "Assemblage de Postes de Transformation (PT), installation de cellules moyenne tension, transformateurs et maintenance préventive."
      },
      "ev_charging": {
        "title": "Bornes de recharge",
        "desc": "Solutions clé en main pour la recharge des véhicules électriques (PCVE) dans les espaces publics et privés."
      },
      "lighting": {
        "title": "Éclairage professionnel",
        "desc": "Éclairage festif, éclairage intelligent et solutions techniques."
      },
      "telecommunications": {
        "title": "Télécommunications",
        "desc": "Projets et installations ITED/ITUR, fusion de fibres optiques, réseaux de données structurées et certification d'infrastructures."
      },
      "others": {
        "title": "Autres services",
        "desc": "Solutions de mobilité électrique (chargeurs), travaux publics complémentaires, inspection de construction et audits énergétiques."
      }
    }
  },
  "services": {
    "heroTitle": "Nos prestations",
    "heroDesc": "Solutions intégrées d’ingénierie et d’électricité pour des projets de toute taille. De la conception à la réalisation, nous garantissons la qualité et le respect des délais.",
    "notFoundTitle": "Vous ne trouvez pas ce que vous cherchez ?",
    "notFoundDesc": "Nous fournissons des services adaptés à vos besoins. Prenez contact pour discuter de votre projet.",
    "notFoundCta": "Contacter l'équipe",
    "categories": [
      {
        "id": "svp",
        "title": "Demandes de connexion réseau (PLR)",
        "description": "Gestion complète des processus de connexion au réseau électrique avec E-Redes. Nous réalisons clé en main téléchargements, extensions et montées en puissance.",
        "details": [
          "Chutes aériennes et souterraines",
          "Installation de compteurs de construction",
          "Gestion des processus E-Redes",
          "Exécution des succursales"
        ]
      },
      {
        "id": "installation",
        "title": "Installations électriques",
        "description": "Installations électriques basse tension pour l'habitat, le commerce et l'industrie. Nous garantissons la sécurité, l’efficacité et le respect des normes techniques.",
        "details": [
          "Panneaux électriques",
          "Rénovations",
          "Éclairage LED",
          "Maintenance préventive"
        ]
      },
      {
        "id": "télécommunications",
        "title": "Télécommunications (ITED/ITUR)",
        "description": "Infrastructures de télécommunications dans les immeubles et lotissements. Installation de réseaux certifiés fibre optique, cuivre et coaxiaux.",
        "details": [
          "Projets ITED/ITUR",
          "Fusion de fibres optiques",
          "Réseaux structurés",
          "Attestation"
        ]
      },
      {
        "id": "sous-stations",
        "title": "Postes de transformation",
        "description": "Installation, maintenance et exploitation de postes de transformation (PT) privés et publics. Solutions moyenne tension.",
        "details": [
          "Assemblage de TP",
          "Cellules moyenne tension",
          "Transformateurs",
          "Nettoyage et entretien"
        ]
      },
      {
        "id": "projets",
        "title": "Projets d'ingénierie",
        "description": "Préparation de projets électriques, fiches électrotechniques et conseil en énergie pour l'autorisation et l'exécution des travaux.",
        "details": [
          "Projets électriques",
          "Mesures d'autoprotection",
          "Licence",
          "Conseil"
        ]
      },
      {
        "id": "autres",
        "title": "Autres services",
        "description": "Services complémentaires de construction civile, de mobilité électrique et d’infrastructures urbaines.",
        "details": [
          "Chargeurs de véhicules électriques",
          "Ouverture de tranchée",
          "Reconstruction du sol",
          "Surveillance des travaux"
        ]
      }
    ]
  },
  "serviceDetails": {
    "plrs": {
      "seoTitle": "Demandes de connexion réseau (PLR)",
      "title": "Exécution du PLR et des téléchargements",
      "description": "Nous traitons votre demande de raccordement au réseau électrique de A à Z.",
      "fullText": "Joaquim & Fernandes est spécialisé dans l'exécution de demandes de connexion au réseau (PLR) dans toute l'Algarve et l'Alentejo. Nous prenons en charge l'ensemble du processus bureaucratique avec E-Redes et réalisons les travaux physiques nécessaires (chutes aériennes ou souterraines, murs techniques, portails) afin que vous ayez l'électricité dans votre propriété le plus rapidement possible.",
      "features": [
        "Enquête technique sur site",
        "Ouverture du processus chez E-Redes",
        "Réalisation de tranchées et d'infrastructures",
        "Installation de portes et cadres",
        "Certification finale"
      ],
      "keywords": [
        "DPP",
        "téléchargements",
        "E-Redes",
        "Rallonges",
        "Électricité"
      ],
      "benefits": [
        {
          "title": "Clé en main",
          "desc": "Nous nous occupons de la bureaucratie et du travail."
        },
        {
          "title": "Vitesse",
          "desc": "Nous connaissons les procédures pour accélérer le processus."
        }
      ]
    },
    "installations": {
      "seoTitle": "Installations électriques",
      "title": "Logements et installations industrielles",
      "description": "Des solutions électriques sûres et certifiées pour tout type de bâtiment.",
      "fullText": "Nous réalisons tous types d'installations électriques basse tension. Des petites rénovations résidentielles aux grandes installations industrielles, notre équipe d’électriciens certifiés veille au strict respect des normes de sécurité et d’efficacité énergétique.",
      "features": [
        "Panneaux électriques",
        "Câblage structuré",
        "Éclairage intérieur et extérieur",
        "Domotique",
        "Systèmes de sécurité"
      ],
      "keywords": [
        "Électricien",
        "Installation",
        "Entretien",
        "Attestation",
        "Sécurité"
      ],
      "benefits": [
        {
          "title": "Sécurité",
          "desc": "Matériel approuvé et techniciens certifiés."
        },
        {
          "title": "Efficacité",
          "desc": "Des solutions qui réduisent la consommation d'énergie."
        }
      ]
    },
    "telecommunications": {
      "seoTitle": "Télécommunications ITED et ITUR",
      "title": "Réseaux de fibre optique et de télécommunications",
      "description": "Infrastructures de communication certifiées pour bâtiments et lotissements.",
      "fullText": "Nous vivons à l’ère du numérique où la connectivité est fondamentale. Joaquim & Fernandes conçoit et installe des infrastructures de télécommunications (ITED pour les bâtiments et ITUR pour les lotissements) préparées pour l'avenir. De la fusion de la fibre optique à l'installation de racks et de réseaux structurés, nous garantissons que votre entreprise répond à toutes les normes ANACOM et offre le meilleur débit aux utilisateurs finaux.",
      "features": [
        "Projets ITED/ITUR",
        "Fusion de fibres optiques",
        "Réseaux coaxiaux et paire de cuivre",
        "Installation de racks et de racks",
        "Tests et certifications"
      ],
      "keywords": [
        "ITED",
        "Il va",
        "Fibre Optique",
        "Réseaux",
        "Télécommunications"
      ],
      "benefits": [
        {
          "title": "Certification ANACOM",
          "desc": "Garantie de conformité légale."
        },
        {
          "title": "Grande vitesse",
          "desc": "Infrastructures prêtes pour le Gigabit."
        }
      ]
    },
    "substations": {
      "seoTitle": "Postes de transformation et moyenne tension",
      "title": "Installation et maintenance des PT",
      "description": "Solutions d'alimentation moyenne tension pour les industries et les grands bâtiments.",
      "fullText": "Pour les industries, les hôtels ou les grandes zones commerciales, la connexion Basse Tension peut ne pas être suffisante. J&F est spécialisé dans l'assemblage de postes de transformation (PT) privés, assurant la transition en toute sécurité de la moyenne à la basse tension. Nous proposons des contrats de maintenance préventive obligatoires par la loi, garantissant la longévité des équipements et la sécurité des installations.",
      "features": [
        "Assemblage de cellules moyenne tension",
        "Installation du transformateur",
        "Tableaux Généraux Basse Tension (QGBT)",
        "Maintenance préventive et corrective",
        "Analyse de l'huile diélectrique"
      ],
      "keywords": [
        "Station de transformation",
        "Moyenne tension",
        "Transformateur",
        "Industrie",
        "Énergie"
      ],
      "benefits": [
        {
          "title": "Fiabilité",
          "desc": "Équipements de grandes marques telles que Efacec et Siemens."
        },
        {
          "title": "Conformité",
          "desc": "Entretien conforme à la législation en vigueur."
        }
      ]
    },
    "projects": {
      "seoTitle": "Projets de génie électrique",
      "title": "Projets de conseil et spécialisés",
      "description": "Ingénierie de détail pour les licences et l’exécution des travaux.",
      "fullText": "Tout grand projet commence par un bon projet. Notre service d’ingénierie prépare des projets électriques détaillés, garantissant un équilibre entre coût, efficacité et sécurité. Nous gérons toutes les autorisations avec les entités compétentes (DGEG, E-Redes, Conseils municipaux) et développons des mesures d'autoprotection en matière de sécurité incendie.",
      "features": [
        "Projets d'exécution électrique",
        "Fiches techniques électrotechniques",
        "Mesures d'autoprotection (SCIE)",
        "Conseil en énergie",
        "Dimensionnement du réseau"
      ],
      "keywords": [
        "Projet électrique",
        "Ingénierie",
        "Licence",
        "DGEG",
        "SCIE"
      ],
      "benefits": [
        {
          "title": "Optimisation",
          "desc": "Des solutions techniques qui réduisent les coûts de construction."
        },
        {
          "title": "Approbation",
          "desc": "Taux d'approbation élevé dans les entités officielles."
        }
      ]
    },
    "others": {
      "seoTitle": "Services de construction complémentaires",
      "title": "Construction civile et mobilité",
      "description": "Solutions intégrées de construction et de mobilité électrique.",
      "fullText": "Pour offrir un service clé en main, nous intégrons les compétences en génie civil nécessaires à la réalisation des infrastructures électriques. Nous ouvrons et fermons des tranchées, remplaçons les trottoirs et construisons des structures pour les équipements. De plus, nous sommes à l’avant-garde de la mobilité électrique, en installant des bornes de recharge pour les flottes et les particuliers.",
      "features": [
        "Ouverture et fermeture des tranchées",
        "Remplacement des trottoirs et du bitume",
        "Massifs pour Éclairage/PT",
        "Chargeurs de véhicules électriques",
        "Surveillance des travaux"
      ],
      "keywords": [
        "Construction civile",
        "Forex",
        "Mobilité électrique",
        "Chargeurs",
        "Travail"
      ],
      "benefits": [
        {
          "title": "Intégré",
          "desc": "Un interlocuteur unique pour l'ensemble du projet."
        },
        {
          "title": "Durable",
          "desc": "Accompagner la transition vers la mobilité électrique."
        }
      ]
    }
  },
  "lighting": {
    "heroTitle": "Un éclairage qui transforme",
    "heroDesc": "De la magie des illuminations de Noël à l’efficacité de l’éclairage public intelligent. Nous créons des environnements et garantissons la sécurité grâce à la lumière.",
    "introTitle": "Solutions d'éclairage à 360º",
    "introDesc": "Chez Joaquim & Fernandes, la lumière est plus que visibilité : c'est expérience, sécurité et identité. Nous proposons une gamme complète allant de l'éclairage décoratif pour les fêtes de fin d'année aux systèmes techniques avancés pour les villes et les industries.",
    "stat1": "Projets festifs",
    "stat2": "Points lumineux LED",
    "types": [
      {
        "title": "Éclairage festif",
        "desc": "L’éclairage festif est l’art de créer des émotions grâce à la lumière. Nous développons des projets clé en main pour des occasions spéciales, transformant l'environnement urbain et commercial. De la conception créative des motifs (2D et 3D) à l'installation et au démontage en toute sécurité, nous garantissons un spectacle visuel qui attire les visiteurs, dynamise le commerce local et célèbre la tradition avec la technologie LED basse consommation.",
        "applicationsTitle": "Où nous postulons :",
        "applications": [
          "Centres et villes historiques",
          "Centres commerciaux",
          "Places et jardins publics",
          "Façades de bâtiments"
        ]
      },
      {
        "title": "Éclairage intelligent",
        "desc": "Plus qu’éclairer les routes, nous créons des villes intelligentes. Notre approche de l’éclairage public se concentre sur l’efficacité énergétique et la sécurité. Nous remplaçons les luminaires conventionnels par une technologie LED haute performance, intégrée à des systèmes de gestion à distance qui permettent le contrôle à distance de l'intensité lumineuse, la détection des défauts en temps réel et une réduction des factures d'énergie municipales jusqu'à 60 %. Nous soulignons l'installation de voies intelligentes à Portimão, qui augmentent la sécurité des piétons grâce à une signalisation lumineuse active.",
        "applicationsTitle": "Où nous postulons :",
        "applications": [
          "Voies et routes publiques",
          "Parcs urbains et pistes cyclables",
          "Zones résidentielles",
          "Parkings"
        ]
      },
      {
        "title": "Éclairage technique",
        "desc": "Technical Lighting vise à valoriser le patrimoine bâti la nuit, en respectant son histoire et sa conception originale. Nous utilisons des projecteurs de précision, des bandes LED et des systèmes RGBW pour créer des scènes dynamiques ou statiques qui mettent en valeur les textures et les volumes. C'est la solution idéale pour donner une nouvelle vie à des bâtiments, hôtels ou monuments emblématiques, en renforçant l'identité visuelle du lieu.",
        "applicationsTitle": "Où nous postulons :",
        "applications": [
          "Monuments et églises",
          "Hôtels et centres de villégiature",
          "Bâtiments corporatifs",
          "Ponts et structures"
        ]
      },
      {
        "title": "Éclairage sportif",
        "desc": "Dans le sport, la lumière est fondamentale pour la performance des athlètes et l'expérience des spectateurs. Nous concevons et installons des systèmes d'éclairage qui respectent strictement les niveaux de lux requis par les fédérations et normes de télédiffusion. Nous garantissons l'uniformité sur le terrain, le contrôle de l'éblouissement et les systèmes d'éclairage instantané pour les pavillons et les stades.",
        "applicationsTitle": "Où nous postulons :",
        "applications": [
          "Terrains et stades de football",
          "Pavillons sportifs",
          "Terrains de tennis et de padel",
          "Piscines municipales"
        ]
      },
      {
        "title": "Éclairage public",
        "desc": "Nous garantissons la sécurité et le bien-être des populations grâce à des réseaux d’éclairage public efficaces et fiables. Nous installons et entretenons des renforts routiers, des projecteurs et des colonnes, garantissant un éclairage correct des routes, des rues et des espaces publics, en nous concentrant toujours sur la réduction de l'empreinte écologique et des coûts énergétiques.",
        "applicationsTitle": "Où nous postulons :",
        "applications": [
          "Routes nationales et municipales",
          "Rues urbaines",
          "Parcs et jardins",
          "Zones riveraines"
        ]
      }
    ],
    "ctaTitle": "Allumons votre projet ?",
    "ctaDesc": "Qu'il s'agisse de décorer votre ville pour Noël ou de renouveler l'éclairage public.",
    "ctaButton": "Demander une proposition d'éclairage"
  },
  "partners": {
    "heroTitle": "Partenaires de confiance",
    "heroDesc": "L'excellence de Joaquim & Fernandes repose sur des relations solides avec des leaders mondiaux de l'industrie et des partenariats stratégiques exclusifs.",
    "suppliersTitle": "Fournisseurs et marques certifiées",
    "suppliersDesc": "Nous travaillons uniquement avec des matériaux approuvés et des équipements haut de gamme pour garantir une sécurité et une durabilité maximales de nos installations électriques.",
    "eredesHighlight": {
      "title": "Interconnexion avec le réseau de distribution",
      "desc": "En tant qu'entreprise spécialisée, nous garantissons le strict respect de toutes les normes techniques requises par E-Redes (anciennement EDP Distribuição) pour les téléchargements, les extensions et les stations de transformation.",
      "badge": "Normes techniques respectées"
    },
    "brandsList": [
      {
        "name": "Schneider Électrique",
        "desc": "Leader mondial de la gestion de l’énergie et de l’automatisation."
      },
      {
        "name": "Siemens",
        "desc": "Une technologie de pointe pour des infrastructures intelligentes."
      },
      {
        "name": "ÉFACEC",
        "desc": "Solutions portugaises d’ingénierie et de mobilité."
      },
      {
        "name": "Legrand",
        "desc": "Spécialistes des infrastructures électriques et numériques."
      },
      {
        "name": "Hager",
        "desc": "Systèmes d'installation et de distribution d'énergie."
      }
    ],
    "exclusiveTitle": "Entités publiques partenaires",
    "exclusiveDesc": "Municipalités et organismes étatiques qui font confiance à Joaquim & Fernandes pour l'éclairage public et les infrastructures critiques.",
    "exclusivePartners": [
      {
        "name": "Municipalité d'Olhão",
        "type": "Autorité locale",
        "desc": "Réalisation d'infrastructures électriques dans de nouveaux lotissements et zones industrielles."
      },
      {
        "name": "Municipalité de Faro",
        "type": "Autorité locale",
        "desc": "Entretien de l'éclairage public et des bâtiments municipaux de la commune."
      },
      {
        "name": "Commune de Loulé",
        "type": "Autorité locale",
        "desc": "Aménagement et maintenance des réseaux électriques et de l'éclairage public."
      }
    ],
    "ctaTitle": "Devenez partenaire",
    "ctaDesc": "Nous cherchons constamment à élargir notre réseau avec des entreprises qui partagent nos valeurs de rigueur et de qualité.",
    "ctaButton": "Proposer un partenariat"
  },
  "contact": {
    "heroTitle": "Contactez-nous",
    "heroDesc": "Nous sommes disponibles pour répondre aux questions et présenter des propositions.",
    "infoTitle": "Information",
    "labels": {
      "address": "Ménage",
      "phone": "Téléphone",
      "callCost": "(Appel vers le réseau fixe national)",
      "callCostMobile": "(Appel vers le réseau mobile national)",
      "email": "E-mail",
      "schedule": "Temps",
      "weekdays": "Du lundi au vendredi : 09h00 - 12h30 | 14h00 - 18h00",
      "weekend": "Samedi, dimanche et jours fériés : Fermé",
      "whatsappBox": {
        "title": "Demander un devis via WhatsApp",
        "button": "Envoyer un message"
      }
    },
    "formTitle": "Envoyez-nous un message",
    "form": {
      "name": "Nom et prénom",
      "email": "E-mail",
      "phone": "Téléphone",
      "subject": "Sujet",
      "subjectPlaceholder": "Sélectionnez un sujet...",
      "optQuote": "Demander un devis",
      "optInfo": "Informations générales",
      "optRecruitment": "Recrutement",
      "optPartnership": "Proposer un partenariat",
      "optOther": "Autres",
      "interest": "Domaine d'intérêt",
      "interestPlaceholder": "Sélectionnez la zone...",
      "jobPosition": "Poste pour lequel postuler",
      "cv": "Curriculum Vitae (CV)",
      "presentation": "Présentation de l'entreprise (PDF)",
      "companyName": "Nom de l'entreprise",
      "companyAddress": "Adresse de l'entreprise",
      "companyType": "Type d'entreprise",
      "companyContact": "Contacter l'entreprise",
      "proposalMessage": "Décrivez votre idée/proposition",
      "uploadFile": "Joindre un PDF",
      "filePlaceholder": "Aucun fichier sélectionné",
      "fileLabel": "Joindre le projet/plan (PDF)",
      "fileHint": "PDF (maximum 5 Mo)",
      "interestHint": "(Sélectionnez plusieurs options)",
      "successMsg": "Merci pour votre contact ! Nous vous contacterons bientôt.",
      "fileError": "Veuillez sélectionner uniquement les fichiers PDF.",
      "optsInterest": {
        "plrs": "Demandes de connexion réseau (PLR)",
        "installations": "Infrastructures électriques",
        "telecommunications": "Télécommunications",
        "substations": "Postes de transformation",
        "projects": "Projets d'électricité",
        "lighting": "Éclairage",
        "others": "Autres services"
      },
      "message": "Message",
      "submit": "Soumettre la demande"
    },
    "locationTitle": "Emplacement"
  },
  "faqs": {
    "heroTitle": "FAQ",
    "heroDesc": "Clarifiez vos doutes sur nos services et procédures.",
    "sectionTitle": "QUESTIONS FRÉQUEMMENT POSÉES",
    "list": [
      {
        "q": "J'AI BESOIN DE METTRE L'ÉLECTRICITÉ DANS UN ENDROIT. QUELLES SONT LES ÉTAPES À SUIVRE ?",
        "a": "Pour installer l'électricité dans une maison, un magasin ou un terrain, vous devez suivre certaines étapes de manière organisée et sûre. Chez JF, nous gérons l'ensemble du processus, nous avons juste besoin de quelques données/documents tels que :\n\n- CPF, pour les particuliers ou certificat permanent, dans le cas d'une entreprise ; \n- Adresse de l'installation, indiquant les coordonnées géographiques ; \n- Livret de construction ; \n- Contacts téléphoniques et emails."
      },
      {
        "q": "DE QUOI DOIS-JE FAIRE UNE DEMANDE DE RACCORDEMENT AU RÉSEAU ÉLECTRIQUE (PLR) ?",
        "a": "Chez JF, nous nous occupons de l'ensemble du processus et fournissons un devis entièrement gratuit, il vous suffit de :\n\n- Fournir toute la documentation demandée ; \n- Indiquer le type de connexion réseau souhaité ; \n- Indiquer la puissance souhaitée ; \n\nAprès avoir attribué notre budget, vous devrez également :\n- Paiement des frais à E-Redes (Montants variables)."
      },
      {
        "q": "QUELS TYPES DE CONNEXION RÉSEAU EXISTE-T-IL ?",
        "a": "- Raccordement au réseau d'une maison unifamiliale. \n\n- Connexion réseau pour une entreprise/entreprise. \n\n- Raccordement au réseau d'une installation collective (par exemple : immeubles). \n\n- Décalage réseau : Pour modifier l'emplacement des éléments du réseau existants (poteaux, lignes, etc.). \n\n- Travaux : Fournir temporairement de l'énergie électrique à un endroit, avec ou sans nécessité ultérieure d'un raccordement permanent. \n\n- Événementiel : Fournir de l'électricité à un événement déterminé et uniquement pendant la période strictement nécessaire à la tenue de l'événement. Ces connexions sont généralement destinées aux cirques, foires, fêtes, spectacles de rue, entre autres."
      },
      {
        "q": "J'AI BESOIN D'ÉLECTRICITÉ DANS UN ENDROIT OÙ IL Y A DÉJÀ UN COMPTEUR. COMMENT PROCÉDER ?",
        "a": "Si l'emplacement dispose déjà d'un compteur installé ou si vous aviez déjà un contrat d'électricité, il vous suffit de contacter une entreprise de services publics pour signer un contrat de fourniture d'électricité."
      },
      {
        "q": "QU'EST-CE QUE LE CPE ?",
        "a": "Le CPE – Code Point de Livraison – est le numéro qui identifie votre installation électrique."
      },
      {
        "q": "QU'EST-CE QUE LE PIN ?",
        "a": "Le NIP – Building Identification Number – est le numéro qui identifie l’installation collective et avec lequel il est possible de consulter tous les CPE."
      },
      {
        "q": "JE SOUHAITE AUGMENTER LA PUISSANCE DE MON INSTALLATION. QUE DOIS-JE FAIRE?",
        "a": "Si la puissance que vous souhaitez contracter est inférieure à la puissance maximale autorisée de l'installation, le Client doit demander une augmentation de la puissance souscrite à son Fournisseur. \n\nDans les situations où la puissance que vous souhaitez contracter est supérieure à la puissance maximale autorisée de l'installation, le Client peut demander un devis pour une augmentation de puissance. \n\nLe Client doit s'assurer que l'installation est certifiée pour la nouvelle valeur de puissance. \n\nS'il est nécessaire de certifier l'installation, le Client doit s'adresser à un organisme de contrôle des installations électriques reconnu par la Direction Générale de l'Energie et de la Géologie (DGEG)."
      },
      {
        "q": "EST-IL POSSIBLE DE CHANGER LA LOCALISATION DE MON COMPTABLE ?",
        "a": "Oui, via une demande de changement d'emplacement du compteur, ou de changement de point de livraison."
      },
      {
        "q": "JE SUIS SANS ÉLECTRICITÉ, QUI DOIS-JE CONTACTER ?",
        "a": "Vous devez contacter E-Redes, par les moyens disponibles :\n\nTéléphone : 800 506 506\nWhatsApp : 913 846 398\nSite Web : https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "J'AI REÇU UNE COMMUNICATION CONCERNANT LE REMPLACEMENT DE MON COMPTEUR. QUE DOIS-JE FAIRE?",
        "a": "Vous devez programmer le jour et l'heure qui vous conviennent le mieux en contactant E-Redes :\n\nTéléphone : 218 100 100\nWhatsApp : 913 846 398\nSite Web : https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "QU'EST-CE QUI EST NÉCESSAIRE POUR AVOIR UN CHARGEUR DE VÉHICULE ÉLECTRIQUE ?",
        "a": "Dans un premier temps, vous devez vérifier l'alimentation électrique disponible sur place, choisir le type de chargeur souhaité et contacter notre service budgétaire."
      }
    ]
  },
  "careers": {
    "heroTitle": "Recrutement",
    "heroDesc": "Rejoignez une équipe avec près de 40 ans d'histoire. Nous construisons l’avenir de l’Algarve et de l’Alentejo avec rigueur et innovation.",
    "introTitle": "Pourquoi travailler avec nous ?",
    "introDesc": "Chez Joaquim & Fernandes, nous croyons que les gens sont notre plus grande énergie. Nous offrons de la stabilité, une formation continue et la possibilité de travailler sur des projets ambitieux en matière d'électricité, de construction et de mobilité durable.",
    "benefits": [
      "Formation continue et certification",
      "Assurance maladie",
      "Progression de carrière",
      "Équipe unie et dynamique"
    ],
    "openingsTitle": "Opportunités ouvertes",
    "reqTitle": "Exigences:",
    "otherReq": "+ autres exigences",
    "applyBtn": "Postulez maintenant",
    "jobs": [
      {
        "id": 1,
        "title": "Calceteiro (H/F)",
        "location": "Algarve / Alentejo",
        "type": "À temps plein",
        "description": "Responsable de l'exécution et de la réparation des trottoirs portugais, de la pose de bordures et d'autres travaux de finition urbaine sur la voie publique.",
        "requirements": [
          "Expérience avérée dans le rôle",
          "Permis de conduire (de préférence)",
          "Disponibilité immédiate",
          "Sens des responsabilités"
        ],
        "emailSubject": "Application : Calceteiro"
      },
      {
        "id": 2,
        "title": "Opérateur d'entrepôt (H/F)",
        "location": "Siège social (Faro/Olhão)",
        "type": "À temps partiel",
        "description": "Responsable de la réception, de la vérification et de l'organisation des matériaux électriques et de construction sur le chantier, en assurant l'efficacité des stocks.",
        "requirements": [
          "Expérience en entrepôt (un atout)",
          "Connaissance informatique",
          "Permis de conduire",
          "Capacité organisationnelle"
        ],
        "emailSubject": "Application : Opérateur d'entrepôt"
      },
      {
        "id": 3,
        "title": "Grutier Lourd (H/F)",
        "location": "Olhao",
        "type": "À temps plein",
        "description": "Tâches principales : Conduire un camion avec une grue, transporter des matériaux, des poteaux de levage et des bobines mobiles et des charges suspendues. Nous offrons : Un salaire attractif compatible avec l'expérience, une prime annuelle et une formation continue.",
        "requirements": [
          "Lettre de catégorie C (obligatoire)",
          "Expérience sur un camion avec une grue",
          "Profil responsable et polyvalent",
          "Expérience avec des machines (valorisée)",
          "CAM de marchandises lourdes (valorisées)",
          "Préférence pour les personnes originaires de la région ayant une bonne connaissance du territoire"
        ],
        "emailSubject": "Application : Conducteur de grue robuste"
      }
    ],
    "spontaneousTitle": "Vous n'avez pas trouvé le poste vacant idéal ?",
    "spontaneousDesc": "Nous sommes toujours à la recherche de nouveaux talents en Algarve. Envoyez-nous votre CV à notre base de données.",
    "spontaneousBtn": "Envoyer la candidature",
    "spontaneousDisclaimer": "En envoyant votre CV, vous acceptez notre politique de traitement des données à des fins de recrutement."
  },
  "qualityPage": {
    "title": "Politique Qualité",
    "visionTitle": "Vision",
    "visionDesc": "Joaquim & Fernandes Lda vise à être une entreprise de référence et un partenaire stratégique dans la construction d'infrastructures dans la région de l'Algarve, en suivant l'innovation et en étant un exemple dans son secteur d'activité.",
    "missionTitle": "Mission",
    "missionDesc": "Fournir des services efficaces et rapides dans le domaine de la construction et de l’entretien des infrastructures dans le sud du Portugal.",
    "valuesTitle": "Valeurs",
    "values": [
      {
        "title": "Intégrité",
        "desc": "Le sérieux et l'honnêteté prédominent dans les décisions et dans la vie de tous les jours."
      },
      {
        "title": "Responsabilité",
        "desc": "Engagement à assumer les tâches et fonctions assignées, ainsi qu'à assurer le respect du contrat/service convenu."
      },
      {
        "title": "Efficacité des services",
        "desc": "Faites-le correctement du premier coup."
      },
      {
        "title": "Orientation client",
        "desc": "Travailler en conformité avec les attentes et les exigences du client."
      }
    ],
    "strategyTitle": "Orientations stratégiques",
    "strategies": [
      "Améliorer continuellement l'efficacité du système de gestion de la qualité et de nos services pour satisfaire les clients et les employés, ainsi que contribuer au développement de la région de l'Algarve que nous servons.",
      "Former, informer et développer toutes les ressources humaines, en contribuant au développement de leurs compétences.",
      "Promouvoir les conditions de sécurité et de santé afin d’harmoniser le travail et d’assurer le bien-être de tous les salariés.",
      "Assurer le respect de toutes les normes, législations et réglementations en vigueur et spécifications techniques exigées par nos clients."
    ],
    "contactInfo": "Nous sommes disponibles pour clarifier toute question supplémentaire. (qualidade@joaquimfernandes.pt)",
    "legalInfo": {
      "title": "Loi 144/2015 du 8 septembre",
      "intro": "En cas de litige, le consommateur peut recourir à un organisme de règlement alternatif des litiges de consommation :",
      "entityName": "Tribunal d'arbitrage du Centre d'arbitrage de la consommation de l'Algarve",
      "address": "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3ème étage, bureau 26 8000 Faro, Portugal",
      "phone": "Téléphone : 289 823 135",
      "email": "Courriel : apoio@consumidoronline.pt",
      "portal": "Plus d'informations sur le portail des consommateurs www.consumidoronline.pt"
    }
  },
  "privacyPage": {
    "title": "politique de confidentialité",
    "intro": "Joaquim & Fernandes, Lda respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique décrit la manière dont nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).",
    "sections": [
      {
        "title": "1. Responsable du traitement",
        "content": "Le responsable du traitement de vos données personnelles est Joaquim & Fernandes, Lda, dont le siège social est situé Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. Pour toute question relative à la protection des données, vous pouvez nous contacter par e-mail à mail@joaquimfernandes.pt."
      },
      {
        "title": "2. Données collectées",
        "content": "Nous collectons les données que vous nous fournissez volontairement via nos formulaires de contact, demandes de devis et candidatures. Ceux-ci peuvent inclure : nom, e-mail, téléphone, adresse et curriculum vitae (en cas de recrutement). Nous collectons également des données techniques de navigation (Cookies) de manière anonyme pour améliorer les performances du site."
      },
      {
        "title": "3. Objectif du traitement",
        "content": "Vos données sont traitées aux fins suivantes :\n- Gestion des demandes de devis et des contacts commerciaux ; \n- Exécution des contrats de prestations de services ; \n- Processus de recrutement et de sélection ; \n- Respect des obligations légales (facturation)."
      },
      {
        "title": "4. Partage de données",
        "content": "Nous ne vendons pas vos données à des tiers. Vos données ne peuvent être partagées qu'avec des sous-traitants strictement nécessaires à la fourniture du service (par exemple comptable, informatique), en garantissant qu'ils sont également conformes au RGPD, ou avec les autorités publiques lorsque la loi l'exige."
      },
      {
        "title": "5. Droits du Titulaire",
        "content": "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de limitation, d'opposition au traitement et de demande d'effacement de vos données personnelles (droit à l'oubli). Pour exercer ces droits, il suffit d'adresser une demande écrite à notre adresse email générale."
      },
      {
        "title": "6. Sécurité et conservation",
        "content": "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données. Les données ne sont conservées que pendant la durée nécessaire à la finalité pour laquelle elles ont été collectées, ou conformément à la loi (par exemple 10 ans pour les données de facturation)."
      }
    ],
    "lastUpdated": "Dernière mise à jour : octobre 2024"
  },
  "termsPage": {
    "title": "Termes et conditions",
    "intro": "Bienvenue sur le site Joaquim & Fernandes. En accédant et en utilisant ce site Web, vous acceptez les termes et conditions d'utilisation suivants.",
    "sections": [
      {
        "title": "1. Propriété intellectuelle",
        "content": "Tout le contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de Joaquim & Fernandes, Lda ou de ses partenaires, et est protégé par la législation sur le droit d'auteur et la propriété industrielle. La copie, la reproduction ou la distribution sans autorisation préalable sont interdites."
      },
      {
        "title": "2. Utilisation du Site",
        "content": "L'utilisateur s'engage à utiliser le site Web à des fins licites et à ne pas accomplir d'actes qui pourraient endommager, désactiver ou surcharger le site Web, ou empêcher son utilisation normale par d'autres utilisateurs."
      },
      {
        "title": "3. Limitation de responsabilité",
        "content": "Joaquim & Fernandes s'efforce de maintenir les informations présentes sur le site Internet à jour et exactes. Cependant, nous ne garantissons pas l'absence d'erreurs ou d'omissions et ne sommes pas responsables des dommages résultant de l'utilisation des informations contenues dans ce document. Les propositions commerciales et les budgets nécessitent toujours une confirmation officielle de l'entreprise."
      },
      {
        "title": "4. Liens externes",
        "content": "Ce site Internet peut contenir des liens vers des sites Internet de tiers (par exemple partenaires, réseaux sociaux). Joaquim & Fernandes ne contrôle pas ou n'est pas responsable du contenu ou des politiques de confidentialité de ces sites Web externes."
      },
      {
        "title": "5. Modes alternatifs de règlement des litiges (MARC)",
        "content": "En cas de litige de consommation, le consommateur peut recourir à une entité compétente de règlement alternatif des litiges. Joaquim & Fernandes est membre des centres d'arbitrage de la région de l'Algarve. Plus d'informations sur le portail des consommateurs (www.consumidor.com.br)."
      },
      {
        "title": "6. Droit applicable et lieu",
        "content": "Ces conditions sont régies par la loi portugaise. Pour tout litige découlant de l'interprétation ou de l'application des présentes conditions, le Tribunal de Faro sera compétent, renonçant expressément à tout autre."
      }
    ]
  },
  "about": {
    "heroTitle": "Notre histoire",
    "heroDesc": "Près de quatre décennies d’ingénierie, de construction et d’innovation. Découvrez le voyage qui nous a amené ici.",
    "timeline": [
      {
        "year": "1986",
        "title": "La Fondation",
        "description": "Joaquim & Fernandes démarre son activité en tant que petite entreprise familiale axée sur les installations électriques résidentielles dans la région de Faro."
      },
      {
        "year": "1998",
        "title": "Expansion vers l'industrie",
        "description": "Au fur et à mesure que l'équipe s'agrandit, l'entreprise étend ses services au secteur industriel dans toute l'Algarve."
      },
      {
        "year": "2005",
        "title": "Département de construction",
        "description": "Répondant aux besoins des clients, nous avons ouvert le département de construction civile pour proposer des solutions clé en main."
      },
      {
        "year": "2015",
        "title": "Expansion à l’Alentejo",
        "description": "Début des opérations dans l'Alentejo, axées sur des projets agricoles et industriels."
      },
      {
        "year": "2020",
        "title": "Mobilité électrique",
        "description": "Lancement du pôle dédié à la mobilité électrique, avec l'installation de bornes de recharge dans tout le Sud."
      },
      {
        "year": "Aujourd'hui",
        "title": "Leaders du marché du Sud",
        "description": "Nous continuons à innover, en maintenant les valeurs de confiance qui nous définissent depuis près de 40 ans."
      }
    ],
    "awards": {
      "title": "Reconnaissance, certifications et récompenses",
      "subtitle": "La distinction publique de notre solidité financière et de notre compétence technique dans le secteur.",
      "list": [
        {
          "name": "Leader PME",
          "desc": "Statut de référence qui distingue le profil de mérite et de risque des PME nationales. Distingué 3 fois (dernière en 2025)."
        },
        {
          "name": "PME Excellence",
          "desc": "Sceau de réputation qui récompense les meilleures performances économiques et financières. Distingué 3 fois (dernière en 2025)."
        },
        {
          "name": "Entrepreneur qualifié en informatique",
          "desc": "Agrément technique par le distributeur pour la réalisation de travaux sur le réseau électrique."
        },
        {
          "name": "Permis de construire n°8887",
          "desc": "Qualification officielle IMPIC pour réaliser des travaux publics et privés de haut niveau."
        },
        {
          "name": "Certificat de conformité, ISO 9001:2015",
          "desc": "Système de gestion de la qualité certifié, garantissant la rigueur dans tous les processus."
        },
        {
          "name": "Certificat REPRO",
          "desc": "Système de qualification des fournisseurs pour le secteur de l'énergie et des services publics dans la péninsule ibérique."
        }
      ]
    },
    "teamSection": {
      "title": "Qui sommes-nous",
      "subtitle": "La force de notre équipe",
      "description": "Plus qu'une entreprise, nous sommes un collectif de professionnels passionnés par ce qu'ils font. Dotée d'une structure solide et multidisciplinaire, notre équipe allie l'expérience d'ingénieurs seniors à l'énergie de techniciens spécialisés.",
      "stat1": "+50 Collaborateurs",
      "stat2": "Ingénierie et génie civil",
      "stat3": "Techniciens certifiés",
      "highlight": "Nous investissons continuellement dans la formation et la sécurité de notre personnel, garantissant que chaque projet est exécuté avec la plus grande rigueur."
    },
    "closingTitle": "Prêt à faire partie du futur ?",
    "closingDesc": "Notre histoire continue de s’écrire chaque jour, dans chaque projet que nous réalisons.",
    "closingCta": "Travaillez avec nous"
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

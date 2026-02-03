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
        title: "Soluções de Eletricidade, Construção e Mobilidade Elétrica",
        subtitle: "A sua empresa de eletricidade de referência no Algarve e Alentejo. Excelência técnica em Baixadas, PLR's e Infraestruturas.",
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
         lighting: { title: "Iluminação Profissional", desc: "Iluminação Festiva, Iluminação Inteligente e Soluções Técnicas." },
         telecommunications: { title: "Telecomunicações", desc: "Projetos e instalação ITED/ITUR, fusão de fibra ótica, redes estruturadas de dados e certificação de infraestruturas." },
         others: { title: "Outros Serviços", desc: "Soluções de mobilidade elétrica (carregadores), construção civil complementar, fiscalização de obra e auditorias energéticas." }
      }
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
        weekdays: "Segunda a Sexta: 09:00 - 18:00",
        weekend: "Sábado e Domingo: Encerrado",
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
        }
      ],
      spontaneousTitle: "Não encontrou a vaga ideal?",
      spontaneousDesc: "Estamos sempre à procura de novos talentos no Algarve. Envie-nos o seu CV para a nossa base de dados.",
      spontaneousBtn: "Enviar Candidatura Espontânea",
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
      ]
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
          title: "Iluminação Inteligente",
          desc: "Mais do que iluminar estradas, criamos cidades inteligentes. A nossa abordagem à Iluminação Pública foca-se na eficiência energética e na segurança. Substituímos luminárias convencionais por tecnologia LED de alta performance, integrada com sistemas de telegestão que permitem controlar a intensidade da luz remotamente, detetar avarias em tempo real e reduzir a fatura energética dos municípios em até 60%.",
          applicationsTitle: "Onde se aplica:",
          applications: ["Vias Públicas e Autoestradas", "Parques Urbanos e Ciclovias", "Zonas Residenciais", "Parques de Estacionamento"]
        },
        {
          title: "Iluminação Técnica",
          desc: "A Iluminação Técnica visa valorizar o património edificado durante a noite, respeitando a sua história e traça original. Utilizamos projetores de precisão, fitas LED e sistemas RGBW para criar cenários dinâmicos ou estáticos que destacam texturas e volumes. É a solução ideal para dar uma nova vida a edifícios icónicos, hotéis ou monumentos, reforçando a identidade visual do local.",
          applicationsTitle: "Onde se aplica:",
          applications: ["Monumentos e Igrejas", "Hotéis e Resorts", "Edifícios Corporativos", "Pontes e Estruturas"]
        },
        {
          title: "Iluminação Desportiva",
          desc: "No desporto, a luz é fundamental para a performance dos atletas e a experiência dos espectadores. Projetamos e instalamos sistemas de iluminação que cumprem rigorosamente os níveis de lux exigidos pelas federações e normas de transmissão televisiva. Garantimos uniformidade no campo, controlo do encandeamento e sistemas de acendimento instantâneo para pavilhões e estádios.",
          applicationsTitle: "Onde se aplica:",
          applications: ["Campos de Futebol e Estádios", "Pavilhões Desportivos", "Campos de Ténis e Padel", "Piscinas Municipais"]
        },
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
          details: ["Instalação de Celas", "Transformadores de Potencia", "Inspeção Técnica", "Manutenção Corretiva", "Manutenção Preventiva"]
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
           { title: "Segurança Máxima", desc: "Strict compliance with RTIEBT for protection of people and assets." },
           { title: "Premium Materials", desc: "We use only reference brands (Schneider, Hager)." },
           { title: "Aesthetics", desc: "Careful finishes and organized electrical panels." },
           { title: "Warranty", desc: "Post-work assistance and execution guarantee." }
        ],
        process: [
           { title: "Planning", desc: "Marking and defining cable paths." },
           { title: "Piping", desc: "Installation of pipes and boxes before plastering." },
           { title: "Wiring", desc: "Running conductors and cables." },
           { title: "Equipment", desc: "Mounting sockets, switches, and panels." }
        ]
      },
      substations: {
        title: "Postos de Transformação",
        seoTitle: "Postos de Transformação e Média Tensão",
        seoDescription: "Instalação e manutenção de Postos de Transformação (PTs) e Celas de Média Tensão. Serviço especializado para indústrias e grandes edifícios.",
        description: "Alta potência exige alta responsabilidade e competência técnica.",
        fullText: "Os Postos de Transformação (PTs) são o coração energético de grandes indústrias e edifícios. A Joaquim & Fernandes dispõe de uma equipa altamente qualificada para intervir em Média Tensão. Realizamos a montagem chave-na-mão de PTs (cabine ou aéreo), bem como a sua manutenção preventiva obrigatória. Garantimos a limpeza, aperto de ligações, análise de óleo dielétrico e ensaios aos equipamentos de proteção, assegurando a continuidade de serviço e a segurança de pessoas e bens.",
        features: ["Instalação de Celas", "Transformadores de Potência", "Inspeção Técnica", "Manutenção Corretiva", "Manutenção Preventiva"],
        keywords: ["Postos de Transformação", "Média Tensão", "Transformadores", "PT", "Alta Tensão"],
        benefits: [
           { title: "Técnicos Credenciados", desc: "Equipa com formação específica em Alta/Média Tensão." },
           { title: "Manutenção Preditiva", desc: "Análise de óleo e termografia para prever avarias." },
           { title: "Resposta Rápida", desc: "Stock de equipamentos críticos para substituição." },
           { title: "Segurança", desc: "Rigorosos equipamentos de proteção individual e coletiva." }
        ],
        process: [
           { title: "Projeto", desc: "Dimensionamento do transformador e celas." },
           { title: "Obra Civil", desc: "Preparação da cabine ou poste de apoio." },
           { title: "Montagem", desc: "Instalação do transformador e quadros de MT/BT." },
           { title: "Ensaios", desc: "Testes de isolamento e rigidez dielétrica." }
        ]
      },
      ev_charging: {
        title: "Electric Mobility",
        seoTitle: "Electric Car Charging Stations",
        seoDescription: "Installation of Electric Charging Stations and Wallboxes. Solutions for condominiums, companies, and individuals. Mobi.E Network.",
        description: "The future moves on electricity. We install the infrastructure.",
        fullText: "As a certified installation entity, we offer complete solutions for electric vehicle charging. Whether for a private garage, a condominium, or a corporate parking lot, we size the ideal solution to charge your vehicle quickly and safely, without tripping the electrical panel. We integrate stations with the Mobi.E network when necessary and configure Load Balancing systems to optimize building energy consumption.",
        features: ["Home Wallboxes", "Fast Charging Stations (DC)", "Mobi.E Network Integration", "Load Balancing Systems", "Solutions for Condominiums"],
        keywords: ["EV Charging", "Wallbox", "Mobi.E", "Electric Mobility", "Tesla"],
        benefits: [
           { title: "Fast Charging", desc: "Three-phase solutions to reduce charging time." },
           { title: "Smart Management", desc: "Load balancing to prevent power tripping." },
           { title: "Mobi.E Certification", desc: "Integration into the public network for monetization." },
           { title: "Universality", desc: "Compatible with all vehicle brands." }
        ],
        process: [
           { title: "Technical Visit", desc: "Evaluation of available power on site." },
           { title: "Proposal", desc: "Selection of the ideal charger for your car." },
           { title: "Installation", desc: "Mounting the station and electrical protections." },
           { title: "Configuration", desc: "App connection and function tests." }
        ]
      },
      telecommunications: {
        title: "Telecommunications and Networks",
        seoTitle: "ITED, ITUR and Fiber Optic Installation",
        seoDescription: "Certified company for telecommunications projects (ITED/ITUR) and fiber optics in Algarve.",
        description: "High-speed connectivity for your business or home.",
        fullText: "Joaquim & Fernandes offers specialized telecommunications infrastructure services, ensuring your building is prepared for future digital demands. We perform ITED (Telecommunications Infrastructure in Buildings) and ITUR projects and installations, complying with all ANACOM standards. Our team is equipped to perform optical fiber splicing, structured network certification, and rack assembly, ensuring reliable and high-performance connectivity.",
        features: ["ITED / ITUR Projects and Installation", "Fiber Optic Splicing and Certification", "Structured Voice and Data Networks", "Rack and Cabinet Assembly", "Telecommunications Infrastructure Maintenance"],
        keywords: ["Telecommunications", "Fiber Optics", "ITED", "ITUR", "Structured Networks"],
        benefits: [
           { title: "High Speed", desc: "Certified networks (Cat6, Cat6A, Fiber) for gigabit speed." },
           { title: "Certification", desc: "Tests with calibrated equipment and technical report." },
           { title: "Organization", desc: "Organized and identified racks." },
           { title: "Convergence", desc: "Integration of voice, data, and video on the same network." }
        ],
        process: [
           { title: "ITED Design", desc: "Conception of piping and cabling network." },
           { title: "Cablagem", desc: "Careful installation of copper and fiber optics." },
           { title: "Splicing and Termination", desc: "Socket connection and fiber splicing." },
           { title: "Certification", desc: "Certification tests and report delivery." }
        ]
      },
      others: {
        title: "Complementary Services",
        seoTitle: "Energy Consulting and Safety",
        seoDescription: "Energy audits, works supervision, and security systems. Complementary engineering and construction services.",
        description: "A 360º approach to your building's needs.",
        fullText: "Beyond pure electricity, our competence extends to areas vitals for any infrastructure's operation. We offer works supervision services to ensure your project is fulfilled by the contractor. We implement electronic security systems (CCTV, Intrusion) and perform energy audits to identify where you can save. We also have civil construction teams for small repairs and finishes, facilitating your work management with a single supplier.",
        features: ["Construction Supervision and Management", "Video Surveillance Systems (CCTV)", "Fire Detection (SADI)", "Energy Efficiency Audits", "Small Civil Construction and Repairs"],
        keywords: ["Consulting", "Supervision", "CCTV", "Security", "Energy Audit"],
        benefits: [
           { title: "Single Point of Contact", desc: "Centralize electricity, security, and civil with one supplier." },
           { title: "Savings", desc: "Audits that reduce the energy bill." },
           { title: "Control", desc: "Supervision ensuring project compliance." },
           { title: "Safety", desc: "Integrated building protection systems." }
        ],
        process: [
           { title: "Diagnosis", desc: "Identification of needs or pathologies." },
           { title: "Solution", desc: "Presentation of corrective measures or project." },
           { title: "Implementation", desc: "Execution of work with own teams." },
           { title: "Monitoring", desc: "Follow-up of obtained results." }
        ]
      }
    }
  },
  en: {
    seo: {
      home: {
        title: "Joaquim & Fernandes | Electricity Company Algarve and Alentejo",
        description: "Electricians specialized in Electrical Installations, Grid Connection, Substations and Smart Cities. Operating in Faro, Portimão, Tavira, Beja and all Algarve."
      },
      about: {
        title: "About Us | Certified Electricians in Algarve | Joaquim & Fernandes",
        description: "Meet Joaquim & Fernandes, leading electricity and telecommunications company in the South. Serving Algarve (Faro, Albufeira) and Alentejo with rigor."
      },
      services: {
        title: "Electrical Installations and Engineering Services | Algarve and Alentejo",
        description: "Complete services in the South: Electrical Projects, Grid Connections, Substations, Industrial Electrical Installations, and EV Charging."
      },
      lighting: {
        title: "Professional Lighting | Festive, Public and Decorative | J&F",
        description: "Complete lighting solutions in Algarve. Christmas Lighting, Smart Lighting and Technical Lighting."
      },
      partners: {
        title: "Partners and Brands | Schneider, E-Redes, Siemens",
        description: "We work with top brands and comply with all E-Redes standards. Trusted partners for civil construction and public works in the South."
      },
      careers: {
        title: "Recruitment Electrician and Engineering | Jobs Algarve",
        description: "Join our team. Vacancies for Electricians, Electrical Engineers, and Maintenance Technicians in Algarve and Alentejo."
      },
      contact: {
        title: "Contacts | Get Electrician Quote Algarve and Alentejo",
        description: "Contact Joaquim & Fernandes for electrical installation quotes, Grid Connections or maintenance. We serve Faro, Olhão, Tavira, Portimão, and Beja."
      },
      smartCities: {
        title: "Smart Cities & IoT | Smart Public Lighting | J&F",
        description: "Transforming cities in Algarve into Smart Cities. IoT solutions, public lighting remote management, and energy efficiency."
      },
      faqs: {
        title: "Frequently Asked Questions | Joaquim & Fernandes",
        description: "Answers to common doubts about grid connection requests (PLR), service drops, meters, and electrical installations."
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
      terms: 'Terms and Conditions',
      quality: 'Quality Policy',
      faqTitle: 'Frequent Questions',
      faqDesc: 'Consult our support area to clarify technical questions.',
      faqButton: 'View FAQs'
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
        subtitle: "Your reference electricity company in Algarve and Alentejo. Technical excellence in Grid Connections and Infrastructures.",
        ctaPrimary: "Get a quote",
        ctaSecondary: "Contact us"
      },
      servicesTitle: "Our Areas of Expertise",
      whyUsTitle: "Why choose Joaquim & Fernandes?",
      whyUsDesc: "We are the right choice for those looking for certified electricians in Algarve and Alentejo. We combine decades of experience in Substations and Telecommunications with the latest technologies.",
      ctaButton: "Discover our services",
      benefits: [
        { id: 1, text: "Experience since 1986" },
        { id: 2, text: "Certified Electricians" },
        { id: 3, text: "Turnkey Solutions" },
        { id: 4, text: "Focus on the South" }
      ],
      lightUp: {
        title: "Have a project in Faro, Portimão or Beja?",
        desc: "Our light is ready to guide your vision. Specialists in complex installations and public grid connection.",
        cta: "Get a Free Quote"
      },
      testimonialsTitle: "What our clients say",
      testimonials: [
        {
          id: 1,
          name: "Narciso Barradas",
          text: "The reception, service, and resolution of the reported problem manifest all the professionalism of this team. Thank you very much for the attention and dedication."
        },
        {
          id: 2,
          name: "Carolina Morais",
          text: "I really liked the service on Monday 13/05/2025, the gentleman at the reception was very nice."
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
         plrs: { title: "Grid Connection Requests", desc: "Execution of Grid Connection Requests (PLR), underground or overhead service drops, and construction of energy distribution branches." },
         installations: { title: "Electrical Infrastructures", desc: "Industrial and residential electrical installations, renovations, power increases, certification, and technical maintenance." },
         substations: { title: "Substations", desc: "Assembly of Transformation Stations (PTs), installation of medium voltage cells, transformers, and preventive maintenance." },
         ev_charging: { title: "Charging Stations", desc: "Turnkey solutions for electric vehicle charging (PCVE) in public and private spaces." },
         lighting: { title: "Professional Lighting", desc: "Festive Lighting, Smart Lighting and Technical Solutions." },
         telecommunications: { title: "Telecommunications", desc: "ITED/ITUR design and installation, fiber optic fusion, structured data networks, and infrastructure certification." },
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
        weekdays: "Monday to Friday: 09:00 - 18:00",
        weekend: "Saturday and Sunday: Closed",
        whatsappBox: {
           title: "Get quote via WhatsApp",
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
        fileHint: "PDF (Max. 5MB)",
        interestHint: "(Select multiple options)",
        successMsg: "Thank you for contacting us! We will be in touch shortly.",
        fileError: "Please select only PDF files.",
        optsInterest: {
          plrs: "Grid Connection Requests (PLR)",
          installations: "Electrical Infrastructures",
          telecommunications: "Telecommunications",
          substations: "Substations",
          projects: "Electrical Projects",
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
          q: "I NEED TO PUT ELECTRICITY IN A PLACE. WHAT ARE THE STEPS TO FOLLOW?",
          a: "To put electricity in a house, shop, or land, it is necessary to follow some steps in an organized and safe way. At JF we handle the entire process, we only need some data/documents such as:\n\n- Citizen card, for individuals or Permanent Certificate, for companies;\n- Installation address, with indication of geographical coordinates;\n- Property Booklet;\n- Phone and email contacts."
        },
        {
          q: "WHAT DO I NEED TO MAKE AN ELECTRICAL GRID CONNECTION REQUEST (PLR)?",
          a: "At JF we handle the entire process, and provide a totally free quote, it is only necessary that you:\n\n- Provide all requested documentation;\n- Indicate the type of grid connection intended;\n- Indicate the intended power;\n\nAfter awarding our quote, it will also be necessary:\n- Payment of Fees to E-Redes (Variable amounts)."
        },
        {
          q: "WHAT TYPES OF GRID CONNECTION EXIST?",
          a: "- Grid connection for a single-family house.\n\n- Grid connection for a company/business.\n\n- Grid connection for a collective installation (e.g., buildings).\n\n- Grid deviation: To change the location of existing network elements (poles, lines, etc.).\n\n- Works: To supply electricity temporarily to a location, with or without the need for a definitive connection later.\n\n- Events: To supply electricity to a specific event and only for the period strictly necessary for its realization. These connections are typically for circuses, fairs, parties, street shows, among others."
        },
        {
          q: "I NEED ELECTRICITY IN A PLACE WHERE THERE IS ALREADY A METER. HOW TO PROCEED?",
          a: "If the place already has a meter installed, or if it already had an electricity contract, you just need to contact a supplier to make an electricity supply contract."
        },
        {
          q: "WHAT IS CPE?",
          a: "The CPE – Delivery Point Code – is the number that identifies your electrical installation."
        },
        {
          q: "WHAT IS NIP?",
          a: "The NIP – Building Identification Number – is the number that identifies the collective installation and with which it is possible to consult all CPEs."
        },
        {
          q: "I WANT TO INCREASE THE POWER OF MY INSTALLATION. WHAT SHOULD I DO?",
          a: "If the power you want to contract is lower than the maximum admissible power of the installation, the Customer must request an increase in contracted power from their Supplier.\n\nIn situations where the power you want to contract is higher than the maximum admissible power of the installation, the Customer may request a quote from us for a power increase.\n\nThe Customer must ensure that the installation is certified for the new power value.\n\nIf it is necessary to certify the installation, the Customer must resort to an electrical installation inspection entity recognized by the Directorate General of Energy and Geology (DGEG)."
        },
        {
          q: "IS IT POSSIBLE TO MOVE MY METER LOCATION?",
          a: "Yes, through a request to change the meter location, or alteration of the delivery point."
        },
        {
          q: "I HAVE NO LIGHT, WHO SHOULD I CONTACT?",
          a: "You should contact E-Redes, through available means:\n\nPhone: 800 506 506\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "I RECEIVED A COMMUNICATION ABOUT REPLACING MY METER. WHAT SHOULD I DO?",
          a: "You must schedule the day and time that are most convenient for you, contacting E-Redes:\n\nPhone: 218 100 100\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "WHAT IS NECESSARY TO HAVE AN ELECTRIC VEHICLE CHARGER?",
          a: "Initially, you must check the Available Electrical Power at the location, choose the intended Charger Type, and contact our budgeting department."
        }
      ]
    },
    careers: {
      heroTitle: "Recruitment",
      heroDesc: "Join a team with almost 40 years of history. We build the future in Algarve and Alentejo with rigor and innovation.",
      introTitle: "Why work with us?",
      introDesc: "At Joaquim & Fernandes, we believe people are our greatest energy. We offer stability, continuous training, and the opportunity to work on challenging electricity, construction, and sustainable mobility projects.",
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
          type: "Full Time",
          description: "Responsible for the execution and repair of Portuguese pavement, laying curbs, and other urban finishing works on public roads.",
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
        }
      ],
      spontaneousTitle: "Didn't find the ideal vacancy?",
      spontaneousDesc: "We are always looking for new talent in Algarve. Send us your CV for our database.",
      spontaneousBtn: "Send Spontaneous Application",
      spontaneousDisclaimer: "By sending your CV, you accept our data processing policy for recruitment purposes."
    },
    qualityPage: {
      title: "Quality Policy",
      visionTitle: "Vision",
      visionDesc: "Joaquim & Fernandes Lda aims to be a reference company and a strategic partner in infrastructure construction in the Algarve region, keeping up with innovation and being an example in its business area.",
      missionTitle: "Mission",
      missionDesc: "Provide effective and fast services in the area of construction and maintenance of infrastructure in Southern Portugal.",
      valuesTitle: "Values",
      values: [
        { title: "Integrity", desc: "Seriousness and honesty prevail in decisions and day-to-day life." },
        { title: "Responsibility", desc: "Commitment to assume assigned duties and functions, as well as ensure compliance with the agreed contract/service." },
        { title: "Service Effectiveness", desc: "Do it right the first time." },
        { title: "Customer Orientation", desc: "Work according to customer expectations and requirements." }
      ],
      strategyTitle: "Strategic Guidelines",
      strategies: [
        "Continuously improve the effectiveness of the QMS and our services for customer and employee satisfaction, as well as contribute to the development of the Algarve region we serve.",
        "Train, inform, and develop all human resources, contributing to the development of their skills.",
        "Promote safety and health conditions to harmonize work and provide well-being to all employees.",
        "Ensure compliance with all current standards, legislation, and regulations and technical specifications required by our clients."
      ]
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
          content: "We collect data that you provide voluntarily through our contact forms, quote requests, and job applications. These may include: Name, Email, Phone, Address, and Curriculum Vitae (in case of recruitment). We also collect technical navigation data (Cookies) anonymously to improve site performance."
        },
        {
          title: "3. Purpose of Processing",
          content: "Your data is processed for the following purposes: \n- Management of quote requests and commercial contact;\n- Execution of service contracts;\n- Recruitment and selection processes;\n- Compliance with legal obligations (invoicing)."
        },
        {
          title: "4. Data Sharing",
          content: "We do not sell your data to third parties. Your data may be shared only with subcontractors strictly necessary for service provision (e.g., accounting, IT), ensuring that they also comply with GDPR, or with public authorities when required by law."
        },
        {
          title: "5. Data Subject Rights",
          content: "Under GDPR, you have the right to access, rectify, limit, object to processing, and request erasure of your personal data (right to be forgotten). To exercise these rights, simply send a written request to our general email."
        },
        {
          title: "6. Security and Retention",
          content: "We implement technical and organizational security measures to protect your data. Data is kept only for the period necessary for the purpose for which it was collected, or as required by law (e.g., 10 years for billing data)."
        }
      ],
      lastUpdated: "Last update: October 2024"
    },
    termsPage: {
      title: "Terms and Conditions",
      intro: "Welcome to the Joaquim & Fernandes website. By accessing and using this site, you agree to the following terms and conditions of use.",
      sections: [
        {
          title: "1. Intellectual Property",
          content: "All content present on this site (texts, images, logos, videos) is the exclusive property of Joaquim & Fernandes, Lda or its partners, being protected by Copyright and Industrial Property legislation. Copying, reproduction, or distribution without prior authorization is prohibited."
        },
        {
          title: "2. Site Use",
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
          content: "In case of consumer dispute, the consumer may resort to a competent Consumer Alternative Dispute Resolution Entity. Joaquim & Fernandes adheres to arbitration centers in the Algarve region. More information at the Consumer Portal (www.consumidor.pt)."
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
      introDesc: "At Joaquim & Fernandes, light is more than visibility — it is experience, safety, and identity. We offer a complete portfolio ranging from decorative lighting for festive seasons to advanced technical systems for cities and industries.",
      types: [
        {
          title: "Festive Lighting",
          desc: "Festive Lighting is the art of creating emotions through light. We develop turnkey projects for special seasons, transforming the urban and commercial environment. From the creative conception of motifs (2D and 3D) to safe installation and dismantling, we guarantee a visual spectacle that attracts visitors, boosts local commerce, and celebrates tradition with low-consumption LED technology.",
          applicationsTitle: "Where it applies:",
          applications: ["Historic Centers and Cities", "Shopping Centers", "Public Squares and Gardens", "Building Facades"]
        },
        {
          title: "Smart Lighting",
          desc: "More than illuminating roads, we create smart cities. Our approach to Public Lighting focuses on energy efficiency and safety. We replace conventional luminaires with high-performance LED technology, integrated with remote management systems that allow controlling light intensity remotely, detecting faults in real-time, and reducing municipal energy bills by up to 60%.",
          applicationsTitle: "Where it applies:",
          applications: ["Public Roads and Highways", "Urban Parks and Cycle Paths", "Residential Areas", "Parking Lots"]
        },
        {
          title: "Technical Lighting",
          desc: "Technical Lighting aims to enhance built heritage at night, respecting its history and original design. We use precision projectors, LED strips, and RGBW systems to create dynamic or static scenarios that highlight textures and volumes. It is the ideal solution to give new life to iconic buildings, hotels, or monuments, reinforcing the visual identity of the place.",
          applicationsTitle: "Where it applies:",
          applications: ["Monuments and Churches", "Hotels and Resorts", "Corporate Buildings", "Bridges and Structures"]
        },
        {
          title: "Sports Lighting",
          desc: "In sports, light is fundamental for athlete performance and spectator experience. We design and install lighting systems that strictly comply with lux levels required by federations and television broadcast standards. We ensure uniformity on the field, glare control, and instant lighting systems for pavilions and stadiums.",
          applicationsTitle: "Where it applies:",
          applications: ["Football Fields and Stadiums", "Sports Halls", "Tennis and Padel Courts", "Municipal Pools"]
        },
      ],
      innovationTitle: "Technology & Design",
      innovationDesc: "We combine the art of light design with the most advanced engineering.",
      stat1: "Festive Projects",
      stat2: "LED Light Points",
      stat3: "Average Savings",
      ctaTitle: "Let's illuminate your project?",
      ctaDesc: "Whether to decorate your city for Christmas or renew public lighting.",
      ctaButton: "Request Lighting Proposal"
    },
    partners: {
      heroTitle: "Trusted Partners",
      heroDesc: "The excellence of Joaquim & Fernandes is built on solid relationships with world industry leaders and exclusive strategic partnerships.",
      suppliersTitle: "Suppliers and Certified Brands",
      suppliersDesc: "We work only with approved materials and top equipment to ensure maximum safety and durability of our electrical installations.",
      eredesHighlight: {
        title: "Interconnection with Distribution Network",
        desc: "As a specialized company, we guarantee strict compliance with all technical standards required by E-Redes (formerly EDP Distribuição) for service drops, branches, and substations.",
        badge: "Technical Standards Met"
      },
      brandsList: [
        { name: "Schneider Electric", desc: "Global leader in energy management and automation." },
        { name: "Siemens", desc: "Cutting-edge technology for smart infrastructures." },
        { name: "EFACEC", desc: "Portuguese engineering and mobility solutions." },
        { name: "Legrand", desc: "Specialists in electrical and digital infrastructures." },
        { name: "Hager", desc: "Energy installation and distribution systems." }
      ],
      exclusiveTitle: "Exclusive Strategic Partnerships",
      exclusiveDesc: "Companies and entities that trust exclusively in Joaquim & Fernandes for the execution and maintenance of their projects.",
      exclusivePartners: [
        { name: "Grupo Construção Vanguarda", type: "Civil Construction", desc: "Exclusive partner for all electrical installations in luxury developments in the Golden Triangle." },
        { name: "Gestão Hoteleira Premium", type: "Hospitality", desc: "Exclusive maintenance contract for a 5-star hotel chain in Algarve." },
        { name: "Condomínios do Sul", type: "Property Management", desc: "Partnership for installation of charging stations and building maintenance." }
      ],
      ctaTitle: "Become a Partner",
      ctaDesc: "We are constantly looking to expand our network with companies that share our values of rigor and quality.",
      ctaButton: "Propose Partnership"
    },
    about: {
      heroTitle: "Our History",
      heroDesc: "Almost four decades of engineering, construction, and innovation. Know the journey that brought us here.",
      timeline: [
        { year: "1986", title: "The Foundation", description: "Joaquim & Fernandes begins its activity as a small family business focused on residential electrical installations in the Faro area." },
        { year: "1998", title: "Expansion to Industry", description: "With team growth, the company expands services to the industrial sector throughout the Algarve." },
        { year: "2005", title: "Construction Department", description: "Responding to customer needs, we opened the civil construction department to offer turnkey solutions." },
        { year: "2015", title: "Expansion to Alentejo", description: "Start of operations in Alentejo, focusing on agricultural and industrial projects." },
        { year: "2020", title: "Electric Mobility", description: "Launch of the division dedicated to electric mobility, installing charging stations throughout the South." },
        { year: "Today", title: "Market Leaders in the South", description: "We continue to innovate, maintaining the values of trust that define us for almost 40 years." }
      ],
      awards: {
        title: "Recognition and Awards",
        subtitle: "Public distinction of our financial robustness and superior performance in the sector.",
        list: [
          { name: "PME Líder", desc: "Reference status distinguishing the merit and risk profile of national SMEs. Distinguished 3 times (last in 2024)." },
          { name: "PME Excelência", desc: "Reputation seal awarding the best economic-financial performances. Distinguished 3 times (last in 2024)." }
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
    services: {
      heroTitle: "Our Services",
      heroDesc: "Specialized technical solutions to answer the most demanding challenges in Electricity and Telecommunications.",
      categories: [
        {
          id: "plrs",
          title: "Grid Connection Requests (PLR)",
          description: "Specialized execution of Grid Connection Points and electrical infrastructures for connection to the public distribution network.",
          details: ["Grid Connection Requests (PLR)", "Underground or Overhead Drops", "Branch Execution"]
        },
        {
          id: "installations",
          title: "Electrical Infrastructures",
          description: "Comprehensive electrical installation services for industrial, commercial, and residential sectors, focusing on safety and efficiency.",
          details: ["Electrical Installations", "Certification", "Electrical Branches and Power Increases", "Power Factor Correction", "Lighting Studies", "Technical Maintenance", "ITED and ITUR Projects", "Low and Medium Voltage Electrical Projects", "Energy Consulting"]
        },
        {
          id: "telecommunications",
          title: "Telecommunications",
          description: "Next-generation network infrastructures, fiber optics, and ITED/ITUR certification for residential and commercial buildings.",
          details: ["Fiber Optic Networks", "ITED/ITUR Projects", "Network Certification", "Racks and Cabinets", "Network Maintenance"]
        },
        {
          id: "substations",
          title: "Substations",
          description: "Assembly, commissioning, and maintenance of Substations (PTs) for Medium Voltage clients.",
          details: ["Cell Installation", "Power Transformers", "Technical Inspection", "Corrective Maintenance", "Preventive Maintenance"]
        },
        {
          id: "projects",
          title: "Electrical Projects",
          description: "Integral development of engineering specialty projects, ensuring compliance with all legal standards and technical requirements.",
          details: ["Electrical Projects", "Licensing", "Lighting Studies", "Energy Consulting"]
        },
        {
          id: "others",
          title: "Other Services",
          description: "Complementary solutions and specialized services designed to answer specific engineering, construction, and maintenance needs.",
          details: ["Electric Mobility", "Event Support", "Civil Construction"]
        }
      ],
      notFoundTitle: "Didn't find what you're looking for?",
      notFoundDesc: "We have personalized solutions for each case.",
      notFoundCta: "Talk to Us"
    },
    serviceDetails: {
      projects: {
        title: "Electrical Engineering Projects",
        seoTitle: "Electrical Projects and Licensing",
        seoDescription: "Specialist company in Electrical Projects and Licensing. Consulting in Algarve and Alentejo.",
        description: "Precision engineering for smart and safe buildings.",
        fullText: "Our engineering team develops detailed technical projects ensuring the viability, safety, and efficiency of your installations. From initial study to final licensing with competent entities (DGEG, E-Redes), we ensure every trace strictly complies with current legislation. We use state-of-the-art software for modeling and calculation, allowing us to anticipate challenges and optimize construction costs before it even begins.",
        features: ["Low and Medium Voltage Electrical Projects", "Self-Protection Measures (MAP)", "Lighting Studies (Dialux)", "Energy Certification Consulting"],
        keywords: ["Electrical Projects", "Electrical Design", "Engineering", "Licensing"],
        benefits: [
           { title: "Total Compliance", desc: "We guarantee approval with E-Redes and Certiel without complications." },
           { title: "Cost Reduction", desc: "We optimize cable and protection sizing to save on construction." },
           { title: "BIM Technology", desc: "3D visualization of infrastructures to avoid conflicts on site." },
           { title: "Fast Licensing", desc: "We handle all bureaucracy so your work doesn't stop." }
        ],
        process: [
           { title: "Survey", desc: "Analysis of needs and building characteristics." },
           { title: "Sizing", desc: "Technical calculations of loads, power, and lighting." },
           { title: "Technical Design", desc: "Elaboration of drawings and descriptive memories." },
           { title: "Licensing", desc: "Submission and follow-up with official entities." }
        ]
      },
      plrs: {
        title: "Grid Connection Requests (PLR)",
        seoTitle: "Service Drops, PLRs and E-Redes in Algarve",
        seoDescription: "Execution of PLRs, drops, and electrical branches according to E-Redes standards. Specialists in electrical grid connection in Faro, Portimão, and Évora.",
        description: "The safe bridge between the public network and your installation.",
        fullText: "The execution of Grid Connection Points (PLR), drops, and branches requires deep knowledge of E-Redes technical standards. We are experts in building these critical infrastructures, ensuring seamless and safe interconnection. We handle the entire technical process, from trenching and cabling to mounting cabinets and metering boxes, ensuring your installation receives power without setbacks or inspection failures.",
        features: ["Grid Connection Requests (PLR)", "Underground or Overhead Drops", "Branch Execution"],
        keywords: ["E-Redes", "PLR", "Electrical Branches", "Drops", "Electricity Metering"],
        benefits: [
           { title: "Certified Company", desc: "Qualified professionals, with vast experience in the sector and constant learning." },
           { title: "Turnkey Solution", desc: "We take care of the entire process, from documentation to completion of the work." },
           { title: "Speed and Reliability", desc: "Specialized teams to guarantee efficient service." },
           { title: "Guaranteed Compliance", desc: "We comply with all technical and regulatory requirements of E-REDES." }
        ],
        process: [
           { title: "Connection Request", desc: "Feasibility analysis and request to E-Redes." },
           { title: "Civil Execution", desc: "Trench opening and infrastructure construction." },
           { title: "Cabling", desc: "Cable running and cabinet assembly." },
           { title: "Inspection and Connection", desc: "Certification and meter request." }
        ]
      },
      installations: {
        title: "Electrical Infrastructures",
        seoTitle: "Industrial and Building Electrical Installations | Electrician",
        seoDescription: "Company for industrial and building electrical installations. Qualified electricians for works in Algarve and Alentejo.",
        description: "Safe and efficient energy for any type of building.",
        fullText: "We perform complete electrical installations, adapted to the specific needs of industries, offices, commercial spaces, and housing. Our focus is on safety, durability, and ease of future maintenance. We work with the best materials on the market (Schneider, Hager, Legrand) to assemble electrical panels and lighting systems that not only work perfectly but also value your property and reduce the risk of failures.",
        features: [
            "Electrical Installations",
            "Certification",
            "Electrical Branches and Power Increases",
            "Power Factor Correction",
            "Lighting Studies",
            "Technical Maintenance",
            "ITED and ITUR Projects",
            "Low and Medium Voltage Electrical Projects",
            "Energy Consulting"
        ],
        keywords: ["Electrician Algarve", "Electricity Company", "Electrical Installations", "Electrical Panels", "Industrial Maintenance"],
        benefits: [
           { title: "Maximum Safety", desc: "Strict compliance with RTIEBT for protection of people and assets." },
           { title: "Premium Materials", desc: "We use only reference brands (Schneider, Hager)." },
           { title: "Aesthetics", desc: "Careful finishes and organized electrical panels." },
           { title: "Warranty", desc: "Post-work assistance and execution guarantee." }
        ],
        process: [
           { title: "Planning", desc: "Marking and defining cable paths." },
           { title: "Piping", desc: "Installation of pipes and boxes before plastering." },
           { title: "Wiring", desc: "Running conductors and cables." },
           { title: "Equipment", desc: "Mounting sockets, switches, and panels." }
        ]
      },
      substations: {
        title: "Substations",
        seoTitle: "Substations and Medium Voltage",
        seoDescription: "Installation and maintenance of Substations (PTs) and Medium Voltage Cells. Specialized service for industries and large buildings.",
        description: "High power demands high responsibility and technical competence.",
        fullText: "Substations (PTs) are the energy heart of large industries and buildings. Joaquim & Fernandes has a highly qualified team to intervene in Medium Voltage. We perform turnkey assembly of PTs (cabin or overhead), as well as their mandatory preventive maintenance. We guarantee cleaning, tightening of connections, dielectric oil analysis, and tests on protection equipment, ensuring service continuity and safety of people and assets.",
        features: ["Cell Installation", "Power Transformers", "Technical Inspection", "Corrective Maintenance", "Preventive Maintenance"],
        keywords: ["Substations", "Medium Voltage", "Transformers", "PT", "High Voltage"],
        benefits: [
           { title: "Accredited Technicians", desc: "Team with specific training in High/Medium Voltage." },
           { title: "Predictive Maintenance", desc: "Oil analysis and thermography to predict breakdowns." },
           { title: "Fast Response", desc: "Stock of critical equipment for replacement." },
           { title: "Safety", desc: "Rigorous individual and collective protection equipment." }
        ],
        process: [
           { title: "Project", desc: "Sizing of transformer and cells." },
           { title: "Civil Work", desc: "Preparation of cabin or support pole." },
           { title: "Assembly", desc: "Installation of transformer and MV/LV panels." },
           { title: "Tests", desc: "Insulation and dielectric rigidity tests." }
        ]
      },
      ev_charging: {
        title: "Electric Mobility",
        seoTitle: "Electric Car Charging Stations",
        seoDescription: "Installation of Electric Charging Stations and Wallboxes. Solutions for condominiums, companies, and individuals. Mobi.E Network.",
        description: "The future moves on electricity. We install the infrastructure.",
        fullText: "As a certified installation entity, we offer complete solutions for electric vehicle charging. Whether for a private garage, a condominium, or a corporate parking lot, we size the ideal solution to charge your vehicle quickly and safely, without tripping the electrical panel. We integrate stations with the Mobi.E network when necessary and configure Load Balancing systems to optimize building energy consumption.",
        features: ["Home Wallboxes", "Fast Charging Stations (DC)", "Mobi.E Network Integration", "Load Balancing Systems", "Solutions for Condominiums"],
        keywords: ["EV Charging", "Wallbox", "Mobi.E", "Electric Mobility", "Tesla"],
        benefits: [
           { title: "Fast Charging", desc: "Three-phase solutions to reduce charging time." },
           { title: "Smart Management", desc: "Load balancing to prevent power tripping." },
           { title: "Mobi.E Certification", desc: "Integration into the public network for monetization." },
           { title: "Universality", desc: "Compatible with all vehicle brands." }
        ],
        process: [
           { title: "Technical Visit", desc: "Evaluation of available power on site." },
           { title: "Proposal", desc: "Selection of the ideal charger for your car." },
           { title: "Installation", desc: "Mounting the station and electrical protections." },
           { title: "Configuration", desc: "App connection and function tests." }
        ]
      },
      telecommunications: {
        title: "Telecommunications and Networks",
        seoTitle: "ITED, ITUR and Fiber Optic Installation",
        seoDescription: "Certified company for telecommunications projects (ITED/ITUR) and fiber optics in Algarve.",
        description: "High-speed connectivity for your business or home.",
        fullText: "Joaquim & Fernandes offers specialized telecommunications infrastructure services, ensuring your building is prepared for future digital demands. We perform ITED (Telecommunications Infrastructure in Buildings) and ITUR projects and installations, complying with all ANACOM standards. Our team is equipped to perform optical fiber splicing, structured network certification, and rack assembly, ensuring reliable and high-performance connectivity.",
        features: ["ITED / ITUR Projects and Installation", "Fiber Optic Splicing and Certification", "Structured Voice and Data Networks", "Rack and Cabinet Assembly", "Telecommunications Infrastructure Maintenance"],
        keywords: ["Telecommunications", "Fiber Optics", "ITED", "ITUR", "Structured Networks"],
        benefits: [
           { title: "High Speed", desc: "Certified networks (Cat6, Cat6A, Fiber) for gigabit speed." },
           { title: "Certification", desc: "Tests with calibrated equipment and technical report." },
           { title: "Organization", desc: "Organized and identified racks." },
           { title: "Convergence", desc: "Integration of voice, data, and video on the same network." }
        ],
        process: [
           { title: "ITED Design", desc: "Conception of piping and cabling network." },
           { title: "Cablagem", desc: "Careful installation of copper and fiber optics." },
           { title: "Splicing and Termination", desc: "Socket connection and fiber splicing." },
           { title: "Certification", desc: "Certification tests and report delivery." }
        ]
      },
      others: {
        title: "Complementary Services",
        seoTitle: "Energy Consulting and Safety",
        seoDescription: "Energy audits, works supervision, and security systems. Complementary engineering and construction services.",
        description: "A 360º approach to your building's needs.",
        fullText: "Beyond pure electricity, our competence extends to areas vitals for any infrastructure's operation. We offer works supervision services to ensure your project is fulfilled by the contractor. We implement electronic security systems (CCTV, Intrusion) and perform energy audits to identify where you can save. We also have civil construction teams for small repairs and finishes, facilitating your work management with a single supplier.",
        features: ["Construction Supervision and Management", "Video Surveillance Systems (CCTV)", "Fire Detection (SADI)", "Energy Efficiency Audits", "Small Civil Construction and Repairs"],
        keywords: ["Consulting", "Supervision", "CCTV", "Security", "Energy Audit"],
        benefits: [
           { title: "Single Point of Contact", desc: "Centralize electricity, security, and civil with one supplier." },
           { title: "Savings", desc: "Audits that reduce the energy bill." },
           { title: "Control", desc: "Supervision ensuring project compliance." },
           { title: "Safety", desc: "Integrated building protection systems." }
        ],
        process: [
           { title: "Diagnosis", desc: "Identification of needs or pathologies." },
           { title: "Solution", desc: "Presentation of corrective measures or project." },
           { title: "Implementation", desc: "Execution of work with own teams." },
           { title: "Monitoring", desc: "Follow-up of obtained results." }
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
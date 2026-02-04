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
        title: "Soluções de Eletricidade, Iluminação, Baixadas e Ligações à Rede",
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
      exclusiveTitle: "Entidades Públicas Parceiras",
      exclusiveDesc: "Municípios e organizações estatais que confiam na Joaquim & Fernandes para a iluminação pública e infraestruturas críticas.",
      exclusivePartners: [
        { name: "Câmara Municipal de Faro", type: "Autarquia", desc: "Manutenção de Iluminação Pública e edifícios municipais no concelho." },
        { name: "Câmara Municipal de Olhão", type: "Autarquia", desc: "Execução de infraestruturas elétricas em novos loteamentos e zonas industriais." },
        { name: "Docapesca", type: "Setor Público", desc: "Manutenção de postos de transformação e redes de distribuição portuária." }
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
          { name: "PME Líder", desc: "Estatuto de referência que distingue o mérito e o perfil de risco das PME nacionais. Distinguida 3 vezes (last in 2024)." },
          { name: "PME Excelência", desc: "Selo de reputação que premeia os melhores desempenhos económico-financeiros. Distinguida 3 vezes (last in 2024)." }
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
           { title: "Segurança Máxima", desc: "Cumprimento rigoroso do RTIEBT para proteção de pessoas e bens." },
           { title: "Materiais Premium", desc: "Utilizamos apenas marcas de referência (Schneider, Hager)." },
           { title: "Aesthetics", desc: "Careful finishes and organized electrical panels." },
           { title: "Warranty", desc: "Post-work assistance and execution guarantee." }
        ],
        process: [
           { title: "Planeamento", desc: "Marcação e definição de caminhos de cabos." },
           { title: "Tubagem", desc: "Instalação de tubos e caixas antes do reboco." },
           { title: "Enfiamento", desc: "Passagem de condutores e cabos." },
           { title: "Aparelhagem", desc: "Montagem de tomadas, interruptores e quadros." }
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
        title: "Mobilidade Elétrica",
        seoTitle: "Postos de Carregamento de Carros Elétricos",
        seoDescription: "Instalação de Postos de Carregamento Elétrico e Wallboxes. Soluções para condomínios, empresas e particulares. Rede Mobi.E.",
        description: "O futuro move-se a eletricidade. Nós instalamos a infraestrutura.",
        fullText: "Enquanto entidade instaladora certificada, oferecemos soluções completas para carregamento de veículos elétricos. Seja para uma garagem privada, um condomínio ou parque empresarial, dimensionamos a solução ideal para carregar o seu veículo de forma rápida e segura, sem disparar o quadro elétrico. Integramos postos na rede Mobi.E quando necessário e configuramos sistemas de Load Balancing para otimizar o consumo energético do edifício.",
        features: ["Wallboxes Domésticas", "Postos de Carregamento Rápido (DC)", "Integração Rede Mobi.E", "Sistemas de Load Balancing", "Soluções para Condomínios"],
        keywords: ["Carregamento VE", "Wallbox", "Mobi.E", "Mobilidade Elétrica", "Tesla"],
        benefits: [
           { title: "Carregamento Rápido", desc: "Soluções trifásicas para reduzir o tempo de carga." },
           { title: "Gestão Inteligente", desc: "Balanceamento de carga para evitar disparos de potência." },
           { title: "Certificação Mobi.E", desc: "Integração na rede pública para rentabilização." },
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
        seoTitle: "Instalação ITED, ITUR e Fibra Ótica",
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
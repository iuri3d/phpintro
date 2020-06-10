-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Maio-2020 às 20:39
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dummy`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `body` longtext NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `author` varchar(50) NOT NULL,
  `token` varchar(40) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `news`
--

INSERT INTO `news` (`id`, `title`, `date`, `body`, `summary`, `author`, `token`, `status`) VALUES
(1, 'Creches abrem já a 18 de Maio e o pré-escolar a 1 de Junho', '2020-04-29', 'As creches vão abrir já a 18 de Maio e o pré-escolar a 1 de Junho, apurou o PÚBLICO. As datas foram reveladas esta quarta-feira pelo Governo aos parceiros sociais. António Costa anuncia esta quinta-feira o calendário completo para o regresso à normalidade.\r\n\r\nO primeiro-ministro está esta quarta-feira numa maratona de encontros com patrões, sindicatos e partidos, que culminam com uma audiência com o Presidente da República. Amanhã o executivo aprova em Conselho de Ministro o calendário para sair do confinamento e que concretiza um retorno gradual, progressivo e alternado para a economia e as pessoas.', 'O plano de regresso à normalidade que o Governo apresentou esta quarta-feira aos parceiros sociais prevê a abertura das creches ainda em Maio e o pré-escolar a 1 de Junho.', 'Raphael', '7a843b0044ca2b2453565feb4d6130b914aaa12b', 2),
(2, 'Universidades abrem aulas práticas e laboratoriais no próximo mês', '2020-04-29', 'Haverá aulas em algumas universidades no próximo mês, tal como pretendia o Governo, mas só em cadeiras práticas e laboratoriais. As universidades da Beira Interior e da Madeira e algumas faculdades, como a de Belas Artes do Porto, vão retomar as actividades presenciais na segunda e terceira semanas de Maio.\r\n\r\nA Universidade da Beira Interior (UBI), sediada na Covilhã, será a primeira a voltar a ter aulas presenciais. A reitoria quer retomar o ensino prático e laboratorial, bem como o trabalho de campo, a partir de 11 de Maio e no horário habitual. Estas aulas “constituem uma percentagem reduzida das actividades lectivas”, avança fonte da instituição ao PÚBLICO. A decisão final sobre o regresso às aulas cabe a cada professor e tem que ser negociada com os estudantes. Há duas semanas, o Ministério da Ciência, Tecnologia e Ensino Superior deu indicações às instituições de ensino superior para prepararem um regresso faseado às actividades presenciais depois do fim do estado de emergência.', 'Beira Interior será a primeira a retomar, no dia 11. Apenas alunos de cadeiras práticas e laboratoriais vão voltar às salas, enquanto estudantes deslocados vão poder continuar à distância. Universidade dos Açores é a única a dizer que não tem condições de o fazer.', 'Michelangelo', '806164ec429c336f3acb620efd7ace4118ab3ba2', 1),
(3, 'Bares, discotecas e ginásios fechados em maio', '2020-04-30', 'Confrontado com situações de empresários que possam estar a pedir as linhas de crédito sem estarem em situação grave de dificuldade, Siza Vieira respondeu que “o problema sério” é que “há muita gente que gostaria de ter tido acesso a crédito e eventualmente não o recebeu”.\r\n\r\n“Quais as razões por que uma pessoas que precisa de crédito não tem acesso a ele? Pode ser porque a linha se esgotou, porque precisava mas não reúne as condições para estes créditos garantidos pelo Estado. Falei com muitos empresário, alguns com histórias trágicas, porque dizem que não tiveram acesso ao crédito porque tiveram episódios de incumprimento perante o branco, ou porque se atrasaram nas prestações à Segurança Social, ou porque uma tinha situação líquida negativa”. Reconhecendo que “essas situações não estão a ser contempladas nos novos pedidos de crédito”, Siza Vieira diz, porém, que as empresas com episódios de incumprimento, mas que já estão a cumprir, por via de planos prestacionais, têm acesso às moratórias de crédito.\r\n\r\nJá questionado sobre se pondera uma revisão do montante das linhas, de 6,2 mil milhões de euros, Siza Vieira diz que as ajudas “têm de ser repensadas, por isso, precisamos de repensar o que vamos fazer”.', 'António Costa acabou de ouvir partidos com assento parlamentar sobre o fim do estado de emergência às 23h e adiou jantar com Marcelo. Siza Vieira confirma atividades fechadas em maio.', 'Leonardo', 'af8e558f775961e54dc63a7da66c67f4ec7692e3', 2),
(4, 'Um computador por aluno em setembro? Será difícil', '2020-04-30', 'Com muitas perguntas ainda sem resposta sobre como todo o processo será conduzido, a resposta oficial quer do Ministério da Economia e Transição Digital, quer do Ministério da Educação, é vaga: o Executivo está a trabalhar no assunto e a seu tempo dará conta do andamento do processo. \r\n\r\n“O Governo está a trabalhar no Programa de Digitalização para as Escolas com vista a começar a sua implementação no próximo ano letivo. O anúncio oficial, com todos os detalhes do programa, será feito no momento oportuno”, respondem os gabinetes de Pedro Siza Vieira e de Tiago Brandão Rodrigues. A medida faz parte do Plano de Ação para a Transição Digital, publicado em Diário da República a 21 de abril.', 'Ensino público tem 1,2 milhões de alunos e o arranque do ano letivo está a 140 dias de distância, numa altura em que a produção de maquinaria está comprometida, como já disse o ministro da Educação.', 'Donatello', '67e1ef64165b091aa3f476c42994a02d4a2faad3', 3),
(20, 'Governo diz que houve 484 milhões injetados pelo PT2020, em dois meses', '2020-05-02', 'Na mesma cerimónia, Nelson Souza, sublinhou que nos meses de março e abril o PT2020, o Governo pagou 464 milhões de euros de financiamento, mais 60 milhões de euros em comparação com o período homólogo de 2019, uma “aceleração na medida em que tal foi necessário para assegurar o financiamento de atividades”, incluindo municípios, universidades, escolas profissionais, associações, IPSS, ONGs.\r\n\r\nFoi, também, dada uma “atenção particular” ao financiamento das empresas. Dos 464 milhões, totais, 164 milhões foram pagos às empresas. Quase o dobro em relação ao período homólogo, diz o ministro, acrescentando que houve um diferimento de subsídios reembolsáveis de forma automática, o que em março e abril representou mais 70 milhões que ficaram na posse das empresas.\r\n\r\n“Cumprimos, assim, a nossa missão, a missão de não ficarmos quietos, de contribuirmos para assegurar liquidez para as empresas na justa medida daquilo que somos capazes, acelerando fortemente”, disse o ministro, destacando que muito desse trabalho foi feito por pessoas das equipas em teletrabalho.', 'Cumprimos, assim, a nossa missão, a missão de não ficarmos quietos, de contribuirmos para assegurar liquidez para as empresas na justa medida daquilo que somos capazes.', 'Jorge Gamito', 'b3442a77e1b83b5c0c059a8d7f0240c6839d5be9', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `token` varchar(128) NOT NULL,
  `level` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `status`, `token`, `level`, `timestamp`) VALUES
(1, 'jorgegamito@gmail.com', '$2y$10$B8X7qBnsbn0xlLY6yeWfM.6xAtxrCa6P1oHWDLnQiJJXQmNNVYpHC', 1, 'b7035f192a7be0c1cedd2876cb6166cb3e23d6bb', 1, 1588186052),
(2, 'jorgegamito+admin@gmail.com', '$2y$10$VcCWeQZYsnwDlafnrVcez.Zypm2NZtWxAejE3CclEJ0CndUgjw6v2', 1, '9df03333ef043a309d08ef29bee72585b87f40d5', 2, 1588455345);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

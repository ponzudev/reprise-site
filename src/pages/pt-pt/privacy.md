---
layout: ../../layouts/DocLayout.astro
lang: pt-pt
title: Política de Privacidade
description: Política de Privacidade do Reprise. O áudio, as transcrições e os registos de estudo ficam guardados apenas no seu dispositivo e nunca são enviados para um servidor.
---

# Política de Privacidade do Reprise

Última atualização: 2026-11-27

## Resumo

O Reprise recebe apenas os comentários que o utilizador decida enviar e dados de utilização que ajudam a melhorar a app (que funcionalidades utiliza e com que frequência; pode desativar esta opção em “Definições”). Não tem servidor próprio: a análise do áudio e os registos de estudo são processados inteiramente no dispositivo. Nem os comentários nem os dados de utilização incluem o seu endereço de e-mail ou o seu nome.

A app só comunica através da rede quando utiliza “De Podcasts”, quando abre um material criado a partir de um podcast para verificar se há episódios novos, quando, nos materiais em que ativou “Importar novos episódios automaticamente”, importa os episódios novos ao abrir a app, quando envia comentários ou consulta respostas e quando envia os dados de utilização (no máximo uma vez por dia). As comunicações relativas a podcasts são feitas diretamente com o serviço de pesquisa da Apple e com a origem de distribuição do programa, e o programador nunca recebe o seu conteúdo. Os comentários e os dados de utilização chegam-nos através do CloudKit da Apple (ver “Comentários” e “Dados de utilização” abaixo).

## Informações recolhidas

A app não recolhe identificadores do utilizador, informações de contacto nem localização. Não inclui publicidade nem ferramentas de análise de terceiros.

Recebemos apenas o que o utilizador **decide enviar** em “Definições” → “Comentários” (ver “Comentários” abaixo) e os dados de utilização (ver “Dados de utilização” abaixo).

## Comentários

Em “Definições” → “Comentários”, pode enviar ao programador relatos de problemas e pedidos. As respostas do programador aparecem no mesmo ecrã.

- O que é enviado: o texto que escreve, a versão da app e a versão do iOS. **Não são enviados o endereço de e-mail, o nome nem o número de telefone**
- Os comentários são recebidos através do CloudKit da Apple. Para os enviar, é necessário ter sessão iniciada no iCloud no dispositivo, mas o programador recebe apenas um identificador de utilizador anónimo atribuído pela Apple; o seu ID Apple e o seu endereço de e-mail nunca são transmitidos ao programador
- Só o próprio utilizador que os enviou e o programador podem ler o conteúdo enviado
- O conteúdo é utilizado apenas para investigar problemas, melhorar a app e responder. Se quiser que seja apagado, envie um pedido nesse sentido através dos Comentários

## Dados de utilização

Para melhorar a app, esta envia uma vez por dia que funcionalidades utilizou e com que frequência. Pode desativar esta opção a qualquer momento em “Definições” → “Enviar dados de utilização”; ao desativá-la, os dados ainda não enviados que estão no dispositivo também são apagados.

- **O que é enviado**: os tipos de ação e o respetivo número de vezes (por exemplo: importar um material e a sua origem, dividir frases, alterar a velocidade de reprodução, abrir o ecrã de subscrição, que funcionalidade o abriu e se houve compra), os valores das definições que escolhe, o número de materiais de estudo e de frases marcadas, o tipo de plano (gratuito, período experimental gratuito, mensal ou anual), as versões da app e do iOS, os idiomas de apresentação e de estudo, o país da App Store, o dia em que instalou a app e um identificador aleatório por instalação
- **O que nunca é enviado**: os nomes dos materiais ou das faixas, o texto das frases, o áudio importado, a sua voz gravada, as transcrições, os nomes dos programas de podcasts, os termos de pesquisa ou URL, os registos de estudo (tempo de estudo e frases reproduzidas), o seu endereço de e-mail, nome ou ID Apple e as informações de pagamento
- O identificador aleatório por instalação é utilizado apenas para contar dispositivos. Não está associado ao seu ID Apple e muda quando apaga a app
- Os dados de utilização são guardados no CloudKit da Apple. Só são enviados enquanto tiver sessão iniciada no iCloud, e o programador recebe apenas um identificador de utilizador anónimo atribuído pela Apple, juntamente com os dados acima. Os dados que não puderam ser enviados ficam guardados no dispositivo durante, no máximo, 14 dias e são depois apagados
- Os dados de utilização são utilizados apenas de forma agregada para melhorar a app (para saber que funcionalidades são utilizadas e o que leva a compras), nunca para publicidade ou rastreamento. Os registos recebidos são apagados ao fim de 180 dias

## Informações guardadas no dispositivo

Os seguintes dados são guardados apenas no dispositivo do utilizador e nunca são enviados para fora da app:

- Os ficheiros de áudio importados (incluindo episódios de podcasts transferidos, áudio gravado na app e áudio criado através da leitura de texto em voz alta)
- O texto dos materiais criados através da leitura de texto em voz alta
- A sua própria voz gravada no “Teste de clareza” (a gravação mais recente de cada frase) e as respetivas transcrições (uma por tentativa)
- As transcrições obtidas pelo reconhecimento de voz e os tempos de cada frase
- Os registos de estudo (tempo de estudo e número de frases reproduzidas, registados por faixa e por dia)
- As definições de reprodução (velocidade, modo de repetição, duração da pausa, etc.)

Todos estes dados são apagados do dispositivo quando apaga a app.

Apenas quando o próprio utilizador utiliza a função de partilha do registo de estudo, uma imagem com o estudo de hoje (tempo de estudo, reproduções e número de frases que ficaram perfeitas no Teste de clareza), a sequência de dias, o tempo de estudo diário dos últimos 7 dias e os totais acumulados (o utilizador escolhe que itens aparecem), juntamente com um texto curto com os mesmos dados, é passada ao destino (outra app) que o utilizador escolher na folha de partilha. A imagem é criada no dispositivo e não inclui os nomes dos materiais ou das faixas, o áudio nem as transcrições. A app nunca partilha nada automaticamente nem nos envia nada. Quando utiliza “Guardar em Fotografias”, a imagem é adicionada às fotografias do dispositivo; para isso, a app pede autorização apenas para adicionar fotografias e nunca lê as suas fotografias. O tratamento dos dados no destino da partilha rege-se pela política de privacidade desse destino.

No caso dos materiais criados a partir de um podcast, a app guarda também no dispositivo o URL do feed RSS do programa, os identificadores dos episódios importados e a imagem do programa usada como ícone do material. A lista dos programas que adicionou nunca é enviada para fora, mas o URL do feed RSS de cada programa é utilizado no pedido que obtém a lista de episódios junto da origem de distribuição desse programa (ver “Comunicações da funcionalidade de podcasts” abaixo).

## Tratamento do áudio

A divisão automática em frases utiliza o **reconhecimento de voz no dispositivo** fornecido pela Apple. Os dados de áudio nunca são enviados para os servidores da Apple nem para os nossos.

No entanto, se o modelo de idioma necessário para o reconhecimento ainda não estiver instalado no dispositivo, esse modelo pode ser transferido como funcionalidade do sistema da Apple. Essa transferência rege-se pela política de privacidade da Apple e não inclui o áudio do utilizador.

“Criar a partir de texto” lê o texto em voz alta através da **síntese de voz no dispositivo** incluída no iOS. O texto nunca é enviado para fora.

## Comunicações da funcionalidade de podcasts

Apenas quando utiliza “De Podcasts” ou abre um material criado a partir de um podcast, a app faz as comunicações seguintes. Nenhuma delas passa pelos nossos servidores.

| Destino | O que é enviado | Quando |
|---|---|---|
| Serviço de pesquisa da Apple (iTunes Search API) | O nome do programa que escreveu, ou o ID do programa contido numa ligação do Apple Podcasts, e o código do país das definições de região do dispositivo. Quando abre “De Podcasts”, os IDs dos programas recomendados incluídos na app e um código de país (US para programas que não estejam na loja do seu país); não se trata de nada introduzido pelo utilizador | Quando pesquisa um programa, quando cola uma ligação do Apple Podcasts e quando abre “De Podcasts” (para obter as imagens e as origens de distribuição dos programas recomendados) |
| Servidores de imagens da Apple | Pedidos das imagens (artwork) dos programas | Quando são apresentados os resultados da pesquisa e as recomendações |
| Origem de distribuição do programa (os servidores que alojam o feed RSS, os ficheiros de áudio e as imagens do programa e dos episódios) | Pedidos do feed RSS indicado pelo utilizador ou escolhido na pesquisa, dos ficheiros de áudio dos episódios e das imagens do programa e dos episódios | Quando abre a lista de episódios (incluindo as imagens dos episódios apresentadas na lista), quando ouve um excerto de um episódio (o áudio é reproduzido à medida que é recebido e não fica guardado no dispositivo), quando importa episódios, quando abre um material criado a partir de um podcast para verificar se há episódios novos e, nos materiais em que ativou “Importar novos episódios automaticamente”, quando abre a app ou regressa a ela (no máximo uma vez a cada 30 minutos; os episódios só são importados por Wi‑Fi). A imagem do programa é obtida apenas uma vez por material e guardada no dispositivo para ser usada como ícone do material |

- Como qualquer outra comunicação, estas incluem as informações de ligação habituais, como o endereço IP do dispositivo. O tratamento dos dados no destino rege-se pelas políticas de privacidade da Apple (<https://www.apple.com/legal/privacy/>) e de cada origem de distribuição
- Não são utilizadas contas, início de sessão nem cookies. As comunicações são feitas com definições que não deixam histórico nem cookies no dispositivo
- O áudio importado, as transcrições e os registos de estudo nunca são enviados
- São utilizadas apenas ligações cifradas (https)


## Acesso a funcionalidades do dispositivo

| Funcionalidade | Finalidade |
|---|---|
| Reconhecimento de voz | Dividir o áudio importado em frases e transcrever a sua própria voz gravada para a comparar com o modelo (processado no dispositivo) |
| Biblioteca de música | Importar como material de estudo músicas sem DRM da biblioteca do utilizador |
| Ficheiros | Importar ficheiros de áudio ou vídeo escolhidos pelo utilizador ou partilhados a partir de outras apps (dos vídeos, é extraído e guardado apenas o áudio) |
| Microfone | Guardar como material de estudo o áudio que o utilizador grava com “Gravar” e gravar a sua própria voz no “Teste de clareza” para verificar se o texto que leu é reconhecido corretamente. A gravação só é feita quando o utilizador a inicia e fica guardada no dispositivo |
| Fotografias (apenas adicionar) | Adicionar às fotografias a imagem criada quando toca em “Guardar em Fotografias” na partilha do registo de estudo. A app nunca lê as suas fotografias |
| Rede | Pesquisar programas de podcasts e transferir os feeds RSS e os episódios (ver “Comunicações da funcionalidade de podcasts” acima), enviar comentários e receber respostas (ver “Comentários” acima) e enviar os dados de utilização (ver “Dados de utilização” acima) |

Estes acessos são utilizados apenas para importação e análise. Nada do que é lido no dispositivo (áudio, músicas, ficheiros ou fotografias) é enviado para fora.

## Reprise Premium (subscrição)

A compra, a renovação e o cancelamento do Reprise Premium são inteiramente processados pela App Store da Apple. A app limita-se a verificar junto da Apple, no dispositivo, se existe uma subscrição ativa; o programador nunca recebe os seus dados de pagamento. Enquanto “Enviar dados de utilização” estiver ativado, os dados de utilização incluem o tipo de plano e se houve compra a partir do ecrã de subscrição (que funcionalidade o abriu e se iniciou um período experimental gratuito) (ver “Dados de utilização” acima).

## Partilha com terceiros

**Nenhuma.** A app não partilha as informações do utilizador com terceiros. A funcionalidade de podcasts comunica diretamente com o serviço de pesquisa da Apple e com as origens de distribuição dos programas, conforme descrito acima, apenas para obter os programas indicados pelo utilizador. Os comentários e os dados de utilização são guardados no CloudKit da Apple. Não são feitas comunicações para fins de publicidade ou rastreamento, e nada é enviado para serviços de análise de terceiros.

## Direitos de autor

Os direitos sobre os ficheiros de áudio e os episódios de podcasts que importa pertencem ao utilizador ou ao titular original dos direitos. A app não intervém no conteúdo importado. Respeite as condições de utilização de cada programa e utilize os podcasts apenas para estudo pessoal.

## Privacidade das crianças

A app não recolhe informações identificativas de utilizadores de nenhuma idade. Os dados de utilização (acima) são os mesmos para todas as idades e podem ser desativados em “Definições”.

## Alterações a esta política

Se esta política for alterada, esta página será atualizada, juntamente com a data da última atualização.

## Contacto

reprise.app.support@gmail.com

---
layout: ../../layouts/DocLayout.astro
lang: pt-br
title: Política de Privacidade
description: Política de Privacidade do Reprise. Os áudios, as transcrições e o registro de estudo ficam somente no seu dispositivo e nunca são enviados a um servidor.
---

# Política de Privacidade do Reprise

Última atualização: 2026-11-27

## Resumo

O Reprise recebe apenas o feedback que você mesmo envia e dados de uso que ajudam a melhorar o app (quais recursos você usa e com que frequência; é possível desativar isso em “Ajustes”). O app não tem servidor, e a análise do áudio e o registro de estudo são processados inteiramente no dispositivo. Nem o feedback nem os dados de uso incluem seu endereço de e-mail ou seu nome.

O app só se comunica pela rede quando você usa “De Podcasts”, quando abre um material criado a partir de um podcast para verificar se há episódios novos, quando, nos materiais em que você ativou “Importar novos episódios automaticamente”, os episódios novos são importados ao abrir o app, quando você envia feedback ou lê as respostas e quando o app envia os dados de uso (no máximo uma vez por dia). A comunicação dos podcasts vai diretamente ao serviço de busca da Apple e à origem do programa, e o desenvolvedor nunca recebe o conteúdo. O feedback e os dados de uso chegam por meio do CloudKit da Apple (veja “Feedback” e “Dados de uso” abaixo).

## Informações coletadas

O app não coleta informações que identifiquem você, dados de contato nem localização. Ele também não inclui publicidade nem ferramentas de análise de terceiros.

Recebemos apenas **o que você mesmo envia** em “Ajustes” → “Feedback” (veja “Feedback” abaixo) e os dados de uso (veja “Dados de uso” abaixo).

## Feedback

Em “Ajustes” → “Feedback”, você pode enviar ao desenvolvedor relatos de problemas e sugestões. As respostas do desenvolvedor aparecem na mesma tela.

- O que é enviado: o texto que você escreveu, a versão do app e a versão do iOS. **Endereço de e-mail, nome e número de telefone não são enviados**
- As mensagens são armazenadas no CloudKit da Apple. Para enviar, é preciso ter iniciado sessão no iCloud no dispositivo, mas o desenvolvedor recebe apenas um ID de usuário anônimo atribuído pela Apple; seu Apple ID e seu endereço de e-mail não chegam ao desenvolvedor
- Somente você e o desenvolvedor podem ler o que você enviou
- O conteúdo é usado apenas para investigar problemas, melhorar o app e responder. Se quiser que ele seja apagado, envie esse pedido pelo Feedback

## Dados de uso

Para melhorar o app, ele envia uma vez por dia quais recursos você usou e com que frequência. Você pode desativar isso a qualquer momento em “Ajustes” → “Enviar dados de uso”; ao desativar, os dados ainda não enviados que estão no dispositivo também são apagados.

- **O que é enviado**: os tipos de ação e quantas vezes foram feitas (por exemplo: importar um material e de onde ele veio, dividir frases, mudar a velocidade de reprodução, abrir a tela de assinatura, qual recurso a abriu e se houve compra), os valores dos ajustes que você escolhe, o número de materiais e de frases marcadas, o tipo de plano (gratuito, teste gratuito, mensal ou anual), as versões do app e do iOS, os idiomas de exibição e de estudo, o país da App Store, o dia em que você instalou o app e um ID aleatório por instalação
- **O que nunca é enviado**: nomes de materiais ou faixas, o texto das frases, os áudios importados, sua voz gravada, as transcrições, os nomes dos programas de podcast, termos de busca ou URLs, o registro de estudo (tempo de estudo e frases reproduzidas), seu endereço de e-mail, nome ou Apple ID e dados de pagamento
- O ID aleatório por instalação é usado apenas para contar dispositivos. Ele não é vinculado ao seu Apple ID e muda quando você apaga o app
- Os dados de uso são armazenados no CloudKit da Apple. Eles só são enviados enquanto você tiver iniciado sessão no iCloud, e o desenvolvedor recebe apenas um ID de usuário anônimo atribuído pela Apple junto com os dados acima. Os dados que não puderam ser enviados ficam no dispositivo por até 14 dias e depois são apagados
- Os dados de uso são usados apenas de forma agregada para melhorar o app (para saber quais recursos são usados e o que leva a compras), nunca para publicidade ou rastreamento. Os registros recebidos são apagados após 180 dias

## Informações guardadas no dispositivo

Os itens a seguir ficam guardados somente no seu dispositivo e nunca são enviados para fora do app:

- Arquivos de áudio importados (inclusive episódios baixados de podcasts, áudios gravados no app e áudios criados pela leitura em voz alta de um texto)
- O texto dos materiais criados pela leitura em voz alta de um texto
- Sua própria voz gravada no “Teste de clareza” (a gravação mais recente de cada frase) e as transcrições dela (uma por tentativa)
- As transcrições obtidas pelo reconhecimento de fala e os tempos de cada frase
- O registro de estudo (tempo de estudo e número de frases reproduzidas, registrados por faixa e por dia)
- Os ajustes de reprodução (velocidade, forma de repetição, duração da pausa etc.)

Tudo isso é apagado do dispositivo quando você apaga o app.

Somente quando você mesmo usa o recurso de compartilhar do registro de estudo, o app entrega ao destino (outro app) que você escolher na planilha de compartilhamento uma imagem com o estudo de hoje (tempo de estudo, reproduções e número de frases que ficaram perfeitas no Teste de clareza), a sequência de dias, o tempo de estudo de cada um dos últimos 7 dias e os totais até agora (você escolhe quais itens aparecem), junto com um texto curto para publicação com o mesmo conteúdo. A imagem é criada no dispositivo e não inclui nomes de materiais ou faixas, áudios nem transcrições. O app nunca compartilha nada automaticamente nem envia nada para nós. Quando você usa “Salvar no Fotos”, a imagem é adicionada ao Fotos do dispositivo. Para isso, o app pede permissão “somente para adicionar” fotos, mas nunca lê suas fotos. O tratamento dado no destino segue a política de privacidade desse destino.

Para os materiais criados a partir de um podcast, o app também guarda no dispositivo a URL do feed RSS do programa, os identificadores dos episódios importados e a imagem do programa usada como ícone do material. A lista de programas que você cadastrou nunca é enviada para fora, mas a URL do feed RSS de cada programa é usada na solicitação que busca a lista de episódios na origem desse programa (veja “Comunicação do recurso de podcasts” abaixo).

## Tratamento do áudio

A divisão automática em frases usa o **reconhecimento de fala no dispositivo** fornecido pela Apple. Os dados de áudio nunca são enviados aos servidores da Apple nem aos nossos.

No entanto, se o modelo de idioma usado no reconhecimento ainda não estiver instalado no dispositivo, ele pode ser baixado como uma função do sistema da Apple. Esse download segue a política de privacidade da Apple e não inclui sua voz.

“Criar a partir de texto” lê o texto em voz alta com a **síntese de voz no dispositivo** incluída no iOS. O texto nunca é enviado para fora.

## Comunicação do recurso de podcasts

O app faz as comunicações abaixo somente quando você usa “De Podcasts” e quando abre um material criado a partir de um podcast. Nenhuma delas passa pelos nossos servidores.

| Destino | O que é enviado | Quando |
|---|---|---|
| Serviço de busca da Apple (iTunes Search API) | O nome do programa que você digitou, ou o ID do programa contido em um link do Apple Podcasts, e o código do país da configuração de região do dispositivo. Ao abrir “De Podcasts”, os IDs dos programas recomendados que estão no app e um código de país (US para programas que não estão na loja do seu país); não é nada que você digitou | Quando você busca um programa, cola um link do Apple Podcasts ou abre “De Podcasts” (para obter as imagens e as origens dos programas recomendados) |
| Servidores de imagens da Apple | Solicitações das imagens de capa dos programas | Quando os resultados da busca e as recomendações são exibidos |
| Origem do programa (os servidores que hospedam o feed RSS, os arquivos de áudio e as imagens do programa e dos episódios) | Solicitações do feed RSS que você informou ou escolheu na busca, dos arquivos de áudio dos episódios e das imagens do programa e dos episódios | Quando você abre a lista de episódios (inclusive as imagens dos episódios exibidas na lista), ouve a prévia de um episódio (o áudio é reproduzido enquanto é recebido e não fica guardado no dispositivo), importa episódios, abre um material criado a partir de um podcast para verificar se há episódios novos e, nos materiais com “Importar novos episódios automaticamente” ativado, quando você abre o app ou volta para ele (no máximo uma vez a cada 30 minutos; os episódios só são importados por Wi‑Fi). A imagem do programa, usada como ícone do material, é obtida só uma vez por material e guardada no dispositivo |

- Como qualquer comunicação, essas solicitações incluem informações comuns de conexão, como o endereço IP do dispositivo. O tratamento nos destinos segue as políticas de privacidade da Apple (<https://www.apple.com/legal/privacy/>) e de cada origem
- Não são usados conta, login nem cookies. As solicitações são feitas sem guardar histórico de comunicação nem cookies no dispositivo
- Os áudios importados, as transcrições e o registro de estudo nunca são enviados
- São usadas somente conexões criptografadas (https)


## Acesso aos recursos do dispositivo

| Recurso | Finalidade |
|---|---|
| Reconhecimento de fala | Dividir o áudio importado em frases e transcrever sua própria voz gravada para compará-la com o modelo (processado no dispositivo) |
| Biblioteca de música | Importar como material as músicas sem DRM da sua biblioteca |
| Arquivos | Importar arquivos de áudio e vídeo que você escolher ou compartilhar a partir de outros apps (dos vídeos, só o áudio é extraído e guardado) |
| Microfone | Guardar como material o áudio que você grava com “Gravar” e gravar sua própria voz no “Teste de clareza” para verificar se o texto lido é reconhecido corretamente. A gravação só acontece quando você a inicia e fica guardada no dispositivo |
| Fotos (somente adicionar) | Adicionar ao Fotos a imagem criada quando você toca em “Salvar no Fotos” ao compartilhar o registro de estudo. O app nunca lê suas fotos |
| Rede | Buscar programas de podcast e baixar os feeds RSS e os episódios (veja “Comunicação do recurso de podcasts” acima), enviar feedback e receber respostas (veja “Feedback” acima) e enviar os dados de uso (veja “Dados de uso” acima) |

Esses recursos são usados somente para importação e análise. Nada do que é lido no dispositivo (áudios, músicas, arquivos ou fotos) é enviado para fora.

## Reprise Premium (assinatura)

A compra, a renovação e o cancelamento do Reprise Premium são processados inteiramente pela App Store da Apple. O app apenas verifica com a Apple, no dispositivo, se você é assinante; o desenvolvedor nunca recebe seus dados de pagamento. Enquanto “Enviar dados de uso” estiver ativado, os dados de uso incluem o tipo de plano e se houve compra na tela de assinatura (qual recurso a abriu e se você iniciou um teste gratuito) (veja “Dados de uso” acima).

## Compartilhamento com terceiros

**Nenhum.** O app não fornece suas informações a terceiros. Como descrito acima, o recurso de podcasts se comunica diretamente com o serviço de busca da Apple e com as origens dos programas, mas apenas para obter os programas que você indicou. O feedback e os dados de uso são armazenados no CloudKit da Apple. Não há nenhuma comunicação para publicidade ou rastreamento, e nada é enviado a serviços de análise de terceiros.

## Direitos autorais

Os direitos sobre os arquivos de áudio e os episódios de podcast que você importa pertencem a você ou aos titulares originais. O app não interfere no conteúdo importado. Siga as condições de uso de cada programa e use os podcasts apenas para estudo pessoal.

## Privacidade de crianças

O app não coleta informações que identifiquem usuários de nenhuma idade. Os dados de uso (acima) são os mesmos para todas as idades e podem ser desativados em “Ajustes”.

## Alterações nesta política

Se esta política mudar, esta página será atualizada junto com a data da última atualização.

## Contato

reprise.app.support@gmail.com

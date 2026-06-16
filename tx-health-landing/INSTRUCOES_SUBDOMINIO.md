# Instruções para Publicação como Subdomínio (cPanel)

Para publicar o site em um subdomínio (ex: growth.seudominio.com.br) sem interferir no seu WordPress principal:

1. **Criar o Subdomínio no cPanel**:
   - No cPanel, procure por "Subdomains" (ou "Domains" -> "Create a New Domain").
   - Digite o nome do subdomínio (ex: `growth`).
   - O cPanel criará uma pasta automaticamente (ex: `public_html/growth` ou `growth.seudominio.com.br`). **Anote este caminho.**

2. **Upload dos Arquivos**:
   - No "Gerenciador de Arquivos", navegue até a pasta do subdomínio que você acabou de anotar.
   - Clique em "Upload" e envie o arquivo `tx-health-landing.zip`.

3. **Extração**:
   - Clique com o botão direito no ZIP e selecione "Extract".
   - Certifique-se de extrair os arquivos diretamente dentro da pasta do subdomínio.

4. **SSL (HTTPS)**:
   - O cPanel geralmente gera o certificado SSL automaticamente (AutoSSL) após alguns minutos. Caso não funcione, verifique a seção "SSL/TLS Status".

**Vantagem**: Este método mantém os arquivos da landing page isolados do seu WordPress, evitando conflitos de arquivos `.htaccess` ou plugins.

// api/send-email.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

// Desativa o parser padrão do Vercel
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Permite apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido' 
    });
  }

  try {
    // Configura o parser de formulário com arquivos
    const form = formidable({
      multiples: false,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      keepExtensions: true,
    });

    // Parse do formulário
    const [fields, files] = await new Promise<[any, any]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Extrai os dados
    const nome = Array.isArray(fields.nome) ? fields.nome[0] : fields.nome;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const telefone = Array.isArray(fields.telefone) ? fields.telefone[0] : fields.telefone;
    const mensagem = Array.isArray(fields.mensagem) ? fields.mensagem[0] : fields.mensagem;
    
    const curriculo = files.curriculo as formidable.File | formidable.File[] | undefined;
    const curriculoFile = Array.isArray(curriculo) ? curriculo[0] : curriculo;

    // Validação básica
    if (!nome || !email || !telefone) {
      return res.status(400).json({
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      });
    }

    // ✅ CONFIGURAÇÃO COM SEU SERVIDOR DE EMAIL
    const transporter = nodemailer.createTransport({
      host: 'mail.centroms.com.br', // Seu host
      port: 587, // Porta SMTP
      secure: false, // true para 465, false para outras portas
      auth: {
        user: 'suporte.ti@centroms.com.br', // Email de origem
        pass: process.env.EMAIL_PASSWORD || 'Carro@201', // Senha (usar env var)
      },
      tls: {
        rejectUnauthorized: false, // Importante para alguns provedores
        ciphers: 'SSLv3'
      },
      debug: true, // Para logs
      logger: true
    });

    // Testa a conexão SMTP
    try {
      await transporter.verify();
      console.log('✅ SMTP conectado com sucesso');
    } catch (smtpError) {
      console.error('❌ Erro na conexão SMTP:', smtpError);
      return res.status(500).json({
        success: false,
        message: 'Erro na configuração do servidor de email.'
      });
    }

    // Configura o email
    const mailOptions: any = {
      from: `"Site Centro Médico Sapiranga" <suporte.ti@centroms.com.br>`,
      to: process.env.RH_EMAIL || 'rh@centroms.com.br', // Email do RH
      replyTo: email, // Para responder direto ao candidato
      subject: `📋 Nova Candidatura - ${nome}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                margin: 0;
                padding: 0;
                background: #f5f5f5;
              }
              .container { 
                max-width: 700px; 
                margin: 20px auto; 
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
              }
              .header { 
                background: linear-gradient(135deg, #1a5f7a 0%, #2a8bb5 100%); 
                color: white; 
                padding: 30px 20px; 
                text-align: center; 
              }
              .header h1 { 
                margin: 0; 
                font-size: 28px; 
                font-weight: 600;
              }
              .content { 
                padding: 30px; 
              }
              .section { 
                margin-bottom: 25px; 
                padding-bottom: 25px;
                border-bottom: 1px solid #eee;
              }
              .section:last-child { 
                border-bottom: none; 
              }
              .section-title { 
                color: #1a5f7a; 
                font-size: 20px; 
                margin-bottom: 15px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              .section-title svg { 
                width: 20px; 
                height: 20px; 
              }
              .info-grid { 
                display: grid; 
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
                gap: 15px; 
              }
              .info-item { 
                background: #f8fafc; 
                padding: 15px; 
                border-radius: 8px;
                border-left: 4px solid #2a8bb5;
              }
              .label { 
                font-weight: 600; 
                color: #555; 
                display: block;
                margin-bottom: 5px;
                font-size: 14px;
              }
              .value { 
                color: #222; 
                font-size: 16px;
                word-break: break-word;
              }
              .file-card { 
                background: #e8f4fc; 
                padding: 20px; 
                border-radius: 8px; 
                margin-top: 10px;
                border: 2px dashed #2a8bb5;
              }
              .file-info { 
                display: flex; 
                flex-wrap: wrap; 
                gap: 15px; 
                margin-top: 10px;
              }
              .file-item { 
                flex: 1; 
                min-width: 150px; 
              }
              .message-box { 
                background: #f0f7ff; 
                padding: 20px; 
                border-radius: 8px; 
                border-left: 4px solid #4a90e2;
                white-space: pre-line;
              }
              .footer { 
                margin-top: 30px; 
                padding-top: 20px; 
                border-top: 1px solid #ddd; 
                text-align: center;
                color: #666;
                font-size: 13px;
              }
              .badge { 
                display: inline-block; 
                padding: 5px 12px; 
                background: #4CAF50; 
                color: white; 
                border-radius: 20px; 
                font-size: 12px; 
                font-weight: 600;
                margin-left: 10px;
              }
              .contact-actions {
                display: flex;
                gap: 15px;
                margin-top: 20px;
              }
              .contact-btn {
                flex: 1;
                text-align: center;
                padding: 12px;
                background: #2a8bb5;
                color: white;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 500;
                transition: background 0.3s;
              }
              .contact-btn:hover {
                background: #1a5f7a;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 Nova Candidatura Recebida</h1>
                <p style="margin-top: 10px; opacity: 0.9;">Centro Médico Sapiranga</p>
              </div>
              
              <div class="content">
                <div class="section">
                  <div class="section-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Dados do Candidato
                  </div>
                  <div class="info-grid">
                    <div class="info-item">
                      <span class="label">Nome Completo</span>
                      <span class="value">${nome}</span>
                    </div>
                    <div class="info-item">
                      <span class="label">Email</span>
                      <span class="value">${email}</span>
                    </div>
                    <div class="info-item">
                      <span class="label">Telefone</span>
                      <span class="value">${telefone}</span>
                    </div>
                    <div class="info-item">
                      <span class="label">Data de Envio</span>
                      <span class="value">${new Date().toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                </div>

                ${mensagem ? `
                <div class="section">
                  <div class="section-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                    </svg>
                    Mensagem do Candidato
                  </div>
                  <div class="message-box">
                    ${mensagem.replace(/\n/g, '<br>')}
                  </div>
                </div>
                ` : ''}
                
                <div class="section">
                  <div class="section-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    Currículo Anexado
                    <span class="badge">${curriculoFile ? 'ARQUIVO ANEXADO' : 'SEM ARQUIVO'}</span>
                  </div>
                  <div class="file-card">
                    ${curriculoFile ? `
                      <div class="file-info">
                        <div class="file-item">
                          <span class="label">Nome do Arquivo:</span>
                          <span class="value">${curriculoFile.originalFilename}</span>
                        </div>
                        <div class="file-item">
                          <span class="label">Tamanho:</span>
                          <span class="value">${(curriculoFile.size / 1024).toFixed(2)} KB</span>
                        </div>
                        <div class="file-item">
                          <span class="label">Tipo:</span>
                          <span class="value">${curriculoFile.mimetype || 'Não identificado'}</span>
                        </div>
                      </div>
                    ` : `
                      <p style="text-align: center; color: #666; margin: 0;">
                        O candidato não anexou nenhum arquivo.
                      </p>
                    `}
                  </div>
                </div>

                <div class="contact-actions">
                  <a href="mailto:${email}" class="contact-btn">
                    ✉️ Responder por Email
                  </a>
                  <a href="tel:${telefone}" class="contact-btn">
                    📞 Ligar Agora
                  </a>
                </div>
                
                <div class="footer">
                  <p>📅 Este email foi enviado automaticamente através do formulário de contato do site.</p>
                  <p><strong>Centro Médico Sapiranga</strong> | Sistema de Recrutamento</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      // Texto simples para clients que não suportam HTML
      text: `
NOVA CANDIDATURA - Centro Médico Sapiranga

DADOS DO CANDIDATO:
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Data: ${new Date().toLocaleString('pt-BR')}

${mensagem ? `MENSAGEM:
${mensagem}

` : ''}CURRÍCULO:
${curriculoFile ? `Arquivo: ${curriculoFile.originalFilename}
Tamanho: ${(curriculoFile.size / 1024).toFixed(2)} KB
Tipo: ${curriculoFile.mimetype || 'Não identificado'}
` : 'Nenhum arquivo anexado.'}

---
Enviado automaticamente pelo sistema do site.
      `,
    };

    // Adiciona anexo se existir
    if (curriculoFile && curriculoFile.filepath) {
      mailOptions.attachments = [{
        filename: curriculoFile.originalFilename || 'curriculo.pdf',
        path: curriculoFile.filepath,
      }];
    }

    console.log('📤 Enviando email...');
    console.log('De:', mailOptions.from);
    console.log('Para:', mailOptions.to);
    console.log('Assunto:', mailOptions.subject);
    console.log('Anexo:', curriculoFile ? 'Sim' : 'Não');

    // Envia o email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email enviado com sucesso!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);

    // Limpa o arquivo temporário
    if (curriculoFile && curriculoFile.filepath) {
      fs.unlinkSync(curriculoFile.filepath);
    }

    return res.status(200).json({
      success: true,
      message: '✅ Candidatura enviada com sucesso! Entraremos em contato em breve.',
      messageId: info.messageId
    });

  } catch (error: any) {
    console.error('❌ Erro no servidor:', error);
    
    let errorMessage = 'Erro ao enviar candidatura. Tente novamente.';
    
    // Mensagens de erro mais específicas
    if (error.code === 'EAUTH') {
      errorMessage = 'Erro de autenticação no servidor de email. Verifique as credenciais.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Não foi possível conectar ao servidor de email.';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Servidor de email não encontrado. Verifique o host SMTP.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Tempo limite de conexão com o servidor de email.';
    } else if (error.message?.includes('maxFileSize')) {
      errorMessage = 'Arquivo muito grande. Máximo: 5MB.';
    } else if (error.response) {
      errorMessage = `Erro do servidor SMTP: ${error.response}`;
    }

    return res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        code: error.code,
        response: error.response
      } : undefined
    });
  }
}
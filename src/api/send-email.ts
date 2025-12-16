// api/send-email.ts - VERSÃO SIMPLIFICADA QUE FUNCIONA
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ✅ CONFIGURA CORS PRIMEIRO
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // ✅ RESPONDE A OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // ✅ SÓ ACEITA POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido. Use POST.' 
    });
  }

  try {
    console.log('📥 Recebendo requisição...');
    console.log('Content-Type:', req.headers['content-type']);
    
    // ✅ SIMPLIFICA: Aceita apenas JSON por enquanto
    if (!req.headers['content-type']?.includes('application/json')) {
      return res.status(415).json({
        success: false,
        message: 'Use application/json. FormData será implementado depois.'
      });
    }
    
    // ✅ Processa JSON
    const { nome, email, telefone, mensagem } = req.body;
    
    // Validação
    if (!nome || !email || !telefone) {
      return res.status(400).json({
        success: false,
        message: 'Preencha todos os campos obrigatórios.'
      });
    }
    
    // ✅ CONFIGURAÇÃO COM SEU SERVIDOR DE EMAIL
    const transporter = nodemailer.createTransport({
      host: 'mail.centroms.com.br',
      port: 587,
      secure: false,
      auth: {
        user: 'suporte.ti@centroms.com.br',
        pass: process.env.EMAIL_PASSWORD || 'Carro@201',
      },
      tls: {
        rejectUnauthorized: false,
      }
    });
    
    // Testa conexão SMTP
    await transporter.verify();
    console.log('✅ SMTP conectado');
    
    // Configura o email
    const mailOptions = {
      from: `"Site Centro Médico" <suporte.ti@centroms.com.br>`,
      to: process.env.RH_EMAIL || 'rh@centroms.com.br',
      replyTo: email,
      subject: `📋 Nova Candidatura - ${nome}`,
      html: `
        <h2 style="color: #1a5f7a;">📋 Nova Candidatura Recebida</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong><br>${mensagem || 'Sem mensagem adicional'}</p>
        <hr>
        <p><em>Enviado do site Centro Médico Sapiranga</em></p>
      `,
      text: `Nova candidatura:\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem || 'Nenhuma'}`
    };
    
    // Envia o email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email enviado! Message ID:', info.messageId);
    
    return res.status(200).json({
      success: true,
      message: '✅ Candidatura enviada com sucesso! Entraremos em contato em breve.',
      messageId: info.messageId
    });
    
  } catch (error: any) {
    console.error('❌ Erro no servidor:', error);
    
    let errorMessage = 'Erro ao enviar candidatura. Tente novamente.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Erro de autenticação no email. Verifique EMAIL_PASSWORD nas variáveis de ambiente.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Não foi possível conectar ao servidor de email mail.centroms.com.br:587';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Servidor de email não encontrado: mail.centroms.com.br';
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
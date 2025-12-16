// api/send-email.ts - VERSÃO QUE FUNCIONA
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ✅ CORS simples
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // ✅ CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // ✅ SÓ ESSA VERIFICAÇÃO - se não for POST, erro 405
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido. Use POST.' 
    });
  }
  
  // ✅ DAQUI PRA BAIXO SÓ EXECUTA SE FOR POST
  
  try {
    console.log('✅ Recebendo POST...');
    
    // Aceita apenas JSON por enquanto
    if (!req.headers['content-type']?.includes('application/json')) {
      return res.status(400).json({
        success: false,
        message: 'Envie dados como JSON: Content-Type: application/json'
      });
    }
    
    // ✅ EXTRAI DADOS DO BODY
    const { nome, email, telefone, mensagem } = req.body;
    
    // Validação
    if (!nome || !email || !telefone) {
      return res.status(400).json({
        success: false,
        message: 'Nome, email e telefone são obrigatórios'
      });
    }
    
    console.log('📝 Dados recebidos:', { nome, email, telefone, mensagem });
    
    // ✅ ENVIA EMAIL
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
    
    const mailOptions = {
      from: '"Site Centro Médico" <suporte.ti@centroms.com.br>',
      to: process.env.RH_EMAIL || 'suporte.ti@centroms.com.br',
      replyTo: email,
      subject: `Candidatura - ${nome}`,
      html: `<h2>Nova Candidatura</h2>
             <p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Telefone:</strong> ${telefone}</p>
             <p><strong>Mensagem:</strong> ${mensagem || 'Nenhuma'}</p>`
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado! ID:', info.messageId);
    
    return res.status(200).json({
      success: true,
      message: 'Candidatura enviada com sucesso!',
      messageId: info.messageId
    });
    
  } catch (error: any) {
    console.error('❌ Erro:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Erro interno no servidor',
      error: error.message
    });
  }
}
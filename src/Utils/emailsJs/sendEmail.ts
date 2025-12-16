// src/utils/emailjs/sendEmail.ts
import { emailjsConfig } from './config';

export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  curriculo?: File;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
  error?: any;
}

// Inicializa o EmailJS com a chave pública
emailjs.init(emailjsConfig.publicKey);

export const sendEmail = async (formData: FormData): Promise<SendEmailResponse> => {
  try {
    console.log('Enviando email com dados:', formData);
    
    // Validação básica
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
      return {
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      };
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Por favor, insira um email válido.'
      };
    }

    // Se tem arquivo, valida o tamanho
    if (formData.curriculo && formData.curriculo.size > 5 * 1024 * 1024) {
      return {
        success: false,
        message: 'O arquivo deve ter no máximo 5MB.'
      };
    }

    // Prepara os dados para o template
    const templateParams = {
      to_email: emailjsConfig.toEmail,
      from_name: emailjsConfig.fromName,
      subject: emailjsConfig.subject,
      
      // Dados do formulário
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      mensagem: formData.mensagem || 'Sem mensagem adicional.',
      data: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      
      // Informações do arquivo (para o template)
      nome_arquivo: formData.curriculo?.name || 'Nenhum arquivo enviado',
      tamanho_arquivo: formData.curriculo 
        ? `${(formData.curriculo.size / 1024).toFixed(2)} KB` 
        : '0 KB',
    };

    console.log('Template params:', templateParams);

    // Se tiver arquivo, usamos sendForm com FormData
    if (formData.curriculo) {
      // Cria um FormData para enviar com o arquivo
      const formDataToSend = new FormData();
      
      // Adiciona os dados do template
      Object.entries(templateParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formDataToSend.append(key, value.toString());
        }
      });
      
      // Adiciona o arquivo
      formDataToSend.append('curriculo_anexo', formData.curriculo);

      // Cria um formulário temporário
      const tempForm = document.createElement('form');
      
      // Adiciona os campos ao formulário
      formDataToSend.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value instanceof File ? value.name : value.toString();
        tempForm.appendChild(input);
      });

      // Envia usando sendForm (que suporta anexos)
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        tempForm,
        emailjsConfig.publicKey
      );

      console.log('Resposta do EmailJS (com anexo):', result);

      if (result.status === 200 || result.status === 201) {
        return {
          success: true,
          message: '✅ Candidatura enviada com sucesso! Entraremos em contato em breve.'
        };
      }

    } else {
      // Sem arquivo, envia normalmente
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('Resposta do EmailJS (sem anexo):', result);

      if (result.status === 200 || result.status === 201) {
        return {
          success: true,
          message: '✅ Candidatura enviada com sucesso! Entraremos em contato em breve.'
        };
      }
    }

    return {
      success: false,
      message: 'Erro ao enviar candidatura. Tente novamente.',
      error: 'Status não reconhecido'
    };

  } catch (error: any) {
    console.error('❌ Erro detalhado no envio do email:', error);
    
    // Mensagens de erro específicas
    let errorMessage = 'Erro ao enviar candidatura. Por favor, tente novamente.';
    
    if (error?.status === 0) {
      errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
    } else if (error?.text?.includes('rate limit')) {
      errorMessage = 'Muitas tentativas em pouco tempo. Aguarde alguns minutos.';
    } else if (error?.text?.includes('Invalid template')) {
      errorMessage = 'Erro na configuração do template. Entre em contato com o suporte.';
    } else if (error?.text?.includes('service')) {
      errorMessage = 'Erro no serviço de email. Tente mais tarde.';
    } else if (error?.text?.includes('attachment')) {
      errorMessage = 'Erro ao enviar o arquivo. Tente um formato diferente ou tamanho menor.';
    }
    
    return {
      success: false,
      message: errorMessage,
      error: error
    };
  }
};
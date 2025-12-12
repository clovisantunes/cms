// src/utils/iconMapper.ts
import { 
  FaHeart, 
  FaStethoscope, 
  FaChartLine, 
  FaHeartbeat,
  FaPrescriptionBottle,
  FaUserMd,
  FaHospitalUser,
  FaClipboardCheck,
  FaProcedures,
  FaHandHoldingHeart,
  FaFemale,
  FaBaby,
  FaBrain,
  FaUserInjured,
  FaBone,
  FaAllergies,
  FaEye,
  FaLungs,
  FaTint,
  FaTooth,
  FaShieldAlt,
  FaNotesMedical,
  FaWeight,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaArrowRight
} from 'react-icons/fa';

export const iconMap: Record<string, React.ComponentType<any>> = {
  // Cardiologia
  FaHeart,
  FaStethoscope,
  FaChartLine,
  FaHeartbeat,
  FaPrescriptionBottle,
  FaUserMd,
  FaHospitalUser,
  FaClipboardCheck,
  FaProcedures,
  FaHandHoldingHeart,
  
  // Outras especialidades
  FaFemale,
  FaBaby,
  FaBrain,
  FaUserInjured,
  FaBone,
  FaAllergies,
  FaEye,
  FaLungs,
  FaTint,
  FaTooth,
  FaShieldAlt,
  FaNotesMedical,
  FaWeight,
  
  // Utilitários
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaArrowRight
};

export const getIconComponent = (iconName: string): React.ComponentType<any> => {
  return iconMap[iconName] || FaStethoscope; // Fallback para estetoscópio
};
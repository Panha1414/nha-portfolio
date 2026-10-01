export type Language = 'km' | 'en';

export interface ProjectItem {
  id: string;
  titleKm: string;
  titleEn: string;
  roleKm: string;
  roleEn: string;
  taglineKm: string;
  taglineEn: string;
  descKm: string;
  descEn: string;
  techs: string[];
  metricsKm?: string;
  metricsEn?: string;
  featuresKm?: string[];
  featuresEn?: string[];
  category: 'telegram' | 'ecommerce' | 'software' | 'design';
  accentColor: string;
  isThesis?: boolean;
}

export interface SkillCategory {
  id: string;
  nameKm: string;
  nameEn: string;
  items: {
    name: string;
    level: string;
    descKm: string;
    descEn: string;
    iconName: string;
  }[];
}

export interface SoftSkill {
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  iconName: string;
}

export interface ValueCard {
  number: string;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  badgeKm: string;
  badgeEn: string;
  iconName: string;
}
